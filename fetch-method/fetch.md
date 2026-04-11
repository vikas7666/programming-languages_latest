# JavaScript Fetch API — Beginner to Advanced

A complete guide to making HTTP requests in JavaScript using the native `fetch()` API.

---

## Table of Contents

- [JavaScript Fetch API — Beginner to Advanced](#javascript-fetch-api--beginner-to-advanced)
  - [Table of Contents](#table-of-contents)
  - [What is Fetch?](#what-is-fetch)
  - [Generic Syntax](#generic-syntax)
  - [Level 1 — Basic GET (Promise Chain)](#level-1--basic-get-promise-chain)
  - [Level 2 — async / await (Beginner)](#level-2--async--await-beginner)
  - [Level 3 — async / await (Intermediate)](#level-3--async--await-intermediate)
  - [Level 4 — Error Handling](#level-4--error-handling)
  - [Level 5 — HTTP Methods (POST, PUT, PATCH, DELETE)](#level-5--http-methods-post-put-patch-delete)
    - [POST — Create a resource](#post--create-a-resource)
    - [PUT — Replace an entire resource](#put--replace-an-entire-resource)
    - [PATCH — Update part of a resource](#patch--update-part-of-a-resource)
    - [DELETE — Remove a resource](#delete--remove-a-resource)
    - [File Upload — FormData (Multipart)](#file-upload--formdata-multipart)
  - [Level 6 — Response Types](#level-6--response-types)
  - [Level 7 — Reusable API Client](#level-7--reusable-api-client)
  - [Level 8 — Parallel Requests](#level-8--parallel-requests)
    - [Promise.allSettled — continue even if one fails](#promiseallsettled--continue-even-if-one-fails)
    - [Promise.race — take the fastest response](#promiserace--take-the-fastest-response)
  - [Level 9 — AbortController (Timeout \& Cancel)](#level-9--abortcontroller-timeout--cancel)
    - [Timeout](#timeout)
    - [Cancel on user action (e.g. React component unmount)](#cancel-on-user-action-eg-react-component-unmount)
  - [Level 10 — Retry with Exponential Backoff](#level-10--retry-with-exponential-backoff)
  - [Common Mistakes](#common-mistakes)
    - [1. Not checking `response.ok`](#1-not-checking-responseok)
    - [2. Forgetting `JSON.stringify` on the body](#2-forgetting-jsonstringify-on-the-body)
    - [3. Forgetting `Content-Type` for JSON body](#3-forgetting-content-type-for-json-body)
    - [4. Setting `Content-Type` with `FormData`](#4-setting-content-type-with-formdata)
    - [5. Reading the response body twice](#5-reading-the-response-body-twice)
  - [Quick Reference](#quick-reference)
  - [Full Options Reference](#full-options-reference)

---

## What is Fetch?

`fetch()` is a built-in browser (and Node.js 18+) function for making HTTP requests. It replaces the older `XMLHttpRequest` and returns a **Promise**.

```
fetch(url, options?)  →  Promise<Response>
```

---

## Generic Syntax

```js
fetch('URL', {
  method: 'GET',           // GET | POST | PUT | PATCH | DELETE
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <token>',
  },
  body: JSON.stringify({}), // Only for POST / PUT / PATCH
})
  .then(response => response.json())  // Parse the response body
  .then(data => console.log(data))    // Use the data
  .catch(error => console.error(error)); // Handle errors
```

---

## Level 1 — Basic GET (Promise Chain)

The simplest way to fetch data. Uses `.then()` chaining.

```js
// Using named functions
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
    return response.json(); // Parse the JSON body
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.error('Error:', error);
  });


// Same thing using arrow functions (cleaner)
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

**When to use:** Quick scripts or simple one-off requests where you don't need error status checking.

---

## Level 2 — async / await (Beginner)

Using `async/await` makes asynchronous code read like synchronous code.

```js
async function getPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  // Wait for the response, then parse the body
  const data = await response.json();
  console.log(data);
}

getPost();
// Output: { userId: 1, id: 1, title: '...', body: '...' }
```

**Key points:**
- `async` before the function makes it return a Promise automatically.
- `await` pauses execution until the Promise resolves.
- Two awaits are needed: one for the network response, one for the body parsing.

---

## Level 3 — async / await (Intermediate)

Chaining the `.json()` call inline to reduce lines of code.

```js
async function getPost() {
  // Inner await resolves the Response, .json() is called on it,
  // outer await resolves the parsed data.
  const data = await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
  console.log(data);
}

getPost();
```

> ⚠️ **Caution:** This is concise but you lose the `response` reference, so you can't check `response.ok` or `response.status`. Only use this when you're certain the request will succeed.

---

## Level 4 — Error Handling

This is the most important pattern to learn. `fetch()` only rejects on **network failure** — it does **not** throw on `404` or `500` errors. You must check manually.

```js
async function getPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    // fetch() resolves even for 404/500 — always check res.ok
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    // Catches both network errors AND our manual throw above
    console.error('Request failed:', error.message);
    throw error; // Re-throw so the caller can handle it too
  }
}

// Usage
getPost(1)
  .then(data => console.log(data))
  .catch(err => console.log('Caught by caller:', err.message));
```

**Common `response.status` codes:**

| Status | Meaning |
|--------|---------|
| `200` | OK — success |
| `201` | Created — POST succeeded |
| `400` | Bad Request — invalid data sent |
| `401` | Unauthorized — missing/invalid token |
| `403` | Forbidden — no permission |
| `404` | Not Found |
| `500` | Internal Server Error |

---

## Level 5 — HTTP Methods (POST, PUT, PATCH, DELETE)

### POST — Create a resource

```js
async function createPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Tell server we're sending JSON
    },
    body: JSON.stringify({                 // Must be a string, not an object
      title: 'Hello World',
      body: 'My first post',
      userId: 1,
    }),
  });

  if (!response.ok) throw new Error(`Error: ${response.status}`);
  const data = await response.json();
  console.log('Created:', data); // { id: 101, title: 'Hello World', ... }
}

createPost();
```

### PUT — Replace an entire resource

```js
async function updatePost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: 1,
      title: 'Updated Title',
      body: 'Updated body',
      userId: 1,
    }),
  });

  const data = await response.json();
  console.log('Updated:', data);
}
```

### PATCH — Update part of a resource

```js
async function patchPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'Only title changed', // Only send what you want to change
    }),
  });

  const data = await response.json();
  console.log('Patched:', data);
}
```

### DELETE — Remove a resource

```js
async function deletePost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) throw new Error(`Error: ${response.status}`);
  console.log(`Post ${id} deleted. Status: ${response.status}`); // 200
}

deletePost(1);
```

### File Upload — FormData (Multipart)

```js
async function uploadFile(fileInput) {
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);
  formData.append('userId', '42');

  // Do NOT set Content-Type manually — the browser sets it with the boundary
  const response = await fetch('https://api.example.com/upload', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  console.log('Uploaded:', result);
}
```

---

## Level 6 — Response Types

A `Response` body can only be consumed **once**. Pick the right parser for your data.

```js
const response = await fetch('https://api.example.com/resource');

// JSON (most common — for APIs)
const json = await response.json();               // → JS object / array

// Plain text (HTML, CSV, log files)
const text = await response.text();               // → string

// Binary data (images, files)
const buffer = await response.arrayBuffer();      // → ArrayBuffer

// Blob (save/display files in browser)
const blob = await response.blob();               // → Blob
const url = URL.createObjectURL(blob);            // → object URL

// Streaming (large files, server-sent events)
const reader = response.body.getReader();         // → ReadableStream reader
while (true) {
  const { done, value } = await reader.read();    // value = Uint8Array chunk
  if (done) break;
  console.log('Received chunk:', value);
}
```

**Reading the body twice (clone first):**

```js
const response = await fetch('https://api.example.com/data');
const clone = response.clone();         // Clone before consuming

const json = await response.json();     // Read original as JSON
const text = await clone.text();        // Read clone as text
```

---

## Level 7 — Reusable API Client

Build a wrapper so you don't repeat headers, base URLs, and error checks everywhere.

```js
const BASE_URL = 'https://api.example.com';

// Simulated token getter — replace with your auth logic
function getToken() {
  return localStorage.getItem('authToken');
}

async function apiClient(path, options = {}) {
  const { method = 'GET', body, headers = {} } = options;

  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
      ...headers, // Allow overriding per-request
    },
  };

  // Only attach body for non-GET requests
  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(BASE_URL + path, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP ${response.status}: ${method} ${path}`);
  }

  // Handle 204 No Content (DELETE responses, etc.)
  if (response.status === 204) return null;

  return response.json();
}

// Usage — clean and consistent across your app
const users    = await apiClient('/users');
const user     = await apiClient('/users/42');
const newUser  = await apiClient('/users', { method: 'POST', body: { name: 'Alice' } });
const updated  = await apiClient('/users/42', { method: 'PATCH', body: { name: 'Alicia' } });
await           apiClient('/users/42', { method: 'DELETE' });
```

---

## Level 8 — Parallel Requests

Use `Promise.all` to fire multiple requests simultaneously instead of waiting for each one.

```js
// Sequential (slow) — each waits for the previous to finish
const users = await apiClient('/users');        // wait...
const posts = await apiClient('/posts');        // then wait...

// Parallel (fast) — both fire at the same time
const [users, posts] = await Promise.all([
  apiClient('/users'),
  apiClient('/posts'),
]);
console.log({ users, posts });
```

### Promise.allSettled — continue even if one fails

```js
const results = await Promise.allSettled([
  fetch('https://api.example.com/users').then(r => r.json()),
  fetch('https://api.example.com/posts').then(r => r.json()),
  fetch('https://api.example.com/comments').then(r => r.json()),
]);

results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    console.log(`Request ${index} succeeded:`, result.value);
  } else {
    console.error(`Request ${index} failed:`, result.reason.message);
  }
});
```

### Promise.race — take the fastest response

```js
// Useful for fallbacks (primary vs. mirror server)
const data = await Promise.race([
  fetch('https://primary-api.com/data').then(r => r.json()),
  fetch('https://mirror-api.com/data').then(r => r.json()),
]);
console.log('Fastest response:', data);
```

---

## Level 9 — AbortController (Timeout & Cancel)

Cancel a request after a timeout, or when a user navigates away.

### Timeout

```js
async function fetchWithTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { signal: controller.signal });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();

  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timer); // Always clear the timer
  }
}

// Usage
fetchWithTimeout('https://api.example.com/slow-endpoint', 3000)
  .then(data => console.log(data))
  .catch(err => console.error(err.message));
```

### Cancel on user action (e.g. React component unmount)

```js
// React example — cancel fetch when component unmounts
useEffect(() => {
  const controller = new AbortController();

  async function loadData() {
    try {
      const res = await fetch('/api/data', { signal: controller.signal });
      const data = await res.json();
      setData(data);
    } catch (err) {
      if (err.name !== 'AbortError') console.error(err);
    }
  }

  loadData();

  return () => controller.abort(); // Cleanup on unmount
}, []);
```

---

## Level 10 — Retry with Exponential Backoff

Automatically retry failed requests with increasing delays.

```js
/**
 * Fetches a URL and retries on failure with exponential backoff.
 * @param {string} url         - The endpoint to call
 * @param {object} options     - Fetch options (method, body, headers)
 * @param {number} retries     - Max number of retry attempts (default: 3)
 * @param {number} baseDelayMs - Initial delay in ms, doubles each retry (default: 500)
 */
async function fetchWithRetry(url, options = {}, retries = 3, baseDelayMs = 500) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, options);

      // Retry only on server errors (5xx), not client errors (4xx)
      if (response.status >= 500 && attempt < retries) {
        throw new Error(`Server error: ${response.status}`);
      }

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();

    } catch (error) {
      const isLastAttempt = attempt === retries;

      if (isLastAttempt) {
        console.error(`All ${retries + 1} attempts failed.`);
        throw error;
      }

      const delay = baseDelayMs * 2 ** attempt; // 500ms → 1000ms → 2000ms
      console.warn(`Attempt ${attempt + 1} failed. Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Usage
fetchWithRetry('https://api.example.com/data', {}, 3, 500)
  .then(data => console.log('Success:', data))
  .catch(err => console.error('Final failure:', err.message));
```

---

## Common Mistakes

### 1. Not checking `response.ok`

```js
// ❌ Wrong — no error on 404 or 500
const res = await fetch('/api/user/999');
const data = await res.json(); // Returns error object, not throws!

// ✅ Correct
const res = await fetch('/api/user/999');
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const data = await res.json();
```

### 2. Forgetting `JSON.stringify` on the body

```js
// ❌ Wrong — sends "[object Object]"
body: { name: 'Alice' }

// ✅ Correct
body: JSON.stringify({ name: 'Alice' })
```

### 3. Forgetting `Content-Type` for JSON body

```js
// ❌ Wrong — server may not parse the body
fetch('/api/users', { method: 'POST', body: JSON.stringify(data) });

// ✅ Correct
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

### 4. Setting `Content-Type` with `FormData`

```js
// ❌ Wrong — overrides the browser-generated boundary
headers: { 'Content-Type': 'multipart/form-data' }

// ✅ Correct — omit Content-Type entirely for FormData
fetch('/upload', { method: 'POST', body: new FormData(form) });
```

### 5. Reading the response body twice

```js
// ❌ Wrong — body is a stream, can only be read once
const res = await fetch('/api/data');
const json = await res.json();
const text = await res.text(); // Error: body already used

// ✅ Correct — clone before reading twice
const res = await fetch('/api/data');
const clone = res.clone();
const json = await res.json();
const text = await clone.text();
```

---

## Quick Reference

| Pattern | When to use |
|---------|------------|
| `.then().catch()` | Simple scripts, browser compatibility |
| `async/await` | Any modern project — cleaner and debuggable |
| `try/catch + res.ok` | **Always** — standard error handling |
| `FormData` | File uploads, form submissions |
| `Promise.all` | Multiple independent requests — fire in parallel |
| `Promise.allSettled` | Parallel requests where some may fail |
| `AbortController` | Long requests, timeouts, SPA navigation |
| Retry with backoff | Unreliable APIs, network-heavy apps |
| API client wrapper | Reusable across a whole application |

---

## Full Options Reference

```js
fetch(url, {
  method: 'GET',                    // HTTP method
  headers: {                        // Request headers
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <token>',
    'Accept': 'application/json',
  },
  body: JSON.stringify({}),         // Request body (POST/PUT/PATCH only)
  mode: 'cors',                     // cors | no-cors | same-origin
  credentials: 'include',           // omit | same-origin | include (for cookies)
  cache: 'no-cache',                // default | no-store | reload | no-cache | force-cache
  redirect: 'follow',               // follow | error | manual
  signal: controller.signal,        // AbortController signal for cancellation
  keepalive: false,                 // Keep connection alive after page unload
});
```

---

*Examples use [JSONPlaceholder](https://jsonplaceholder.typicode.com) — a free fake REST API for testing.*