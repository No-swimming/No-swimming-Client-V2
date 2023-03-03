import styled from "styled-components";
import { Transparent } from "../../../style/color";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const ChildrenContainer = styled.div<{
  width?: string;
  height?: string;
  padding?: string;
  display?: string;
  justifyContent?: string;
  gap?: string;
}>`
  background-color: white;
  width: ${(props) => props.width ?? "466px"};
  height: ${(props) => props.height ?? ""};
  border-radius: 8px;
  z-index: 10000;
  gap: ${(props) => props.gap ?? "52px"};
  padding: ${(props) => props.padding ?? "40px 39px"};
  display: ${(props) => props.display ?? ""};
  justify-content: ${(props) => props.justifyContent ?? ""};
`;

export const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: ${Transparent.Black50};
`;
