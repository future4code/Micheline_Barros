import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = (url, initial) => {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url, {
        headers:{
          Authorization: localStorage.getItem('token')
        }
      })
      .then((res) => {
        setData(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.response.data);
      })
  }, [url]);

  
  return {data, loading};
};

export default useRequestData;