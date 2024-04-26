import popularToursTwo from "@/data/popularToursTwo";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";

const { tagline, title, popularTours } = popularToursTwo;

const PopularToursTwo = ({ toursPage = false }) => {
  return (
    <section className="popular-tours-two">
      <Container>
        {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        <Row>
          {/* {popularTours.map((tour) => ( */}
            <Col
              key={1}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              
              <SingleTour tour={popularTours[0]} userSelect url={'tour-details1'}/>
            </Col>
            <Col
              key={2}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              
              <SingleTour tour={popularTours[1]} userSelect url={'tour-details2'}/>
            </Col>
          {/* ))} */}
        </Row>
      </Container>
    </section>
  );
};

export default PopularToursTwo;
