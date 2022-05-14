import styled from "styled-components";
import { theme } from "../styled.components/color.theme";
import { MainFlexContainer } from "../styled.components/styled.containers";
import { Button } from "../styled.components/styled.buttons";

const Modal = styled.div`
  display: ${(props) => (props.display === true ? "flex" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #4b4b4b99;
  padding-top: 50px;
  justify-content: center;
`;
const ModalContainer = styled(MainFlexContainer)`
  background-color: ${theme.lightGray};
  width: 30%;
  height: 25%;
  border-radius: 20px;
  justify-content: space-around;
  @media (max-width: 1000px) {
    width: 70%;
    height: 20%;
  }
`;

const ModalComponent = ({ modalState, handleOnDelete, setModalState }) => {
  return (
    <Modal display={modalState.modalIsOpen}>
      <ModalContainer direction="column">
        <div>are you sure ?</div>
        <MainFlexContainer gap="20px">
          <Button
            onClick={() => {
              handleOnDelete(modalState.row);
              setModalState({ modalIsOpen: false, row: {} });
            }}
            bgColor={theme.dangerColor}
            width="80px"
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              setModalState({ modalIsOpen: false, row: {} });
            }}
            bgColor={theme.tertiaryColor}
            color="#fff"
            width="80px"
          >
            Cancle
          </Button>
        </MainFlexContainer>
      </ModalContainer>
    </Modal>
  );
};

export default ModalComponent;
