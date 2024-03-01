import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { addDonation } from "../services/service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDonation = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const createDonation = async (event) => {
    event.preventDefault();
    const donationBody = {
      donor: {
        name: name,
        email: email,
      },
      amount: amount,
      status: "pending",
      date: new Date().toLocaleDateString(),
    };
    const donation = await addDonation(donationBody);
    if (Object.keys(donation).length > 0) {
      setSuccess(true);
      if (error) setError(false);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <h1>Add Donation</h1>
      <form onSubmit={createDonation}>
        <Container maxWidth="sm" className="flex-form">
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
          {success && (
            <div className="alert alert-success" role="alert">
              donation added successfully
            </div>
          )}
          {error && (
            <div className="alert alert-danger" role="alert">
              donation updated failed
            </div>
          )}
        </Container>
      </form>
    </div>
  );
};
export default AddDonation;
