import React from "react";
import { Link } from "react-router-dom"; // only use link terms when you are linking internally in your website
import styles from "./Nav.module.scss"

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <div>iStocks</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/stocks">
        <div>Stocks</div>
      </Link>
    </div>
  );
};

export default Nav;