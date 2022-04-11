import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup, Button, Form } from "react-bootstrap";
import dp from "./dp.svg";

//Change UserName function

function edit() {
  var uname = document.getElementById("cusername").value;
  document.getElementById("edit").innerHTML = uname;
  alert("username changed");
}

// Here the default account money is set to 400 and array is initialized

function App() {
  var accountbalance = 400;
  const list = document.getElementById("list");

  var arr = [];

  // Withdraw coins function

  function withdraw() {
    var mt = document.getElementById("manualtransfer").value;

    accountbalance = accountbalance - mt;
    var aud = accountbalance * 49;
    if (accountbalance < 0) {
      accountbalance = 0;
      arr.push(0);
      alert("insufficient Ccoins");
    } else {
      document.getElementById("acc").innerHTML = accountbalance + " " + "₡";
      document.getElementById("acc2").innerHTML = accountbalance + " " + "₡";
      document.getElementById("rtrans").innerHTML =
        mt + " " + "₡ coins Withdrawn";
      document.getElementById("aud").innerHTML = aud + " " + "Aud";
      arr.push(mt, "₡ coins Withdrawn");
      document.getElementById("list").innerHTML = arr
        .map((i) => `<li>${i}</li>`)
        .join("");
    }
  }

  //Deposit coin function

  function deposit() {
    var at = document.getElementById("addmanual").value;
    accountbalance = parseInt(accountbalance) + parseInt(at);
    var aud = accountbalance * 49;
    if (deposit === null) {
      console.log("noinput");
    } else if (accountbalance < 0) {
      accountbalance = 0;
      arr.push(0);
      alert("Insufficient Ccoins");
    } else {
      document.getElementById("acc").innerHTML = accountbalance + " " + "₡";
      document.getElementById("acc2").innerHTML = accountbalance + " " + "₡";
      document.getElementById("rtrans").innerHTML =
        at + " " + "₡ coins Deposited";
      document.getElementById("aud").innerHTML = aud + " " + "Aud";
      arr.push(at, "₡ coins Deposited");
      document.getElementById("list").innerHTML = arr
        .map((arr) => `<li>${arr}</li>`)
        .join("");
    }
  }

  // Trade all coins functions

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
  // Clear history function

  function clearhistory() {
    document.getElementById("list").innerHTML = "";
    arr = [];
  }

  // About this page function

  function about() {
    alert(
      "Hello, Its me Cymon, I have done a basic web frontend implementation of cryptocurrency named Ccoin. "
    );
  }
  //Time and Date
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  return (
    <div style={{ margin: "5%", fontFamily: "IBM Plex Sans" }}>
      <div>
        <CardGroup>
          <Card className="profilebackgroundone">
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
              <div id="edit">User000</div>
              <div className="profilebackgroundtwo" id="dnt">
                Logged in at : {time} {date}
              </div>
            </Card.Body>
          </Card>
          <Card
            className="profilebackground"
            style={{ textAlign: "center", verticalAlign: "baseline" }}
          >
            <Card.Body>
              <Card.Title>
                <div className="header" style={{ marginTop: "5%" }}>
                  Account Balance
                </div>
              </Card.Title>
              <Card.Text>
                <div id="acc" className="money">
                  400 ₡
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
          <Card style={{ textAlign: "center", background: "#fafafa" }}>
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

              <Button className="btnstyle" onClick={withdraw}>
                {" "}
                Withdraw
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ textAlign: "center", background: "#fafafa" }}>
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
                <Button className="btnstyle" onClick={deposit}>
                  {" "}
                  Deposit
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ textAlign: "center", background: "#fafafa" }}>
            <Card.Body>
              <Card.Title>
                <div className="header">Transaction History</div>
                <ul>{list}</ul>
              </Card.Title>
              <div className="list">
                <ul id="list"></ul>
              </div>
              <Button className="btnstyle" onClick={clearhistory}>
                {" "}
                Clear History
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div>
        {" "}
        <CardGroup style={{ textAlign: "center" }}>
          <Card style={{ background: "#fafafa" }}>
            <Card.Body>
              <Card.Title>
                <div className="header">Trade</div>
              </Card.Title>
              <div>
                <Card.Text>
                  Current Holding In Ccoin
                  <div id="acc2" className="money">
                    400 ₡
                  </div>
                </Card.Text>
              </div>
              <Card.Text>
                Value in AUD{" "}
                <div id="aud" style={{ color: "darkgreen" }}>
                  19600 AUD
                </div>
              </Card.Text>
              <Button className="btnstyle" onClick={trade}>
                Trade All Ccoins
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ background: "#fafafa" }}>
            <Card.Body>
              <Card.Title>
                <div className="header">Account Settings</div>
              </Card.Title>
              <Card.Text>
                Change AccountName <input type="text" id="cusername"></input>
              </Card.Text>
              <Card.Text>
                <Button size="sm" className="btnstyle" onClick={edit}>
                  Submit
                </Button>{" "}
              </Card.Text>
              <Button onClick={about} size="sm" className="btnstyle">
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
