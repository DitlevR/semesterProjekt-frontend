import React, { Component, useState } from "react";
import { Button } from "react-bootstrap"; //https://idon.dk/semesterprojekt/
const url = "https://idon.dk/semesterprojekt/"; //http://localhost:8080/semesterprojekt/

const Register = () => {
  const initialState = { userName: "", userPass: "" };

  const [input, setInput] = useState(initialState);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(input);
    registerUser(input);
    setInput(initialState);
  };

  const handleInput = event => {
    //ved event
    const target = event.target; //henter target fra klik event
    const id = target.id; //henter ids fra form
    const value = target.value; //henter values fra form
    setInput({ ...input, [id]: value }); //[id] : value sætter values ind i de korresponderende ids i person
  };

  function makeOptions(method, body) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json"
      }
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }

  function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }

  function registerUser(thisGuy) {
    fetch(url + "api/user/register", makeOptions("POST", thisGuy)).then(
      handleHttpErrors
    );
  }

  return (
    <div style={{ marginTop: 25 }}>
      <form onSubmit={handleSubmit} onChange={handleInput}>
        <input
          id="userName"
          type="text"
          placeholder="Name"
          value={input.userName}
        />
        <br />
        <input
          id="userPass"
          type="text"
          placeholder="Password"
          value={input.userPass}
        />
        <br />
        <button>Submit</button>
      </form>
      <p>{JSON.stringify(input)}</p>
    </div>
  );
};

export default Register;
