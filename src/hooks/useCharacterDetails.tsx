import { useEffect, useState } from 'react';
import axios from 'axios';
import Character from '../utils/types';
import md5 from 'md5';

const useCharacterDetails = (characterId: string) => {
    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const currentTime = new Date().getTime();
                const hash = md5(
                    currentTime + `${process.env.REACT_APP_PRIVATE_API_KEY}${process.env.REACT_APP_PUBLIC_API_KEY}`
                );

                const baseUrl = `https://gateway.marvel.com/v1/public/characters/${characterId}`;

                // Fetch character details from the Marvel API
                const response = await axios.get(baseUrl, {
                    params: {
                        ts: currentTime,
                        apikey: process.env.REACT_APP_PUBLIC_API_KEY,
                        hash: hash
                    },
                });

                const { data } = response.data;

                // Set the retrieved character details
                setCharacter(data.results[0]);
            } catch (error) {
                // Handle the error
                console.error('Error fetching character details:', error);
            }
        };

        // Fetch character details if the characterId is provided
        if (characterId) {
            fetchCharacterDetails();
        }
    }, [characterId]);

    return character;
};

export default useCharacterDetails;