/* eslint-disable react-hooks/exhaustive-deps */
import Donation from "./Donation";
import { getDonations, deleteDonation } from "../services/service";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";
const Home = () => {
  const [load, setLoad] = useState(true);
  const [donations, setDonations] = useState([]);
  const delDonation = async (id) => {
    await deleteDonation(id);
    const data = await getDonations();
    setDonations(data);
    if (donations || !donations) setLoad(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDonations();
      setDonations(data);
      if (donations || !donations) setLoad(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Donations List</h1>
      {load && (
        <div id="container-flex">
          <CircularProgress size="20vh" />
        </div>
      )}

      {!load && (
        <Container>
          <div className="table-wrapper">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {donations &&
                  donations.map((donation) => (
                    <Donation
                      key={donation._id}
                      donation={donation}
                      delDonation={delDonation}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </Container>
      )}
    </>
  );
};
export default Home;
