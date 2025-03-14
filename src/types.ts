export type Attribute = "Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma"

export type ClassAttributes = {
    Strength: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
};

export type Class = "Barbarian" | "Wizard" | "Bard";

export type SkillName =
    | 'Acrobatics'
    | 'Animal Handling'
    | 'Arcana'
    | 'Athletics'
    | 'Deception'
    | 'History'
    | 'Insight'
    | 'Intimidation'
    | 'Investigation'
    | 'Medicine'
    | 'Nature'
    | 'Perception'
    | 'Performance'
    | 'Persuasion'
    | 'Religion'
    | 'Sleight of Hand'
    | 'Stealth'
    | 'Survival';

export type Skill = {
    name: SkillName;
    attributeModifier: Attribute;
}

export type CharacterAttribute = {
    value: number;
    modifier: number;
}

export type CharacterAttributeConfig = Record<Attribute, CharacterAttribute>

export type Character = {
    id: string;
    skills: Record<SkillName, number>;
    attributes: CharacterAttributeConfig;
};

export type Characters = Array<Character>;