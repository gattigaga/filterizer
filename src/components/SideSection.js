import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    marginBottom: 48
  },
  title: {
    color: "white",
    fontFamily: "Roboto",
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 24
  },
  content: {
    marginTop: 12
  }
});

const SideSection = ({ title, children }) => (
  <div className={css(styles.container)}>
    <label className={css(styles.title)}>{title}</label>
    <div className={css(styles.content)}>{children}</div>
  </div>
);

SideSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default SideSection;
