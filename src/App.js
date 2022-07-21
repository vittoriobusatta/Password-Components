import './App.css';
import Input from './components/Input';
import InputUnkle from './components/InputUnkle';
import styled from 'styled-components'


const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Wrap>
      <Input />
      <InputUnkle />
    </Wrap>
    
  );
}

export default App;
