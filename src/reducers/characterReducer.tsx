import {Attribute, Character} from "../types";

type Action =
    | { type: "UPDATE_ATTRIBUTE"; attribute: Attribute, attributeValue: number };

const characterReducer = (
    state: Character,
    action: Action
) => {
    switch (action.type) {
        case "UPDATE_ATTRIBUTE":
            return {
                attributes: {
                    ...state.attributes,
                    [action.attribute]: {
                        value: action.attributeValue
                    }
                }
            }
        default:
            return state;
    }
}

export default characterReducer;