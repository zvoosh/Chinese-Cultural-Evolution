import { useState } from "react";
import { useNavigate } from "react-router-dom";



const WelcomePage = () => {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();


    if (isClicked) {
        setTimeout(() => {
            navigate('/first-page')
        }, 700)
    }

    return (
        <>
            <div className="testingBG">
            <div className="w-100 bg-red p-1">
                <div className="flex justify-center w-100" >
                    <div className="title">
                    {/* Virtual guide through the development of Chinese culture */}
                     VIRTUAL GUIDE THROUGH THE DEVELOPMENT OF CHINESE CULTURE
                    </div>
                </div>
            </div>
                {/* <div className="welcomingText">
                    WELCOME TO A BRIEF VIRTUAL GUIDE AND GALLERY OF CHINESE CULTURE
                </div> */}
                <div className={`welcomingToNext ${isClicked ? "clickedClicker" : ''}`} id="clicker" onClick={() => {
                    setIsClicked((prev) => !prev)
                }}>
                    {!isClicked ? ">" : ""}
                </div>
            </div>
        </>
    )
};

export { WelcomePage };