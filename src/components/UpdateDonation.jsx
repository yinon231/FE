import "../style/style.css";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { updateDonation } from "../services/service";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
const UpdateDonation = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [searchParams] = useSearchParams();
  const updateDon = (event) => {
    event.preventDefault();
    const donationBody = {};
    if (name != "") {
      if (email != "") {
        donationBody.donor = {
          name: name,
          email: email,
        };
      } else {
        donationBody.donor = {
          name: name,
        };
      }
    }
    if (email != "") {
      if (name != "") {
        donationBody.donor = {
          name: name,
          email: email,
        };
      } else {
        donationBody.donor = {
          email: email,
        };
      }
    }
    if (amount != "") {
      donationBody.amount = amount;
    }
    if (status != "") {
      donationBody.status = status;
    }
    console.log(donationBody);
    if (searchParams.get("id") != null && donationBody != {}) {
      updateDonation(searchParams.get("id"), donationBody);
    }
  };

  return (
    <div>
      <h1>Update Donation</h1>
      <form onSubmit={updateDon}>
        <Container id="container" maxWidth="sm">
          <TextField
            id="outlined-basic"
            label="Enter full name"
            variant="outlined"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Enter email"
            variant="outlined"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Enter amount"
            variant="outlined"
            type="number"
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Enter status"
            variant="outlined"
            type="text"
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          />
          <div id="flex-button">
            <Button type="submit" style={{ width: "30%" }} variant="contained">
              Submit
            </Button>
          </div>
        </Container>
      </form>
    </div>
  );
};
export default UpdateDonation;
