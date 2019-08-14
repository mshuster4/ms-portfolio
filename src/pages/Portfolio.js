import React, { Component } from "react";
import { Row, Col } from "react-bootstrap"
import PortfolioContainer from "../components/PortfolioContainer"
import PortfolioImage from "../components/PortfolioImage"
import Button from "../components/Button";
import Icon from "../components/Icon";
import blockScreenOne from "../assets/page-images/block-party-shot-one.png";
import blockScreenTwo from "../assets/page-images/block-party-shot-two.png";
import campScreenOne from "../assets/page-images/camp-shot-one.png";
import campScreenTwo from "../assets/page-images/camp-shot-two.png";
import readingScreenOne from "../assets/page-images/reading-shot-one.png"
import readingScreenTwo from "../assets/page-images/reading-shot-two.png"
import friendScreenOne from "../assets/page-images/friend-shot-one.png"
import friendScreenTwo from "../assets/page-images/friend-shot-two.png"
import brewsScreenOne from "../assets/page-images/brews-shot-one.png";
import brewsScreenTwo from "../assets/page-images/brews-shot-two.png";
import mongoScreenOne from "../assets/page-images/mongo-shot-one.png";
import mongoScreenTwo from "../assets/page-images/mongo-shot-two.png";
import projects from "../projects.json";
import blockPreview from "../assets/page-images/block-party-preview.png";
import campPreview from "../assets/page-images/camp-preview.png";
import readingPreview from "../assets/page-images/reading-preview.png";
import friendPreview from "../assets/page-images/friend-preview.png";
import brewsPreview from "../assets/page-images/brews-preview.png";
import mongoPreview from "../assets/page-images/mongo-preview.png";

class Portfolio extends Component {

  constructor(props) {
    super(props);
      console.log(this.props);
      this.handleClick.bind(this)
  }

  handleClick(num) {
    this.props.toggle(num);
  }

  
  render() {
      return (
        <PortfolioContainer>
            <Row>
              <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={blockPreview}
                        alt="Block Party Preview"
                    >
                      <h5 className="project-title">Block Party</h5>
                      <Button
                          onClick = {() => this.handleClick(0)}
                          onModal= {this.props.onModal}
                          className = "portfolio-button"
                          outline={true}
                          size = "sm"

                      >
                        Learn More <Icon icon={["fas", "book-open"]} />
                      </Button>
                    </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                    img={readingPreview}
                    alt="Reading Wishlist Preview"
                  >
                    <h5 className="project-title">Reading Wishlist</h5>
                     <Button
                         onClick = {() => this.handleClick(1)}
                         onModal= {this.props.onModal}
                         className = "portfolio-button"
                         outline={true}
                         size = "sm"
                      >
                      Learn More <Icon icon={["fas", "book-open"]} />
                    </Button>
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                      img={friendPreview}
                      alt="Friend Finder Preview"
                  >
                    <h5 className="project-title">Friend Finder</h5>
                      <Button
                        onClick = {() => this.handleClick(2)}
                        onModal= {this.props.onModal}
                        className = "portfolio-button"
                        outline={true}
                        size = "sm"
                      >
                      Learn More <Icon icon={["fas", "book-open"]} />
                    </Button>
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={campPreview}
                        alt="Camp Wanna Preview"
                    >
                    <h5 className="project-title">Camp Wannagetajob</h5>
                      <Button
                        onClick = {() => this.handleClick(3)}
                        onModal= {this.props.onModal}
                        className = "portfolio-button"
                        outline={true}
                        size = "sm"
                      >
                      Learn More <Icon icon={["fas", "book-open"]} />
                    </Button>
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                      img={brewsPreview}
                      alt="Brews Beats Preview"
                  >
                    <h5 className="project-title">Brews <span>&#38;</span> Beats</h5>
                     <Button
                        onClick = {() => this.handleClick(4)}
                        onModal= {this.props.onModal}
                        className = "portfolio-button"
                        outline={true}
                        size = "sm"
                      >
                      Learn More <Icon icon={["fas", "book-open"]} />
                    </Button>
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                      img={mongoPreview}
                      alt="News Scraper Preview"
                  >
                    <h5 className="project-title">News Scraper</h5>
                    <Button
                      onClick = {() => this.handleClick(5)}
                      onModal= {this.props.onModal}
                      className = "portfolio-button"
                      outline={true}
                      size = "sm"
                    >
                      Learn More <Icon icon={["fas", "book-open"]} />
                    </Button>
                  </PortfolioImage>
                </Col>
                </Row>
               </PortfolioContainer>
      )
  }

}

export default Portfolio; 

