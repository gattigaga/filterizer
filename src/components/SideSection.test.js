import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import "react-test-renderer";

import SideSection from "./SideSection";

let wrapper;

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
  wrapper = shallow(
    <SideSection title="Filter">
      <p>Filter it !</p>
    </SideSection>
  );
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it("should render title", () => {
  expect(wrapper.find("label").contains("Filter")).toBe(true);
});

it("should have children", () => {
  expect(wrapper.find("p").contains("Filter it !")).toBe(true);
});
