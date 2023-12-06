import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
require('dotenv').config();

const PreviewContext = React.createContext();

// eslint-disable-next-line react/prop-types
const PreviewProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [surveys, setSurveys] = useState([]);

  //Please provide your Datacube API Key here
  const [api_key, setAPIKey]  = useState("");

  //API key for place details
  const [placeAPIKey, setPlaceAPIKey] = useState("EhdQUTM2K0hNLCBOYWlyb2JpLCBLZW55YSImOiQKCg2PPDr");

  //Google maps API Key
  const [mapAPIKey, setMapAPIKey] = useState("AIzaSyAsH8omDk8y0lSGLTW9YtZiiQ2MkmsF-uQ");

  const [centerCoords, setCenterCoords]  = useState({
    lat:"",
    lon:"",
  });
  const [inputData, setInputData] = useState({
    country: "",
    city: "",
    query_string: "",
    radius1: "",
    radius2: "",
  });

  const productUrl = "https://dowell-surveys-qr-2.onrender.com/qr-code/codes/";

  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await axios.get(productUrl);
      setLoading(false);
      const products = response.data;
      setSurveys(products);
      console.log("working", setSurveys);
    } catch (error) {
      setLoading(false);
      console.log("not working", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <PreviewContext.Provider
      value={{
        surveys,
        loading,
        inputData,
        setInputData,
        setAPIKey,
        api_key,
        setCenterCoords,
        centerCoords,
        mapAPIKey,
        placeAPIKey
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(PreviewContext);
};

export { PreviewContext, PreviewProvider };
