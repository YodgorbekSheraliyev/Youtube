import axios from "axios";
import React, { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response);
    } catch (error) {
        setError(error)
    }
  };
  return { data,error, fetchData };
};
export default useFetch;
