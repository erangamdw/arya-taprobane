import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TourDetailsLeft from "./TourDetailsLeft";
import TourDetailsSidebar from "./TourDetailsSidebar";
import TourDetailsLeft2 from "./TourDetailsLeft2";

const TourDetailsTwo2 = () => {
  return (
    <section className="tour-details-two">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <TourDetailsLeft2 />
          </Col>
          <Col xl={4} lg={5}>
            <TourDetailsSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetailsTwo2;
