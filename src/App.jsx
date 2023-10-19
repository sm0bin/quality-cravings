import { Outlet } from "react-router-dom";
import Header from "./pages/shared/Header";
import Footer from "./pages/shared/Footer";

const App = () => {
  return (
    <div>
      <Header></Header>
      {/* <div className="pt-8"> */}
      <Outlet></Outlet>
      {/* </div> */}
      <Footer></Footer>
    </div>
  );
};

export default App;