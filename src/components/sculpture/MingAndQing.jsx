import { Image } from "antd"
import firstImage from '../../assets/ming01.jpg'
import secondImage from '../../assets/ming02.jpg'
import thirdImage from '../../assets/ming03.jpg'
import forthImage from '../../assets/ming04.jpg'
import fifthImage from '../../assets/qing01.jpg'
import sixthImage from '../../assets/qing02.jpg'

const MingAndQing = () => {
    
    return (<>
        <div className="ancient-text-below-paragraph">
        The Ming Dynasty (1368–1644) and Qing Dynasty (1644–1912) in China saw the creation of amazing bronze sculptures that showed off art, culture, and technology at the time. These sculptures had different uses, like for religion, ceremonies, decoration, and the emperor.
        In Ming Dynasty tombs, they placed bronze objects, such as figurines, vessels, and representations of daily life, to accompany the deceased and make sure they had a good afterlife.
        In Qing Dynasty homes, people often had bronze decorative objects like mirrors, incense burners, and vessels. These items had detailed patterns, symbols for good luck, and sometimes had words written on them.
        
        </div>
        <div className="flexing-box">
        <div className="flip-card-ancient">
                   
                
                <Image
                        width={230}
                        height={250}
                        src={firstImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                        
                <Image
                        width={250}
                        height={250}
                        src={secondImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                <Image
                        width={250}
                        height={250}
                        src={thirdImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                <Image
                        width={300}
                        height={200}
                        src={forthImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                <Image
                        width={250}
                        height={200}
                        src={fifthImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                <Image
                        width={250}
                        height={200}
                        src={sixthImage}
                        />
                    </div>
        </div>
        
        <div className="dopunska">

</div>
    </>)
}

export{MingAndQing}