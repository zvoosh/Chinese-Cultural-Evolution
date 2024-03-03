import { Progress } from "antd";
import { useEffect, useState } from "react";
import { CiPause1 } from "react-icons/ci";
import { GoDot, GoDotFill } from "react-icons/go";
import { SlControlStart } from "react-icons/sl";


const Immortals = () => {
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
    The Eight Immortals (八仙) excerpts:
    </div>
    <div className="textWrap">
        
        {isIndex === 0 && (
        <div  className="trans">
    <div className="mb-1 bold font-12 mt-1">
        Description:
        </div>
        <div className="paragraph-hold">
        "In the rich tapestry of Chinese mythology, the Eight Immortals stand as iconic figures, revered for their divine powers, wisdom, and benevolence. These legendary beings have transcended the mortal realm, attaining immortality through their extraordinary deeds and virtuous lives.

Each of the Eight Immortals possesses unique qualities and attributes, reflecting a diverse spectrum of talents and virtues. From martial prowess to mystical powers, from wisdom to compassion, they embody the multifaceted nature of the human spirit and the mysteries of the universe.

The legends of the Eight Immortals have been passed down through generations, woven into the fabric of Chinese culture and tradition. Their tales serve as sources of inspiration and guidance, offering valuable lessons on morality, resilience, and the pursuit of enlightenment.

Throughout history, the Eight Immortals have been depicted in various forms of art and literature, from ancient scrolls and paintings to modern-day films and television shows. Their iconic imagery, with its vivid symbolism and allegorical significance, continues to captivate audiences around the world.

Whether portrayed as venerable sages or mischievous tricksters, the Eight Immortals embody the timeless ideals of virtue, harmony, and balance. Their stories serve as reminders of the boundless potential within each individual to transcend earthly limitations and achieve spiritual enlightenment.

As symbols of hope and inspiration, the Eight Immortals remain beloved figures in Chinese folklore, celebrated for their enduring legacy and profound influence on the collective imagination of humanity."
    </div>  
            </div>
        )}
        {isIndex === 1 && (
            <div className="trans">
    <div className="mb-1 bold  mt-1">
        The Legend of Lu Dongbin (First excerpt):
    </div>
    <div>
    "Lu Dongbin, revered as the leader of the Eight Immortals, possesses a legendary reputation that spans the realms of martial prowess, spiritual enlightenment, and mystical wisdom.

Born during the Tang Dynasty, Lu Dongbin began his journey toward immortality as a humble scholar, seeking knowledge and enlightenment in the mountains and forests of China. It was during his solitary meditations that he encountered a mysterious sage who revealed to him the secrets of alchemy and the path to eternal life.

Under the sage's guidance, Lu Dongbin embarked on a rigorous regimen of meditation, martial training, and spiritual cultivation, honing his skills and purifying his soul in preparation for the trials that lay ahead.

Through his unwavering dedication and indomitable spirit, Lu Dongbin mastered the arcane arts of alchemy, herbalism, and mysticism, unlocking the secrets of the universe and attaining enlightenment beyond mortal comprehension.

With his legendary swordsmanship and mastery over the elements, Lu Dongbin became a formidable protector of the innocent and a scourge to malevolent spirits and demons. His name struck fear into the hearts of evildoers and inspired awe and reverence among those who sought his guidance and protection.

Yet, despite his unparalleled power and wisdom, Lu Dongbin remained humble and compassionate, always ready to aid those in need and uphold the principles of righteousness and justice.

As one of the most revered figures in Chinese mythology, Lu Dongbin's legacy endures as a symbol of courage, wisdom, and spiritual enlightenment. His teachings continue to inspire seekers of truth and seekers of truth and wisdom, guiding them on the path toward inner harmony and enlightenment."
    </div>  
            </div>
        )}
        {isIndex === 2 && (
            <div  className="trans">
    <div className="mt-1 bold  mb-1">
            The Wisdom of Zhongli Quan (Second excerpts):
    </div>
    <div>
    "Zhongli Quan, one of the esteemed Eight Immortals, is renowned for his profound wisdom, compassionate nature, and mastery of the mystical arts.

Born during the Jin Dynasty, Zhongli Quan's journey toward enlightenment began in the secluded mountains of China, where he devoted himself to the study of ancient texts and the contemplation of the natural world. It was there that he discovered the secrets of alchemy and the transformative power of the human spirit.

Through years of rigorous training and spiritual discipline, Zhongli Quan attained mastery over the elements and unlocked the mysteries of the universe. With his magical fan, which had the power to bestow life and heal the sick, he traveled the land, spreading joy and healing to all who crossed his path.

But Zhongli Quan's wisdom extended far beyond the realm of magic and mysticism. As a sage and mentor, he imparted valuable lessons on the importance of humility, kindness, and empathy, guiding his disciples on the path toward enlightenment and inner peace.

One of Zhongli Quan's most famous teachings is the principle of Wu Wei, or 'effortless action,' which emphasizes the importance of aligning oneself with the natural flow of the universe and allowing events to unfold organically. Through Wu Wei, Zhongli Quan taught his followers to cultivate a sense of harmony and balance in their lives, transcending the limitations of ego and desire.

With his gentle demeanor and boundless compassion, Zhongli Quan touched the hearts of all who knew him, earning the admiration and respect of both mortal and immortal alike. His legacy endures as a beacon of wisdom and enlightenment, inspiring seekers of truth and virtue to this day."
</div>
            </div>
        )}
    {isIndex === 3 && (
        <div  className="trans">
    <div className="mt-1 bold  mb-1">
    The Craftiness of Zhang Guolao (Third excerpt)
    </div>
    <div>
    "Zhang Guolao, one of the Eight Immortals, is celebrated for his cunning intellect, resourcefulness, and mastery of the mystical arts.

    Born during the Tang Dynasty, Zhang Guolao's early life was shrouded in mystery and intrigue. Legend has it that he was a skilled magician and trickster who roamed the countryside, using his wits and cunning to outsmart his adversaries and evade capture.

    But it was not until he encountered a wise sage in the mountains that Zhang Guolao's true destiny was revealed. Under the sage's tutelage, he learned the secrets of alchemy and the power of the Tao, unlocking the hidden potential within himself and attaining immortality.

    Armed with his newfound knowledge and mystical abilities, Zhang Guolao embarked on a series of daring adventures and escapades, using his cunning and guile to overcome seemingly insurmountable obstacles and outwit his foes.

    One of Zhang Guolao's most famous exploits involves his magic bamboo tube, which had the power to shrink or expand at will. With this extraordinary device, he was able to confound his enemies and escape capture on numerous occasions, leaving them bewildered and frustrated in his wake.

    But Zhang Guolao's craftiness was not limited to mere trickery. He was also a master strategist and tactician, adept at devising clever schemes and outmaneuvering his opponents in battle. His keen intellect and strategic prowess earned him the respect and admiration of his fellow immortals, who marveled at his ability to turn the tide of fortune with a single stroke of genius.

    Though his methods may have been unconventional, there was no denying Zhang Guolao's effectiveness as a guardian of the innocent and a scourge to evildoers. His legacy as a cunning trickster and wily strategist continues to inspire awe and admiration to this day, reminding us of the power of wit and intelligence in the face of adversity."
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

export {Immortals}