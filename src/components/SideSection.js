import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontFamily: "Roboto",
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 24
  }
});

const SideSection = ({ title, children }) => (
  <div>
    <label className={css(styles.title)}>{title}</label>
    {children}
  </div>
);

SideSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default SideSection;
