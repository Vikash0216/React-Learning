import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Home />
    <About />
  </>
);

// Whenever you create an component the extension should be .jsx and the function we are exporting in the component name should be in Sentence Case(App,Home,About).
// If we name the function in lowercase it is not acceptable.
// The index.html file is the main HTML file we rendering .
// The main.jsx is the main js file where all the other jsx files should imported.It is present in src folder.
// React just create a virtual DOM and it compare to the real DOm and only load the components which are changed.
// This is why react is also known as SPA(Single page application) where everything is on one page and things are changing by and eventt.   
