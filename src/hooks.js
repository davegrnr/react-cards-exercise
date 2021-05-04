import axios from 'axios';
import { useState, useEffect } from 'react'

const useFlip  = (initialState = true) => {
    const [flipped, setFlipped] = useState(initialState);
    const toggleFlipped = () => {
        setFlipped(flipped => !flipped)
    }
    return [flipped, toggleFlipped]
}

function useAxios (url) {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        async function getData() {
            try{
            const response = await axios.get(url);
            const card = response.data.cards[0];

            setResponse(c => [
                ...c,
                {
                    id: card.code,
                    image: card.image
                }
            ])
        } catch(e) {
            console.log(e)
            }
        }
        getData()
    }, []);
    return [response, setResponse]
}


export { useFlip, useAxios }