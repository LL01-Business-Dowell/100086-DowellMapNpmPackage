import LandingPage from "./Pages/LandingPage.jsx";
import { PreviewProvider } from "./Context/PreviewContext.jsx";
function App() {
  return (
    <PreviewProvider>
        <LandingPage />
    </PreviewProvider>
  );
}

export default App;
