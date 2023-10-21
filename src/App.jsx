import { Outlet } from "react-router-dom";
import Header from "./pages/shared/Header";
import Footer from "./pages/shared/Footer";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(true);

  const handleTheme = () => {
    setState(!state);
  };

  return (
    <div data-theme={state ? "light" : "dark"}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>


      <button onClick={handleTheme} className="fixed bottom-6 left-6 p-2.5 rounded bg-gray-800 text-white dark:bg-white dark:text-gray-800 hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      </button>
    </div>
  );
};

export default App;