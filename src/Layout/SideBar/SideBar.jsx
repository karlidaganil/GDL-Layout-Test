import { useEffect } from "react";
import "./style.scss";

const SideBar = () => {
  useEffect(() => {
    let elements = document.getElementsByClassName("sub-btn");
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", () => {
        let subMenu = elements[i].nextSibling;
        subMenu.classList.toggle("show");
        elements[i]
          .getElementsByClassName("dropdown")[0]
          .classList.toggle("rotate");
      });
    }

    let menuButton = document.getElementsByClassName("menu-btn")[0];
    let sideBar = document.getElementsByClassName("side-bar")[0];
    menuButton.addEventListener("click", () => {
      sideBar.classList.toggle("active");
      menuButton.style.visibility = "hidden";
    });
    let closeButton = document.getElementsByClassName("close-btn")[0];
    closeButton.addEventListener("click", () => {
      sideBar.classList.remove("active");
      menuButton.style.visibility = "visible";
    });
  }, []);
  return (
    <>
      <div className="menu-btn">
        <i className="fas fa-bars"></i>
      </div>
      <div className="side-bar">
        <div className="close-btn">
          <i className="fas fa-times"></i>
        </div>
        <div className="menu">
          <div className="item">
            <a href="#">
              <i className="fas fa-desktop"></i>Notifications
            </a>
          </div>
          <div className="item">
            <a href="#">
              <i className="fas fa-desktop"></i>Lobby
            </a>
          </div>
          <div className="item">
            <a className="sub-btn">
              <i className="fas fa-table"></i>
              Configurations
              <i className="fas fa-angle-right dropdown"></i>
            </a>
            <div className="sub-menu">
              <a href="#" className="sub-btn sub-item">
                <i className="fas fa-table"></i>
                Functional
                <i className="fas fa-angle-right dropdown"></i>
              </a>
              <div className="sub-menu">
                <a href="#" className="sub-item nested">
                  Users
                </a>
                <a href="#" className="sub-item nested">
                  Mapping
                </a>
                <a href="#" className="sub-item nested">
                  Transaction Limit
                </a>
                <a href="#" className="sub-item nested">
                  MC Limit
                </a>
                <a href="#" className="sub-item nested">
                  Catalog
                </a>
              </div>
              <a href="#" className="sub-btn sub-item">
                <i className="fas fa-table"></i>
                Technical
                <i className="fas fa-angle-right dropdown"></i>
              </a>
              <div className="sub-menu">
                <a href="#" className="sub-item nested">
                  Platforms
                </a>
                <a href="#" className="sub-item nested">
                  Attribute Management
                </a>
                <a href="#" className="sub-item nested">
                  FO Systems
                </a>
                <a href="#" className="sub-item nested">
                  RealTİme
                </a>
                <a href="#" className="sub-item nested">
                  Autantication
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
