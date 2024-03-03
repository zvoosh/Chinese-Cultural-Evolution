import { Image } from 'antd'
import firstImage from '../../assets/baf01.jpg'
import secondImage from '../../assets/baf02.jpg'
import thirdImage from '../../assets/baf03.jpg'
import forthImage from '../../assets/baf04.jpg'
import fifthImage from '../../assets/baf05.jpg'
import sisthImage from '../../assets/baf06.jpg'
import seventhImage from '../../assets/baf07.jpg'
import eightImage from '../../assets/baf08.jpg'


const BirdFlower = () => {
    return (
        <div className="pageWrapper">
            <div className="textwrapper">
                <div className="letter-spacing-01 textHelp">
                    Bird-and-Flower Painting (Huāniǎo Huà 花鸟画) is a traditional Chinese painting style that focuses on depicting birds and flowers, often in combination with other elements such as insects, plants, and sometimes small animals. This genre has a rich history and holds a significant place in Chinese art.              
                    Birds and flowers hold symbolic meanings in Chinese culture. They are often associated with virtues, auspiciousness, and good fortune. Different species of birds and types of flowers may convey specific cultural or moral messages.
                    Bird-and-Flower Painting seeks to capture the harmony of nature and emphasize the intrinsic beauty of the subjects. Artists carefully arrange the elements in a composition to achieve a balanced and aesthetically pleasing result.
                    Artists use various brushwork techniques to bring life to their compositions. Delicate, flowing lines are often employed to render the feathers of birds and the petals of flowers. The brushstrokes convey a sense of vitality and movement.
                    Chinese landscape paintings often compositional to conventions. The "three perfections" (mountains, water, and sky) are essential components. The use of diagonal lines, atmospheric perspective, and the placement of elements to create a harmonious balance are also key considerations.
                    Notable artists who have made significant contributions to Bird-and-Flower Painting include Giuseppe Castiglione (Lang Shining), Qi Baishi, Xu Beihong, and Wu Changshuo, among others.
                        
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
    Zhao Ji, Auspicous Cranes
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
    Xia Gui, Birds and Flowers
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
    Xu Xin Peony and Mandarin Ducks
    </div>
</div>
<div className="painting-wrap">
    
<Image
    width={100}
    height={300}
    src={forthImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Zhang Xiong, Cuckoo in Spring
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
    Lang Shining (Giuseppe Castiglione), Magpies and Peonies
    </div>
</div>
<div className="painting-wrap">
    
      
<Image
    width={300}
    height={300}
    src={sisthImage}
/>
    <div className="painting-title">
    Huang Jucai , Sparrows and Cherry Blossoms
    </div>
</div> 
<div className="painting-wrap">
    
      
    <Image
    width={250}
    height={300}
    src={seventhImage}
/>
        <div className="painting-title">
        Qi Baishi Cicada and Bamboo
        </div>
    </div> 
    <div className="painting-wrap">
    
      
    <Image
    width={300}
    height={300}
    src={eightImage}
/>
        <div className="painting-title">
        Pan Tianshou Lotus and Mandarin Ducks
        </div>
    </div> 
    
</div>
<div className="brateee">

</div>
        </div>)
}

export { BirdFlower }