import { theme } from "../styled.components/color.theme";
import { MainFlexContainer } from "../styled.components/styled.containers";
import { Button } from "../styled.components/styled.buttons";
import { Modal, ModalContainer } from "../styled.components/styled.modal";

const ModalComponent = ({ modalState, handleOnDelete, setModalState }) => {
  return (
    <Modal isOpen={modalState.modalIsOpen}>
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
