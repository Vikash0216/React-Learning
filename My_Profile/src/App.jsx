import { Sun, Moon } from "lucide-react";
import "./App.css";
import useTheme, { ThemeProvider } from "./contexts/theme";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  let { darkTheme, lightTheme } = useTheme();
  useEffect(() => {
    const themeClass = document.querySelector("html").classList;
    themeClass.remove("light", "dark");
    themeClass.add(themeMode);
  }, [themeMode]);

  darkTheme = () => {
    setThemeMode("dark");
  };

  lightTheme = () => {
    setThemeMode("light");
  };

  const handleOnclick = () => {
    console.log(themeMode);
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <ThemeProvider>
      <div className="w-full h-full mx-auto border border-gray-200 rounded-lg shadow p-6 relative bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
        <button
          className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleOnclick}
          value=""
        >
          Dark/Light Theme
        </button>

        <div className="flex flex-col items-center mt-10">
          <img
            className="w-64 h-64 rounded-full object-top shadow-lg border-4 border-gray-300 dark:border-gray-600 object-cover"
            src="/img.jpg"
            alt="Vikash Mahato"
          />

          <h2 className="mt-4 text-2xl font-bold">Vikash Mahato</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Full Stack Developer | Computer Science Teacher
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 text-center px-4">
            Passionate about coding, teaching, and making a difference in the
            software world. Currently working as a Computer Science teacher with
            4 years of experience, running a coaching institute in a rural area
            of Jharkhand.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Hobbies & Interests</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>Coding and building full-stack applications</li>
            <li>Helping students secure jobs in tech</li>
            <li>Learning and exploring new technologies</li>
            <li>Gaming and problem-solving in Python & C++</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Career Goals</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Seeking a full-time role in IT to gain more experience and exposure
            in full-stack development, API integration, and e-commerce
            platforms.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Location</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Sini, Jharkhand, India
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
