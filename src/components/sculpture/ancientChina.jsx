import { Image } from "antd"
import firstImage from '../../assets/ancient1.jpg'
import secondImage from '../../assets/ancient2.jpg'
import thirdImage from '../../assets/ancient3.jpg'
import forthImage from '../../assets/ancient4.jpg'
import fifthImage from '../../assets/ancient5.jpg'
import sixthImage from '../../assets/ancient6.jpg'

const AncientChina = () => {
    return (
        <>
            <div className="ancient-text-below-paragraph">
            Ancient Chinese sculpting is a multifaceted art form that has evolved over millennia, reflecting a rich tapestry of cultural, religious, and historical influences. Spanning various dynasties and employing a diverse range of materials and techniques, it encompasses a vast array of styles and subjects.

One of the most iconic examples is the Terracotta Army in Xi'an, crafted during the Qin Dynasty to accompany Emperor Qin Shi Huang in the afterlife. These life-sized clay soldiers, horses, and chariots demonstrate the accessibility and versatility of clay as a medium for both practical and ceremonial purposes.

The Leshan Giant Buddha, a monumental stone statue carved into a cliff face during the Tang Dynasty, stands as a testament to the grandeur and scale achievable through stone carving. Depicting Maitreya, it is a symbol of Buddhist devotion and craftsmanship.

Similarly, the Longmen Grottoes near Luoyang and the Mogao Caves in Dunhuang showcase the intricacy and beauty of Chinese stone and cave carving. These sites, adorned with thousands of Buddhist sculptures and murals, serve as repositories of ancient artistry and spiritual expression, spanning centuries of history along the Silk Road.

Through these masterpieces, ancient Chinese sculpting not only preserves the artistic achievements of the past but also offers a glimpse into the diverse cultural landscape of China's storied past.
            </div>
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
                    height={200}
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
                    width={300}
                    height={200}
                    src={fifthImage}
                />
                </div>
                <div className="flip-card-ancient">
            <Image
                    width={300}
                    height={200}
                    src={sixthImage}
                />
                </div>
            </div>
            <div className="dopunska">

            </div>
        </>
    )
}

export {AncientChina}