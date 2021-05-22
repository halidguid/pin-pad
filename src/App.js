import "./index.css";
import React, { useState } from "react";

function App() {
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");
  const [tries, setTries] = useState(1);
 


  const Enter = () => {
    if(message === 'LOCKED'){
      return
    }
    setTries(tries + 1);
    if (pin !== "1234") {
      if (tries === 3) {
        setMessage("LOCKED");
      } else {
        setMessage("ERROR");
        setPin("");
      }
    } else {
      setTries(1);
      setMessage("OK");
      setPin("");
    }
  };
  const updatePin = (value) => {
    if(message === 'LOCKED'){
      return;
    }
    if(pin.length === 4){
      return;
    }
    setPin((pin) => pin + value);
    if (message === "ERROR" || message === "OK") {
      setMessage("");
    }
    setMessage((message) => message + "*");
  };
  const del = () => {
    if(message === 'LOCKED'){
      return
    }
    setPin("");
    setMessage("");
  };

  return (
    <div className="PINform">
      <div>
        <div className="PINbox">{message} </div>
      </div>
      <div className="row">
        <div>
          <button
            className="PINbutton"
            value="1"
            onClick={(e) => updatePin(e.target.value)}
          >
            1
          </button>
          <button
            className="PINbutton"
            value="2"
            onClick={(e) => updatePin(e.target.value)}
          >
            2
          </button>
          <button
            className="PINbutton"
            value="3"
            onClick={(e) => updatePin(e.target.value)}
          >
            3
          </button>
        </div>
        <div>
          <button
            className="PINbutton"
            value="4"
            onClick={(e) => updatePin(e.target.value)}
          >
            4
          </button>
          <button
            className="PINbutton"
            value="5"
            onClick={(e) => updatePin(e.target.value)}
          >
            5
          </button>
          <button
            className="PINbutton"
            value="6"
            onClick={(e) => updatePin(e.target.value)}
          >
            6
          </button>
        </div>
        <div>
          <button
            className="PINbutton"
            value="7"
            onClick={(e) => updatePin(e.target.value)}
          >
            7
          </button>
          <button
            className="PINbutton"
            value="8"
            onClick={(e) => updatePin(e.target.value)}
          >
            8
          </button>
          <button
            className="PINbutton"
            value="9"
            onClick={(e) => updatePin(e.target.value)}
          >
            9
          </button>
        </div>
        <div>
          <button className="PINbuttonclear" onClick={() => del()}>
            Clear
          </button>
          <button
            className="PINbutton"
            value="0"
            onClick={(e) => updatePin(e.target.value)}
          >
            0
          </button>
          <button className="PINbuttonenter" onClick={() => Enter(pin)}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
