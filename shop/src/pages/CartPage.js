import React from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCount, deleteStock } from "../store/UserSlice";

function CartPage() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  // console.log(state.stock);
  return (
    <div className="cartPage">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>상품</th>
            <th>수량</th>
            <th>추가하기</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.stock.map((a, i) => {
            return (
              <tr key={state.stock[i] + i}>
                <td>{state.stock[i].id}</td>
                <td>{state.stock[i].name}</td>
                <td>{state.stock[i].count}</td>
                <td>
                  <Button
                    onClick={() => {
                      dispatch(addCount(state.stock[i].id));
                      // dispatch(addCount(i));
                    }}
                  >
                    ➕
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      dispatch(deleteStock(state.stock[i].id));
                      // dispatch(deleteStock(i));
                      // console.log(state.stock);
                    }}
                  >
                    삭제
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default CartPage;
