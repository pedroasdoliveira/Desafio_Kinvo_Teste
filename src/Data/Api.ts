import axios from "axios";

const Api = axios.create({
  baseURL:
    "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData",
});

export default Api;
