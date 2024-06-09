## 1. What is ReactJS ?
#### ReactJS is a JavaScript library used to build reusable components for the view layer in MVC architecture. It is highly efficient and uses a virtual DOM to render components. It works on the client side and is written in JSX.

## 2. Explain the MVC architecture?
#### The Model-View-Controller (MVC) framework is an architectural/design pattern that separates an application into three main logical components Model, View, and Controller. Each architectural component is built to handle specific development aspects of an application. It isolates the business, logic, and presentation layer from each other.

## 3. Explain the building blocks of React ?
#### The five main building blocks of React are:
#### Components: These are reusable blocks of code that return HTML.
#### JSX: It stands for JavaScript and XML and allows you to write HTML in React.
#### Props and State: props are like function parameters and State is similar to variables.
#### Context: This allows data to be passed through components as props in a hierarchy.
#### Virtual DOM: It is a lightweight copy of the actual DOM which makes DOM manipulation easier.

## 4. Explain props and state in React with differences.
#### Props are used to pass data from one component to another. The state is local data storage that is local to the component only and cannot be passed to other components.
### PROPS :
#### i. The Data is passed from one component to another.
#### ii. It is Immutable (cannot be modified).
#### iii. Props can be used with state and functional components.
#### iv. Props are read-only.
### STATE :
#### i. The Data is passed within the component only.
#### ii. It is Mutable ( can be modified).
#### iii. The state can be used only with the state components/class component (Before 16.0).
#### iv. The state is both read and write.

## 5. What is virtual DOM in React ?
#### React uses Virtual DOM which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM.

## 6. What is JSX ?
#### JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM. All the React components are written in JSX. To embed any JavaScript expression in a piece of code written in JSX we will have to wrap that expression in curly braces {}. 

## 7. What are components and their type in React ?
#### A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. 

#### In React, we mainly have two types of components: 

#### Functional Components: Functional components are simply javascript functions. We can create a functional component in React by writing a javascript function. 
#### Class Components: The class components are a little more complex than the functional components. The functional components are not aware of the other components in your program whereas the class components can work with each other. We can pass data from one class component to another class component.

## 8. How do browsers read JSX ?
#### In general, browsers are not capable of reading JSX and only can read pure JavaScript. The web browsers read JSX with the help of a transpiler. Transpilers are used to convert JSX into JavaScript. The transpiler used is called Babel.

## 9. Explain the steps to create a react application and print Hello World ?
#### To install React, first, make sure Node is installed on your computer. After installing Node. Open the terminal and type the following command.
#### npx create-react-app <<Application_Name>>
#### Navigate to the folder.
#### cd <<Application_Name>>
#### Type the following command to run the application
#### npm start

## 10. What is a key in React ?
#### A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists.

## 11. Explain the difference between React and Angular ?

### React.js:
#### i. **Used as** - React.js is a JavaScript library. As it indicates react js updates only the virtual DOM is present and the data flow is always in a single direction.
#### ii. **Architecture** - React.js is more simplified as it follows MVC ie., Model View Control.
#### iii. **Scalability** - It is highly scalable.
#### iv. **Data Binding** - It supports Uni-directional data binding which is one-way data binding.
#### v. **DOM** - It has a virtual DOM.

### Angular:
#### i. **Used as** - Angular is a framework. Angular updates the Real DOM and the data flow is ensured in the architecture in both directions.
#### ii. **Architecture** - The architecture is complex as it follows MVVM models ie., Model View-ViewModel.
#### iii. **Scalability** - It is less scalable than React JS.
#### iv. **Data Binding** - It supports Bi-directional data binding which is two data binding.
#### v. **DOM** - It has regular DOM.

## 12. Explain the use of render method in React ?
#### React renders HTML to the web page by using a function called render(). The purpose of the function is to display the specified HTML code inside the specified HTML element. In the render() method, we can read props and state and return our JSX code to the root component of our app.

## 13. What is state in React ?
#### The state is an instance of React Component Class that can be defined as an object of a set of observable properties that control the behaviour of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.

## 14. Explain props in React ?
#### React allows us to pass information to a Component using something called props (which stands for properties). Props are objects which can be used inside a component.

## 15. What is higher-order component in React ?
#### Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component. HOC are beneficial as they are easy to code and read. Also, helps to get rid of copying the same logic in every component.

## 16. Explain the difference between functional and class component in React ?

### Functional Components :
#### i. A functional component is just a plain JavaScript pure function that accepts props as an argument 
#### ii. No render method used
#### iii. Also known as Stateless components 
#### iv. React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
#### v. Constructors are not used.

### Class Components :
#### i. A class component requires you to extend from React. Component and create a render function
#### ii. It must have the render() method returning JSX 
#### iii. Also known as Stateful components
#### iv. React lifecycle methods can be used inside class components (for example, componentDidMount).
#### v. Constructor is used as it needs to store state. 

## 17. Explain one way data binding in React ?
#### ReactJS uses one-way data binding which can be Component to View or View to Component. It is also known as one-way data flow, which means the data has one, and only one way to be transferred to other parts of the application. In essence, this means child components are not able to update the data that is coming from the parent component. It is easy to debug and less prone to errors.
#### *Note:* One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That’s why it is referred to as one-way data binding.

## 18. 

