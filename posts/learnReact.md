---
title: "What is React & how to go around it"
date: "2022-10-16"
---

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1671520279040/_Dm71mXJT.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp)

### What is React?

React is an open-source javascript library to build User Interfaces. It is mainly maintained by Meta and a bunch of individual developers.

React is a tool for building UI components React make's it simple to create interactive UI components and maintain the state of your application. It renders your components according to the change in data without refreshing the page it has the power to change the state of a component without updating anything else on the page,

What do I mean by all this let's understand it with a simple analogy Everyone reading this article must have used some social media application which updates the number of likes in real-time without actually refreshing the page how is this done well the answer lies with some javascript library or a framework possibly "React".

A webpage is divided into DOM elements the tree like structure of DOM elements decides the structure of a webpage the DOM elements can be manipulated using JS but they have to be re-rendered to update the UI of the application this process is slow because it updates the entire DOM structure including all it's elements this is where React shines,

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1671525803603/E7lTMzE9W.png?auto=compress,format&format=webp)

React leverages something called VDOM(virtual dom) where an ideal or virtual representation of UI is kept in memory and synced with the real DOM by a library called ReactDOM this process is called [reconciliation](https://reactjs.org/docs/reconciliation.html) according to official React Docs, let's understand the concept of reconciliation with a diagram

![](https://miro.medium.com/max/638/0*fFLhD2DrRCW3S2NB.)

Source:- [https://medium.com/@ryanbas21/react-reconciliation-7075e3f07437](https://medium.com/@ryanbas21/react-reconciliation-7075e3f07437)

It means that React maintains a virtual DOM where all the React Components are mounted and ReactDOM.render() looks for changes once a change in components is noticed by React it informs the actual DOM and updates the UI only for a specific DOM element this disqualifies the need to update the entire DOM instead only the specific part of the DOM is updated this results in the faster rendering of the page which in turn results in faster webpage this is one of the reasons we use React over Plain JS.

How to set up a React Application

1. The very first step is to download Node.js if you are not familiar with what Node.js is I would suggest reading a bit about it, The installation is very simple you can download the latest stable build [here,](https://nodejs.org/en/) I would recommend using the LTS version as it's more stable and offers Long Term Support.

2. Check if Node.js was correctly installed on your system by opening up your Command Line Tool (My recommendation for windows users would be [Git Bash](https://git-scm.com/downloads))  
   `node -v`  
   It would return the version number of the node installed on your PC

3. Next type the command `npx create-react-app my-first-app` this would create a template application for you It would take some time so please allow some time for it to set up some boilerplate code for you once it's installed you can start your application by entering the command `npm start` by default, the application would be served on [http://localhost:3000/](http://localhost:3000/) and would look like the image below

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1671790557786/b1ee6a6f-deb7-4637-8987-1e3a8ba4ee49.png)

4. Well a lot of people are overwhelmed when they see how the files are structured in a React app for the first time well don't be it will all make sense once you get your hands dirty the file structure of your app would look something like the image below

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1671790902600/222cce2b-6deb-44d6-a902-6e2e977a37b5.png)

5. For now we are not concerned about anything else apart from the src folder we will understand what's going on by writing a simple Hello World! instead of the react logo animation, I want you to open the App.js file inside of the src folder we will be manipulating some code in this file to achieve our target but first, we will understand what is going on in the default App.js file.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1671791533771/49a6bb3d-8508-43da-8166-374699eb3171.png)

6. Now React under the hood uses something called webpack which bundles our modular code and prepares an optimum build to run our application it also uses something called babel which lets you write modern JS code which is supported by old browsers too

7. In the App.js file you would see a weird kind of syntax that looks like HTML  
   `const heading = <h1>Hello World!</h1` this is called JSX in React we render elements on the webpage using JSX, which is a combination of HTML & JS it has the full power of JS within the HTML elements.

8. On line 4 we can see a function declaration in which the JSX is written and rendered as the output on the page well React is popular for building SPA's (Single page applications) which means that react combines different modules and display it as a SPA.

9. In the earlier days of React the library followed a class-based approach where in we declared classes and extended them within the other classes but the modern way of writing React is to follow the functional approach and use React Hooks, Once you have the basic idea of React you can start learning about different hooks.

10. The functional approach is the modern way of writing React components. Imagine you have to build a complete Webpage, I know in the start even imagining is overwhelming, The website may have a Header &gt; Nav-Bar, Sidebar, Feeds, Sidebar, and Footer. Well in React all these are different components written similarly to App.js and Exported to be used in the Root file where the render method is called which renders all the components on the app and display it as a webpage.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1671795184146/c107fd30-4b32-4aae-a064-5fe8bd7e4906.png)

11. Well look at the index.js file and look how the App.js is imported on line 4 and how it is rendered on line 10 using the

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

similarly, more components can be written on their separate files using the functional approach and rendered on the index.js file inside the render method.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1671795718060/75f4deca-9880-4350-84ef-4ef04cc591bd.png)

12. Now I want you to remove all the code in App.js from lines 7 to 20 and add an  
    `<h1>Hello World!</h1>` and now visit the browser where your application is served you will find Hello World!, if your application does not start just write the command `npm start` again and you will see something like the image below

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1671796321021/8b935a89-7b42-4a94-8e61-4afdf87ddddb.png)

This is how you write your first React application

Thanks for reading the article❤️  
If you enjoyed visit my [Github](https://github.com/punitbathija) || [Linked-in](https://in.linkedin.com/in/punit-bathija-2b8951217) || [Twitter](https://mobile.twitter.com/punitbathija) and connect with me
