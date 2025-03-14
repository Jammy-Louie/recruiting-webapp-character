import {SKILL_LIST} from "../consts";
import {CharacterAttributeConfig, Skill, SkillName} from "../types";
import {useMemo} from "react";

type CharacterSkillsProps = {
    characterAttributeConfig: CharacterAttributeConfig,
    characterSkills: Record<SkillName, number>,
    updateSkill: (skillName: SkillName, value: number) => void
}

const CharacterSkills = (props: CharacterSkillsProps) => {
    const totalSkillPointsAvailable = useMemo(() => {
        return 10 + (4*  props.characterAttributeConfig["Intelligence"].modifier);
    }, [props.characterAttributeConfig]);

    const totalSkillPointsSpent = useMemo(()=>{
        return Object.values(props.characterSkills).reduce((totalSkillPointsSpent, value) => {
            return totalSkillPointsSpent + value;
        }, 0)
    }, [props.characterSkills])

    const calculateSkillTotal = (skill: Skill)=> {
        return props.characterSkills[skill.name] + props.characterAttributeConfig[skill.attributeModifier].modifier
    }

    const decreaseSkill = (skill: Skill) => {
        const value: number = props.characterSkills[skill.name];
        props.updateSkill(skill.name, Math.max(0, value - 1));
    }

    const increaseSkill = (skill: Skill) => {
        const value: number = props.characterSkills[skill.name];
        if (totalSkillPointsSpent < totalSkillPointsAvailable) {
            props.updateSkill(skill.name, Math.max(0, value + 1));
        } else{
            alert(`You do not have any available points to increase ${skill.name}`)
        }
    }

    return (
        <>
            <div>{`Total points available: ${totalSkillPointsAvailable}`}</div>
            {SKILL_LIST.map(skill => {
                return (
                    <div key={skill.name}>
                        <span>
                            {`${skill.name} : ${props.characterSkills[skill.name]} 
                            Modifier(${skill.attributeModifier} : 
                            ${props.characterAttributeConfig[skill.attributeModifier].modifier})`}
                        </span>
                        <button onClick={()=> decreaseSkill(skill)}>-</button>
                        <button onClick={()=> increaseSkill(skill)}>+</button>
                        <span>
                            {`total: ${calculateSkillTotal(skill)}`}
                        </span>
                    </div>
                );
            })}
        </>
    );
}

export default CharacterSkills;