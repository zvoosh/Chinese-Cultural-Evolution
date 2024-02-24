import { useState } from "react";
import { AncientChina } from "./ancientChina";
import { Buddhist } from "./Buddhist";
import { TangAndSong } from "./TangAndSong";
import { MingAndQing } from "./MingAndQing";
import { Modern } from "./Modern";

const SculptingPage = () => {
    
    const [activeTitle, setActiveTitle] = useState(0);

    const pageTitles = ["Ancient China", "Buddhist Sculpture", "Tang and Song Dynasties (618–1279)", "Ming and Qing Dynasties (1368–1912)", "Contemporary Chinese Sculpture"]

    return (
        <div className="w-100 h-100 bg-green overflow">
            <div className="white  pt-1 bold letter-spacing-01 text-center">
            <div className="contSculpt">
                <div className="goLeftIconSculpt" onClick={() => {
                    setActiveTitle((prev) => {
                        if (prev === 0) {
                            return 0;
                        }
                        return --prev
                    })
                        }}>{"<"}</div>
                <div className="ancient-text-below-headline">{pageTitles[activeTitle]}</div>
                <div className="goRightIconSculpt" onClick={() => {
                        setActiveTitle((prev) => {
                            if (prev === pageTitles.length - 1) {
                                return pageTitles.length - 1;
                            }
                            return ++prev;
                        })
                    }}>{">"}</div>
                </div>
            </div>
            
            {activeTitle == 0 && (
                    <AncientChina/>
            )}
            {activeTitle == 1 && (
                <Buddhist/>
            )}
            {activeTitle == 2 && (
                <TangAndSong/>
            )}
            {activeTitle == 3 && (
                <MingAndQing/>
            )}
            {activeTitle == 4 && (
                <Modern/>
            )}
        </div>
    );
}

export {SculptingPage}