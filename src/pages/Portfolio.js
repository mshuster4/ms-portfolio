import React, { Component } from "react";
import { Row, Col } from "react-bootstrap"
import PortfolioContainer from "../components/PortfolioContainer"
import PortfolioModal from "../components/PortfolioModal";
import PortfolioImage from "../components/PortfolioImage"
import blockPreview from "../assets/page-images/block-preview.png";
import blockScreenOne from "../assets/page-images/blockparty-shot-one.png";
import blockScreenTwo from "../assets/page-images/blockparty-shot-two.png";
import campPreview from "../assets/page-images/camp-wanna-preview.png";
import readingPreview from "../assets/page-images/reading-preview.png";
import friendPreview from "../assets/page-images/friend-preview.png";
import brewsPreview from "../assets/page-images/brews-preview.png";
import mongoPreview from "../assets/page-images/mongo-preview.png";
import projects from "../projects.json";

class Portfolio extends Component {
   
  render() {
      return (
        <PortfolioContainer>
            <Row className="align-self-center">

              <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={blockPreview}
                        alt="Block Party Preview"
                    >
                        Block Party
                    <PortfolioModal
                        title={projects[0].title}
                        description={projects[0].description}
                        imageOne={blockScreenOne}
                        imageTwo={blockScreenTwo}
                        techsUsed={projects[0].techsUsed}
                    />
                    </PortfolioImage>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                    img={readingPreview}
                    alt="Reading Wishlist Preview"
                  >
                    Reading Wishlist
                   <PortfolioModal
                        title={projects[1].title}
                        description={projects[1].description}
                        image={blockScreenOne}
                    />
                  </PortfolioImage>
                </Col>
                <Col xs={12} md={6} lg={4}>
                <PortfolioImage
                    img={friendPreview}
                />
                </Col>

              <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={campPreview}
                        alt="block-party-preview"
                    >
                        Block Party
                        <PortfolioModal/>
                    </PortfolioImage>
                </Col>
                <Col xs={12} md={6} lg={4}>
                <PortfolioImage
                    img={brewsPreview}
                />
                </Col>
                <Col xs={12} md={6} lg={4}>
                <PortfolioImage
                    img={mongoPreview}
                />
                </Col>
            </Row>
        </PortfolioContainer>
      )
  }

}

export default Portfolio; 

