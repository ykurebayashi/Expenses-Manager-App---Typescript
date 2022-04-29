import './App.css';
import { Body, Container, Header, HeaderText } from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items'; 
import { useEffect, useState } from 'react';
import { getCurrentMonth } from './helpers/dateFilter';

const App = () => {
  const [list, setList] = useState<Item[]>(items); // all expenses
  const [filteredList, setFilteredList] = useState<Item[]>([]); // this month expenses. We filter all expenses by month
  const [actualMonth, setCurrentMonth] = useState<string>(getCurrentMonth());

  useEffect(() => {

  }, [list, actualMonth])


  return(
    <Container>
      <Header>
        <HeaderText>
          Texto do Header
        </HeaderText>
      </Header>

      <Body>
        { /* */ }
      </Body>
    </Container>
  );
}

export default App;