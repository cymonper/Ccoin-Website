import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup, Button, Carousel, Accordion } from "react-bootstrap";
import dp from "./dp.svg";
import CardHeader from "react-bootstrap/esm/CardHeader";

function App() {
  var accountbalance = 400;
  const list = document.getElementById("list");
  var arr = [];

  function manualtransfer() {
    var mt = document.getElementById("manualtransfer").value;
    accountbalance = accountbalance - mt;
    var aud = accountbalance * 49;
    if (accountbalance < 0) {
      accountbalance = 0;
      arr.push(0);
      alert("insufficient Ccoins");
    } else {
      document.getElementById("acc").innerHTML = accountbalance + " " + "C";
      document.getElementById("acc2").innerHTML = accountbalance + " " + "C";
      document.getElementById("rtrans").innerHTML =
        mt + " " + "Ccoins Withdrawn";
      document.getElementById("aud").innerHTML = aud + " " + "Aud";
      arr.push(mt, "Ccoins Withdrawn");
      document.getElementById("list").innerHTML = arr
        .map((i) => `<li>${i}</li>`)
        .join("");
    }
  }

  function addmanual() {
    var at = document.getElementById("addmanual").value;
    accountbalance = parseInt(accountbalance) + parseInt(at);
    var aud = accountbalance * 49;
    if (accountbalance < 0) {
      accountbalance = 0;
      arr.push(0);

      alert("Insufficient Ccoins");
    } else {
      document.getElementById("acc").innerHTML = accountbalance + " " + "C";
      document.getElementById("acc2").innerHTML = accountbalance + " " + "C";
      document.getElementById("rtrans").innerHTML =
        at + " " + "Ccoins Deposited";
      document.getElementById("aud").innerHTML = aud + " " + "Aud";
      arr.push(at, "Ccoins Deposited");
      document.getElementById("list").innerHTML = arr
        .map((arr) => `<li>${arr}</li>`)
        .join("");
      console.log(arr);
    }
  }

  function edit() {
    var uname = document.getElementById("cusername").value;
    document.getElementById("edit").innerHTML = uname;
  }

  function about() {
    alert(
      "Hello, Its me Cymon, I have done a basic web frontend implementation of cryptocurrency named Ccoin. "
    );
  }

  function trade() {
    alert("All Ccoins Traded");
    accountbalance = 0;
    document.getElementById("acc").innerHTML = accountbalance + " " + "C";
    document.getElementById("acc2").innerHTML = accountbalance + " " + "C";
    document.getElementById("rtrans").innerHTML = "All Ccoins Traded";
    document.getElementById("aud").innerHTML = "0" + " " + "Aud";
    arr.push(0, "All Ccoins Traded");
    document.getElementById("list").innerHTML = arr
      .map((i) => `<li>${i}</li>`)
      .join("");
  }

  return (
    <div style={{ margin: "5%" }}>
      <div>
        <CardGroup>
          <Card className="profilebackground">
            {" "}
            <Card.Img
              variant="top"
              src={dp}
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20px",
                width: "20%",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="header" id="edit">
                  User000
                </div>
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="profilebackground "
            style={{ textAlign: "center", verticalAlign: "baseline" }}
          >
            <Card.Body>
              <Card.Title>
                <div className="header">Account Balance</div>
              </Card.Title>
              <Card.Text>
                <div id="acc" className="money">
                  400 C
                </div>
                <div>
                  Last Transaction :
                  <div id="rtrans" className="transaction">
                    No Recent Transaction
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div>
        <CardGroup>
          <Card style={{ textAlign: "center" }}>
            <Card.Body>
              <Card.Title>
                <div className="header">Withdraw Ccoins</div>
              </Card.Title>
              <input
                type="number"
                id="manualtransfer"
                placeholder="Enter Amount"
              ></input>
              <br />
              <br />

              <Button variant="danger" onClick={manualtransfer}>
                {" "}
                Withdraw
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ textAlign: "center" }}>
            <Card.Body>
              <div>
                <Card.Title>
                  <div className="header">Deposit Ccoins</div>{" "}
                </Card.Title>
                <input
                  type="number"
                  id="addmanual"
                  placeholder="Enter Amount"
                ></input>
                <br />
                <br />
                <Button variant="success" onClick={addmanual}>
                  {" "}
                  Deposit
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ textAlign: "center" }}>
            <Card.Body>
              <Card.Title>
                <div className="header">Transaction History</div>
                <ul>{list}</ul>
              </Card.Title>
              <div className="list">
                <ul id="list"></ul>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div>
        {" "}
        <CardGroup style={{ textAlign: "center" }}>
          <Card>
            <Card.Body>
              <Card.Title>
                <div className="header">Trade</div>
              </Card.Title>
              <div>
                <Card.Text>
                  Current Holding In Ccoin
                  <div id="acc2" className="money">
                    400 C
                  </div>
                </Card.Text>
              </div>
              <Card.Text>
                Value in AUD{" "}
                <div id="aud" style={{ color: "darkgreen" }}>
                  19600 AUD
                </div>
              </Card.Text>
              <Button variant="success" onClick={trade}>
                Trade All Ccoins
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <div className="header">Account Settings</div>
              </Card.Title>
              <Card.Text>
                Change AccountName <input type="text" id="cusername"></input>
              </Card.Text>
              <Card.Text>
                <Button size="sm" variant="primary" onClick={edit}>
                  Submit
                </Button>{" "}
              </Card.Text>
              <Button variant="warning" onClick={about} size="sm">
                About This Page
              </Button>{" "}
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default App;
