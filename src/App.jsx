import { Outlet } from "react-router-dom";
import Header from "./pages/shared/Header";
import Footer from "./pages/shared/Footer";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;