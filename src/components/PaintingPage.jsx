import { useState } from "react";
import { InkWash } from "./paintingStyles/InkWash";
import { Gongbi } from "./paintingStyles/Gongbi";
import { Xieyi } from "./paintingStyles/Xieyi";
import { LandscapePainting } from "./paintingStyles/LandscapePainting";
import { BirdFlower } from "./paintingStyles/BirdFlower";
import { Baimiao } from "./paintingStyles/Baimiao";
import { Realistic } from "./paintingStyles/Realistic";

const PaintingPage = () => {

    const [activeTitle, SetActiveTitle] = useState(0);


    const titles = ['Ink and Wash Painting (Shuǐmò Huà 水墨画)', 'Gongbi (工笔画)', 'Xieyi (写意画)', 'Landscape Painting (Shānshuǐ Huà 山水画)', 'Bird-and-Flower Painting (Huāniǎo Huà 花鸟画)', 'Baimiao (白描)', 'Realistic Painting (Zhēnxìng Huà 真性画)']

    return (
        <div className="w-100 h-100 bg-green mobileHelp">
            <div className="pr-1 pt-1 pl-1">
                <div className="flex justify-center w-100 mb-1">
                    <div className="pointer" onClick={() => {
                        SetActiveTitle((prev) => {
                            if (prev === 0) {
                                return 0;
                            }
                            return --prev
                        })
                    }}>
                        {'<'}
                    </div>
                    <div className="titlePaint">
                        {titles[activeTitle]}
                    </div>
                    <div className="pointer" onClick={() => {
                        SetActiveTitle((prev) => {
                            if (prev === titles.length - 1) {
                                return titles.length - 1;
                            }
                            return ++prev;
                        })
                    }}>
                        {'>'}
                    </div>
                </div>
                {titles[activeTitle] === titles[0] && (
                    <InkWash />
                )}
                {titles[activeTitle] === titles[1] && (
                    <Gongbi />
                )}
                {titles[activeTitle] === titles[2] && (
                    <Xieyi />
                )}
                {titles[activeTitle] === titles[3] && (
                    <LandscapePainting />
                )}
                {titles[activeTitle] === titles[4] && (
                    <BirdFlower />
                )}
                {titles[activeTitle] === titles[5] && (
                    <Baimiao />
                )}
                {titles[activeTitle] === titles[6] && (
                    <Realistic />
                )}

            </div>
        </div>
    );
}

export { PaintingPage }