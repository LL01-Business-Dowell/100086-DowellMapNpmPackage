import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const PreviewContext = React.createContext();

// eslint-disable-next-line react/prop-types
const PreviewProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [surveys, setSurveys] = useState([]);

  //Please provide your API Key here
  const [api_key, setAPIKey]  = useState("");
  
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
        centerCoords
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
