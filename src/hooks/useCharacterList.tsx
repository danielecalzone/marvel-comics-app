import { useEffect, useState } from 'react';
import axios from 'axios';
import Character from '../utils/types';
import md5 from 'md5';

const useCharacterList = (offset: number, limit: number) => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const currentTime = new Date().getTime();
                const hash = md5(currentTime + `${process.env.REACT_APP_PRIVATE_API_KEY}${process.env.REACT_APP_PUBLIC_API_KEY}`);

                const baseUrl = 'https://gateway.marvel.com/v1/public/characters';

                // Fetch characters from the Marvel API with pagination
                const response = await axios.get(baseUrl, {
                    params: {
                        ts: currentTime,
                        apikey: process.env.REACT_APP_PUBLIC_API_KEY,
                        hash: hash,
                        limit,
                        offset,
                    },
                });

                const { results, total } = response.data.data;

                // Set the retrieved characters and total count
                setCharacters(results);
                setTotal(total);
            } catch (error) {
                // Handle the error
                console.error('Error fetching characters:', error);
            }
        };

        // Fetch characters when the offset or limit changes
        fetchCharacters();
    }, [offset, limit]);

    return { characters, total };
};

export default useCharacterList;