import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCharacterList from '../hooks/useCharacterList';
import '../styles/CharacterList.css';

const CharacterList: React.FC = () => {
    const [offset, setOffset] = useState(0);
    const limit = 20; // Number of characters per page

    // Fetch the character list with the specified offset and limit
    const { characters, total } = useCharacterList(offset, limit);

    useEffect(() => {
        scrollToTop();
    }, [offset, characters]);

    const handlePrevious = () => {
        // Decrement the offset to move to the previous page
        setOffset((prevOffset) => Math.max(0, prevOffset - limit));
    };

    const handleNext = () => {
        // Increment the offset to move to the next page
        setOffset((prevOffset) => Math.min(total - limit, prevOffset + limit));
    };

    const scrollToTop = () => {
        // Scroll to the top of the page when the offset or character list changes
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="character-container">
            <h1>Character list</h1>
            <div className="character-list">
                {characters.map((character, index) => (
                    <div key={character.id} className="character-item">
                        <Link
                            to={`/character-details?characterId=${character.id}`}
                            className="character-link"
                            data-testid={`character-link-${index}`}
                        >
                            <h2 data-testid={`character-name-${index}`}>{character.name}</h2>
                            <img
                                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                alt={character.name}
                                className="character-image"
                            />
                        </Link>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button
                    onClick={handlePrevious}
                    disabled={offset === 0}
                    className="pagination-button"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={offset >= total - limit}
                    className="pagination-button"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CharacterList;