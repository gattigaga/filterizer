import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import "react-test-renderer";

import RangeSlider from "./RangeSlider";

let wrapper;

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
  wrapper = shallow(<RangeSlider label="Brightness" value={25} />);
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it("should render label", () => {
  expect(wrapper.find("label").contains("Brightness")).toBe(true);
});

it("should has correct value", () => {
  expect(wrapper.find("input").props().value).toBe(25);
});
