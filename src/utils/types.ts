// Interface for a character object
interface Character {
    id: number; // Unique identifier for the character
    name: string; // Name of the character
    description: string; // Description of the character
    thumbnail: {
        path: string; // Path of the character's thumbnail image
        extension: string; // Extension of the character's thumbnail image
    };
}

export default Character;