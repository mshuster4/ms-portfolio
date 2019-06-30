import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'


class ModalImages extends React.Component {
  constructor(props, context) {
    super(props, context);


    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        interval={null}
        fade={true}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={this.props.imageOne}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={this.props.imageTwo}
            alt="Second Slide"
          />

        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ModalImages 