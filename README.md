# Dowell-Living-Labs-Maps Package

## Version 1.0.0

### Description

Welcome to Dowell Living Labs Maps!  This package will show you the nearest locations and also help you gather data about the same after a search.


### Installation 
Install the package using npm:
    npm install dowell-living-lab-maps

### Requirements
.env 
This file should be in your root directory and should have the following data:
```
VITE_GOOGLE_API = "YOUR GOOGLE API KEY"

VITE_PLACES_API_KEY = "EhdQUTM2K0hNLCBOYWlyb2JpLCBLZW55YSImOiQKCg2PPDr"

VITE_DATACUBE_API_KEY = "YOUR DATACUBE API KEY FROM DOWELL API"
```

### Usage 

Import the package and search for categories in specific regions. Preferrably call in your App.jsx, which should have a similar structure below:


```
import LandingPage from 'dowell-living-lab-maps/Pages/LandingPage';
import {  PreviewProvider } from 'dowell-living-lab-maps/Context/PreviewContext';

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