import { Image } from "antd";
import firstImage from '../../assets/WangWei.jpg'
import secondImage from '../../assets/ss12.jpg'
import thirdImage from '../../assets/ss13.jpg'
import forthImage from '../../assets/ss14.jpg'
import fifthImage from '../../assets/ss15.jpg'
import sisthImage from '../../assets/ss16.jpg'
import seventhImage from '../../assets/ss17.jpg'
import eightImage from '../../assets/ss18.jpg'


const InkWash = () => {
    return (
        <div className="pageWrapper  ">
            <div className="textwrapper">
                <div className="textHelp">
                    Also known as Sumi-e in Japan, this style is characterized by the use of simple brushstrokes, black ink, and often monochromatic color schemes.
                    Artists focus on expressing the essence of the subject rather than detailed representation.
                    Ink and Wash Painting is a traditional Chinese painting style that has a long and rich history.
                    The primary medium used in Ink and Wash Painting is Chinese ink, which is typically made from soot, water, and glue. The ink is applied with a brush made of animal hair, often attached to a bamboo handle.
                    Traditional Chinese paintings are often created on rice paper or silk. These materials absorb the ink in a unique way, allowing for a range of expressive brushstrokes.
                    Ink and Wash paintings typically use a monochromatic palette meaning it's relying on shades of black and gray. Artists skillfully manipulate ink density and brush techniques to create variations in tone and texture.
                    Brushwork is crucial in this style. Artists use a variety of brushstrokes, including dots, lines, and washes, to convey different textures and emotions. The spontaneity and expressiveness of the brushwork are highly valued. Artists often use techniques such as "flying white" (feibai), where the brush skips over the paper, leaving areas untouched by ink.
                    Traditional themes in Ink and Wash Painting include landscapes, figures, flowers, birds, and animals. Landscape painting, in particular, holds a special place, reflecting the deep connection between Chinese art and nature.Subjects are often depicted in a minimalistic and suggestive manner, encouraging viewers to use their imagination and engage with the art emotionally.
                    Ink and Wash Painting reflects the Chinese aesthetic principle of balance and harmony. Artists seek to convey a sense of balance in composition, as well as harmony between elements like yin and yang, emptiness and fullness, or movement and stillness.
                    While rooted in tradition, Ink and Wash Painting has evolved over the centuries. Contemporary artists often incorporate new materials, techniques, and subject matters, creating a dynamic blend of traditional and modern elements.                   
                </div>
            </div>
            <div className="paintings-holder">

                <div className="painting-wrap">
                <Image
                    width={250}
                    height={350}
                    src={firstImage}
                />
                    {/* <div className="painting-image">

                    </div> */}
                    <div className="painting-title">
                    Wang Wei (王维)（701－761）
                    </div>
                </div>
                <div className="painting-wrap">
                    
                <Image
                    width={300}
                    height={300}
                    src={secondImage}
                />
                    {/* <div className="painting-image">

                    </div> */}
                    <div className="painting-title">
                    Ma Yuan (马远)
                    </div>
                </div>
                <div className="painting-wrap">
                <Image
                    width={200}
                    height={350}
                    src={thirdImage}
                />
                    {/* <div className="painting-image">

                    </div> */}
                    <div className="painting-title">
                    Wang Wei (王维)
                    </div>
                </div>
                <div className="painting-wrap">
                    
                <Image
                    width={300}
                    height={300}
                    src={forthImage}
                />
                    {/* <div className="painting-image">

                    </div> */}
                    <div className="painting-title">
                    Ma Yuan (马远)
                    </div>
                </div>
                <div className="painting-wrap">
                      
                <Image
                    width={200}
                    height={400}
                    src={fifthImage}
                />
                    {/* <div className="painting-image">

                    </div> */}
                    <div className="painting-title">
                    Bada Shanren (八大山人)
                    </div>
                </div>
                <div className="painting-wrap">
                    
                      
                <Image
                    width={200}
                    height={400}
                    src={sisthImage}
                />
                    <div className="painting-title">
                    Zhang Daqian (张大千)
                    </div>
                </div> 
                <div className="painting-wrap">
                    
                      
                    <Image
                    width={200}
                    height={400}
                    src={seventhImage}
                />
                        <div className="painting-title">
                        Qi Baishi (齐白石)
                        </div>
                    </div> 
                    <div className="painting-wrap">
                    
                      
                    <Image
                    width={200}
                    height={400}
                    src={eightImage}
                />
                        <div className="painting-title">
                        Dong Qichang (董其昌)
                        </div>
                    </div> 
                    
            </div>
                <div className="brateee">

                </div>
        </div>
    )
}

export { InkWash }