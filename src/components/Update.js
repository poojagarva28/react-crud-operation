import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(localStorage.getItem("ID"));
    setFirstname(localStorage.getItem("First Name"));
    setLastname(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checked"));
  }, []);

  const updateAPIdata = () => {
    axios
      .put(`https://62518d9adfa31c1fbd6f873f.mockapi.io/fakedata/${id}`, {
        firstname,
        lastname,
        checkbox,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div>
      <h4>update</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>First Name </label>
        <input
          type="text"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          value={firstname}
        />
        <br />
        <br />
        <label>Last Name </label>
        <input
          type="text"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          value={lastname}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={() => {
            setCheckbox(!checkbox);
          }}
          checked={checkbox}
        />
        I agree with terms and conditions
        <br />
        <br />
        <input type="submit" onClick={updateAPIdata} value="Update" />
        <br />
      </form>
    </div>
  );
};

export default Update;
