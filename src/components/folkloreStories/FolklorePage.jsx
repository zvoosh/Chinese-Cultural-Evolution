import { useState } from "react"
import { Journey, Kingdoms, HoeYi, Immortals, Snake, Lovers, DefaultStory } from ".";

const FolklorePage = () => {

    const [activeTitle, setActiveTitle] = useState(0);

    const folkTitle = ['We have prepared a few excerpts from stories.', 'Journey to the West (西游记)', 'Romance of the Three Kingdoms (三国演义)', "The Legend of Hou Yi and Chang'e (后羿与嫦娥)", "The Eight Immortals (八仙)" , "The Legend of the White Snake (白蛇传)", "The Butterfly Lovers (梁山伯与祝英台)"]

    return (
        <div className="w-100 h-100 bg-green overflowHelp">
            <div className="carouselContinterFolklore">
                <div className="contFolk">
                    <div className="goLeftIconFolk" onClick={() => {
                            setActiveTitle((prev) => {
                                if (prev === 0) {
                                    return 0;
                                }
                                return --prev
                            })
                        }}>
                            {"<"}
                    </div>
                    <div className="folkNesto">
                    {activeTitle == 0 && (
                        <DefaultStory/>
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
                        <div>
                    </div>
                    <div className="goRightIconFolk" onClick={() => {
                            setActiveTitle((prev) => {
                                if (prev === folkTitle.length - 1) {
                                    return folkTitle.length - 1;
                                }
                                return ++prev;
                            })
                        }}>
                            {">"}
                        </div>
                </div>
            </div>
        </div>
    )
}

export {FolklorePage}