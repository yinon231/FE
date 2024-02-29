import axios from "axios";
const getDonations = async () => {
  try {
    const response = await axios.get(
      "https://data-hqlc.onrender.com/api/donations"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
const getDonationbyId = async (id) => {
  try {
    const response = await axios.get(
      `https://data-hqlc.onrender.com/api/donations/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const deleteDonation = async (id) => {
  try {
    const response = await axios.delete(
      `https://data-hqlc.onrender.com/api/donations/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
const addDonation = async (donation) => {
  try {
    const response = await axios.post(
      "https://data-hqlc.onrender.com/api/donations",
      donation
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
const updateDonation = async (id, donation) => {
  try {
    let response = await axios.put(
      `https://data-hqlc.onrender.com/api/donations/${id}`,
      donation
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
export {
  getDonations,
  getDonationbyId,
  deleteDonation,
  addDonation,
  updateDonation,
};
