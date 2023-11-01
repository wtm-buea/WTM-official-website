import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../../../Assets/images/logo.png";

const Navbar = (props) => {
  const routes = ["/", "/events", "/blog", "/success-stories"];
  const [state, setState] = useState("none");
  // const path = window.location.pathname;

  const toggleDropdown = () => {
    if (state === "none") {
      setState("block");
    } else {
      setState("none");
    }
  };

  return (
    <nav>
      <section className={styles[props.styles]}>
        <div className={styles.logoSection}>
          <img src={logo} className={styles.logo} alt="logo" />
        </div>
        <section className={styles.navRight}>
          <section className={styles.navRightChild}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeLink + " " + styles.link : styles.link
              }
              to={routes[0]}
            >
              Home
            </NavLink>
          </section>
          <section className={styles.navRightChild}>
            <NavLink
              to={routes[1]}
              className={({ isActive }) =>
                isActive ? styles.activeLink + " " + styles.link : styles.link
              }
            >
              Events
            </NavLink>
          </section>
          {/* <section className={styles.navRightChild}>
            <NavLink to={routes[2]} className={styles.link}>
              Our Blog
            </NavLink>
          </section> */}
          <section className={styles.navRightChild}>
            <NavLink
              to={routes[3]}
              className={({ isActive }) =>
                isActive ? styles.activeLink + " " + styles.link : styles.link
              }
            >
              Success Stories
            </NavLink>
          </section>
        </section>
        <section className={styles.dropdownContainer}>
          <span className={`${styles.hamburgerIcon}`} onClick={toggleDropdown}>
            <i className="fa-solid fa-bars"></i>
          </span>
          <div className={styles.dropdownMenu} style={{ display: state }}>
            <ul>
              <li>
                <NavLink
                  to={routes[0]}
                  className={({ isActive }) =>
                    isActive
                      ? styles.activeLink + " " + styles.link
                      : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={routes[1]}
                  className={({ isActive }) =>
                    isActive
                      ? styles.activeLink + " " + styles.link
                      : styles.link
                  }
                >
                  Events
                </NavLink>
              </li>
              {/* <li>
                <NavLink to={routes[2]} className={styles.link}>
                  Our Blog
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to={routes[3]}
                  className={({ isActive }) =>
                    isActive
                      ? styles.activeLink + " " + styles.link
                      : styles.link
                  }
                >
                  Success Stories
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
