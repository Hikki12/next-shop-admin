import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint: string) => {
  const [data, setData] = useState([]);

  const fetchData = async ()=>{
    const response = await axios.get(endpoint);
    setData(response.data);
  }

  useEffect(() => {
    try{
      fetchData();
    }catch(error) {

    }

  });
}
