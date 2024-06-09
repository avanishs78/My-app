## 1. What is conditional rendering in React ?
#### Conditional rendering in React involves selectively rendering components based on specified conditions. By evaluating these conditions, developers can control which components are displayed, allowing for dynamic and responsive user interfaces in React applications.

##### Let us look at this sample code to understand conditional rendering. 

#### {isLoggedIn == false ? <DisplayLoggedOut /> : <DisplayLoggedIn />}
#### Here if the boolean isLoggedIn is false then the DisplayLoggedOut component will be rendered otherwise DisplayLoggedIn component will be rendered.

## 2. What is react router ?
#### React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
#### To install react router type the following command.
#### npm i react-router-dom

## 3. Explain the lifecycle methods of components
#### A React Component can go through four stages of its life as follows. 
#### Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
#### Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
#### Updating: Updating is the stage when the state of a component is updated and the application is repainted.
#### Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

## 4. Explain the methods used in mounting phase of components
#### Mounting is the phase of the component lifecycle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time on the webpage. he mounting phase consists of two such predefined functions as described below
#### componentWillMount() Function: This function is invoked right before the component is mounted on the DOM.
#### componentDidMount() Function: This function is invoked right after the component is mounted on the DOM.

## 5. What is this.setState function in React ?
#### We use the setState() method to change the state object. It ensures that the component has been updated and calls for re-rendering of the component. The state object of a component may contain multiple attributes and React allows using setState() function to update only a subset of those attributes as well as using multiple setState() methods to update each attribute value independently.

## 6. What is the use of ref in React ?
#### Refs are a function provided by React to access the DOM element and the React element that you might have created on your own. They are used in cases where we want to change the value of a child component, without making use of props and all. They have wide functionality as we can use callbacks with them.

## 7. What are hooks in React ?
#### Hooks are a new addition in React 16.8. They let developers use state and other React features without writing a class. Hooks doesn’t violate any existing React concepts. Instead, Hooks provide a direct API to react concepts such as props, state, context, refs and life-cycle.

## 8. Explain the useState hook in React ?
#### The most used hook in React is the useState() hook. It allows functional components to manipulate DOM elements before each render. Using this hook we can declare a state variable inside a function but only one state variable can be declared using a single useState() hook. Whenever the useState() hook is used, the value of the state variable is changed and the new variable is stored in a new cell in the stack.

## 9. Explain the useEffect hook in react ?
#### The useEffect hook in React eliminates the side effect of using class based components. It is used as an alternative to componentDidUpdate() method. The useEffect hook accepts two arguments where second argument is optional.

## 10. What is React Fragments ?
#### when we are trying to render more than one root element we have to put the entire content inside the ‘div’ tag which is not loved by many developers. So since React 16.2 version, Fragments were introduced, and we use them instead of the extraneous ‘div’ tag. React fragments do not create any extra node on DOM.

## 11. What is a react developer tool ?
#### React Developer Tools is a Chrome DevTools extension for the React JavaScript library. A very useful tool, if you are working on React.js applications. This extension adds React debugging tools to the Chrome Developer Tools. It helps you to inspect and edit the React component tree that builds the page, and for each component, one can check the props, the state, hooks, etc.

## 12. Explain styled components in React ?
#### Styled-component Module allows us to write CSS within JavaScript in a very modular and reusable way in React. Instead of having one global CSS file for a React project, we can use styled-component for enhancing the developer experience. It also removes the mapping between components and styles – using components as a low-level styling construct

#### The command to install styled components is

```npm i styled-components```
#### Using the below code we can custom style a button in React:
```import styled from 'styled-components'```

#### const Button = styled.div`
#### width : 100px ;
#### cursor: pointer ;
#### text-decoration : none;`
#### export default Button;

## 13. What is prop drilling and its disadvantages ?
#### Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. The problem with Prop Drilling is that whenever data from the Parent component will be needed, it would have to come from each level, Regardless of the fact that it is not needed there and simply needed in last.
