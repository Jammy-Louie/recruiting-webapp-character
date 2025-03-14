import {Attribute, Character} from "../types";
import AttributeModifier from "./AttributeModifer";
import CharacterClass from "./CharacterClass";

type CharacterDetailsProps = {
    character: Character,
    updateAttribute: (attribute: Attribute, value: number) => void
}

export const CharacterDetails = (props: CharacterDetailsProps) => {
    return (
        <>
            <section className="App-section">
                <div className="character-flex-cotainer">
                    <div className="character-flex-cotainer-item">
                        <AttributeModifier
                            characterAttributeConfig={props.character.attributes}
                            updateAttribute={(attribute, value) => props.updateAttribute(attribute, value)}
                        />
                    </div>
                    <div className="character-flex-cotainer-item">
                        <CharacterClass characterAttributeConfig={props.character.attributes}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CharacterDetails;