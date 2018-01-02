import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import "react-test-renderer";

import RangeSlider from "./RangeSlider";

let wrapper;

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
  wrapper = shallow(<RangeSlider label="Brightness" value={25} unit="px" />);
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

it("should has correct unit", () => {
  expect(wrapper.find("span").contains("px")).toBe(true);
});
