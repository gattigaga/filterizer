import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import SyntaxHighlighter from "react-syntax-highlighter";
import { ocean } from "react-syntax-highlighter/styles/hljs";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    fontSize: 12
  }
});

class Code extends Component {
  constructor(props) {
    super(props);

    this.generateCode = this.generateCode.bind(this);
  }

  /**
   * Generate CSS Code
   *
   * @memberof Code
   */
  generateCode() {
    const { filter } = this.props;
    let validFilter = [];

    for (const prop in filter) {
      if (filter[prop] > 0) {
        const key = prop === "hue" ? "hue-rotate" : prop;
        let unit = "%";

        if (prop === "hue") {
          unit = "deg";
        } else if (prop === "blur") {
          unit = "px";
        }

        validFilter.push(`${key}(${filter[prop]}${unit})`);
      }
    }

    validFilter = validFilter.join(" ");

    const style = `img { filter: ${validFilter}; }`;

    return style;
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <SyntaxHighlighter language="css" style={ocean}>
          {this.generateCode()}
        </SyntaxHighlighter>
      </div>
    );
  }
}

Code.propTypes = {
  filter: PropTypes.object
};

export default Code;
