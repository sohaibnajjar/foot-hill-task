import styled from "styled-components";
import { Colors } from "./colors";

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EmptyPage = styled(FlexCenter)`
  height: 30vh;
  text-transform: capitalize;
`;
export const Button = styled.button`
  height: 90%;
  width: 95%;
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  font-weight: bold;
`;
export const SuccessButton = styled(Button)`
  background-color: ${Colors.successColor};
  :active {
    background-color: ${Colors.successColorActive};
  }
`;
export const DangerButton = styled(Button)`
  background-color: ${Colors.dangerColor};
  :active {
    background-color: ${Colors.dangerColorActive};
  }
`;

export const ErrorToast = styled.div`
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ff7676;
  padding: 10px 20px;
  text-align: center;
  border-radius: 10px 20px;
  font-weight: bold;
`;
