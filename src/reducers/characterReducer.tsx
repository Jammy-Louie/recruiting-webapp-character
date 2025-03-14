import {Attribute, Character, Characters, SkillName} from "../types";
import {calculateModifier} from "../util/characterUtils";

type Action =
    | { type: "UPDATE_ATTRIBUTE"; characterId: String, attribute: Attribute, attributeValue: number }
    | { type: "UPDATE_SKILL"; characterId: String, skillName: SkillName, skillValue: number }
    | { type: "LOAD_CHARACTERS"; characters: Characters; }
    | { type: "ADD_CHARACTER"; character: Character; };

const characterReducer = (
    state: Characters,
    action: Action
) => {
    switch (action.type) {
        case "UPDATE_ATTRIBUTE":
            return state.map(character => {
                if (character.id === action.characterId) {
                    return {
                        ...character,
                        attributes: {
                            ...character.attributes,
                            [action.attribute]: {
                                value: action.attributeValue,
                                modifier: calculateModifier(action.attributeValue)
                            }
                        }
                    }
                } else {
                    return character;
                }
            });
        case "UPDATE_SKILL":
            return state.map(character => {
                if (character.id === action.characterId) {
                    return {
                        ...character,
                        skills: {
                            ...character.skills,
                            [action.skillName]: action.skillValue
                        }
                    }
                } else {
                    return character;
                }
            });
        case "LOAD_CHARACTERS":
            return action.characters
        case "ADD_CHARACTER":
            return [...state, action.character];
        default:
            return state;
    }
}

export default characterReducer;