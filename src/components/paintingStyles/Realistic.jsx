import { Image } from 'antd'
import firstImage from '../../assets/rel01.jpg'
import secondImage from '../../assets/rel02.jpg'
import thirdImage from '../../assets/rel03.jpg'
import forthImage from '../../assets/rel04.jpg'
import fifthImage from '../../assets/rel05.jpg'
import sisthImage from '../../assets/rel06.jpg'
import seventhImage from '../../assets/rel07.jpg'
import eightImage from '../../assets/rel08.png'







const Realistic = () => {
    return (
        <div className="pageWrapper">
            <div className="textwrapper">
                <div className="letter-spacing-01 textHelp">Realistic Painting involves the representation of subjects in a manner that closely resembles reality. In the context of contemporary Chinese art, there are artists who work in a realistic style, capturing detailed and accurate depictions of their subjects.
                Many contemporary Chinese artists work in a realistic style, producing paintings that depict subjects with a high level of accuracy and detail. This style often involves accurate brushwork and attention to light and shadow.
                Realistic painting in China often involves detailed human portraiture. Artists may capture the likeness of individuals with precision, emphasizing facial expressions and emotions.
                Realism can extend to landscape painting, where artists aim to capture the details of natural scenery, including mountains, rivers, and flora, in a manner that closely resembles reality.
                Realistic still life paintings showcase everyday objects with meticulous attention to detail, texture, and lighting.
                Realistic painting often demands a high level of technical skill, including a thorough understanding of anatomy, perspective, and color theory.
                Realistic painters may receive formal academic training, often drawing from both traditional Chinese painting techniques and Western academic approaches.
                
                    
                </div>
            </div>
            <div className="paintings-holder">

<div className="painting-wrap">
<Image
    width={250}
    height={300}
    src={firstImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Xu Beihong, Portrait of a Scholar
    </div>
</div>
<div className="painting-wrap">
    
<Image
    width={200}
    height={300}
    src={secondImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Liu Haisu, Portrait of a Woman
    </div>
</div>
<div className="painting-wrap">
<Image
    width={250}
    height={350}
    src={thirdImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Wu Zuoren, Giant Panda
    </div>
</div>
<div className="painting-wrap">
    
<Image
    width={200}
    height={300}
    src={forthImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    He Jiaying, Portrait of Woman
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
    Zheng Yi, World History Encyclopedia
    </div>
</div>
<div className="painting-wrap">
    
      
<Image
    width={250}
    height={300}
    src={sisthImage}
/>
    <div className="painting-title">
    Xu Beihong, Eagle Soaring 
    </div>
</div> 
<div className="painting-wrap">
    
      
    <Image
    width={300}
    height={200}
    src={seventhImage}
/>
        <div className="painting-title">
        Wu Zuoren, Running Horses
        </div>
    </div> 
    <div className="painting-wrap">
    
      
    <Image
    width={300}
    height={300}
    src={eightImage}
/>
        <div className="painting-title">
        He Jiaying, Reflections
        </div>
    </div> 
    
</div>
<div className="brateee">

</div>
        </div>
    )
}

export { Realistic }