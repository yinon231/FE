import Donation from "./Donation";
import { getDonations, deleteDonation } from "../services/service";
import { useState, useEffect } from "react";
const Home = () => {
  const [donations, setDonations] = useState([]);
  const delDonation = async (id) => {
    await deleteDonation(id);
    const data = await getDonations();
    setDonations(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDonations();
      setDonations(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Donations List</h1>
      <div className="container">
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
              {donations.map((donation) => (
                <Donation
                  key={donation._id}
                  donation={donation}
                  delDonation={delDonation}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Home;
