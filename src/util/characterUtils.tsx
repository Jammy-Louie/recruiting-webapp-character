import {Character, CharacterAttribute} from "../types";

export const calculateModifier = (value: number): number => {
    return Math.floor((value - 10) / 2);
}

const generateDefaultCharacterAttribute = (value: number): CharacterAttribute => {
    return {
        value,
        modifier: calculateModifier(value)
    }
}

export const generateNewCharacter = ():Character => {
    return {
        skills: {
            'Acrobatics': 0,
            'Animal Handling': 0,
            'Arcana': 0,
            'Athletics': 0,
            'Deception': 0,
            'History': 0,
            'Insight': 0,
            'Intimidation': 0,
            'Investigation': 0,
            'Medicine': 0,
            'Nature': 0,
            'Perception': 0,
            'Performance': 0,
            'Persuasion': 0,
            'Religion': 0,
            'Sleight of Hand': 0,
            'Stealth': 0,
            'Survival': 0
        },
        attributes: {
            Strength: generateDefaultCharacterAttribute(10),
            Dexterity: generateDefaultCharacterAttribute(10),
            Constitution: generateDefaultCharacterAttribute(10),
            Intelligence: generateDefaultCharacterAttribute(10),
            Wisdom: generateDefaultCharacterAttribute(10),
            Charisma: generateDefaultCharacterAttribute(10),
        }
    }
}