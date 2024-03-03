import { Progress } from "antd";
import { useEffect, useState } from "react";
import { CiPause1 } from "react-icons/ci";
import { GoDot, GoDotFill } from "react-icons/go";
import { SlControlStart } from "react-icons/sl";


const HoeYi = () => {
    const [isIndex, SetIsIndex] = useState(0);
    const [isStopIcon, setIsStopIcon] = useState(true);
    const [loaderWidth, setLoadedWidth] = useState(0);
    const [isInterval, setIsInterval] = useState(5000);
    const interval = 5000;
    const indexArr = [0,1,2,3,4];


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
                    SetIsIndex(4);
                    setLoadedWidth(0);
                }
                if(isIndex === 4){
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
    The Legend of Hou Yi and Chang'e (后羿与嫦娥) excerpts:
    </div>
    <div className="textWrap">
        
        {isIndex === 0 && (
        <div  className="trans">
    <div className="mb-1 bold font-12 mt-1">
        Description:
        </div>
        <div className="paragraph-hold">"The Legend of Hou Yi and Chang'e" is a classic Chinese myth that has been passed down through generations, captivating audiences with its timeless tale of love, sacrifice, and the eternal bond between separated lovers.

The story begins in ancient times, when the earth was plagued by the scorching heat of ten suns that blazed relentlessly in the sky. To save humanity from destruction, the heroic archer Hou Yi emerged, shooting down nine of the suns with his unparalleled skill with the bow, thus restoring balance to the world.

As a reward for his bravery, Hou Yi was gifted the Elixir of Immortality by the Queen Mother of the West. However, torn between the desire for immortality and his love for his wife, Chang'e, Hou Yi chose not to consume the elixir.

Moved by her husband's love and selflessness, Chang'e made a sacrifice of her own, consuming the elixir herself and ascending to the moon, becoming the Goddess of the Moon. Thus, the lovers were forever separated, with Hou Yi remaining on earth while Chang'e resided in the heavens.

Despite their separation, their love endured through the ages, symbolized by their longing gazes at each other during the full moon. Their story became a poignant reminder of the enduring power of love and sacrifice, inspiring generations with its timeless beauty and universal themes.</div>  
            </div>
        )}
        {isIndex === 1 && (
            <div className="trans">
    <div className="mb-1 bold  mt-1">
        The Archer and the Ten Suns (First excerpt):
    </div>
    <div>
    "In the ancient realm of China, a great calamity befell the land as ten suns blazed fiercely in the sky, scorching the earth and withering crops. Rivers dried up, forests turned to ash, and humanity faced the brink of extinction under the relentless heat.

In this dire hour, the heroic figure of Hou Yi emerged, renowned throughout the land for his unmatched skill with the bow. Hearing the cries of suffering from his people, Hou Yi vowed to bring an end to the disaster and restore balance to the world.

With determination burning in his heart, Hou Yi embarked on a perilous journey to confront the celestial scourge. Drawing his bow with precision honed through years of training, he took aim at the suns, each arrow a testament to his unwavering resolve.

One by one, the arrows soared through the sky, piercing the fiery orbs with unerring accuracy. Nine suns fell from their celestial perch, extinguished by the arrows of the mighty archer, until only one remained to illuminate the world.

As the final sun hung in the sky, casting its gentle light upon the earth, Hou Yi's deeds were hailed as a triumph of courage and heroism. The people rejoiced, offering prayers of gratitude to the archer who had saved them from certain doom.

But amidst the celebrations, Hou Yi remained humble, knowing that his task was far from complete. With the balance of the world restored, he turned his thoughts to the future, determined to safeguard the peace and prosperity of his homeland."
    </div>  
            </div>
        )}
        {isIndex === 2 && (
            <div  className="trans">
    <div className="mt-1 bold  mb-1">
        The Elixir of Immortality (Tripitaka) (Second excerpts):
    </div>
    <div>
    "After vanquishing the ten suns and earning the admiration of his people, the legendary archer Hou Yi found himself bestowed with a great reward – the Elixir of Immortality, gifted by the Queen Mother of the West herself.

Crafted from the essence of the celestial realm, the elixir held the power to grant eternal life to those who partook of its divine nectar. Yet, despite the allure of immortality, Hou Yi hesitated to indulge in its tempting promise.

For within his heart, Hou Yi harbored a deep love for his wife, Chang'e, whose radiant presence filled his life with joy and meaning. To partake of the elixir would mean an eternity without her, an eternity of loneliness and separation.

In his inner turmoil, Hou Yi sought counsel from wise sages and revered elders, seeking guidance on the path he should take. Yet, in the end, it was his love for Chang'e that guided his decision, for he could not bear the thought of an existence without her by his side.

And so, with a heavy heart and a steadfast resolve, Hou Yi chose to forego the temptations of immortality, opting instead to remain mortal and cherish the fleeting moments he shared with his beloved wife.

Moved by her husband's selflessness and devotion, Chang'e made a sacrifice of her own, consuming the elixir herself on the fifteenth day of the eighth lunar month. In doing so, she ascended to the moon, becoming the immortal Goddess of the Moon, forever separated from her mortal husband.

Yet, even in their eternal separation, the love between Hou Yi and Chang'e endured, transcending the boundaries of time and space. Each full moon, they would gaze upon each other from afar, their hearts filled with longing and affection, their bond unbroken by the passage of centuries." </div>
            </div>
        )}
    {isIndex === 3 && (
        <div  className="trans">
    <div className="mt-1 bold  mb-1">
        The Yearning of Separated Lovers (Third excerpt)
    </div>
    <div>
    "Separated by the vast expanse of the heavens, Hou Yi and Chang'e found themselves bound by the cruel whims of fate, their love transcending the boundaries of mortal existence. Each full moon served as a poignant reminder of their eternal separation, as they gazed upon each other from opposite ends of the celestial realm.

For Hou Yi, the sight of Chang'e's radiant figure dancing across the moon's surface filled his heart with longing and sorrow. Though he could not reach her, he found solace in the knowledge that she was safe and immortal, her beauty forever preserved in the silver light of the moon.

As for Chang'e, the moon became both her sanctuary and her prison, a realm of eternal solitude where she wandered in silent contemplation. Though she reveled in her newfound immortality, her heart ached for the mortal life she had left behind, for the touch of her beloved husband and the warmth of his embrace.

Yet, despite the vastness of space and the passage of time, the bond between Hou Yi and Chang'e remained unbroken, their love enduring through the ages like a beacon of hope in the darkness of the night. With each passing moonrise, they would exchange silent vows of devotion, their hearts united in a love that transcended the boundaries of heaven and earth.

And so, the legend of Hou Yi and Chang'e became a symbol of eternal love and longing, inspiring generations with its poignant tale of separated lovers yearning for reunion amidst the vastness of the cosmos. Though they may be worlds apart, their love remains as steadfast as the moon itself, shining bright in the endless expanse of the night sky."
 </div>
        </div>
    )}
    {isIndex === 4 && (
        <div  className="trans">
    <div className="mt-1 bold  mb-1">
        The Eternal Love Story (Fourth excerpt)
    </div>
    <div>"As the cycles of the moon waxed and waned, the legend of Hou Yi and Chang'e became etched into the fabric of time, a timeless tale of love's enduring power. Across generations, their story captivated the hearts of countless souls, inspiring poets, artists, and lovers alike with its timeless beauty and poignant symbolism.

In the quiet of the night, under the soft glow of the moon, people would gather to share the tale of the celestial lovers, their voices rising in reverence and awe. For in the legend of Hou Yi and Chang'e, they found solace in the midst of life's trials and tribulations, a reminder that true love transcends the boundaries of space and time.

Through poetry and song, art and literature, the eternal love story of Hou Yi and Chang'e found expression in myriad forms, each one a testament to the enduring power of the human heart. From ancient scrolls to modern-day films, their tale continued to captivate audiences around the world, its message of love and sacrifice resonating across cultures and centuries.

And so, as the moon rose high in the night sky, casting its gentle light upon the earth, people would gaze upon its luminous beauty with hearts full of longing and hope. For in the silvery orb that graced the heavens, they saw the reflection of their own desires and dreams, and the eternal love that bound Hou Yi and Chang'e together for all eternity."</div>
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
        <div className="story-dots" onClick={()=>{
            SetIsIndex(4)
            }}>{isIndex == 4 ? <GoDotFill/> : <GoDot/> }</div>
        </div>
</div>
</div>                        
</div>
    )
}

export {HoeYi}