import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import ResultItem from "./result-item";

configure({ adapter: new Adapter() });
describe("The result item component", () => {
  let app;
  let images = {
    original: {
      url: "https://media3.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.gif"
    },
    "480w_still": {
      url: "https://media1.giphy.com/media/pPhyAv5t9V8djyRFJH/480w_s.jpg"
    }
  };

  beforeEach(() => {
    app = shallow(<ResultItem id="pPhyAv5t9V8djyRFJH" images={images} />);
  });

  it("should render correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("should render GifWrapper component", () => {
    expect(app.find('GifWrapper').exists()).toBeTruthy()    
  });
});
