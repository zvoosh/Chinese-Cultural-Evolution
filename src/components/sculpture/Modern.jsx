import { Image } from "antd"
import firstImage from '../../assets/modern01.jpg'
import secondImage from '../../assets/modern02.jpg'
import thirdImage from '../../assets/modern03.jpg'
import forthImage from '../../assets/modern04.jpg'
import fifthImage from '../../assets/modern05.jpg'
import sixthImage from '../../assets/modern06.jpg'


const Modern = () => {
    
    return (<>
        <div className="ancient-text-below-paragraph">
        Contemporary Chinese sculpture is like a lively and varied art world that takes inspiration from traditional Chinese art, modern global styles, and what's happening in China. Artists use all sorts of stuff to create their sculptures—bronze, wood, stone, metal, ceramics, and sometimes even things like recycled materials. They mix old-fashioned ways of making art with new technology, coming up with cool and innovative ideas.
        In Chinese cities, there's been a lot more public art recently. Big art installations and sculptures are popping up, making cities look cooler. These pieces aren't just there to look pretty; they also connect with people, telling stories about culture or history. 
        When it comes to the government and art, it's a bit tricky. Some artists have to be careful because there are rules about what can and can't be shown. Some play within those rules, pushing them as far as they can.
        </div>
        <div className="flexing-box">
        <div className="flip-card-ancient">
                   
                
                <Image
                        width={300}
                        height={200}
                        src={firstImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                        
                <Image
                        width={300}
                        height={200}
                        src={secondImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                <Image
                        width={300}
                        height={200}
                        src={thirdImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                <Image
                        width={300}
                        height={200}
                        src={forthImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                <Image
                        width={200}
                        height={250}
                        src={fifthImage}
                        />
                    </div>
                    <div className="flip-card-ancient">
                <Image
                        width={200}
                        height={250}
                        src={sixthImage}
                        />
                    </div>
        </div>
        
        <div className="dopunska">

</div>
    </>)
}

export{Modern}