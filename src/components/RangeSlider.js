import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    marginBottom: 24
  },
  title: {
    color: "#5a7a9b",
    fontFamily: "Roboto",
    textTransform: "uppercase",
    fontSize: 10
  },
  value: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 10
  },
  info: {
    marginBottom: 4,
    display: "flex",
    justifyContent: "space-between"
  },
  input: {
    "-webkit-appearance": "none",
    backgroundColor: "transparent",
    width: "100%",
    cursor: "pointer",
    ":focus": {
      outline: "none"
    },
    "::-webkit-slider-thumb": {
      "-webkit-appearance": "none",
      height: 16,
      width: 16,
      borderRadius: "100%",
      backgroundColor: "#e74c3c",
      marginTop: -8
    },
    "::-moz-range-thumb": {
      "-webkit-appearance": "none",
      height: 16,
      width: 16,
      borderRadius: "100%",
      backgroundColor: "#e74c3c"
    },
    "::-webkit-slider-runnable-track": {
      height: 2,
      backgroundColor: "#2b3d4f"
    },
    "::-moz-range-track": {
      height: 2,
      backgroundColor: "#2b3d4f"
    }
  }
});

const RangeSlider = ({ label, value, onChange, min, max }) => (
  <div className={css(styles.container)}>
    <div className={css(styles.info)}>
      <label className={css(styles.title)}>{label}</label>
      <span className={css(styles.value)}>{value} %</span>
    </div>
    <input
      type="range"
      value={value}
      className={css(styles.input)}
      min={min}
      max={max}
      onChange={onChange}
    />
  </div>
);

RangeSlider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func
};

RangeSlider.defaultProps = {
  value: 0,
  min: 0,
  max: 100
};

export default RangeSlider;
