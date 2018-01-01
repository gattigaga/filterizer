import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  sidebar: {
    width: 240,
    height: "100vh",
    backgroundColor: "#34495e",
    padding: 32
  }
});

const SideBar = ({ children }) => (
  <div className={css(styles.sidebar)}>{children}</div>
);

SideBar.propTypes = {
  children: PropTypes.node
};

export default SideBar;
