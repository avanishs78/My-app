# My Notes

# NPM - npm is a package manager for node but it doesn't stand for 'Node package manager'. Npm doesn't have any full form.

# How to add npm to project-
## 1. run 'npm init' and follow the commands.
## 2. it will create a package.json file. Package.json is a configuration for npm. It will take records of version of packages installed in project.

# Bundler - (npx create-react-app uses webpack as bundler behind the scenes)- ex - parcel, webpack
## Parcel - (for dev build run 'npx parcel index.html)
### 1. Parcel Bundler is a powerful tool that developers use to bundle web resources. 
### 2.It is a web application bundler that offers a seamless experience for developers. 
### 3.The tool is used for bundling, which is the process of following imported files and merging them into a single file or multiple files.
### 4.This process enhances the performance of the web app by reducing the number of HTTP requests

### **Note -**  Parcel does -
#### -Dev build 
#### -Local server 
#### -HMR- Hot Module Replacement 
#### -Compress
#### -File Watching Alogorithm- written in c++ 
#### -Caching - Faster Builds 
#### -Image Optimization 
#### -Minification 
#### -Bundling 
#### -Consistent Hashing
#### -Code Splittng
#### -Differential Bundling -support older browser
#### -Diagnostic
#### -Error Handling
#### -HTTPs
#### -Tree Shaking - remove unused code
#### -Different dev and prod bundles

#### **imp note** - To build for prod -> remove 'main:App.js' form package.json and run 'npx parcel build index.html'


## Parcel vs Webpack: A Comparative Analysis
### 1. Parcel and Webpack are both popular web application bundlers, but they have different approaches and features.

### 2. Webpack is known for its flexibility and extensive configuration options. It allows developers to control every aspect of the bundling process through configuration files. However, this flexibility comes with a steep learning curve, especially for beginners.

### 3. On the other hand, Parcel is known for its simplicity and zero-configuration feature. It doesn't require any configuration files to bundle a web app.

### 4. Parcel is also faster than Webpack because it utilizes multiple cores for bundling, which makes it an excellent choice for large projects.

# Difference between tilde ( ~ ) and caret ( ^ ) in package.json
## Syntax of npm version - "Major.Minor.Patch"
## Tilde (~) notation: It matches the latest patch version while freezing the major and minor versions
### Example: The ~1.2.0 will update all the future patch updates. We have to write just ~1.2.0 and all the next patch update dependencies. For example, 1.2.1, 1.2.2, 1.2.5……………1.2.x.
## Caret (^) notation: It automatically updates both minor and patch updates.
### Example: The ^1.2.4 will update all the future Minor and patch updates, for example, ^1.2.4 will automatically change the dependency to 1.x.x if any update occurs.

# Difference between package.json and package-lock.json files
## The role of Package.json:
### 1. Project configuration - package.json serves as a manifest file for Node projects, containing metadata about the project and its dependencies. It includes information such as the project name, version, entry point, scripts, and dependencies.
### 2. Dependency Management: Dependencies are listed in the “dependencies” section, specifying the packages required for the project to run. Developers can use the npm install command to install dependencies listed in the package.json.
### 3. Version Management: Versions of dependencies may be specified with semantic versioning (SemVer) rules in the package.json. This file is typically committed to version control systems (e.g., Git) to share project configurations. 
## The Role of package-lock.json:
### 1. Dependency Locking: package-lock.json is an auto-generated file that provides a detailed, deterministic record of the dependency tree. It locks down the specific versions of every installed package, preventing unintended updates.
### 2. Version Consistency: This file ensures that every developer working on the project, as well as the CI/CD system, uses the exact same versions of dependencies. Guarantees consistent builds across different environments, avoiding “it works on my machine” issues.
### 3. Improved Installation Speed: package-lock.json optimizes dependency installation by storing a flat node_modules structure, reducing the need for deep dependency resolution during installation. This results in faster and more reliable installations.

# node_modules
## node_modules contains all dependency packages and libraries. With the help of package.json and package-lock.json, we can install all the dependencies and recreate node_modules by running command 'npm install'. This is why no need to push node_modules to git repo.

# Transitive dependency: 
## Our project has dependency of parcel and parcel has dependency of lot of other libraries. This is known as transitive dependency.

# Dev dependencies vs normal dependencies ?

# React Element :
### React Element is an object. When we render it on DOM then it becomes and an html element
#### React Element => ReactElement- JS Object => HTMLElement(render)
#### const title = ()=> (
#### <h1 className='heading'>
####  Namaste React with JSX🚀
####  </h1> 
####  );

# JSX :
### It is a syntax extension to javascript. It is HTML-like or XML-like syntax. JSX produces React elements. JSX is transpiled by babel before it reaches JS.
#### JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

#### **Creating React element using React.createElement:**
### const heading = React.createElement('h1',{id:'heading'},'React Element🚀');

#### **Creating React element using JSX:**
### const jsxHeading = <h1 id="heading">React Element with JSX🚀</h1>;

#### **Note:** Browsers(js engine) don't understand jsx. Transpilers or javascript compilers (i.e babel) converts jsx to a code that js engine understands.

# React Component:
### Two ways of creating React Component-
### 1.Class Based Components
### 2.Function COmponents - Normal JS function which returns a jsx.
### const HeadingComponent = () => {return <h1 className='heading'>My React Functional Component</h1>};

## Component composition: One component used inside other component as children is known as component composition

## Props:
#### passing props to components is same as Passing arguements to functions.
#### Through props we pass data from parent to child components.

## Config driven UI: 
## Optional Chaining:
## Key in array.map: It is used to uniquely identify each element. Using index as key is not recommended.

## .js vs .jsx file ?

## export default vs named export?

### Default export/import - 
### export default Component;
### import Component from "path";

### Named export/import - 
### export const Component;
### import {Component} from "path";

## React Hooks
### These are normal javascript function
