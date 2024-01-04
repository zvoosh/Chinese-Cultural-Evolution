import { useNavigate } from "react-router-dom";

const Chooser = ({ navFn }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="pr-2 w-100  bg-skin h-100 ml--05">
            <div className="h-100  w-100 mt-3">
                <div className="w-100 flex cistaVisina justify-center">
                    <div className="hoverable ml-05 p-1 bg-red" onClick={() => {
                        handleNavigation('/first-page/people')
                    }}>
                        <div className="white letter-spacing-03 bold text-center cardFont">
                            People of China
                        </div>
                        <div className="w-100 peopleChina flex justify-center align-center font-11 h-100">
                        </div>
                    </div>
                    <div className="hoverable justMarginLeft p-1 mr-05 bg-red">
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
                    <div className="hoverable ml-05 p-1 bg-red">
                        <div className="white bold letter-spacing-03  text-center cardFont">
                            Folklore of China
                        </div>
                        <div className="w-100 folkloreChina flex justify-center align-center font-11 h-100 " onClick={() => {
                            handleNavigation('/first-page/people')
                        }}>
                        </div>
                    </div>
                    <div className="hoverable  justMarginLeft  mr-05 p-1 bg-red">
                        <div className="white bold letter-spacing-03  text-center cardFont">
                            Pottery of China
                        </div>
                        <div className="w-100 potteryChina m-05 flex justify-center align-center font-11 h-100 " onClick={() => {
                            handleNavigation('/first-page/people')
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Chooser }