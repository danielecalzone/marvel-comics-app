import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useCharacterDetails from '../hooks/useCharacterDetails';
import '../styles/CharacterDetails.css';

const CharacterDetails: React.FC = () => {
    // Get the current location and extract the characterId from the query parameters
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const characterId = searchParams.get('characterId') || '';

    // Fetch the character details using the characterId
    const character = useCharacterDetails(characterId);

    // Get the navigation function
    const navigate = useNavigate();

    // If character details are still loading, display a loading message
    if (!character) {
        return <div>Loading...</div>;
    }

    // Render the character details once they are available
    return (
        <div className="details-view">
            <h1>Character detail page</h1>
            <h2>{character.name}</h2>
            <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
            />
            <p>{character.description}</p>
            <button onClick={() => navigate('/')} className="back-button">
                Back to List
            </button>
        </div>
    );
};

export default CharacterDetails;