import {ATTRIBUTE_LIST} from "../consts";
import {Attribute, CharacterAttributeConfig} from "../types";

type AttributeModifierProps = {
    characterAttributeConfig: CharacterAttributeConfig,
    updateAttribute: (attribute: Attribute, value: number) => void
}

const AttributeModifier = (props: AttributeModifierProps) => {
    const decreaseAttribute = (attribute: Attribute) => {
        const value: number = props.characterAttributeConfig[attribute].value;
        props.updateAttribute(attribute, Math.max(0, value - 1));
    }

    const increaseAttribute = (attribute: Attribute) => {
        const value: number = props.characterAttributeConfig[attribute].value;
        props.updateAttribute(attribute, Math.max(0, value + 1));
    }

    return (
        <div>
            <section className="App-section">
                {
                    ATTRIBUTE_LIST.map( (attribute: Attribute, index: number) => {
                        return (
                            <div key={index}>
                                {attribute}:
                                <button onClick={_ => decreaseAttribute(attribute)}>-</button>
                                <span>{props.characterAttributeConfig[attribute].value}</span>
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