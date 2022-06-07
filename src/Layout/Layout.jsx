import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import SideBar from "./SideBar/SideBar";
import "./style.scss";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <SideBar />
      <div className="sketlons">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
