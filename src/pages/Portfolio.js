import React, { Component } from "react";
import { Row, Col } from "react-bootstrap"
import PortfolioContainer from "../components/PortfolioContainer"
import PortfolioModal from "../components/PortfolioModal";
import PortfolioImage from "../components/PortfolioImage"
import blockPreview from "../assets/page-images/block-party-preview.png";
import blockScreenOne from "../assets/page-images/block-party-shot-one.png";
import blockScreenTwo from "../assets/page-images/block-party-shot-two.png";
import campPreview from "../assets/page-images/camp-wanna-preview.png";
import readingPreview from "../assets/page-images/reading-preview.png";
import readingScreenOne from "../assets/page-images/reading-shot-one.png"
import readingScreenTwo from "../assets/page-images/reading-shot-two.png"
import friendPreview from "../assets/page-images/friend-preview.png";
import friendScreenOne from "../assets/page-images/friend-shot-one/png"
import friendScreenTwo from "../assets/page-images/friend-shot-two.png"
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
                        tagline={projects[0].tagline}
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
                        tagline={projects[1].tagline}
                        imageOne={readingScreenOne}
                        imageTwo={readingScreenTwo}
                        techsUsed={projects[1].techsUsed}
                    />
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                      img={friendPreview}
                      alt="Friend Finder Preview"
                  >
                  Friend Finder
                  <PortfolioModal
                      title={projects[2].title}
                      description={projects[2].description}
                      tagline={projects[2].tagline}
                      imageOne={friendScreenOne}
                      imageTwo={friendScreenTwo}
                      techsUsed={projects[2].techsUsed}
                    />
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={campPreview}
                        alt="Camp Wanna Preview"
                    >
                        Camp Wannagetajob
                    <PortfolioModal
                        title={projects[3].title}
                        description={projects[3].description}
                        tagline={projects[3].tagline}
                        imageOne={friendScreenOne}
                        imageTwo={friendScreenTwo}
                        techsUsed={projects[3].techsUsed}
                        
                      />
                    </PortfolioImage>

                </Col>

                <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={brewsPreview}
                        alt="Brews Beats Preview"
                    >
                      Brews and Beats
                    <PortfolioModal
                      title={projects[4].title}
                      description={projects[4].description}
                      tagline={projects[4].tagline}
                      imageOne={friendScreenOne}
                      imageTwo={friendScreenTwo}
                      techsUsed={projects[4].techsUsed}
                      
                    />
                    </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={mongoPreview}
                        alt="News Scraper Preview"
                    >
                      News Scraper
                    <PortfolioModal
                      title={projects[5].title}
                      description={projects[5].description}
                      tagline={projects[5].tagline}
                      imageOne={friendScreenOne}
                      imageTwo={friendScreenTwo}
                      techsUsed={projects[5].techsUsed}
                      
                    />
                    </PortfolioImage>
                </Col>
            </Row>
        </PortfolioContainer>
      )
  }

}

export default Portfolio; 

