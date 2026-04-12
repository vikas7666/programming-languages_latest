async function postMethod() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 101,
            id: 101,
            title: "Har Har Mahadev",
            body: "vikas here "
        })
    });

    let data = await res.json();
    console.log('data', data);
}

postMethod()