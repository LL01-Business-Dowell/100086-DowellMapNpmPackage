import axios from "axios";

export default async function FetchCountryRegion(api_key) {
    return (
        await axios.post(`https://100074.pythonanywhere.com/get-coords-v3/?api_key=${api_key}`)
    );
}