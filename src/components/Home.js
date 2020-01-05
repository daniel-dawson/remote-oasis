import React from "react";
import styles from "./styles/Home.module.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import CtaButton from "./CtaButton";
import RemoteWorker from "../remote_worker.png";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "holderjs";

export default function Home() {
  return (
    <Container
      className={`d-flex flex-column justify-content-around ${styles.content}`}
    >
      <Row className="align-items-center">
        <Col className="d-flex align-items-center h-50">
          <Jumbotron>
            <h1>Need More Than Just A Workplace?</h1>
            <p>
              We help you discover spaces with your perfect blend of work, home,
              and community.
            </p>
            <p>
              <CtaButton
                variant="primary"
                text="Find Your Oasis"
                route="/explore"
              />
            </p>
          </Jumbotron>
        </Col>
        <Col className="d-flex align-items-center h-50">
          <Image src={RemoteWorker} fluid rounded />
        </Col>
      </Row>
      <Row
        className={`align-items-center justify-content-center ${styles.width}`}
      >
        <Col className="d-flex justify-content-center ">
          <Carousel indicators={false} controls={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/600x250?text=Why is this one so small?&bg=FFF&size=15"
                alt="First quote"
              />
              <Carousel.Caption>
                <p className="text-secondary">Daniel Dawson</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/600x250?text=I wish I had thought of it!&bg=FFF&size=15"
                alt="Second quote"
              />

              <Carousel.Caption>
                <p className="text-secondary">Jesus</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='holder.js/600x250?text="Remote Oasis lets me find my zen outside the home."&bg=FFF&size=15'
                alt="Third quote"
              />

              <Carousel.Caption>
                <p className="text-secondary">Maurianna Zingarelli</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
