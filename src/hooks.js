import axios from 'axios';
import { useState, useEffect } from 'react'

const useFlip  = (initialState = true) => {
    const [flipped, setFlipped] = useState(initialState);
    const toggleFlipped = () => {
        setFlipped(flipped => !flipped)
    }
    return [flipped, toggleFlipped]
}

function useAxios (baseUrl) {
    const [responses, setResponses] = useState([]);

    const addResponseData = async (formatter = data => data, urlEnd="") => {
        const response = await axios.get(`${baseUrl}${urlEnd}`);
        setResponses(data => [...data, formatter(response.data)]);
    };
    return [responses, addResponseData];
}


export { useFlip, useAxios }