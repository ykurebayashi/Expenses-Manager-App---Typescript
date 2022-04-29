import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-radius: 0 0 10px 10px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #CCC;
  text-align: center;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
  padding: 10px 0px;
  text-align: left;
  font-size: 1.2em;
  text-align: center;
  width: ${props => props.width ? `${props.width}px`: 'auto'};
`;