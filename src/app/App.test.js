import React from "react";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import { configure, shallow } from "enzyme";
import App from "./App";

configure({ adapter: new Adapter() });
describe("The main component", () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it("should render correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("the main app should have text", () => {
    expect(
      app
        .find("h2")
        .first()
        .text()
        .includes("GIFted")
    ).toBe(true);
  });

  it("the search results section should have text", () => {
    expect(
      app
        .find("span")
        .at(1)
        .text()
        .includes("Search Results")
    ).toBe(true);
  });

  it("should retrieve two results on button click", () => {
    app.setState({
     results:[
      {
        "type": "gif",
        "id": "pPhyAv5t9V8djyRFJH",
        "slug": "wtf-obama-wth-pPhyAv5t9V8djyRFJH",
        "url": "https://giphy.com/gifs/wtf-obama-wth-pPhyAv5t9V8djyRFJH",
        "bitly_gif_url": "https://gph.is/2mJRUNC",
        "bitly_url": "https://gph.is/2mJRUNC",
        "embed_url": "https://giphy.com/embed/pPhyAv5t9V8djyRFJH",
        "username": "",
        "source": "https://www.reddit.com/r/reactiongifs/comments/91kqfo/mrw_i_hear_that_trump_says_hes_concerned_russia/",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "https://www.reddit.com/r/reactiongifs/comments/91kqfo/mrw_i_hear_that_trump_says_hes_concerned_russia/",
        "is_sticker": 0,
        "import_datetime": "2018-07-25 18:41:20",
        "trending_datetime": "2019-03-18 18:29:00",
        "images": {
          "original": {
            "url": "https://media3.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.gif",
            "width": "480",
            "height": "350",
            "size": "5667539",
            "frames": "102",
            "mp4": "https://media3.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.mp4",
            "mp4_size": "762848",
            "webp": "https://media3.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.webp",
            "webp_size": "1325356",
            "hash": "310cba679440e7b2be231406344e94d3"
          },
          "480w_still": {
            "url": "https://media1.giphy.com/media/pPhyAv5t9V8djyRFJH/480w_s.jpg",
            "width": "480",
            "height": "350"
          }
        },
        "title": "come on wtf GIF",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cf3b9d14653686432644ffc&event_type=GIF_SEARCH&gif_id=pPhyAv5t9V8djyRFJH&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cf3b9d14653686432644ffc&event_type=GIF_SEARCH&gif_id=pPhyAv5t9V8djyRFJH&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cf3b9d14653686432644ffc&event_type=GIF_SEARCH&gif_id=pPhyAv5t9V8djyRFJH&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "3o7qDSOvfaCO9b3MlO",
        "slug": "obama-mic-drop-out-3o7qDSOvfaCO9b3MlO",
        "url": "https://giphy.com/gifs/obama-mic-drop-out-3o7qDSOvfaCO9b3MlO",
        "bitly_gif_url": "https://gph.is/1NKLPuG",
        "bitly_url": "https://gph.is/1NKLPuG",
        "embed_url": "https://giphy.com/embed/3o7qDSOvfaCO9b3MlO",
        "username": "",
        "source": "",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2016-05-01 03:25:53",
        "trending_datetime": "2019-02-09 22:00:01",
        "images": {
          "original": {
            "url": "https://media1.giphy.com/media/3o7qDSOvfaCO9b3MlO/giphy.gif",
            "width": "480",
            "height": "342",
            "size": "3949320",
            "frames": "63",
            "mp4": "https://media1.giphy.com/media/3o7qDSOvfaCO9b3MlO/giphy.mp4",
            "mp4_size": "137369",
            "webp": "https://media1.giphy.com/media/3o7qDSOvfaCO9b3MlO/giphy.webp",
            "webp_size": "759600"
          },
          "480w_still": {
            "url": "https://media1.giphy.com/media/3o7qDSOvfaCO9b3MlO/480w_s.jpg",
            "width": "480",
            "height": "342"
          }
        },
        "title": "barack obama mic drop GIF",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cf3b9d14653686432644ffc&event_type=GIF_SEARCH&gif_id=3o7qDSOvfaCO9b3MlO&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cf3b9d14653686432644ffc&event_type=GIF_SEARCH&gif_id=3o7qDSOvfaCO9b3MlO&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cf3b9d14653686432644ffc&event_type=GIF_SEARCH&gif_id=3o7qDSOvfaCO9b3MlO&action_type=SENT"
          }
        }
      }
     ]
    });
    expect(app.find("lazy[type='gif']").length).toBe(2);
  });
});
