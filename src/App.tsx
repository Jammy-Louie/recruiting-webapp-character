import { useReducer } from 'react';

import AttributeModifier from "./components/AttributeModifer";
import characterReducer from './reducers/characterReducer';
import {INITIAL_CHARACTER_STATE} from "./consts";
import {Attribute} from "./types";

import './App.css';



function App() {
    const [character, dispatch] = useReducer(characterReducer, INITIAL_CHARACTER_STATE);

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
                <AttributeModifier
                    characterAttributeConfig={character.attributes}
                    updateAttribute={(attribute, value) => updateAttribute(attribute, value)}
                />
            </section>
        </div>
    );
}

export default App;
