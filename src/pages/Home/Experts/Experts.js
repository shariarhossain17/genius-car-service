import React from "react";
import { Container, Row } from "react-bootstrap";
import img1 from "../../../images/experts/expert-1.jpg";
import img2 from "../../../images/experts/expert-2.jpg";
import img3 from "../../../images/experts/expert-3.jpg";
import img4 from "../../../images/experts/expert-4.jpg";
import img5 from "../../../images/experts/expert-5.jpg";
import img6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "alaxjender", img: img1 },
  { id: 2, name: "arnold", img: img2 },
  { id: 3, name: "simmons", img: img3 },
  { id: 4, name: "john", img: img4 },
  { id: 5, name: "micheal", img: img5 },
  { id: 6, name: "almoda", img: img6 },
];

const Experts = () => {
  return (
    <Container className="mx-auto">
        <h2 className="text-center">Our Experts</h2>
      <Row >
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </Row>
    </Container>
  );
};

export default Experts;