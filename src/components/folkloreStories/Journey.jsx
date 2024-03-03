import { Progress } from "antd";
import { useEffect, useState } from "react";
import { CiPause1 } from "react-icons/ci";
import { GoDot, GoDotFill } from "react-icons/go";
import { SlControlStart } from "react-icons/sl";


const Journey = () => {
    const [isIndex, SetIsIndex] = useState(0);
    const [isStopIcon, setIsStopIcon] = useState(true);
    const [loaderWidth, setLoadedWidth] = useState(0);
    const [isInterval, setIsInterval] = useState(5000);
    const interval = 5000;
    const indexArr = [0,1,2,3];


    useEffect(() => {
        let timer;
        if(isStopIcon === true){
            timer = setInterval(() => {
                if(isIndex === 0) {
                    SetIsIndex(1);
                    setLoadedWidth(0);
                }
                if(isIndex === 1){
                    SetIsIndex(2);
                    setLoadedWidth(0);
                }
                if(isIndex === 2){
                    SetIsIndex(3);
                    setLoadedWidth(0);
                }
                if(isIndex === 3){
                    SetIsIndex(0);
                    setLoadedWidth(0);
                }
          }, isInterval);
        }
        return () => {
            clearInterval(timer);
        }

     }, [isIndex, isStopIcon]);



     useEffect(()=>{
        let loaderTimer;
        console.log('SECOND EFFECT')
        loaderTimer  = isStopIcon && setInterval(() => {
            if (loaderWidth < 100) {
                console.log("Seconds effect doing")
                setLoadedWidth(prevPercent => prevPercent + 10);
            } else {
                clearInterval(loaderTimer);
            }
          } , 450);
        
         return () => {
            clearInterval(loaderTimer);
        }
     },[isIndex, isStopIcon])


    return (
        <div  className="wrapper">
        <div className="carosel-holder">
        <Progress percent={loaderWidth} showInfo={false} strokeColor="#ffffff" trailColor="#f5222d" size="small"  className="progress-baric" />
        <div className="w-80 pl-2 pr-2 pt-2"> 
        <div className="w-100 flex justify-end">
        <>
        {isStopIcon ? (
            <div className="iconStopFolk" onClick={()=>{
                setIsStopIcon(false);
            }}><CiPause1/></div>
            ) : (
                <div className="iconStopFolk"  onClick={()=>{
                    setIsStopIcon(true)
            }}><SlControlStart/></div>
        )}
        </>
</div>
<div className="content-holder">
    <div className="folklorePageTitle">
    Journey to the West (西游记) excerpts:
    </div>
    <div className="textWrap">
        
        {isIndex === 0 && (
        <div  className="trans">
    <div className="mb-1 bold font-12 mt-1">
        Description:
        </div>
        <div className="paragraph-hold">
        "Journey to the West" (西游记) is one of China's most beloved and enduring classical novels, attributed to Wu Cheng'en during the Ming Dynasty. The epic tale follows the pilgrimage of the Buddhist monk Tang Sanzang (also known as Tripitaka) and his three disciples – Sun Wukong, Zhu Bajie (Pigsy), and Sha Wujing – as they travel from China to India in search of sacred Buddhist scriptures.
         At its core, "Journey to the West" is a rich tapestry of adventure, mythology, spirituality, and moral teachings. The narrative is woven with fantastical elements, including encounters with demons, gods, and mythical creatures, as well as trials and tribulations that test the characters' resolve and virtues.
    </div>  
            </div>
        )}
        {isIndex === 1 && (
            <div className="trans">
    <div className="mb-1 bold  mt-1">
        Introduction of Sun Wukong (Monkey King) (First excerpt):
    </div>
    <div>
        "In the time of the Tang Dynasty, there existed a stone atop the Mountain of Flowers and Fruit. From this stone was born a creature of unparalleled strength and boundless mischief – Sun Wukong, also known as the Monkey King. Endowed with supernatural abilities and unmatched agility, Sun Wukong possessed a rebellious spirit that defied the celestial order.

        His origins shrouded in mystery, Sun Wukong emerged as a formidable force in the heavens, challenging the authority of the Jade Emperor himself. With audacity and cunning, he wreaked havoc among the celestial realms, disrupting the harmony of Heaven with his antics and feats of prowess.

        But Sun Wukong's insatiable thirst for power and recognition led him into conflict with the divine hierarchy. Defying the will of the gods, he sought to claim his rightful place among the celestial pantheon, demanding recognition for his unmatched abilities and strength.

        Yet, his arrogance and defiance incurred the wrath of the Jade Emperor, who sought to subdue the unruly monkey. Despite numerous attempts to quell his rebellion, Sun Wukong proved elusive, outwitting his celestial adversaries with his cunning and agility.

        It was amidst this chaos that Sun Wukong's destiny intertwined with that of Tang Sanzang, the Buddhist monk on a quest for sacred scriptures. Recognizing the monk's purity and righteousness, Sun Wukong pledged his allegiance, swearing to protect Tang Sanzang on his perilous journey to the West.

        Thus, armed with his magical abilities, including the power to transform into myriad forms and wield the legendary Ruyi Jingu Bang, Sun Wukong embarked on an epic adventure that would test his strength, courage, and ultimately, his capacity for enlightenment.

        Throughout his journey, Sun Wukong would face formidable adversaries, encounter unlikely allies, and confront the depths of his own nature. But it was his unwavering loyalty to Tang Sanzang and his quest for spiritual enlightenment that would ultimately define his legacy as the indomitable Monkey King."
    </div>  
            </div>
        )}
        {isIndex === 2 && (
            <div  className="trans">
    <div className="mt-1 bold  mb-1">
        The Encounter with Tang Sanzang (Tripitaka) (Second excerpts):
    </div>
    <div>
        "In the quiet solitude of his monastery, Tang Sanzang, a devout Buddhist monk renowned for his piety and wisdom, received a divine vision. In this vision, the Bodhisattva Guanyin appeared before him, entrusting him with a sacred mission: to embark on a perilous journey to the Western lands and retrieve the sacred scriptures of Buddhism.

        Filled with a sense of duty and devotion, Tang Sanzang set forth on his quest, braving treacherous landscapes and supernatural obstacles along the way. Yet, despite his unwavering resolve, he soon found himself beset by demonic forces that sought to thwart his mission and claim the scriptures for their own nefarious purposes.

        It was amidst this chaos that fate intervened, and Tang Sanzang's path crossed with that of Sun Wukong, the mischievous yet formidable Monkey King. Drawn to the monk by a sense of destiny, Sun Wukong recognized Tang Sanzang's purity of heart and righteousness, sensing within him the potential to achieve enlightenment.

        Impressed by the monk's unwavering resolve and compassion, Sun Wukong pledged his allegiance to Tang Sanzang, vowing to serve as his protector and guide on his perilous journey to the West. With his unrivaled strength and magical abilities, Sun Wukong proved invaluable in overcoming the myriad challenges that lay ahead, forging a bond of friendship and camaraderie with Tang Sanzang that would endure the trials of their epic quest.

        Together, Tang Sanzang and Sun Wukong embarked on a journey fraught with danger and adventure, facing demons, spirits, and celestial beings along the way. Through their shared experiences and trials, they would come to rely on each other not only as companions but as kindred spirits on a quest for spiritual enlightenment.

        And so, propelled by their shared sense of purpose and guided by the wisdom of the Bodhisattva Guanyin, Tang Sanzang and Sun Wukong ventured forth into the unknown, their destinies intertwined as they sought to fulfill their sacred mission and attain the ultimate truth." </div>
            </div>
        )}
    {isIndex === 3 && (
        <div  className="trans">
    <div className="mt-1 bold  mb-1">
        Sun Wukong's Transformation (Third excerpt)
    </div>
    <div>
        "As they journeyed westward, Sun Wukong's transformative abilities proved to be both a boon and a challenge. With a mere thought, he could shape-shift into any form imaginable, from a tiny insect to a towering giant, from a fearsome beast to an ordinary object. This remarkable power enabled him to deceive adversaries, overcome obstacles, and navigate through perilous situations with ease.

        Yet, Sun Wukong's mastery of transformation was not merely a tool for evading danger; it also served as a means of self-expression and exploration. Through his myriad forms, he sought to better understand the world around him, adopting different identities and perspectives in his quest for enlightenment.

        But with great power came great responsibility, and Sun Wukong soon discovered the limitations of his transformative abilities. His propensity for mischief and trickery often led to unintended consequences, causing turmoil and chaos wherever he went. And though his transformations brought him closer to his companions, they also served as a reminder of the ever-present struggle between his divine nature and mortal desires.

        Yet, amidst the turmoil of his own internal conflict, Sun Wukong remained steadfast in his loyalty to Tang Sanzang and their shared mission. With each transformation, he sought not only to protect his companions but also to challenge his own preconceptions and limitations, forging a path towards greater understanding and enlightenment.

        And so, whether as a fearsome warrior, a humble traveler, or a mischievous prankster, Sun Wukong continued to journey westward, his transformative abilities serving as both a blessing and a curse on the path to ultimate truth."
    </div>
        </div>
    )}
    </div>      
    
    </div>                              
    <div className="story-point">
    <div className="story-dots" onClick={()=>{
        SetIsIndex(0)
        }}>{isIndex == 0 ? <GoDotFill/> : <GoDot/> }</div>
    <div className="story-dots" onClick={()=>{
        SetIsIndex(1)
        }}>{isIndex == 1 ? <GoDotFill/> : <GoDot/> }</div>
    <div className="story-dots" onClick={()=>{
        SetIsIndex(2)
        }}>{isIndex == 2 ? <GoDotFill/> : <GoDot/> }</div>
    <div className="story-dots" onClick={()=>{
        SetIsIndex(3)
        }}>{isIndex == 3 ? <GoDotFill/> : <GoDot/> }</div>
    </div>
</div>
</div>                        
</div>
    )
}

export {Journey}