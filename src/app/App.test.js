import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import App from './App';

configure({ adapter: new Adapter() });
describe("The main component", () => {
  let app;
  beforeEach(() => {
    app = mount(<App />);
  });

  it("the main app should have text", () => {
    expect(app.text().includes("Search Results")).toBe(true);
  });

  it("the search button should have text", () => {
    let button = app.find("button").first();
    expect(button.text()).toEqual("Search");
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
