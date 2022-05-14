import { useDispatch, useSelector } from "react-redux";
import {
  deleteWishListItem,
  WishListItemIsComplete,
} from "../store/slices/wish.list.slice";
import { FaTrashAlt } from "react-icons/fa";
import { removeDestinationFromWishList } from "../store/slices/destination.slice";
import { useEffect, useState } from "react";
import { EmptyPage, Toast } from "../styled.components/styled.components";
import { InputTd, Table } from "../styled.components/styled.pages.components";
import {
  MainFlexContainer,
  TableContainert,
} from "../styled.components/styled.containers";
import { Button } from "../styled.components/styled.buttons";
import { CheckBox } from "../styled.components/styled.input";
import ModalComponent from "../components/modal.component";
import useToast from "../custom.hooks/toast.hook";
import { theme } from "../styled.components/color.theme";

const tableHeadData = [
  "Destination Name",
  "Destination Details",
  "Checked",
  "Remove",
];
const modalInitData = { modalIsOpen: false, row: {} };

const WishlistPage = () => {
  const dispatch = useDispatch();
  const [toast, popToast] = useToast();
  const [modalState, setModalState] = useState(modalInitData);
  const wishList = useSelector((state) => state.wishList.wishListItems);
  const destinationList = useSelector(
    (state) => state.destinations.destinationList
  );
  const handleOnDelete = (tableRow) => {
    dispatch(deleteWishListItem(tableRow.id));
    dispatch(removeDestinationFromWishList(tableRow));
    popToast({
      description: "Wish List item Deleted successfully  ",
      state: "success",
    });
  };

  const handleMakeItComplete = (id) => {
    dispatch(WishListItemIsComplete(id));
  };

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
    localStorage.setItem("destinationList", JSON.stringify(destinationList));
  }, [wishList, destinationList]);

  return (
    <MainFlexContainer>
      {toast.description.length > 0 && (
        <Toast status={toast.state}>{toast.description}</Toast>
      )}
      <ModalComponent
        modalState={modalState}
        handleOnDelete={handleOnDelete}
        setModalState={setModalState}
      />
      {wishList.length > 0 ? (
        <TableContainert>
          <Table>
            <thead>
              <tr>
                {tableHeadData.map((tableHead) => (
                  <th key={tableHead}>{tableHead}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {wishList.map((tableBodyRow) => (
                <tr key={tableBodyRow.id}>
                  <td>{tableBodyRow.name}</td>
                  <td>{tableBodyRow.description}</td>
                  <InputTd>
                    <CheckBox
                      checked={tableBodyRow.isComplete}
                      onChange={() => handleMakeItComplete(tableBodyRow.id)}
                    />
                    <span></span>
                  </InputTd>
                  <InputTd>
                    <Button
                      bgColor="red"
                      onClick={() =>
                        setModalState({ modalIsOpen: true, row: tableBodyRow })
                      }
                    >
                      <FaTrashAlt color="#fff" />
                    </Button>
                  </InputTd>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainert>
      ) : (
        <EmptyPage>there are no items in this list</EmptyPage>
      )}
    </MainFlexContainer>
  );
};

export default WishlistPage;
