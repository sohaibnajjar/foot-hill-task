import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteWishListItem,
  WishListItemIsComplete,
} from "../redux/slices/wish.list.slice";
import { removeDestinationFromWishList } from "../redux/slices/destination.slice";
import { useEffect } from "react";
import {
  DangerButton,
  EmptyPage,
  FlexCenter,
  SuccessButton,
} from "../styled.components/styled.components";
import { Colors } from "../styled.components/colors";

const TableContainert = styled.div`
  overflow-x: auto;
  display: block;
  width: 100%;
`;
const Table = styled.table`
  min-width: 600px;
  width: 100%;
  tr:nth-child(even) {
    background-color: ${Colors.cardBackGround};
  }
  td,
  th {
    text-align: left;
    height: 50px;
    padding-left: 1%;
    border-bottom: 2px solid ${Colors.borderColor};
    max-width: 300px;
  }
  th {
    text-align: center;
  }
`;

const tableHeadData = [
  "Destination Name",
  "Destination Details",
  "Checked",
  "Remove",
];

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList.wishListItems);
  const destinationList = useSelector(
    (state) => state.destinations.destinationList
  );
  const handleOnDelete = (tableRow) => {
    dispatch(deleteWishListItem(tableRow.id));
    dispatch(removeDestinationFromWishList(tableRow));
  };

  const handleMakeItComplete = (id) => {
    dispatch(WishListItemIsComplete(id));
  };

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
    localStorage.setItem("destinationList", JSON.stringify(destinationList));
  }, [wishList, destinationList]);

  return (
    <FlexCenter>
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
                  <td>
                    {tableBodyRow.isComplete ? (
                      <SuccessButton
                        onClick={() => handleMakeItComplete(tableBodyRow.id)}
                      >
                        Complete
                      </SuccessButton>
                    ) : (
                      <DangerButton
                        onClick={() => handleMakeItComplete(tableBodyRow.id)}
                      >
                        Not Complete
                      </DangerButton>
                    )}
                  </td>
                  <td>
                    <DangerButton onClick={() => handleOnDelete(tableBodyRow)}>
                      remove
                    </DangerButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainert>
      ) : (
        <EmptyPage>there is no items in this list</EmptyPage>
      )}
    </FlexCenter>
  );
};

export default WishlistPage;
