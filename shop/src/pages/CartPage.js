import React from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function CartPage() {
  let state = useSelector((state) => {
    return state.stock;
  });
  return (
    <div className="cartPage">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>상품</th>
            <th>수량</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.map((a, i) => {
            return (
              <tr key={a + i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
                <td>
                  <Button>삭제</Button>
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
