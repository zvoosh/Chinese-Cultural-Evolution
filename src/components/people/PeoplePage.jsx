import { useState } from "react";


const PeoplePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const titles = ["CHINA AND HER PEOPLE", "WESTERN CHINA", "EASTERN CHINA", "SOUTHERN CHINA", "NORTHERN CHINA", "CENTRAL CHINA", "HIMALAYAS", "Tian Shan Moutains"];

    const texts = [
        "China is an incredibly diverse country with a rich tapestry of cultures, languages, and ethnic groups. The differences in culture and physical appearance among various regions and ethnic groups in China can be significant.In terms of language and dialects, Mandarin serves as the official language, yet numerous regions boast their own dialects or languages, including Cantonese, Shanghainese, Hokkien, Tibetan, Uighur, and more.Cuisine exhibits diversity across the country, with each region showcasing unique culinary specialties; for instance, Sichuan cuisine (Southwestern China) is renowned for its spicy flavors, while Cantonese (Southeastern China) cuisine places emphasis on freshness and subtlety.Traditional customs also vary among regions, with distinct practices, festivals, and ceremonies; for example, the customs observed during the Chinese New Year may differ significantly from one region to another."
        ,
        "Western China encompasses six provinces (Sichuan, Guizhou, Yunnan, Shaanxi, Gansu, and Qinghai), three autonomous regions (Tibet, Ningxia, and Xinjiang), and one directly-administered municipality (Chongqing).The development and formation of Western China, as a distinct geographical and administrative region, have been shaped by a combination of historical, geographical, and political factors.The western part of China has been home to ancient civilizations, and the establishment of trade routes, particularly the Silk Road, facilitated cultural exchanges and economic activities. This connected the region with Central Asia, the Middle East, and Europe.Throughout different Chinese dynasties, the western regions were often incorporated into the Chinese empire, although the extent of control varied. The Tang Dynasty, in particular, played a significant role in facilitating trade and cultural exchanges along the Silk Road.The influence of Tibetan culture and Buddhism is particularly notable in areas that are now part of the Tibet Autonomous Region.In recent decades, Western China has been the focus of economic development initiatives by the Chinese government. Infrastructure projects, urbanization, and efforts to reduce regional disparities have played a role in shaping the modern identity and significance of Western China."
        ,
        "Eastern China has a long history of ancient civilizations, with the Yellow River and Yangtze River valleys being centers of early Chinese civilization.The fertile plains and suitable climate in these regions supported the development of agriculture, contributing to the growth of settled communities.Throughout various Chinese dynasties, the eastern part of the country served as the political and economic heartland. Key dynasties, such as the Shang, Zhou, and Qin, established their capitals and power centers in the east.The Yangtze River Delta and the North China Plain played crucial roles in the political and economic life of Imperial China.The eastern regions, particularly areas around the Yangtze River Delta, became hubs of cultural and economic activity. Trade, commerce, and cultural exchanges flourished in cities like Suzhou, Hangzhou, and Nanjing.During the late 19th and early 20th centuries, Eastern China experienced significant industrialization and modernization. Cities like Shanghai became key economic and financial centers.Eastern China's cities, including Shanghai and Beijing, underwent rapid urbanization and infrastructure development. This included the construction of modern transportation networks, high-speed railways, and advanced industrial zones.The coastal provinces have often been more economically developed than the western and central regions."
        ,
        "Southern China has a rich history of ancient civilizations, with evidence of early human habitation dating back thousands of years.The region is characterized by cultural diversity, with various ethnic groups contributing to its unique cultural tapestry.Southern China is known for its diverse and often rugged geographical features, including mountains, rivers, and a subtropical climate.The fertile valleys of the Yangtze River and the Pearl River Delta have been crucial for agriculture and settlement.Various historical kingdoms and dynasties, such as the Yue and Nanyue kingdoms, have played a role in the region's history.During different periods of Chinese history, Southern China had a level of autonomy and distinct political entities.In the late 20th century, Southern China experienced significant economic development and became a key driver of the country's economic growth.The economic reforms initiated in the late 20th century, particularly the opening up of China to foreign investment, led to the establishment of special economic zones in Southern China.Cities like Shenzhen and Guangzhou transformed into major economic centers, playing a crucial role in China's rise as a global economic power."
        ,
        "The development of Northern China as a distinct region within the country has been influenced by a combination of historical, geographical, and environmental factors. Northern China, particularly the North China Plain, is home to some of the earliest Chinese civilizations. The fertile soil of the plain facilitated the development of agriculture and settled communities. Ancient cultures, such as the Yangshao and Longshan cultures, thrived in this region. The Yellow River, often referred to as the Mother River, flows through Northern China, shaping the historical development of the region. The cradle of ancient Chinese civilization, with major cities like Xi'an and Luoyang, was situated along the Yellow River. The northern borders of China were historically vulnerable to nomadic invasions, leading to the construction of the Great Wall of China. The wall served as a defensive structure against various nomadic tribes from the north. Invasions by Mongol and later Manchu forces in the medieval period had a significant impact on Northern China. The Yuan Dynasty (1271–1368) and the Qing Dynasty (1644–1912) were established by these conquerors. Beijing, located in Northern China, has been the political and cultural capital of China for centuries. It has served as the seat of power for various dynasties and, in the modern era, as the capital of the People's Republic of China."
        ,
        "Central China includes areas along the middle and lower reaches of the Yangtze River, known as the Yangtze River Basin. Ancient cultures, such as the Liangzhu culture, thrived in this area, contributing to the early development of Chinese civilization. The fertile plains of the Yangtze River Basin provided favorable conditions for agriculture, leading to the establishment of settled communities and early states. The Yangtze River, one of the longest rivers in the world, played a crucial role in transportation, trade, and cultural exchange. Central China has been home to several historical kingdoms and dynasties, including the Wu and Yue states during the Eastern Zhou period. The region witnessed the rise and fall of various dynasties, contributing to its historical and cultural diversity. Cities in Central China, such as Nanjing and Wuhan, have been historical and cultural centers. Nanjing, in particular, has served as a capital for several Chinese dynasties. Central China has been a hub for cultural and intellectual achievements. The region has produced renowned poets, philosophers, and scholars throughout history. In the late 20th century, Central China experienced economic development and urbanization as part of broader national economic reforms. Cities like Wuhan and Changsha became centers for industry and technology. Central China retains a strong cultural identity, with distinct dialects, traditional art forms, and local customs that contribute to the overall cultural richness of the region."
        ,
        "The Himalayan region spans several countries, including India, Nepal, Bhutan, Tibet (part of China), and parts of Pakistan.  Its vast and varied geography, including towering peaks, deep valleys, and high plateaus, has influenced the lifestyles, traditions, and customs of the people living in these areas. The Himalayan region is characterized by a diverse range of ethnic groups, each with its unique language, traditions, and customs. This diversity is a result of historical migrations, interactions, and adaptations to the challenging environment. Religion plays a significant role in shaping Himalayan cultures. Buddhism, Hinduism, Bon, and other indigenous belief systems have had a profound impact on the cultural practices, art, architecture, and daily lives of the people in the region. The Himalayan region historically served as a crossroads for trade and cultural exchange between South Asia and Central Asia. The Silk Road and other ancient trade routes facilitated the movement of goods, ideas, and people, contributing to a blend of cultures. Some Himalayan communities traditionally followed a nomadic way of life, adapting to the seasonal changes in the high-altitude environment. Nomadic cultures have their unique practices, including traditional clothing, housing, and forms of livelihood. Himalayan cultures are often characterized by vibrant festivals, rituals, and ceremonies. Linguistic diversity is a hallmark of the Himalayan region, with numerous languages and dialects spoken. Oral traditions, including folk tales, songs, and storytelling, have played a crucial role in preserving and transmitting cultural values."
        ,
        "The nomadic lifestyle has historically been prevalent among the people of the Tian Shan Mountains. Nomadic cultures adapted to the challenging terrain by moving with their herds of livestock, engaging in seasonal migrations to find suitable grazing lands.  The Turkic and Mongolic ethnic groups have had a significant impact on the cultural landscape of the Tian Shan Mountains. Historical migrations and interactions between these groups have contributed to the linguistic and cultural diversity in the region. The spread of Islam has played a crucial role in shaping the religious and cultural identity of the people in the Tian Shan Mountains. The majority of the population in the region practices Islam, and Islamic traditions have influenced various aspects of life, including architecture, art, and social customs. The people of the Tian Shan Mountains have a rich tradition of handicrafts, including felt-making, carpet weaving, and metalwork. During the Soviet era, the Tian Shan Mountains region came under the influence of the Soviet Union, which had a significant impact on education, governance, and modernization. "
    ]


    return (<>
    
        <div className="w-100 h-100 bg-green overflow-Y">
        {currentIndex != null && (
                <div className="carouselContainer">
                    <div className="cont">
                        <div className="goLeftIcon" onClick={() => {
                            setCurrentIndex((prev) => {
                                if (prev === 0) {
                                    return 0;
                                }
                                return --prev
                            })
                        }}>
                            {"<"}
                        </div>
                        <div className="nestoo">
                            <div className="text-below-headline">
                                {titles[currentIndex]}
                            </div>
                            <div className="text-below-paragraph">
                                {texts[currentIndex]}
                            </div>
                        </div>
                        <div className="goRightIcon" onClick={() => {
                            setCurrentIndex((prev) => {
                                if (prev === titles.length - 1) {
                                    return titles.length - 1;
                                }
                                return ++prev;
                            })
                        }}>
                            {">"}
                        </div>
                    </div>
                </div>
            )}
            <div className="people-flip-cards">
                <div className="people-flip-card">
                    <div className="people-flip-card-inner">
                        <div className="people-flip-card-front">
                                <div className="front-page-image1" >
                                </div>
                        </div>
                        <div className="people-flip-card-back">
                            <p className="card-title">Western China</p>
                            <p className="paragraph-padding">This is a vast and diverse region, including provinces such as Sichuan, Yunnan, Tibet, and Xinjiang. It features high plateaus, mountains, and deserts.</p>
                            <p className="paragraph-padding pb-05">The represented image is featuring individuals originating from the Tibetan region.</p>

                        </div>
                    </div>
                </div>
                <div className="people-flip-card">
                    <div className="people-flip-card-inner">
                        <div className="people-flip-card-front">
                            <div className="front-page-image2">
                            </div>
                        </div>
                        <div className="people-flip-card-back">
                            <p className="card-title">Eastern China</p>
                            <p className="paragraph-padding ">Bejing as represent of China is situated in this region.
                            </p>
                            <p className="paragraph-padding pb-05">It's the capital city of China with the population of over 21 milion people.</p>

                        </div>
                    </div>
                </div>
                <div className="people-flip-card">
                    <div className="people-flip-card-inner">
                        <div className="people-flip-card-front">
                            <div className="front-page-image3">
                            </div>
                        </div>
                        <div className="people-flip-card-back">
                            <p className="card-title">Southern China</p>
                            <p className="paragraph-padding ">This region encompasses provinces like Guangdong, Guangxi, Hainan, and Hong Kong. </p>
                            <p className="paragraph-padding ">It is known for its subtropical climate and is a significant economic and trading hub</p>
                            <p className="paragraph-padding pb-05">This picture is taken of Hongkong.</p>

                        </div>
                    </div>
                </div>
                <div className="people-flip-card">
                    <div className="people-flip-card-inner">
                        <div className="people-flip-card-front">
                            <div className="front-page-image4">
                            </div>
                        </div>
                        <div className="people-flip-card-back">
                            <p className="card-title">Northern China</p>
                            <p className="paragraph-padding ">This region includes provinces like Shanxi, Shaanxi, Hebei, and Inner Mongolia. </p>
                            <p className="paragraph-padding pb-05">It is characterized by a more arid climate and is an important agricultural and historical area.</p>

                        </div>
                    </div>
                </div>
                <div className="people-flip-card">
                    <div className="people-flip-card-inner">
                        <div className="people-flip-card-front">
                            <div className="front-page-image5">
                            </div>
                        </div>
                        <div className="people-flip-card-back">
                            <p className="card-title">Central China</p>
                            <p className="paragraph-padding ">This area includes provinces like Henan and Hubei.  </p>
                            <p className="paragraph-padding pb-05">It is a mix of agricultural and industrial zones, with cities like Wuhan being key economic centers.</p>

                        </div>
                    </div>
                </div>
                <div className="people-flip-card">
                    <div className="people-flip-card-inner">
                        <div className="people-flip-card-front">
                            <div className="front-page-image6">
                            </div>
                        </div>
                        <div className="people-flip-card-back">
                            <p className="card-title">Northeast China</p>
                            <p className="paragraph-padding ">Also known as Dongbei, this region includes provinces such as Liaoning, Jilin, and Heilongjiang  </p>
                            <p className="paragraph-padding  pb-05">It is an important industrial area with a history of heavy manufacturing.  </p>

                        </div>
                    </div>
                </div>
                <div className="people-flip-card">
                    <div className="people-flip-card-inner">
                        <div className="people-flip-card-front">
                            <div className="front-page-image7">
                            </div>
                        </div>
                        <div className="people-flip-card-back">
                            <p className="card-title">Himalayas</p>
                            <p className="paragraph-padding pb-05">The Himalayan mountain range, which includes the world's highest peak, Mount Everest, extends into southwestern China along the border with Nepal. </p>

                        </div>
                    </div>
                </div>
                <div className="people-flip-card">
                    <div className="people-flip-card-inner">
                        <div className="people-flip-card-front">
                            <div className="front-page-image8">
                            </div>
                        </div>
                        <div className="people-flip-card-back">
                            <p className="card-title">Tian Shan Mountains</p>
                            <p className="paragraph-padding  pb-05">The Tian Shan, or "Heavenly Mountains," stretch across the border regions of northwest China, Kazakhstan, Kyrgyzstan, and Uzbekistan. In China, they are primarily located in Xinjiang. </p>

                        </div>
                    </div>
                </div>
            </div>
            
        </div >

    </>)
}

export { PeoplePage }