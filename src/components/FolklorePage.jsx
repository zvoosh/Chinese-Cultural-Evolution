import { useState } from "react"
import { MainStoryLine } from "./folkloreStories/MainStoryLine"
import { Journey } from "./folkloreStories/Journey";
import { Kingdoms } from "./folkloreStories/Kingdoms";
import { HoeYi } from "./folkloreStories/HouYi";
import { Immortals } from "./folkloreStories/Immortals";
import { Snake } from "./folkloreStories/Snake";
import { Lovers } from "./folkloreStories/Lovers";

const FolklorePage = () => {

    const [activeTitle, setActiveTitle] = useState(0);

    const folkTitle = ['We have prepared a few excerpts from stories.', 'Journey to the West (西游记)', 'Romance of the Three Kingdoms (三国演义)', "The Legend of Hou Yi and Chang'e (后羿与嫦娥)", "The Eight Immortals (八仙)" , "The Legend of the White Snake (白蛇传)", "The Butterfly Lovers (梁山伯与祝英台)"]

    return (
        <div className="w-100 h-100 bg-green overflowHelp">
            <div className="folklorePageTitle">Folklore of China</div>
            <div className="mainPageText">
            China takes pride in its rich tradition of folklore, featuring a multitude of cherished stories embraced by both the young and the old. This diverse tapestry includes a wide range of myths, legends, and narratives passed down through generations, serving as reflections of China's cultural, historical, and philosophical facets. Taoism, Confucianism, and Buddhism have significantly influenced Chinese folk tales. Each of these stories incorporates representations of objects and animals, delivering symbolic messages through its characters. Typically, these tales aim to impart virtuous insights to the reader, using various mediums, both traditional and modern, for sharing and preserving this cultural heritage.
            </div>
            <div className="divWrap">
                <div className="carouselWrapper bg-red">
                    <div className="arrowdisplay">
                        <div className="arrowStyle" onClick={() => {
                        setActiveTitle((prev) => {
                            if (prev === 0) {
                                return 0;
                            }
                            return --prev
                        })
                    }}>{"<"}</div>
                        <div className="cardTitle">{folkTitle[activeTitle]}</div>
                        <div className="arrowStyle" onClick={() => {
                        setActiveTitle((prev) => {
                            if (prev === folkTitle.length - 1) {
                                return folkTitle.length - 1;
                            }
                            return ++prev;
                        })
                    }}>{">"}</div>
                    </div>
                    {activeTitle == 0 && (
                        <MainStoryLine/>
                    )}
                    {activeTitle == 1 && (
                        <Journey/>
                    )}
                    {activeTitle == 2 && (
                        <Kingdoms/>
                    )}
                    {activeTitle == 3 && (
                        <HoeYi/>
                    )}
                    {activeTitle == 4 && (
                        <Immortals/>
                    )}
                    {activeTitle == 5 && (
                        <Snake/>
                    )}
                    {activeTitle == 6 && (
                        <Lovers/>
                    )}
                </div>
            </div>
        </div>
    )
}

export {FolklorePage}