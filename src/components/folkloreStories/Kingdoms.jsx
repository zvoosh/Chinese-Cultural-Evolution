import { Progress } from "antd";
import { useEffect, useState } from "react";
import { CiPause1 } from "react-icons/ci";
import { GoDot, GoDotFill } from "react-icons/go";
import { SlControlStart } from "react-icons/sl";


const Kingdoms = () => {
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
    Romance of the Three Kingdoms (三国演义) excerpts:
    </div>
    <div className="textWrap">
        
        {isIndex === 0 && (
        <div  className="trans">
    <div className="mb-1 bold font-12 mt-1">
        Description:
        </div>
        <div className="paragraph-hold">"Romance of the Three Kingdoms" (三国演义) is one of China's most celebrated and influential classical novels, attributed to the writer Luo Guanzhong during the 14th century Ming Dynasty. This epic saga chronicles the tumultuous period of the Three Kingdoms era in Chinese history, spanning from the end of the Han Dynasty to the reunification of China under the Jin Dynasty.

At its core, "Romance of the Three Kingdoms" is a grand tapestry of political intrigue, military strategy, heroic deeds, and profound moral lessons. The novel vividly portrays the struggles and conflicts among warlords, generals, and rulers as they vie for supremacy and control over the fragmented empire.

Key themes explored in the novel include loyalty and betrayal, honor and treachery, ambition and righteousness, as well as the rise and fall of dynasties. Through its rich cast of characters and intricate plotlines, the novel offers profound insights into human nature, the complexities of power, and the consequences of ambition and greed.

"Romance of the Three Kingdoms" is divided into three main parts: the turbulent end of the Han Dynasty, the period of division and warfare among the three rival kingdoms of Wei, Shu, and Wu, and the eventual reunification of China under the Jin Dynasty.

Throughout its narrative, the novel features iconic characters such as Liu Bei, Cao Cao, Sun Quan, Guan Yu, Zhang Fei, Zhuge Liang, and many others, each with their own strengths, weaknesses, and motivations. Their actions and interactions shape the course of history, as alliances are forged and broken, battles are fought and won, and empires rise and fall.
</div>  
            </div>
        )}
        {isIndex === 1 && (
            <div className="trans">
    <div className="mb-1 bold  mt-1">
        Introduction of the Chaos in the Han Dynasty (First excerpt):
    </div>
    <div>
    "As the once-mighty Han Dynasty entered its twilight years, the realm was plunged into a maelstrom of chaos and uncertainty. Corruption ran rampant within the imperial court, with eunuchs exerting undue influence and sowing discord among the ruling elite. Meanwhile, ambitious warlords seized upon the empire's vulnerabilities, vying for power and control over the fragmented land.

The imperial capital of Luoyang, once a beacon of civilization and prosperity, became a den of intrigue and treachery, as rival factions plotted and schemed to further their own interests. The emperors, mere puppets in the hands of their manipulative advisers, struggled to maintain control over their faltering dynasty.

Outside the walls of Luoyang, the countryside was ravaged by famine, disease, and banditry, as the central government's authority waned and local officials turned a blind eye to the suffering of the common people. Peasant uprisings erupted across the empire, fueled by grievances against the oppressive landlord class and the corrupt bureaucracy.

Amidst this turmoil, whispers of rebellion echoed throughout the land, as men of ambition and courage sought to carve out their own destinies in the crucible of war. Heroes and villains alike emerged from the chaos, their fates intertwined with the fate of the empire itself.

It was against this backdrop of uncertainty and strife that the stage was set for the dramatic events that would unfold in the years to come. The Han Dynasty, once the pinnacle of civilization in the East, now stood on the brink of collapse, its future hanging in the balance as the winds of change swept across the land."
    </div>  
            </div>
        )}
        {isIndex === 2 && (
            <div  className="trans">
    <div className="mt-1 bold  mb-1">
        The Oath of Brotherhood (Second excerpts):
    </div>
    <div>
    "As the shadows of chaos loomed large over the land, three men of noble spirit and unyielding determination stood beneath the blossoming branches of a peach tree, their hearts united in a solemn oath of brotherhood.

Liu Bei, a descendant of the imperial Han lineage, embodied the virtues of righteousness, compassion, and humility. Guan Yu, a valiant warrior of unmatched prowess, wielded his trusty blade with honor and integrity. Zhang Fei, a fiery and tempestuous soul, bore the strength and courage of a fierce tiger.

Bound by a shared sense of duty and a burning desire to restore peace and order to the realm, they clasped hands and swore a sacred vow to stand together through adversity and triumph, to uphold justice and righteousness in the face of tyranny and corruption.

Beneath the pink petals of the peach tree, their voices rose in unison, echoing across the tranquil garden as they pledged their loyalty to one another and to the noble cause they had embraced. United by their common purpose and unwavering resolve, they embarked on a journey that would test the limits of their courage and the strength of their bonds.

Through countless battles and trials, victories and defeats, the bond between Liu Bei, Guan Yu, and Zhang Fei remained unbroken, a beacon of hope in a world shrouded in darkness. Theirs was a brotherhood forged in the fires of adversity, tempered by the trials of war, and bound by the ties of blood and honor.

And so, as they set forth on their quest to fulfill their destiny and carve out a new future for the land, the echoes of their oath lingered in the air, a solemn reminder of the unbreakable bond that bound them together as brothers in arms."
</div>
            </div>
        )}
    {isIndex === 3 && (
        <div  className="trans">
    <div className="mt-1 bold  mb-1">
        The Battle of Red Cliffs (Third excerpt)
    </div>
    <div>
    "As the forces of Liu Bei and Sun Quan prepared to face the mighty army of Cao Cao at Red Cliffs, the fate of the empire hung in the balance. The river churned with anticipation, its currents echoing the tension that gripped the land.

Under the cover of darkness, the allied forces devised a daring plan to turn the tide of battle in their favor. Utilizing the element of surprise and the power of deception, they lured Cao Cao's vast navy into a deadly trap, setting the stage for one of the most epic confrontations in the annals of Chinese history.

As the first light of dawn broke across the horizon, the two armies clashed with thunderous fury, their shouts of defiance mingling with the clash of steel and the roar of cannon fire. Amidst the chaos and confusion of the battlefield, heroes emerged on both sides, their valor and sacrifice shaping the course of the conflict.

On the banks of the river, Guan Yu wielded his legendary weapon, the Green Dragon Crescent Blade, with unmatched skill and ferocity, cleaving through enemy ranks with the force of a raging tempest. Zhang Fei, his spear flashing like lightning in the dim light, led the charge against Cao Cao's vanguard, his mighty roar striking fear into the hearts of his foes.

Meanwhile, on the flagship of the allied fleet, Zhou Yu and Zhuge Liang orchestrated the battle from afar, their strategic brilliance guiding the movements of their forces with precision and cunning. Through a series of clever maneuvers and daring tactics, they exploited the weaknesses of their enemy, turning the tide of battle decisively in their favor.

As the day wore on and the sun dipped below the horizon, the waters of the river ran red with the blood of fallen warriors, a testament to the fierce determination and unyielding resolve of those who fought and died on the field of battle. And when the dust settled and the echoes of conflict faded into the distance, the allied forces emerged victorious, their triumph heralding a new era of hope and possibility for the land."
 </div>
        </div>
    )}
    {isIndex === 4 && (
        <div  className="trans">
    <div className="mt-1 bold  mb-1">
    The Legacy of Zhuge Liang (Fourth excerpt)
    </div>
    <div>
    "Zhuge Liang, known as the 'Sleeping Dragon,' left an indelible mark on the pages of history with his unparalleled intellect, strategic brilliance, and unwavering commitment to the cause of righteousness and justice.

As the chief advisor to Liu Bei, Zhuge Liang played a pivotal role in shaping the destiny of the Shu Han kingdom, guiding his lord with wisdom and foresight through the turbulent currents of war and politics.

With his mastery of military strategy and statecraft, Zhuge Liang devised ingenious plans and cunning schemes that confounded his enemies and secured victory for his allies. From the legendary Empty Fort Strategy to the famed Longzhong Plan, his tactical genius earned him the admiration and respect of friend and foe alike.

Yet, Zhuge Liang's legacy extended far beyond the battlefield, encompassing a wide array of contributions to the fields of governance, administration, and culture. He implemented reforms to improve the welfare of the people, promoted education and scholarship, and fostered a spirit of harmony and cooperation within the kingdom.

But perhaps Zhuge Liang's greatest legacy lay in his unwavering commitment to the principles of benevolence, integrity, and humility. Despite his immense talents and achievements, he remained humble and self-effacing, always placing the needs of others above his own and seeking to serve the greater good with unwavering dedication.

Even in death, Zhuge Liang's legacy endured, as his wisdom and virtues continued to inspire generations of scholars, statesmen, and leaders. His name became synonymous with excellence and virtue, a shining example of the heights that could be reached through diligence, integrity, and compassion.

And so, as the annals of history recorded the deeds of the great heroes and statesmen of the Three Kingdoms era, Zhuge Liang's name stood among them, a testament to the enduring power of intellect, integrity, and the indomitable spirit of the human heart."
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
        <div className="story-dots" onClick={()=>{
            SetIsIndex(4)
            }}>{isIndex == 4 ? <GoDotFill/> : <GoDot/> }</div>
        </div>
</div>
</div>                        
</div>
    )
}

export {Kingdoms}