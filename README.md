# Dowell-Living-Labs-Maps Package

## Version 1.0.0

### Description

Welcome to Dowell Living Labs Maps!  This package will show you the nearest locations and also help you gather data about the same after a search.


### Installation 
Install the package using npm:
```bash
    npm install @dowelllabs/dowell-living-lab-maps
```
### Requirements
.env 
This file should be in your root directory and should have the following data:
```
VITE_GOOGLE_API = "YOUR GOOGLE API KEY"

VITE_DOWELL_API_KEY = "YOUR DOWELL API KEY FROM DOWELL APIs"

```
####
For the Dowell API key, you need to have the DATACUBE API  and the PLACES API services activated.

### Usage 

Import the package and search for categories in specific regions. Preferrably call in your App.jsx, which should have a similar structure below:


```js
import LandingPage from '@dowelllabs/dowell-living-lab-maps/Pages/LandingPage';
import {  PreviewProvider } from '@dowelllabs/dowell-living-lab-maps/Context/PreviewContext';

function App() {
  return (
    <PreviewProvider>
      <LandingPage />
    </PreviewProvider>
  );
}

export default App;

```
Be sure to wrap the Landing page component with the PreviewProvider from the dowell-living-lab-maps package

# Extra Configurations

## Add the following dependencies to your package.json file
```js
"dependencies": {
    "@googlemaps/js-api-loader": "^1.16.2",
    "@mapbox/point-geometry": "^0.1.0",
    "@react-google-maps/api": "^2.19.2",
    "@vis.gl/react-google-maps": "^0.1.2",
    "@vitejs/plugin-react": "^4.2.1",
    "addons": "^0.1.2",
    "axios": "^1.5.0",
    "babel-loader": "^9.1.3",
    "css-loader": "^6.8.1",
    "dotenv": "^16.3.1",
    "eventemitter3": "^5.0.1",
    "google-map-react": "^2.2.1",
    "http-proxy": "^1.18.1",
    "qrcode.react": "^3.1.0",
    "react": "^18.2.0",
    "react-addons": "^0.9.1-deprecated",
    "react-dom": "^18.2.0",
    "react-dropdown": "^1.11.0",
    "react-icons": "^4.11.0",
    "react-pure-render": "^1.0.2",
    "react-query": "^3.39.3",
    "react-router-dom": "^6.16.0",
    "require": "^2.4.20",
    "style-loader": "^3.3.3",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "autoprefixer": "^10.4.15",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "vite": "^4.2.0"
  }
  ```
Then delete your node_modules folder and run 
```bash
npm install

```

# Tailwind configurations

## If you have your tailwind.config.js file already, simply add this bit to your 'content'
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // ...
    './node_modules/@dowelllabs/dowell-living-lab-maps/src/**/*.{js,ts,jsx,tsx}'
  ],
  // ...
}
```

## Or else if you haven't configured tailwind with your application, 
### create a "tailwind.config.js" file in your root directory and add the following code to it
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './node_modules/@dowelllabs/dowell-living-lab-maps/src/**/*.{js,ts,jsx,tsx}'
  ],
  // ...
}
```

### Then add the following tailwind configurations to your src/index.js file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


# Then run the following code in your terminal
```bash
npx tailwindcss build -o output.css
```


