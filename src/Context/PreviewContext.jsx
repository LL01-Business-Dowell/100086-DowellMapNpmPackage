import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const PreviewContext = React.createContext();

// eslint-disable-next-line react/prop-types
const PreviewProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [surveys, setSurveys] = useState([]);

  const productUrl =
    "https://dowell-surveys-qr-2.onrender.com/qr-code/codes/";

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
        loading
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
