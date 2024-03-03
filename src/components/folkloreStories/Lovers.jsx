import { Progress } from "antd";
import { useEffect, useState } from "react";
import { CiPause1 } from "react-icons/ci";
import { GoDot, GoDotFill } from "react-icons/go";
import { SlControlStart } from "react-icons/sl";


const Lovers = () => {
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
    The Butterfly Lovers (梁山伯与祝英台) excerpts:
    </div>
    <div className="textWrap">
        
        {isIndex === 0 && (
        <div  className="trans">
    <div className="mb-1 bold font-12 mt-1">
        Description:
        </div>
        <div className="paragraph-hold">
        "The Butterfly Lovers" (梁山伯与祝英台), also known as "The Legend of Liang Shanbo and Zhu Yingtai," is a timeless Chinese folktale that has captivated audiences for centuries with its poignant portrayal of love, sacrifice, and the enduring power of the human spirit.

Set against the backdrop of ancient China, the story follows the fateful journey of two star-crossed lovers, Liang Shanbo and Zhu Yingtai, whose forbidden romance defies the rigid social conventions of their time. Liang Shanbo, a humble scholar of modest means, and Zhu Yingtai, the daughter of a wealthy nobleman, form an unlikely bond of friendship and affection during their years together as classmates. Unbeknownst to Liang, Zhu Yingtai disguises herself as a young man in order to pursue her education and explore the world beyond the confines of her gilded cage.

As their friendship blossoms into love, Liang and Zhu find themselves drawn together by a passion that transcends the boundaries of class and convention. But their happiness is short-lived, as societal norms and familial expectations stand as insurmountable barriers to their union. Forced to part ways by the dictates of their families, Liang and Zhu are torn asunder, their hearts heavy with sorrow and longing.

Despite the obstacles that stand in their way, Liang and Zhu remain steadfast in their love for each other, determined to defy the conventions of their time and seize their own destiny. But their love is put to the ultimate test as they are forced to confront the harsh realities of life and the cruel hand of fate.

With its timeless themes of love, sacrifice, and the pursuit of happiness, "The Butterfly Lovers" continues to resonate with audiences around the world, inspiring countless adaptations in literature, theater, film, and music. Through its poignant portrayal of the human experience, the tale of Liang Shanbo and Zhu Yingtai serves as a powerful reminder of the enduring power of love to overcome even the greatest of obstacles.
    </div>  
            </div>
        )}
        {isIndex === 1 && (
            <div className="trans">
    <div className="mb-1 bold  mt-1">
        The Blossoming of Love (First excerpt):
    </div>
    <div>
    "As Liang Shanbo and Zhu Yingtai spent more time together, their bond of friendship deepened into a love that blossomed like the cherry blossoms in springtime, vibrant and full of life. With each passing day, their hearts beat in harmony, their souls intertwined in a dance of passion and longing.

Liang Shanbo, with his kind eyes and gentle smile, found himself drawn to Zhu Yingtai's radiant beauty and quick wit. In her presence, he felt a sense of peace and contentment that he had never known before, as if he had found the missing piece of his soul.

Similarly, Zhu Yingtai found solace and companionship in Liang Shanbo's steadfast presence and unwavering support. With him, she could be herself without fear or reservation, her true essence laid bare for him to see and cherish.

Their love blossomed in the quiet moments they shared together, whether strolling hand in hand through the verdant fields or exchanging stolen glances across the crowded classroom. Each glance, each touch, each word spoken between them was imbued with a depth of feeling that transcended the boundaries of mere friendship, forging a connection that was as undeniable as it was undeniable.

Yet, beneath the surface of their idyllic romance lurked the shadow of an uncertain future, for the societal norms and familial expectations of their time posed a formidable barrier to their union. As the daughter of a wealthy nobleman, Zhu Yingtai was bound by duty and tradition to marry according to her father's wishes, while Liang Shanbo, a humble scholar of modest means, had little to offer in the way of material wealth or social status.

Despite the obstacles that lay before them, Liang Shanbo and Zhu Yingtai remained steadfast in their love and commitment to each other, determined to defy the conventions of their time and seize their own destiny. Little did they know that their love would be tested in ways they could never have imagined, leading them down a path of heartache and despair."
    </div>  
            </div>
        )}
        {isIndex === 2 && (
            <div  className="trans">
    <div className="mt-1 bold  mb-1">
        The Tragic Separation (Second excerpts):
    </div>
    <div>
    "As the days turned into weeks and the weeks into months, the bond between Liang Shanbo and Zhu Yingtai grew stronger, their love for each other burning brighter with each passing moment. Yet, despite their deep affection and unwavering commitment to each other, the cruel hand of fate conspired to tear them apart, casting a shadow over their once-bright future.

Forced to part ways by the dictates of their families and the rigid expectations of society, Liang Shanbo and Zhu Yingtai found themselves torn asunder, their hearts heavy with sorrow and longing. Though they vowed to remain true to each other, their love was put to the ultimate test as they were separated by distance and circumstance.

Zhu Yingtai, bound by duty and tradition, was betrothed to another against her will, her fate sealed by the whims of her father and the demands of propriety. Meanwhile, Liang Shanbo, powerless to intervene, could only watch helplessly as the woman he loved was whisked away from him, her hand promised to another in marriage.

As they stood on the threshold of their tragic separation, Liang Shanbo and Zhu Yingtai exchanged tearful farewells, their hearts heavy with grief and despair. Though they clung to the hope of a future reunion, their dreams were shattered by the harsh realities of life and the merciless passage of time.

With a heavy heart, Liang Shanbo bid farewell to the woman he loved, his spirit broken and his soul consumed by sorrow. Alone and adrift in a world that had turned against him, he wandered the countryside, his thoughts consumed by memories of the love he had lost and the dreams that had been dashed.

Meanwhile, Zhu Yingtai resigned herself to her fate, her heart torn between duty and desire, as she prepared to enter into a loveless marriage that offered little hope of happiness or fulfillment. Though she longed for the embrace of the man she loved, she knew that their love was doomed from the start, destined to be nothing more than a bittersweet memory of what could have been.

As they embarked on their separate journeys, Liang Shanbo and Zhu Yingtai carried with them the pain of their tragic separation, their hearts forever scarred by the wounds of love lost and dreams shattered."
</div>
            </div>
        )}
    {isIndex === 3 && (
        <div  className="trans">
    <div className="mt-1 bold  mb-1">
        The Ultimate Sacrifice (Third excerpt)
    </div>
    <div>
    "In a final act of desperation and defiance, Zhu Yingtai revealed her true identity to Liang Shanbo, hoping against hope that their love could transcend the barriers of class and convention. With tears streaming down her cheeks, she confessed her love for him and begged for his forgiveness, her heart laid bare before him in a moment of raw vulnerability.

    Liang Shanbo, his heart heavy with sorrow and regret, listened in stunned silence as Zhu Yingtai poured out her soul, her words echoing in the stillness of the night like a haunting melody. Though he longed to hold her in his arms and declare his undying love, he knew that their fate had already been sealed by the cruel hand of destiny.

    With a heavy heart, Liang Shanbo bid farewell to Zhu Yingtai, his spirit broken and his soul consumed by grief. As she disappeared into the darkness, a sense of despair washed over him, his world collapsing around him like a house of cards.

    But even in the depths of despair, Liang Shanbo clung to a glimmer of hope, his love for Zhu Yingtai burning brighter than ever before. Determined to defy the forces that sought to tear them apart, he resolved to fight for their love until his dying breath, his spirit unyielding in the face of adversity.

    Meanwhile, Zhu Yingtai, burdened by the weight of her secret and the pain of her betrayal, prepared to enter into a loveless marriage that offered little hope of happiness or fulfillment. Though her heart ached with longing for the man she loved, she knew that their love was doomed from the start, destined to be nothing more than a bittersweet memory of what could have been.

    As their paths diverged and their destinies unfolded, Liang Shanbo and Zhu Yingtai each made the ultimate sacrifice for the sake of their love, their spirits bound together for eternity in a bond that transcended the boundaries of time and space. Though their earthly journey had come to an end, their love would live on forever in the annals of history, a testament to the power of love and the resilience of the human spirit."
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

export {Lovers}