import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite/no-important";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
    backgroundColor: "#2b3d4f",
    padding: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  blank: {
    width: 640,
    height: 480,
    border: "2px dashed #34495e",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  },
  noBorder: {
    border: 0
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "white"
  },
  credit: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "white",
    marginTop: 32
  },
  link: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#e74c3c",
    textDecoration: "none"
  },
  file: {
    display: "none"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
});

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };

    this.pickImage = this.pickImage.bind(this);
    this.showImage = this.showImage.bind(this);
    this.generateFilter = this.generateFilter.bind(this);
  }

  componentDidMount() {
    this.input.onchange = e => {
      this.showImage(e);
    };
  }

  /**
   * Show image which has been chosen
   *
   * @param {object} event
   * @memberof Display
   */
  showImage(event) {
    const { files } = event.target;
    const loadedFile = files[0];

    if (FileReader && loadedFile) {
      const reader = new FileReader();

      reader.onload = () => {
        this.image.src = reader.result;
      };
      reader.readAsDataURL(loadedFile);

      this.setState({ isLoaded: true });
    } else {
      this.setState({ isLoaded: false });
    }
  }

  /**
   * Pick image from storage
   *
   * @memberof Display
   */
  pickImage() {
    this.input.click();
  }

  /**
   * Generate CSS Filter
   *
   * @memberof Display
   */
  generateFilter() {
    const { filter } = this.props;
    const {
      brightness,
      contrast,
      saturate,
      sepia,
      grayscale,
      invert,
      hue,
      blur
    } = filter;

    const result = {
      filter: `
        brightness(${brightness}%) 
        contrast(${contrast}%) 
        saturate(${saturate}%) 
        sepia(${sepia}%) 
        grayscale(${grayscale}%) 
        invert(${invert}%) 
        hue-rotate(${hue}deg) 
        blur(${blur}px)
      `
    };

    return result;
  }

  render() {
    const { isLoaded } = this.state;

    return (
      <div className={css(styles.container)}>
        <div
          className={css(styles.blank, isLoaded && styles.noBorder)}
          onClick={this.pickImage}
        >
          {!isLoaded ? (
            <span className={css(styles.description)}>
              Drag and drop image here or select from storage
            </span>
          ) : (
            <img
              src=""
              alt="Content"
              className={css(styles.image)}
              ref={ref => {
                this.image = ref;
              }}
              style={this.generateFilter()}
            />
          )}
          <input
            type="file"
            name="file"
            className={css(styles.file)}
            ref={ref => {
              this.input = ref;
            }}
          />
        </div>
        <span className={css(styles.credit)}>
          Created by{" "}
          <a href="https://gattigaga.com" className={css(styles.link)}>
            Gattigaga Hayyuta Dewa
          </a>
        </span>
      </div>
    );
  }
}

Display.propTypes = {
  filter: PropTypes.object
};

export default Display;
