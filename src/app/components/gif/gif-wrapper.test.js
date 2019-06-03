import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import GifWrapper from "./gif-wrapper";

configure({ adapter: new Adapter() });
describe("The gif wrapper component", () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <GifWrapper
        src="https://media3.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.gif"
        still="https://media1.giphy.com/media/pPhyAv5t9V8djyRFJH/480w_s.jpg"
      />
    );
  });

  it("should render correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("should render GifPlayer component", () => {
    expect(app.find("GifPlayerContainer").exists()).toBeTruthy();
  });
});
