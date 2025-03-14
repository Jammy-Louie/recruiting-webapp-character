import { useReducer } from 'react';

import CharacterDetails from "./components/CharacterDetails";
import characterReducer from './reducers/characterReducer';
import {generateNewCharacter} from "./util/characterUtils";

import {Attribute, SkillName} from "./types";

import './App.css';


function App() {
    const [character, dispatch] = useReducer(characterReducer, generateNewCharacter());

    const updateAttribute = (
        attribute: Attribute,
        attributeValue: number
    ): void => {
        dispatch({ type: "UPDATE_ATTRIBUTE", attribute, attributeValue});
    }

    const updateSkill = (
        skillName: SkillName,
        skillValue: number
    ): void => {
        dispatch({ type: "UPDATE_SKILL", skillName, skillValue});
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
                    updateSkill={updateSkill}
                />
            </section>
        </div>
    );
}

export default App;
