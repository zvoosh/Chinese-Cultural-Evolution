import { useState } from "react";
import { AncientChina } from "./sculpture/ancientChina";
import { Buddhist } from "./sculpture/Buddhist";
import { TangAndSong } from "./sculpture/TangAndSong";
import { MingAndQing } from "./sculpture/MingAndQing";
import { Modern } from "./sculpture/Modern";

const SculptingPage = () => {
    
    const [activeTitle, setActiveTitle] = useState(0);

    const pageTitles = ["Ancient China", "Buddhist Sculpture", "Tang and Song Dynasties (618–1279)", "Ming and Qing Dynasties (1368–1912)", "Contemporary Chinese Sculpture"]

    return (
        <div className="w-100 h-100 bg-green overflow">
            <div className="white font-15 pt-1 bold letter-spacing-01 text-center">
            <div className="arrowdisplay pl-2 pr-2">
                <div className="arrowStyle" onClick={() => {
                    setActiveTitle((prev) => {
                        if (prev === 0) {
                            return 0;
                        }
                        return --prev
                    })
                        }}>{"<"}</div>
                <div>{pageTitles[activeTitle]}</div>
                <div className="arrowStyle" onClick={() => {
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
            {/* 
            {activeTitle == 5 && (
                <Snake/>
            )}
            {activeTitle == 6 && (
                <Lovers/>
            )} */}
        </div>
    );
}

export {SculptingPage}