# Welcome on Voutube

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It looks like Youtube.

## Youtube API

This app uses [YouTube Data API v3](https://developers.google.com/youtube/v3). 

If you want to use this Youtube API, you should create a new project on Google developers console and enable the Youtube Data API v3. You will then create credentials to use it into your application.

## Axios

Axios is a 3rd party package that you can use to make a request over to the youtube Data API v3 :

- axios.get( parameter1, parameter2) with parameter1, the unsplash API endpoint and parameter2, an object containing the header specifying ClientID authorization and the params specifying query strings.

## Building list of videos

If you want to display a list of videos, you will probably have a warning message "Each child in an array or iterator should have a unique key prop". 

The key prop of each item should be an unique identifier.

The purpose of key prop find its importance in the performance of [reconciliation react algorithm](https://fr.reactjs.org/docs/reconciliation.html) to make comparison between real DOM and virtual DOM. 

## Frequently asked questions

### How can I pass a property function from a child component to a parent component ?

You can pass a callback property from the parent App to the child component. 

In this example of SearchBar component, we pass a callback property onSubmit from the parent App component to the child SearchBar component, and the child SearchBar will call that callback to communicate with the parent App.

You will find another example with onVideoSelect which is passed from parent App to VideoList component and then to VideoItem component. The VideoItem component call the callback to communicate with the parent App, which will set the selectedVideo and then pass this selectedVideo as props to VideoDetail component.

### How can I solve context issues such as 'Error canot read property of undefined' ?

You can bind the function inside the constructor method of the class.

You can use inline JSX arrow function. There is an example in the form of the SearchBar component:

``onChange={(e) => this.setState({ term: e.target.value })}``

You can use arrow function instead of anonymous function inside your class component. 

``onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
};``

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
