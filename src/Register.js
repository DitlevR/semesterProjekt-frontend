import React, { Component } from "react";
import { Button } from "react-bootstrap";
const url = "https://idon.dk/semesterprojekt/";

const Register = () => {
  const initialState = { name: "", password: "" };

  const [input, setInput] = useState(initialState);

  const handleSubmit = evt => {
    evt.preventDefault();

    fetch(url + "api/user/register")
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          data: responseData
        });
      });

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

  function registerUser(input) {
    function makeOptions(method, body) {
      var opts = {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      };
      if (body) {
        opts.body = JSON.stringify(body);
      }
      return opts;
    }

    return fetch(URL, makeOptions("POST", input)).then(handleHttpErrors);
  }

  return (
    <div style={{ marginTop: 25 }}>
      <form onSubmit={handleSubmit} onChange={handleInput}>
        <input id="name" type="text" placeholder="Name" value={input.name} />
        <br />
        <input
          id="password"
          type="text"
          placeholder="Password"
          value={input.password}
        />
        <br />
        <button>Submit</button>
      </form>
      <p>{JSON.stringify(input)}</p>
    </div>
  );
};

export default Register;
