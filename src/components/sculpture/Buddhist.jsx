import { Image } from "antd"
import firstImage from '../../assets/buddha01.jpg'
import secondImage from '../../assets/buddhist1.jpg'
import thirdImage from '../../assets/buddhist3.jpg'
import forthImage from '../../assets/buddhist2.jpg'
import fifthImage from '../../assets/buddhist5.jpg'
import sixthImage from '../../assets/buddhist6.jpg'

const Buddhist = () => {
    return (<>
        <div className="ancient-text-below-paragraph">

        Buddhist sculpture in China boasts a rich and diverse history, evolving over centuries and reflecting the profound impact of Buddhism on Chinese art. The introduction and early development of Buddhism in China occurred as it was introduced from India via the Silk Road and Central Asia during the Han Dynasty. Early Buddhist sculptures in China were influenced by Indian Gandhara art, characterized by realistic depictions of the Buddha and a focus on narrative scenes. The evolution of styles began with the Northern and Southern Dynasties (420-589). This period witnessed the emergence of distinctive Northern and Southern styles. Materials and techniques used encompass wood, stone, and bronze. Iconography and symbolism in Buddhist sculptures follow specific conventions. The depiction of Buddhas, Bodhisattvas, and other celestial beings is imbued with symbolic meaning, conveying aspects of compassion, wisdom, and enlightenment. Mudras and attributes, represented by hand gestures and objects held by the figures, carry symbolic significance in Buddhist iconography, representing various teachings and qualities associated with enlightened beings. Buddhist sculptures were often housed in cave temples and grottoes, carved into cliffs or rock formations. </div>
        <div className="flexing-box">
        <div className="flexing-box">
            <div className="flip-card-ancient">
                
            <Image
                    width={300}
                    height={200}
                    src={firstImage}
                />
                </div>
                <div className="flip-card-ancient">
                    
            <Image
                    width={300}
                    height={200}
                    src={secondImage}
                />
                </div>
                <div className="flip-card-ancient">
            <Image
                    width={300}
                    height={250}
                    src={thirdImage}
                />
                </div>
                <div className="flip-card-ancient">
            <Image
                    width={200}
                    height={250}
                    src={forthImage}
                />
                </div>
                <div className="flip-card-ancient">
            <Image
                    width={300}
                    height={200}
                    src={fifthImage}
                />
                </div>
                <div className="flip-card-ancient">
            <Image
                    width={350}
                    height={200}
                    src={sixthImage}
                />
                </div>
            </div>
        </div>
            <div className="dopunska">

            </div>
    </>)
}

export {Buddhist}