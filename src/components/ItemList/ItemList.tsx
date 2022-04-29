import { TableLine, TableColumn, TableBadge } from "./Style";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from"../../data/categories";

type Props = {
  date: Date,
  category: string,
  title: string,
  value: number,
}

export const ItemList = ({ date, category, title, value }:  Props) => {
  return(
    <TableLine>
      <TableColumn>{formatDate(date)}</TableColumn>
      <TableColumn color={'white'}>
        <TableBadge color={categories[category].color}>
          {categories[category].title}
        </TableBadge>
      </TableColumn>
      <TableColumn>{title}</TableColumn>
      <TableColumn color={categories[category].isExpense ? 'red':'green'}>{value}</TableColumn>
    </TableLine>
  );
}