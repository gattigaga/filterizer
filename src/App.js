import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

import SideBar from "./components/SideBar";
import SideSection from "./components/SideSection";
import RangeSlider from "./components/RangeSlider";
import Display from "./components/Display";

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "flex"
  },
  title: {
    fontFamily: "Roboto",
    color: "white",
    marginTop: 0,
    marginBottom: 32,
    textTransform: "uppercase",
    fontSize: 24
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Filter
      brightness: 100,
      contrast: 100,
      saturate: 100,
      sepia: 0,
      grayscale: 0,
      invert: 0,
      hue: 0,
      blur: 0
    };
  }

  render() {
    const {
      brightness,
      contrast,
      saturate,
      sepia,
      grayscale,
      invert,
      hue,
      blur
    } = this.state;

    return (
      <div className={css(styles.container)}>
        <SideBar>
          <h1 className={css(styles.title)}>Filterizer</h1>
          <SideSection title="Filter">
            <RangeSlider
              label="Brightness"
              value={brightness}
              onChange={e => this.setState({ brightness: e.target.value })}
              max={200}
            />
            <RangeSlider
              label="Contrast"
              value={contrast}
              onChange={e => this.setState({ contrast: e.target.value })}
              max={200}
            />
            <RangeSlider
              label="Saturate"
              value={saturate}
              onChange={e => this.setState({ saturate: e.target.value })}
              max={200}
            />
            <RangeSlider
              label="Sepia"
              value={sepia}
              onChange={e => this.setState({ sepia: e.target.value })}
            />
            <RangeSlider
              label="Grayscale"
              value={grayscale}
              onChange={e => this.setState({ grayscale: e.target.value })}
            />
            <RangeSlider
              label="Invert"
              value={invert}
              onChange={e => this.setState({ invert: e.target.value })}
            />
            <RangeSlider
              label="Hue"
              value={hue}
              onChange={e => this.setState({ hue: e.target.value })}
              max={360}
              unit="deg"
            />
            <RangeSlider
              label="Blur"
              value={blur}
              onChange={e => this.setState({ blur: e.target.value })}
              max={10}
              unit="px"
            />
          </SideSection>
        </SideBar>
        <Display
          filter={{
            brightness,
            contrast,
            saturate,
            sepia,
            grayscale,
            invert,
            hue,
            blur
          }}
        />
      </div>
    );
  }
}

export default App;
