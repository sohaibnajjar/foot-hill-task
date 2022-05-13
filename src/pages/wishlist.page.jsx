import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteWishListItem,
  WishListItemIsComplete,
} from "../redux/slices/wish.list.slice";
import { removeDetinationFromWishList } from "../redux/slices/destination.slice";
import { useEffect } from "react";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const TableContainert = styled.div`
  overflow-x: auto;
  display: block;
  width: 100%;
`;
const Table = styled.table`
  min-width: 600px;
  width: 100%;
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  td,
  th {
    text-align: left;
    height: 50px;

    padding-left: 1%;
    border-bottom: 2px solid #ddd;
    max-width: 300px;
  }
  th {
    text-align: center;
  }
`;
const Button = styled.button`
  height: 90%;
  width: 95%;
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  font-weight: bold;
`;
const SuccessButton = styled(Button)`
  background-color: #c6ff85;
  :active {
    background-color: #93cc51;
  }
`;
const DangerButton = styled(Button)`
  background-color: #ffa085;
  :active {
    background-color: #c43b3b;
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
    dispatch(removeDetinationFromWishList(tableRow));
  };

  const handleMakeItComplete = (id) => {
    dispatch(WishListItemIsComplete(id));
  };
  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
    localStorage.setItem("destinationList", JSON.stringify(destinationList));
  }, [wishList, destinationList]);

  return (
    <Flex>
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
                    <SuccessButton>Complete</SuccessButton>
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
    </Flex>
  );
};

export default WishlistPage;
