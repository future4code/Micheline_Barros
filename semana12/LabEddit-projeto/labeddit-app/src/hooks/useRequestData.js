import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = (url, initial) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    axios
      .get(url, {
        headers:{
          Authorization: localStorage.getItem('token')
        }
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      })
  }, [url]);

  
  return (data);
};

export default useRequestData;