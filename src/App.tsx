import {useEffect, useReducer, useState} from 'react';

import CharacterDetails from "./components/CharacterDetails";
import characterReducer from './reducers/characterReducer';
import {generateNewCharacter} from "./util/characterUtils";

import {CHARACTER_FETCH_API, CHARACTER_SAVE_API} from "./consts";
import {Attribute, SkillName} from "./types";

import './App.css';


function App() {
    const [characters, dispatch] = useReducer(characterReducer, [generateNewCharacter(1)]);
    const [loading, setLoading] = useState<Boolean>(false);

    const updateAttribute = (
        characterId: String,
        attribute: Attribute,
        attributeValue: number
    ): void => {
        dispatch({ type: "UPDATE_ATTRIBUTE", characterId, attribute, attributeValue});
    }

    const updateSkill = (
        characterId: String,
        skillName: SkillName,
        skillValue: number
    ): void => {
        dispatch({ type: "UPDATE_SKILL", characterId, skillName, skillValue});
    }

    const addNewCharacter = (
    ): void => {
        dispatch({ type: "ADD_CHARACTER", character:generateNewCharacter(characters.length + 1)});
    }

    const saveCharacter = async () => {
        setLoading(true);

        try {
            const response = await fetch(CHARACTER_SAVE_API, {
                method: 'POST',
                body: JSON.stringify(characters),
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
                alert("Failed to fetch the character(s)");
            }
            const data = await response.json();
            dispatch({ type: "LOAD_CHARACTERS", characters: data.body});
        }catch(error) {
            alert(error);
        }finally {
            setLoading(false)
        }
    }

    // comment this out when you are attempt load the multiple characters features.
    // previously saved json may not be compatible with new model.
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
                        <button onClick={() => addNewCharacter()}>Add New Character</button>
                    </div>
                }
                {
                    !loading && characters.map((character) => {
                        return (
                            <CharacterDetails
                                character={character}
                                updateAttribute={
                                    (attribute: Attribute, attributeValue: number) => updateAttribute(character.id, attribute, attributeValue)
                                }
                                updateSkill={
                                    (skillName: SkillName, skillValue: number) => updateSkill(character.id, skillName, skillValue)
                                }
                            />

                        );
                    })
                }
                {
                    loading && <div>LOADING</div>
                }
            </section>
        </div>
    );
}

export default App;
