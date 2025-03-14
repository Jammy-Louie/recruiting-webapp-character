import { useReducer } from 'react';

import CharacterDetails from "./components/CharacterDetails";
import characterReducer from './reducers/characterReducer';
import {Attribute} from "./types";
import {generateNewCharacter} from "./util/characterUtils";

import './App.css';


function App() {
    const [character, dispatch] = useReducer(characterReducer, generateNewCharacter());

    const updateAttribute = (
        attribute: Attribute,
        attributeValue: number
    ): void => {
        dispatch({ type: "UPDATE_ATTRIBUTE", attribute, attributeValue});
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>React Coding Exercise</h1>
            </header>
            <section className="App-section">
                <CharacterDetails
                    character={character}
                    updateAttribute={updateAttribute}
                />
            </section>
        </div>
    );
}

export default App;
