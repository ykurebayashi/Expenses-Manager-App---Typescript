import styled from "styled-components";

export const FormsDiv = styled.div`
  display: flex;
  align-items: center;
  width:100%;
  height: 10vh;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #CCC;

  button {
    width:100%;
  }


`;

export const FieldDiv = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;
  width:100%;

  label {
    padding-right:5px;
  }

  select {
    width:100%;
    margin-right: 5px;
  }
  input {
    width:100%;
    margin-right: 5px;
  }
  .react-datepicker__input-container {
    width:95%;
  }
`;

export const FormsInput = styled.input``;

export const DropDown = styled.select``;