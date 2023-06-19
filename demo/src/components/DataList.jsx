import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../store/slices/dataSlice";
import { useNavigate } from "react-router-dom";
const DataList = function () {
  const displayData = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const getData = async function () {
    try {
      const response = await fetch("https://reqres.in/api/users");
      if (response.ok) {
        const data = await response.json();

        dispatch(updateData(data.data));
      }
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const navigate = useNavigate();
  const buttonClickHandler = function () {
    navigate(`/${this}`);
  };
  return (
    <table>
      {displayData.map((e) => {
        return (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.email}</td>
            <td>{e.first_name}</td>
            <button onClick={buttonClickHandler.bind(e.id)}>Details</button>
          </tr>
        );
      })}
    </table>
  );
};
export default DataList;
