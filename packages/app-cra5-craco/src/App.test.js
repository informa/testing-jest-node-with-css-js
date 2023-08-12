import React from "react";
import App from "./App";
import { mount } from "enzyme";

it("render app with heading", () => {
  const app = mount(<App />);
  const heading = app.find("Heading");

  expect(heading.text()).toEqual("Heading");
});

it("render app with button", () => {
  const app = mount(<App />);
  const button = app.find("Button");

  expect(button.text()).toEqual("Button");
});

it("render app with card", () => {
  const app = mount(<App />);
  const card = app.find("Card");

  expect(card.text()).toContain("Content");
});

it("should show more information", () => {
  const app = mount(<App />);
  const button = app.find("Button");

  expect(app.find("i").length).toBe(0);

  button.simulate("click");

  expect(app.find("i").length).toBe(1);
  expect(app.find("i").text()).toEqual("More information");
});
