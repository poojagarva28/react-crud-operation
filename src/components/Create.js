import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Create = () => {
  let navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [msg, setMsg] = useState("");

  const dataHandler = () => {
    axios
      .post(`https://62518d9adfa31c1fbd6f873f.mockapi.io/fakedata`, {
        firstname,
        lastname,
        checkbox,
      })
      .then(() => {
        navigate("/read");
      });
    setMsg("data added in mock api");
    // console.log(firstname, lastname, checkbox);
  };

  return (
    <div>
      <h4>Create ( add / insert into API )</h4>
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
        />
        <br />
        <br />
        <label>Last Name </label>
        <input
          type="text"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={() => {
            setCheckbox(!checkbox);
          }}
        />
        I agree with terms and conditions
        <br />
        <br />
        <input type="submit" onClick={dataHandler} value="add" />
        <br />
        {msg}
      </form>
    </div>
  );
};

export default Create;
