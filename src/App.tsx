import {useEffect, useReducer, useState} from 'react';

import CharacterDetails from "./components/CharacterDetails";
import characterReducer from './reducers/characterReducer';
import {generateNewCharacter} from "./util/characterUtils";

import {CHARACTER_FETCH_API, CHARACTER_SAVE_API} from "./consts";
import {Attribute, SkillName} from "./types";

import './App.css';


function App() {
    const [character, dispatch] = useReducer(characterReducer, generateNewCharacter());
    const [loading, setLoading] = useState<Boolean>(false);

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

    const saveCharacter = async () => {
        setLoading(true);

        try {
            const response = await fetch(CHARACTER_SAVE_API, {
                method: 'POST',
                body: JSON.stringify(character),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if(!response.ok) {
                alert("Failed to save the character");
            }
        }catch(error) {
            alert(error);
        }finally {
            setLoading(false)
        }
    }

    const fetchCharacter = async () => {
        setLoading(true);

        try {
            const response = await fetch(CHARACTER_FETCH_API, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if(!response.ok) {
                alert("Failed to fetch the character");
            }
            const data = await response.json();
            dispatch({ type: "LOAD_CHARACTER", character: data.body});
        }catch(error) {
            alert(error);
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCharacter();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>React Coding Exercise</h1>
            </header>
            <section className="App-section">
                {
                    !loading &&
                    <div>
                        <button onClick={() => saveCharacter()}>Save Character</button>
                        <CharacterDetails
                            character={character}
                            updateAttribute={updateAttribute}
                            updateSkill={updateSkill}
                        />
                    </div>
                }
                {
                    loading && <div>LOADING</div>
                }
            </section>
        </div>
    );
}

export default App;
