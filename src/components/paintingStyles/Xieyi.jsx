
import { Image } from 'antd'
import firstImage from '../../assets/xie01.jpg'
import secondImage from '../../assets/xie02.jpg'
import thirdImage from '../../assets/xie03.jpg'
import forthImage from '../../assets/xie04.jpg'
import fifthImage from '../../assets/xie05.jpg'
import sisthImage from '../../assets/xie06.jpg'
import seventhImage from '../../assets/xie07.jpg'
import eightImage from '../../assets/xie08.jpg'



const Xieyi = () => {
    return (
        <div className="pageWrapper">
            <div className="textwrapper">
                <div className="letter-spacing-01 textHelp">
                    Xieyi (写意画) is a style of traditional Chinese painting that can be translated as "freehand" or "sketching the idea." It is characterized by a spontaneous and expressive approach to brushwork, focusing on capturing the essence and spirit of the subject rather than producing a realistic representation. Xieyi emphasizes the artist's feelings, emotions, and individual interpretation.
                    Xieyi places a strong emphasis on bold, expressive brushstrokes. Artists use a variety of brush techniques, such as splashing, smearing, and dripping, to create dynamic and lively compositions.
                    Unlike Gongbi (meticulous) painting, Xieyi tends to minimize intricate details. Artists often suggest the essence of the subject with a few well-placed strokes, leaving more to the viewer's imagination.
                    Artists practicing Xieyi often work in a spontaneous and intuitive manner. The goal is to convey a sense of the artist's mood and emotions at the moment of creation, emphasizing personal expression.
                    Composition in Xieyi painting is crucial. Artists carefully arrange elements on the canvas to achieve balance and harmony, often using open spaces to enhance the overall aesthetic.
                    While Xieyi artists use ink as the primary medium, they also incorporate the "wash" technique, allowing for the creation of varying shades and textures. The combination of ink and wash adds depth and dimension to the paintings.
                    Xieyi painting is influenced by Daoist philosophy, emphasizing the natural flow of energy and the interconnectedness of all things. While Xieyi has deep roots in traditional Chinese painting, contemporary artists continue to explore and adapt this style.
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
    Bada Shanren (八大山人), Bamboo and Rocks
    </div>
</div>
<div className="painting-wrap">
    
<Image
    width={300}
    height={200}
    src={secondImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Shitao (石涛), Last hike
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
    Wu Changshuo (吴昌硕), Lotus Pond
    </div>
</div>
<div className="painting-wrap">
    
<Image
    width={200}
    height={350}
    src={forthImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Qi Baishi (齐白石), Shrimp
    </div>
</div>
<div className="painting-wrap">
      
<Image
    width={300}
    height={200}
    src={fifthImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Xu Beihong (徐悲鸿) Gallop
    </div>
</div>
<div className="painting-wrap">
    
      
<Image
    width={250}
    height={350}
    src={sisthImage}
/>
    <div className="painting-title">
    Fu Baoshi (傅抱石), Spring Mountain
    </div>
</div> 
<div className="painting-wrap">
    
      
    <Image
    width={250}
    height={300}
    src={seventhImage}
/>
        <div className="painting-title">
        Huang Binhong (黄宾虹) Red Cliff
        </div>
    </div> 
    <div className="painting-wrap">
    
      
    <Image
    width={250}
    height={300}
    src={eightImage}
/>
        <div className="painting-title">
        Zhang Daqian (张大千) Peach Blossom Spring
        </div>
    </div> 
    
</div>
<div className="brateee">

</div>
        </div>
    )
}

export { Xieyi }