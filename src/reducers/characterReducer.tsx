import {Attribute, Character, SkillName} from "../types";
import {calculateModifier} from "../util/characterUtils";

type Action =
    | { type: "UPDATE_ATTRIBUTE"; attribute: Attribute, attributeValue: number }
    | { type: "UPDATE_SKILL"; skillName: SkillName, skillValue: number };

const characterReducer = (
    state: Character,
    action: Action
) => {
    switch (action.type) {
        case "UPDATE_ATTRIBUTE":
            return {
                ...state,
                attributes: {
                    ...state.attributes,
                    [action.attribute]: {
                        value: action.attributeValue,
                        modifier: calculateModifier(action.attributeValue)
                    }
                }
            }
        case "UPDATE_SKILL":
            return {
                ...state,
                skills: {
                    ...state.skills,
                    [action.skillName]: action.skillValue
                }
            }
        default:
            return state;
    }
}

export default characterReducer;