import React, { Component, createRef } from "react";
import GifPlayer from "react-gif-player";

import './gif-wrapper.css';

class GifWrapper extends Component {
  gifRef = createRef();
  
  componentDidMount = () => {
    window.addEventListener("scroll", e => {
      if (this.gifRef.current) {
        let gif_img = document.querySelector(
          `img[src="${this.gifRef.current.props.gif}"]`
        );
        if (gif_img && !this.isInViewport(gif_img)) {
          this.pauseGif();
        }
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  isInViewport = el => {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  };

  render = () => {
    const { src, still } = this.props;
    return (
      <GifPlayer
        gif={src}
        still={still}
        pauseRef={pause => (this.pauseGif = pause)}
        ref={this.gifRef}
        className="gif"
      />
    );
  }
}

export default GifWrapper;
