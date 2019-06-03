import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SearchBar from "./search-bar";

configure({ adapter: new Adapter() });
describe("The search bar component", () => {
  let app;
  let mockSearchHandler = jest.fn();
  let mockChangeHandler = jest.fn();
  
  beforeEach(() => {
    app = shallow(
      <SearchBar
        searchTerm="obama"
        changeHandler={mockChangeHandler}
        searchHandler={mockSearchHandler}
      />
    );
  });

  it('should render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it("the search button should have text", () => {
    let button = app.find("button").first();
    expect(button.text()).toEqual("Search");
  });

  it("should handle the click event", () => {
    app.find("button").simulate("click");
    expect(mockSearchHandler.mock.calls.length).toEqual(1);
  });

  it("should handle the change event", () => {
    app.find("input[type='text']").simulate("change");
    expect(mockChangeHandler.mock.calls.length).toEqual(1);
  });
});
