import "../style/style.css";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { addDonation } from "../services/service";
import { useState } from "react";

const AddDonation = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const createDonation = (event) => {
    event.preventDefault();
    const donationBody = {
      donor: {
        name: name,
        email: email,
      },
      amount: amount,
      status: "pending",
      date: new Date().toString(),
    };
    addDonation(donationBody);
  };
  return (
    <div>
      <h1>Add Donation</h1>
      <form onSubmit={createDonation}>
        <Container id="container" maxWidth="sm">
          <TextField
            type="text"
            id="outlined-basic"
            label="Enter full name"
            variant="outlined"
            required
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <TextField
            type="email"
            id="outlined-basic"
            label="Enter email"
            variant="outlined"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            type="number"
            id="outlined-basic"
            label="Enter amount"
            variant="outlined"
            required
            onChange={(event) => {
              setAmount(event.target.value);
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
export default AddDonation;
