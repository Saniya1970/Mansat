import React, { useState } from "react";
import Datas from "../data/hero/hero-image.json";
import { Container, Row, Col } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import { Styles } from "./styles/heroImage.js";

const HeroImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Styles>
      {/* Hero Image */}
      <section
        className="hero-image-area"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.heroBackground})`,
        }}
      >
        <div
          className="round-shape"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.heroRoundShape})`,
          }}
        ></div>
        <div className="hero-table">
          <div className="hero-tablecell">
            <Container>
              <Row>
                <Col md="12">
                  <div className="hero-box text-center">
                    <h1>{Datas.heroTitle}</h1>
                    <p>{Datas.heroSubtitle}</p>
                    <div className="video-player">
                      <ModalVideo
                        channel="youtube"
                        isOpen={isOpen}
                        videoId="uXFUl0KcIkA"
                        onClose={() => setIsOpen(false)}
                      />
                      <button onClick={openModal} className="play-button">
                        <i className="las la-play"></i>
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default HeroImage;
