import styled from "styled-components";
import { Basic, Gray } from "../../style/color";

export const MainInputContainer = styled.label`
  color: ${Gray[50]};
`;

export const InputBox = styled.div`
  background-color: ${Basic.white};
  border: 1px ${Gray[10]} solid;
  border-radius: 8px;
  padding: 12px;

  display: flex;

  &>button{
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  &>input{
    background: none;
    border: none;

    font-size: 20px;
    width: -webkit-fill-available;
  }
`