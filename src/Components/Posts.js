import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Button,
  useAccordionToggle,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <FontAwesomeIcon
      icon={faCaretDown}
      size="2x"
      onClick={decoratedOnClick}
    ></FontAwesomeIcon>
  );
}

function Posts(props) {
  const [myarry, setmyarry] = useState([]);
  console.log(props);

  var myq = props.query.map((q) => {
    return (
    
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            {q}
            <CustomToggle eventKey="0"></CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  });
  //setmyarry(myq);
  console.log(props.query.length);

  var myvue = props.result.map((obj) => {
    return (
      <div key={obj.refIndex} id="subq">
        <p>{obj.item}</p>
      </div>
    );
  });
  if (props.query.length === 0 && props.vue==="") {
    return <div></div>;
  } else if (myq.length !== 0 && props.result.length === 0) {
    return (
      <Container fluid id="mycont">
        <Row className="d-flex justify-content-center">
          <Col md={10} id="myrow2">
            {myq}
          </Col>
        </Row>
      </Container>
    );
  } else if (props.result.length !== 0) {
    return (
      <Container fluid id="mycont">
        <Row className="d-flex justify-content-center">
          <Col md={10} id="myrow2">
            {myvue}
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <div>
        <h2>Oops we couldn find anything related to search</h2>
      </div>
    );
  }
}

export default Posts;
