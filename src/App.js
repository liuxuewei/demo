import { Button, Grid } from '@alifd/next';
import './App.css';

const { Row, Col } = Grid;
 
function App() {
  return (
    <div className="app">
      <Row>
        <Col fixedSpan="12">
          <div className='left-menu'>
            <div>hello,react</div>
          </div>
        </Col>
        <Col>
          <div className="main-content">
          <Button type="normal">Normal</Button>
          <Button type="primary">Prirmary</Button>
        </div>
        </Col>
      </Row>
    </div>
  );
}

//暴露App组件
export default App;
