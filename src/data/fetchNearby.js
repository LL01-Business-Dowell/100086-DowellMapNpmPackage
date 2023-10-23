import axios from "axios";

export default async function FetchNearby(data) {
  return await axios.post(
    "https://100086.pythonanywhere.com/accounts/get-local-nearby-v2/",
    data
  );
}
