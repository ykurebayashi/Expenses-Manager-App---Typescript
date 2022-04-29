import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableBadge = styled.div<{ color?: string }>`
  border-radius: 5px;
  margin:auto;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 5vh;
  background: ${props => props.color};
`

export const TableColumn = styled.td<{ color?: string }>`
  padding: 10px 0px;
  color: ${props => props.color ? `${props.color}`: 'black'};
`