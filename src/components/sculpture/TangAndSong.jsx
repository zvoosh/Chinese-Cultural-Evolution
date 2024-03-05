import { Image } from 'antd'
import firstImage from '../../assets/songdy1.jpg'
import secondImage from '../../assets/songdy2.jpg'
import thirdImage from '../../assets/songdy3.jpg'
import forthImage from '../../assets/songdy4.jpg'
import fifthImage from '../../assets/songdy5.jpg'
import sixthImage from '../../assets/songdy6.jpg'


const TangAndSong = () => {
    
    return (<>
        <div className="ancient-text-below-paragraph">
        The Tang (618–907) and Song (960–1279) Dynasties were important times in China's history with big changes in art and culture. Sculptures made of wood and stone during these times showed the artistic achievements and lively culture.

In the Tang Dynasty, wooden sculptures were famous for being very well-made and detailed. Artists were really good at carving, and they made detailed sculptures of tangsong deities, Bodhisattvas, and other religious figures. These wooden sculptures were often put in temples and palaces for both religious and decorative reasons. Buddhism had a big impact on Tang Dynasty art, and large wooden statues were made, like the ones found in caves at Dunhuang and the Mogao Grottoes.

The Tang Dynasty was a time of cultural exchange along the Silk Road, where many different cultures met. This mix of cultures influenced art, and some wooden sculptures from this time show a mix of Chinese, Central Asian, and Indian styles. In Tang Dynasty art, you could often find wooden sculptures of guardian figures, like heavenly kings and mythical creatures, placed at temple entrances for protection.</div>
        <div className="flexing-box">
                
            <div className="flip-card-ancient">
                
                <Image
                        width={300}
                        height={250}
                        src={firstImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                        
                <Image
                        width={200}
                        height={250}
                        src={secondImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                <Image
                        width={300}
                        height={200}
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
                        width={200}
                        height={250}
                        src={fifthImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                <Image
                        width={200}
                        height={250}
                        src={sixthImage}
                        />
                    </div>
                        </div>
            <div className="dopunska">

            </div>
    </>)
}

export{TangAndSong}