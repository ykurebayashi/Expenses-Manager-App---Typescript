import './App.css';
import { Body, Container, Header, HeaderText } from './App.styles';

const App = () => {
  return(
    <Container>
      <Header>
        <HeaderText>
          Texto do Header
        </HeaderText>
      </Header>

      <Body>
        texto do body
      </Body>
    </Container>
  );
}

export default App;