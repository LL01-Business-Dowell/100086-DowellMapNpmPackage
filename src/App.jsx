import LandingPage from 'dowell-living-lab-maps/Pages/LandingPage';
import {  PreviewProvider } from 'dowell-living-lab-maps/Context/PreviewContext';
// import { PreviewProvider } from "./Context/PreviewContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreviewPage from "./PreviewPage";
import MapUpdate from "./components/Map";

function App() {
  return (
    <PreviewProvider>
      <LandingPage />
    </PreviewProvider>
    // <>
    //   <PreviewProvider>
    //     <Router>
    //       <Routes>
    //         <Route path="/" element={<LandingPage />} />
    //         <Route path="/preview-page" element={<PreviewPage />} />
    //       </Routes>
    //     </Router>
    //   </PreviewProvider>
    // </>
  );
}

export default App;
