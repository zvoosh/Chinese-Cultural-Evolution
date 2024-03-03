import { Image } from "antd"
import firstImage from '../../assets/gong01.jpg'
import secondImage from '../../assets/gong02.jpg'
import thirdImage from '../../assets/gong03.jpg'
import forthImage from '../../assets/gong04.jpg'
import fifthImage from '../../assets/gong05.jpg'
import sisthImage from '../../assets/gong06.png'
import seventhImage from '../../assets/gong07.jpg'
import eightImage from '../../assets/gong08.jpg'

const Gongbi = () => {
    return (
        <div className="pageWrapper">
            <div className="textwrapper">
                <div className="letter-spacing-01 textHelp">
                    Gongbi (工笔画) is a traditional Chinese painting style that is characterized by meticulous details, fine brushwork, and a realistic portrayal of subjects. The term "Gongbi" literally translates to "meticulous brushwork" or "realistic painting," emphasizing the emphasis on precision and accuracy.
                    This style requires careful and detailed brushwork, with artists using small, controlled strokes to create intricate details. This style also contrasts with the more spontaneous and expressive brushstrokes often found in other Chinese painting styles. Gongbi paintings aim for a high level of realism and accuracy in portraying the subject matter. Whether depicting figures, landscapes, or objects, artists pay close attention to anatomical details, facial expressions, and intricate patterns.
                    Gongbi paintings cover a wide range of subjects, including figures, landscapes, flowers, birds, animals, and historical scenes. Figure painting is a particularly prominent aspect of Gongbi, often depicting courtly or historical figures in elaborate attire. While Gongbi paintings are often associated with a more colorful palette than Ink and Wash Painting, the use of color is still controlled and applied meticulously. Artists may layer multiple colors to achieve subtle gradients and shading.
                    Gongbi also has a long history that can be traced back to ancient times. It became more formalized and popular during the Song Dynasty (960–1279) and reached its peak during the Ming (1368–1644) and Qing (1644–1912) dynasties. During these periods, artists like Chen Hongshou and Qian Xuan made significant contributions to the development of Gongbi.
                    Different regions in China have contributed to the development of Gongbi with their unique characteristics. The Shanghai School, for example, produced Gongbi painters like Ren Bonian and Wu Changshuo, who incorporated elements of the style into their works.
                    Gongbi paintings typically use silk or fine paper as the painting surface. High-quality brushes made from animal hair, such as wolf or rabbit, are used, and pigments are derived from minerals and plants.
                </div>
            </div> 
            
            <div className="paintings-holder">

<div className="painting-wrap">
<Image
    width={100}
    height={350}
    src={firstImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Zhang Xiong (张雄), Reading in a Bamboo Grove
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
    Qian Xuan (钱轩), Ode on Returning Home
    </div>
</div>
<div className="painting-wrap">
<Image
    width={300}
    height={200}
    src={thirdImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Wang Shimin (王世民), Summer days
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
    Chen Hongshou (陈洪寿 ), Immortals celebrating a birthday
    </div>
</div>
<div className="painting-wrap">
      
<Image
    width={150}
    height={350}
    src={fifthImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Tang Yin(唐寅), Ladies in a Pavilion
    </div>
</div>
<div className="painting-wrap">
    
      
<Image
    width={200}
    height={350}
    src={sisthImage}
/>
    <div className="painting-title">
    Zhang Daqian (张大千), Bodhisattva
    </div>
</div> 
<div className="painting-wrap">
    
      
    <Image
    width={200}
    height={350}
    src={seventhImage}
/>
        <div className="painting-title">
        Wu Changshuo (花鸟图) ,Birds and Flowers
        </div>
    </div> 
    <div className="painting-wrap">
    
      
    <Image
    width={350}
    height={100}
    src={eightImage}
/>
        <div className="painting-title">
        Qiu Ying (汉宫春晓图), Spring Morning in the Han Palace
        </div>
    </div> 
    
</div>
<div className="brateee">

</div>
        </div>
    )
}

export { Gongbi }