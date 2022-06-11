import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = () => {
  return (
    <>
      <Row>
        <Col lg={1}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'
            alt='프로필 이미지'
            width={50}
          />
        </Col>
        <Col lg={11}>
          <div>이름</div>
          <div>010-1234-1234</div>
        </Col>
      </Row>
    </>
  );
};

export default ContactItem;