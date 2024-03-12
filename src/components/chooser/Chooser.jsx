import { useNavigate } from "react-router-dom";
import { Image } from "antd";


const Chooser = ({ navFn }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="w-100 h-100 overflow" style={{backgroundColor: "#5b2528"}}>
            <div className="card-holder">
                <div className="nav-card first"  onClick={() => {
                        handleNavigation('/people')
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
                            handleNavigation('/painting')
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
                            handleNavigation('/folklore')
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
                            handleNavigation('/craftmenship')
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
        </div>
    )
}

export { Chooser }