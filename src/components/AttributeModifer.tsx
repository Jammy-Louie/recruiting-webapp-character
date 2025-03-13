import {ATTRIBUTE_LIST, MAX_ATTRIBUTE_POINTS} from "../consts";
import {Attribute, CharacterAttributeConfig} from "../types";
import {useMemo} from "react";

type AttributeModifierProps = {
    characterAttributeConfig: CharacterAttributeConfig,
    updateAttribute: (attribute: Attribute, value: number) => void
}

const AttributeModifier = (props: AttributeModifierProps) => {
    const totalAttributePointsAssigned = useMemo(()=>{
        return Object.entries(props.characterAttributeConfig).reduce((totalAttributePoints, [_key, attributeValue]) =>{
            return totalAttributePoints + attributeValue.value
        }, 0)
    }, [props.characterAttributeConfig])

    const decreaseAttribute = (attribute: Attribute) => {
        const value: number = props.characterAttributeConfig[attribute].value;
        props.updateAttribute(attribute, Math.max(0, value - 1));
    }

    const increaseAttribute = (attribute: Attribute) => {
        const value: number = props.characterAttributeConfig[attribute].value;
        if (totalAttributePointsAssigned < MAX_ATTRIBUTE_POINTS) {
            props.updateAttribute(attribute, Math.max(0, value + 1));
        } else {
            alert(`You've reached the maximum attributes points allowed' ${MAX_ATTRIBUTE_POINTS}`)
        }
    }

    return (
        <div>
            <section className="App-section">
                {
                    ATTRIBUTE_LIST.map( (attribute: Attribute, index: number) => {

                        return (
                            <div key={index}>
                                <span>
                                {`${attribute} : ${props.characterAttributeConfig[attribute].value}`}
                                {`(${props.characterAttributeConfig[attribute].modifier})`}
                                </span>
                                <button onClick={_ => decreaseAttribute(attribute)}>-</button>
                                <button onClick={_ => increaseAttribute(attribute)}>+</button>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default AttributeModifier;