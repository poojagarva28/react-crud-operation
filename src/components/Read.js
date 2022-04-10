import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://62518d9adfa31c1fbd6f873f.mockapi.io/fakedata`)
      .then((response) => {
        setApidata(response.data);
      });
  }, []);

  const setData = (item) => {
    let { id, firstname, lastname, checkbox } = item;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstname);
    localStorage.setItem("Last Name", lastname);
    localStorage.setItem("Checked", checkbox);
    // console.log(item);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://62518d9adfa31c1fbd6f873f.mockapi.io/fakedata/${id}`)
      .then(() => {
        LoadAPIData();
      });
  };

  const LoadAPIData = () => {
    axios
      .get(`https://62518d9adfa31c1fbd6f873f.mockapi.io/fakedata`)
      .then((response) => {
        setApidata(response.data);
      });
  };

  return (
    <div>
      <h4>Read from API</h4>
      <table border="1" cellPadding="10">
        <thead>
          <tr align="center">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checked</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody align="center">
          {apidata.map((item, i) => (
            <tr key={i}>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.checkbox ? "true" : "false"}</td>
              <td>
                <Link to="/update">
                  <button onClick={() => setData(item)}>Update</button>
                </Link>
              </td>
              <Link to="/read">
                <td>
                  <button onClick={() => onDelete(item.id)}>Delete</button>
                </td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
