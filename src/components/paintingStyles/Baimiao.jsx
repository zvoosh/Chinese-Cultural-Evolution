import { Image } from 'antd'
import firstImage from '../../assets/bai01.jpg'
import secondImage from '../../assets/bai02.jpg'
import thirdImage from '../../assets/bai03.jpg'
import forthImage from '../../assets/bai04.jpg'
import fifthImage from '../../assets/bai05.jpg'
import sisthImage from '../../assets/bai06.jpg'
import seventhImage from '../../assets/bai07.jpg'
import eightImage from '../../assets/bai08.jpg'



const Baimiao = () => {
    return (
        <div className="pageWrapper">
            <div className="textwrapper">
                <div className="letter-spacing-01 textHelp">
                Baimiao (白描) is a style of Chinese painting that translates to "plain line" or "white sketch." It is characterized by the use of simple, unadorned lines to create elegant and expressive depictions of subjects. The Baimiao technique involves using a brush and ink to outline the essential features of the subject, emphasizing clarity and simplicity.
                Baimiao is known for its minimalist approach. Artists use a few well-placed lines to convey the form, structure, and essence of the subject. The emphasis is on simplicity and clarity, allowing the viewer's imagination to fill in the details.
                Artists practicing Baimiao use controlled and expressive brushstrokes. The brush is manipulated to create varying thicknesses of lines, adding dynamism and energy to the composition. It is a versatile technique that adapts well to different themes. The choice of subject often depends on the artist's preferences and the desired emotional impact.
                Baimiao can be applied to various subjects, including figures, landscapes, flowers, birds, and animals. It is a versatile technique that adapts well to different themes. The choice of subject often depends on the artist's preferences and the desired emotional impact.
                Baimiao has a long history in Chinese art and has been practiced for centuries. Baimiao is closely linked to calligraphy in Chinese art. The use of brush and ink in Baimiao shares similarities with the strokes and techniques used in calligraphy.
                Despite its simplicity, Baimiao is capable of conveying a wide range of emotions and moods.
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
    Gu Kaizhi, Nymph of the Luo River
    </div>
</div>
<div className="painting-wrap">
    
<Image
    width={250}
    height={300}
    src={secondImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Tang Yin, Listening to the Qin
    </div>
</div>
<div className="painting-wrap">
<Image
    width={300}
    height={100}
    src={thirdImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Xu Wei's Orchid Pavilion Gathering
    </div>
</div>
<div className="painting-wrap">
    
<Image
    width={150}
    height={300}
    src={forthImage}
/>
    {/* <div className="painting-image">

    </div> */}
    <div className="painting-title">
    Shen Zhou  "Lofty Mount Lu" 
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
    Dong Qichang Pine and Crane
    </div>
</div>
<div className="painting-wrap">
    
      
<Image
    width={300}
    height={250}
    src={sisthImage}
/>
    <div className="painting-title">
    Dong Qichang, Bamboo and Plum Blossoms
    </div>
</div> 
<div className="painting-wrap">
    
      
    <Image
    width={300}
    height={200}
    src={seventhImage}
/>
        <div className="painting-title">
        Shen Zhou Poetic Feeling of Fallen Flowers
        </div>
    </div> 
    <div className="painting-wrap">
    
      
    <Image
    width={150}
    height={300}
    src={eightImage}
/>
        <div className="painting-title">
        Wang Xizhi Catching The Goose
        </div>
    </div> 
    
</div>
<div className="brateee">

</div>
        </div>
    )
}

export { Baimiao }