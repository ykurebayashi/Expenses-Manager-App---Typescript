import { DropDown, FormsDiv, FormsInput, FieldDiv } from "./Styles"
import { useState } from "react";
import { Item } from "../../types/Item";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { categories } from "../../data/categories";

type Props = {
  addElement(element: Item): void,
}

export const Forms = ({ addElement }: Props ) => {
  const [tempElement, setTempElement] = useState<Item>({date: new Date(), category: "food", title: "", value: 0});
  const [date, setDate] = useState<Date | null>(new Date());
  
  const newArrayDataOfOjbect = Object.values(categories)
  const arrayOfKeys = Object.keys(categories);
  console.log(arrayOfKeys)
  console.log(newArrayDataOfOjbect)

  const onChange = (e: any): void => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
   
    if(date) setTempElement({ ...tempElement, [name]: value, date: date });
    else setTempElement({ ...tempElement, [name]: value });
  } 

  const onChangeDatePicker = (date: Date | null): void => {
    setDate(date);
    if(date) setTempElement({ ...tempElement, date: date });
  }

  return (
    <FormsDiv>
      <FieldDiv>
        <label>Data:</label>
        <DatePicker
          selected={date}
          onChange={(date) => onChangeDatePicker(date)} // update no date
        />
      </FieldDiv>

      <FieldDiv>
        <label>Categoria:</label>
        <DropDown name='category' onChange={ onChange } value={ tempElement.category } >
          {newArrayDataOfOjbect.map((element, index) => {
            return <option key={index} value={arrayOfKeys[index]}>{element.title}</option>
          })}

        </DropDown> 
      </FieldDiv>

      <FieldDiv>
        <label>Título:</label>
        <FormsInput name="title" type="text" onChange={ onChange } />
      </FieldDiv>

      <FieldDiv>
        <label>Valor:</label>
        <FormsInput name="value" type="number" onChange={ onChange }/>
      </FieldDiv>

      <button
        onClick={() => addElement(tempElement) }
      >Adicionar</button>
    </FormsDiv>
  )
}