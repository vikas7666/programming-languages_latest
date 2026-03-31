// old way if we write normal function 

// import Welcome from "./Welcome"
// import Button from "./Button"

// New Es6 way 
import { Welcome } from './Welcome'
// import { Button } from './Button'

// using es6 method we can change name alos still it work 
import MyButton from './Button'
import { StyleForm } from './StyleForm'
import { CandidateProfile } from './CandidateProfile'
import { Product } from './props/Product'
import { Greeting } from './props/Greeting'
import { CardWrapper } from './props/CardWrapper'
import { UserDetails } from './condition_rendering/UserDetails'
import { ProductList } from './ProductList'
import { NameList } from './NameList'
import { Alert } from './styling/Alert'
import { CustomButton } from './events/CustomButton'
import { Contact } from './events/Contact'
import { NewsLetter } from './events/NewsLetter'
import { Menu } from './events/Menu';
import { Counter } from './useState/Counter'


import { LoginCard } from './useState/LoginCard';
import { UserDashboard } from './useState/userDashboard';
import { SimpleCounter } from './useState/SimpleCounter';
import { PreviousStateCounter } from './useState/PreviousStateCounter';
import { BatchingCounter } from './useState/BatchingCounter';
import { UserProfile } from './useState/useStateObject';
import { TodoList } from './useState/TodoListArray';
import { ShoppingCart } from './useState/sharing-state/ShoppingCart';
import { CounterWithReducer } from './useReducer/CounterWithReducer';
import { ShoppingCartWithReducer } from './useReducer/ShoppingCartWithReducer';
import { CustomCounter } from './useReducer/CustomCounter';
import { ContextRoot } from './context/ContextRoot';
import { ContextStateWithRoot } from './context-state/ContextRoot';
import { StopWatch } from './use-ref/StopWatch';
import { FocusInput } from './use-ref/FocusInput';

// Now App become Parent component 
// Welcome  & Button become an child component
function App() {
  return (
    <>
      {/* Hello */}
      {/* <CandidateProfile />
      <StyleForm />
      <Welcome name="vikas" alias="Batman" />
      <Welcome name="om" alias="Shaktiman" />
      <Welcome name="Ved" alias="Superman" />
      <MyButton /> */}
      {/* <Product title="Gaming Laptop" price={1229} inStcok={true} category={["Electrnics", "Gaming", "Computer"]} />
      <Greeting name="Bruce" message="Good Morning" />
      <Greeting name=" Clark" />
      <Greeting message=" Welcome" /> */}
      {/* if we not pass then also default param will also passed */}
      {/* <Greeting /> */}
      {/* here we are sending react child component */}
      {/* <CardWrapper title="Title Wrapping Child component">
        <p>Bruce Wayne</p>
        <p>batman@gmail.com</p>
        <p>Edit Profile</p>
      </CardWrapper > */}

      {/*  <UserDetails name="Bruce Wayne" isOnline={true} isPremimum={true} isNewUser={true} role="admin" />
      <UserDetails name="Clark Kent" isOnline={false} hideOffline={true} role="moderator" /> */}
      {/* <ProductList /> */}
      {/* <NameList /> */}
      {/* <Alert>Your changes have been saved.
        <p>Hello</p>
      </Alert>
      <Alert type='error'>Something Went Wrong</Alert> */}
      {/* <CustomButton text="Like Button" /> */}
      {/* <Menu />
      <Contact />
      <NewsLetter />
      <CustomButton text="Bookmark" /> */}
      {/* <Counter /> */}

      {/* <SimpleCounter /> */}
      {/* <PreviousStateCounter /> */}
      {/* <BatchingCounter /> */}
      {/* <UserProfile /> */}
      {/* <TodoList />*/}
      {/* <ShoppingCart /> */}
      {/* <CounterWithReducer /> */}
      {/* <ShoppingCartWithReducer /> */}
      {/* <CustomCounter /> */}
      {/* <ContextRoot /> */}
      {/* {<ContextStateWithRoot />} */}
      {/* <StopWatch /> */}
      <FocusInput />
    </>
  )
}

export default App
