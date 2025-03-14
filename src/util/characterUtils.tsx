import {Character, CharacterAttribute} from "../types";

export const calculateModifier = (value: number): number => {
    return Math.floor((value - 10) / 2);
}

const generateCharacterAttribute = (value: number): CharacterAttribute => {
    return {
        value,
        modifier: calculateModifier(value)
    }
}

export const generateNewCharacter = ():Character => {
    return {
        attributes: {
            Strength: generateCharacterAttribute(10),
            Dexterity: generateCharacterAttribute(10),
            Constitution: generateCharacterAttribute(10),
            Intelligence: generateCharacterAttribute(10),
            Wisdom: generateCharacterAttribute(10),
            Charisma: generateCharacterAttribute(10),
        }
    }
}