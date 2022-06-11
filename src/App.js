// 1. 왼쪽: 연락처 등록 폼, 오른쪽: 연락처 리스트, search 창
// 2. 리스트에 유저 이름과 전화번호 추가
// 3. 리스트에 아이템이 몇 개 있는지 표시
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다.

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
  return (
    <>
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
