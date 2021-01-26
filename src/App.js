import { Button } from '@alifd/next';
import './App.css';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>hello,react</div>
        <Button type="normal">Normal</Button>
        <Button type="primary">Prirmary</Button>
      </header>
    </div>
  );
}

//暴露App组件
export default App;
