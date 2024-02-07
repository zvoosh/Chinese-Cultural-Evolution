import { useNavigate } from "react-router-dom";
import { Image } from "antd";

const Chooser = ({ navFn }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="w-100 bg-skin h-100 overflow">
            <div className="card-holder">
                <div className="nav-card first"  onClick={() => {
                        handleNavigation('/first-page/people')
                    }}>
                    <div className="nav-content">
                    <div className="nav-title">
                    People of China
                    </div>
                    <div className="nav-image">
                        <div className="testing-image1">

                        </div>
                    </div>
                    </div>
                </div>
                <div className="nav-card second"  onClick={() => {
                            handleNavigation('/first-page/painting')
                        }}>
                    <div className="nav-content">
                    <div className="nav-title">
                        Paintings of China
                    </div>
                    <div className="nav-image">
                        <div className="testing-image2">

                        </div>
                    </div>
                    </div>
                </div>
                <div className="nav-card third"   onClick={() => {
                            handleNavigation('/first-page/folklore')
                        }}>
                    <div className="nav-content">
                    <div className="nav-title">
                    Folklore of China
                    </div>
                    <div className="nav-image">
                        <div className="testing-image3">

                        </div>
                    </div>
                    </div>
                </div>
                <div className="nav-card forth"  onClick={() => {
                            handleNavigation('/first-page/sculptings')
                        }}>
                    <div className="nav-content">
                    <div className="nav-title">
                        Craftsmanship of China
                    </div>
                    <div className="nav-image">
                        <div className="testing-image4">

                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="h-100  w-100 mt-3">
                <div className="w-100 flex cistaVisina justify-center">
                    <div className="hoverable choose-card ml-05 p-1 bg-red" onClick={() => {
                        handleNavigation('/first-page/people')
                    }}>
                        <div className="white letter-spacing-03 bold text-center cardFont">
                            People of China
                        </div>
                        <div className="w-100 peopleChina flex justify-center align-center font-11 h-100">
                        </div>
                    </div>
                    <div className="hoverable choose-card ml-05 p-1 bg-red">
                        <div className="white bold letter-spacing-03  text-center cardFont">
                            Paintings of China
                        </div>
                        <div className="w-100 paintingsChina flex justify-center align-center font-11 h-100" onClick={() => {
                            handleNavigation('/first-page/painting')
                        }}>
                        </div>
                    </div>
                </div>
                <div className="w-100  flex cistaVisina justify-center">
                    <div className="hoverable choose-card ml-05 p-1 bg-red">
                        <div className="white bold letter-spacing-03  text-center cardFont">
                            Folklore of China
                        </div>
                        <div className="w-100 folkloreChina flex justify-center align-center font-11 h-100 " onClick={() => {
                            handleNavigation('/first-page/folklore')
                        }}>
                        </div>
                    </div>
                    <div className="hoverable choose-card ml-05 p-1 bg-red">
                        <div className="white bold letter-spacing-03  text-center cardFont">
                            Sculptings of China
                        </div>
                        <div className="w-100 potteryChina  flex justify-center align-center font-11 h-100 " onClick={() => {
                            handleNavigation('/first-page/sculptings')
                        }}>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export { Chooser }