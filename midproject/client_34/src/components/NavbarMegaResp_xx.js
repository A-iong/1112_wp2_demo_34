import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "../assets/wrapper/NavbarMegaResp_xx";

const NavbarResp_xx = () => {
  return (
    <Wrapper>
      <header className="header">
        <div
          className="header-row container"
          role="navigation"
          aria-label="Main"
        >
          <div className="header-left">
            <div className="logo">
              <h1>logo</h1>
            </div>
          </div>
          <div className="header-right">
            <ul className="main-menu">
              <li className="menu-item">
                <Link to="#" className="active">
                  Home
                </Link>
              </li>
              <li className="menu-item dropdown">
                <Link to="#">MiddleProject_34 +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/middle_project_server_34">Node Server</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/middle_project_supabase_34">
                        Supabase 
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link to="#">Midprep_34 +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/midp_static_34">Static</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/midp_node_34">Node Server</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/midp_node_context_34">
                        Node Server Context
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link to="#">Blogs Demo +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/card_xx">Static</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/local_xx">Local Json</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/supabase_xx">Supabase</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/node_xx">Node Server</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item mega-menu">
                <Link to="#">Mega menu +</Link>
                <div className="mega-menu-wrapper slideInUp">
                  <div className="mega-menu-col">
                    <h5>Menu block 1</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 2</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 3</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 4</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="menu-item">
                <Link to="#">Blog</Link>
              </li>
              <li className="menu-item">
                <Link to="#">Contact</Link>
              </li>
            </ul>
            <Link
              to="#"
              id="hamburger-icon"
              className="mobile-toggler"
              aria-label="Mobile Menu"
            >
              <i className="fas fa-bars"></i>
            </Link>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default NavbarResp_xx;
