import React, { Component } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBMask, MDBView } from "mdbreact";
import blockScreenOne from "../../assets/page-images/blockparty-shot-one.png";
import blockScreenTwo from "../../assets/page-images/blockparty-shot-two.png";



function ModalImages(props) {
    return (
            <div>
                <MDBCarousel
                    activeItem={1}
                    length={2}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                        <img
                            className="d-block w-100"
                            src={props.imageOne}
                            alt="First slide"
                        />
                    </MDBView>
                </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
                <MDBView>
                <img
                    className="d-block w-100"
                    src={props.imageTwo}
                    alt="Second slide"
                />
                </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    )
}

export default ModalImages;