import {Attribute, Class, ClassAttributes, Skill} from "./types";

export const ATTRIBUTE_LIST: Array<Attribute> = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma',
];

export const CLASS_LIST: Record<Class, ClassAttributes> = {
    'Barbarian': {
        'Strength': 14,
        'Dexterity': 9,
        'Constitution': 9,
        'Intelligence': 9,
        'Wisdom': 9,
        'Charisma': 9,
    },
    'Wizard': {
        'Strength': 9,
        'Dexterity': 9,
        'Constitution': 9,
        'Intelligence': 14,
        'Wisdom': 9,
        'Charisma': 9,
    },
    'Bard': {
        'Strength': 9,
        'Dexterity': 9,
        'Constitution': 9,
        'Intelligence': 9,
        'Wisdom': 9,
        'Charisma': 14,
    },
}

export const SKILL_LIST: Array<Skill> = [
    { name: 'Acrobatics', attributeModifier: 'Dexterity' },
    { name: 'Animal Handling', attributeModifier: 'Wisdom' },
    { name: 'Arcana', attributeModifier: 'Intelligence' },
    { name: 'Athletics', attributeModifier: 'Strength' },
    { name: 'Deception', attributeModifier: 'Charisma' },
    { name: 'History', attributeModifier: 'Intelligence' },
    { name: 'Insight', attributeModifier: 'Wisdom' },
    { name: 'Intimidation', attributeModifier: 'Charisma' },
    { name: 'Investigation', attributeModifier: 'Intelligence' },
    { name: 'Medicine', attributeModifier: 'Wisdom' },
    { name: 'Nature', attributeModifier: 'Intelligence' },
    { name: 'Perception', attributeModifier: 'Wisdom' },
    { name: 'Performance', attributeModifier: 'Charisma' },
    { name: 'Persuasion', attributeModifier: 'Charisma' },
    { name: 'Religion', attributeModifier: 'Intelligence' },
    { name: 'Sleight of Hand', attributeModifier: 'Dexterity' },
    { name: 'Stealth', attributeModifier: 'Dexterity' },
    { name: 'Survival', attributeModifier: 'Wisdom' },
]

export const CHARACTER_SAVE_API = "https://recruiting.verylongdomaintotestwith.ca/api/{Jammy-Louie}/character"
export const CHARACTER_FETCH_API = "https://recruiting.verylongdomaintotestwith.ca/api/{Jammy-Louie}/character"

export const MAX_ATTRIBUTE_POINTS = 70;