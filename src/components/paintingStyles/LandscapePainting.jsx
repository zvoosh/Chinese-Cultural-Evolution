
import { Image } from 'antd'
import firstImage from '../../assets/lan01.jpeg'
import secondImage from '../../assets/lan02.jpg'
import thirdImage from '../../assets/lan03.jpg'
import forthImage from '../../assets/lan04.jpg'
import fifthImage from '../../assets/lan05.jpg'
import sisthImage from '../../assets/lan06.jpg'
import seventhImage from '../../assets/lan07.jpg'
import eightImage from '../../assets/lan08.jpg'




const LandscapePainting = () => {
    return (
        <div className="pageWrapper">
            <div className="textwrapper">
                <div className="letter-spacing-01 textHelp">
                    Landscape painting, known as Shānshuǐ Huà (山水画) in Chinese, is one of the most revered and enduring genres in traditional Chinese art.
                    Landscape painting in China is deeply rooted in Daoist and Confucian philosophies. Daoism emphasizes harmony with nature, while Confucianism values moral integrity and the cultivation of virtue. Chinese landscape painting often seeks to express the interconnectedness between humanity and the natural world.
                    Chinese landscape painting is often associated with the "Three Perfections" – poetry, calligraphy, and painting. Artists who excelled in all three were highly esteemed. Many landscape paintings include poetic inscriptions and calligraphy alongside the visual depiction.
                    The use of ink and wash is a defining characteristic of Chinese landscape painting. Artists use black ink made from soot and water, applied with a brush on absorbent paper or silk. The wash technique involves diluting the ink to create various shades and textures, capturing the essence of mountains, rivers, and other natural elements.
                    Chinese landscape paintings often adhere to compositional conventions. The "three perfections" (mountains, water, and sky) are essential components. The use of diagonal lines, atmospheric perspective, and the placement of elements to create a harmonious balance are also key considerations.
                    Mountains and water are recurring themes in Chinese landscape painting, representing enduring and dynamic forces in nature. Mountains are often depicted with expressive brushstrokes, and water is suggested through the use of wash techniques.
                    Landscape painting is closely associated with the literati class in China. Many literati, who were scholars and officials, practiced painting as a form of self-expression and a means of cultivating the mind. Their paintings often conveyed personal sentiments, emotions, and philosophical reflections.
                    Several artists stand out as masters of Chinese landscape painting. Fan Kuan, Guo Xi, Ma Yuan, Wang Meng, Shen Zhou, and Dong Qichang are among those who have made significant contributions to the development and evolution of this art form.
                    Chinese landscape painting has continued to evolve over the centuries. While traditional techniques remain influential, contemporary artists often experiment with new materials and approaches, blending traditional aesthetics with modern sensibilities.
                   
                </div>
            </div>
            <div className="paintings-holder">

<div className="painting-wrap">
<Image
    width={300}
    height={200}
    src={firstImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Fan Kuan (范宽)Travelers among Mountains and Streams
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
    Guo Xi (郭熙) Early Spring
    </div>
</div>
<div className="painting-wrap">
<Image
    width={150}
    height={300}
    src={thirdImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Wang Meng (王蒙) Dwelling in the Qingbian Mountains
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
    Shen Zhou (沈周) Poet on a Mountaintop
    </div>
</div>
<div className="painting-wrap">
      
<Image
    width={200}
    height={300}
    src={fifthImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Dong Qichang (董其昌) Landscape in the Style of Huang Gongwang
    </div>
</div>
<div className="painting-wrap">
    
      
<Image
    width={200}
    height={350}
    src={sisthImage}
/>
    <div className="painting-title">
    Wang Hui (王翚) A Thousand Peaks and Myriad Ravines 
    </div>
</div> 
<div className="painting-wrap">
    
      
    <Image
    width={250}
    height={300}
    src={seventhImage}
/>
        <div className="painting-title">
        Wu Li (吴武陵) Scenery of the Yellow Mountains
        </div>
    </div> 
    <div className="painting-wrap">
    
      
    <Image
    width={300}
    height={200}
    src={eightImage}
/>
        <div className="painting-title">
        Huang Gongwang (黄公望) Dwelling in the Fuchun Mountains
        </div>
    </div> 
    
</div>
<div className="brateee">

</div>
        </div>
    )
}

export { LandscapePainting }