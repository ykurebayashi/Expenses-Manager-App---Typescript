import { Item } from "../../types/Item";
import { ItemList } from "../ItemList/ItemList";
import { TableHeadColumn, Table } from "./Style";

type Props = {
  list: Item[],
}

export const TableArea = (props:Props) => { // poderia ser ({ list }: Props)
  return(
    <Table>
      <thead>
        <tr>
          <TableHeadColumn width={ 100 }>Data</TableHeadColumn>
          <TableHeadColumn width={ 100 }>Categoria</TableHeadColumn>
          <TableHeadColumn width={ 100 }>Título</TableHeadColumn>
          <TableHeadColumn width={ 100 }>Valor</TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        { props.list.map((item, index) => {
          return(
            <ItemList {...item } key={index}/>
          )
        })}
      </tbody>

    </Table>
  );
}