import React, {useState} from "react";

import {CLASS_LIST} from "../consts";
import {Attribute, CharacterAttributeConfig, Class, ClassAttributes} from "../types";

type CharacterClassProps = {
    characterAttributeConfig: CharacterAttributeConfig
}

const CharacterClass = (props: CharacterClassProps) => {
    const [selectedClass, setSelectedClass] = useState<Class>();


    const meetsRequirements = (classRequirements: ClassAttributes): boolean => {
        return Object.entries(classRequirements).reduce((meetsRequirements, [key, value]) => {
            return meetsRequirements && props.characterAttributeConfig[key as Attribute].value >= value;
        }, true);
    }

    return (
        <>
            {Object.entries(CLASS_LIST).map(([key, value]) => {
                return <div
                    className={ meetsRequirements(value)? 'meet-class-req': ''}
                    key={key}
                    onClick={() => setSelectedClass(key as Class)}
                >{key}
                </div>
            })}
            {
                selectedClass &&
                <div>
                    <h2>Class: {selectedClass} Minimum Requirements</h2>
                    {
                        Object.entries(CLASS_LIST[selectedClass]).map(([key, value]) => {
                            return (<div key={key}>{key} :{value}</div>);
                        })
                    }
                    <button onClick={() => setSelectedClass(null)}>Close Requirement View</button>
                </div>
            }
        </>
    );
}

export default CharacterClass;