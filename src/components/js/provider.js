import axios from "axios";
import Axios from "axios";

const dataURL = "data.json";

export default async function () {
  const response = await axios.get(dataURL);
  const { data } = response;

  return data;
}
