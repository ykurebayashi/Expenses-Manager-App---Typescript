import './App.css';
import { Body, Container, Header, HeaderText } from './App.styles';
import { Item } from './types/Item';
import { items } from './data/items'; 
import { useEffect, useState } from 'react';
import { getCurrentMonth } from './helpers/dateFilter';
import { filterByMonth } from './helpers/dateFilter';
import { TableArea } from './components/tablearea/TableArea';
import { Forms } from './components/Forms/Forms';

const App = () => {
  const [list, setList] = useState<Item[]>(items); // all expenses

  const addElement = (element: Item): void => {
    setList([...list, element]);
  }

  return(
    <Container>
      <Header>
        <HeaderText>
          Texto do Header
        </HeaderText>
      </Header>

      <Body>
        <Forms addElement={ addElement } />
        <TableArea list={ list } />
      </Body>
    </Container>
  );
}

export default App;