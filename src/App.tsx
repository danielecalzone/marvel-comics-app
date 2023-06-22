import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Route for the character list page */}
                <Route path="/" element={<CharacterList />} />

                {/* Route for the character details page */}
                <Route path="/character-details" element={<CharacterDetails />} />
            </Routes>
        </Router>
    );
};

export default App;