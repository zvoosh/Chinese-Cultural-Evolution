import { Tabs } from 'antd';
import { Journey } from "./Journey";
import { HoeYi } from "./HouYi";
import { Kingdoms } from "./Kingdoms";
import { Immortals } from './Immortals';
import { Lovers } from './Lovers';

const DefaultStory = () => {
    // const [isIndex, SetIsIndex] = useState(0);
    // const [isStopIcon, setIsStopIcon] = useState(true);
    // const [loaderWidth, setLoadedWidth] = useState(0);
    // const interval = 5000;
    // const indexArr = [0,1,2,3];

    const onChange = (key) => {
        console.log(key);
      };
      const items = [
        {
          key: '1',
          label: 'Journey to the West (西游记)',
          children: <Journey/>,
        },
        {
          key: '2',
          label: "The Legend of Hou Yi and Chang'e (后羿与嫦娥)",
          children: <HoeYi/>,
        },
        {
          key: '3',
          label: "Romance of the Three Kingdoms (三国演义)",
          children: <Kingdoms/>,
        },
        {
          key: '4',
          label: "The Eight Immortals (八仙)",
          children: <Immortals/>,
        },
        {
          key: '5',
          label: "The Butterfly Lovers (梁山伯与祝英台)",
          children: <Lovers/>,
        },
      ];


    return (
        <div className='w-100 h-100 overflow-y'>
            <div className="folklorePageTitle">Folklore of China</div>
                        <div className="mainPageText">
                            China takes pride in its rich tradition of folklore, featuring a multitude of cherished stories embraced by both the young and the old. This diverse tapestry includes a wide range of myths, legends, and narratives passed down through generations, serving as reflections of China's cultural, historical, and philosophical facets. Taoism, Confucianism, and Buddhism have significantly influenced Chinese folk tales. Each of these stories incorporates representations of objects and animals, delivering symbolic messages through its characters. Typically, these tales aim to impart virtuous insights to the reader, using various mediums, both traditional and modern, for sharing and preserving this cultural heritage.
                            These tales often carry moral lessons or philosophical reflections, teaching virtues like loyalty, filial piety, humility, and righteousness.
                            From the legendary journeys of the Monkey King in "Journey to the West" to the poignant tale of the Weaver Girl and the Cowherd in "The Cowherd and the Weaver Girl," Chinese folklore embodies a rich tapestry of wisdom, humor, and imagination.
                            In addition to serving as entertainment, these stories also serve as a means of preserving cultural values and traditions. Through oral storytelling, written literature, theater, art, and even modern media adaptations, Chinese folklore continues to captivate audiences worldwide while ensuring the transmission of its cultural heritage across generations.
                            Moreover, these tales often depict the interconnectedness between humans, nature, and the divine, reflecting a harmonious worldview deeply rooted in Chinese philosophy. Animals like the dragon, phoenix, and tortoise frequently appear as symbols of power, wisdom, and longevity, while objects like the mystical peach or the legendary sword represent virtues and aspirations.
                            In the modern era, efforts to preserve and promote Chinese folklore have expanded with initiatives such as cultural festivals, educational programs, and digital platforms. Through these endeavors, China celebrates its rich storytelling tradition while also fostering a deeper understanding and appreciation of its cultural identity both at home and abroad.
                        {/* <div className='tabs-holder'>
                          <div className='tab-label'>Journey to the West (西游记)</div>
                          <div className='tab-label'>The Legend of Hou Yi and Chang'e (后羿与嫦娥)</div>
                          <div className='tab-label'>Romance of the Three Kingdoms (三国演义)</div>
                          <div className='tab-label'>The Eight Immortals (八仙)</div>
                          <div className='tab-label'>The Butterfly Lovers (梁山伯与祝英台)</div>
                        </div> */}
                        </div>
                            
                        <div className='display-none-folk'>
                          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                        </div>
                        
        </div>
    );
}



export {DefaultStory}