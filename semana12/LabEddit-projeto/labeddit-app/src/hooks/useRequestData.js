import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = (url, initial) => {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false)

  const listcomments = (url) => {
    axios.get(url, {
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
  }

  useEffect(() => {
    setLoading(true)
    listcomments(url)
  }, [url]);

  
  return {data, loading, listcomments};
};

export default useRequestData;