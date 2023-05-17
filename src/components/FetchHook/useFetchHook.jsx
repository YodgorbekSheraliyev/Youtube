import axios from 'axios';
import {useEffect, useState} from 'react';

const useFetchHook = (options) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const fetchData = async() => {
    try {
        setLoading(true);
        const response = await axios.request(options);
        setData(response.data.data);
    } catch (error) {
        setLoading(true);
        setError(error);
    }finally{
        setLoading(false);
    }
    }
    useEffect(() => {
        fetchData()
    }, []);

  return {data, error, loading};
};

export default useFetchHook;