import { Button } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Chooser } from "./Chooser";

const ChoosingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="overflow-hidden w-100 h-100">
            <div className="w-100 bg-red p-1">
                <div className="flex space-between w-100" >
                    <div className="title">
                        Brief History of China
                    </div>
                    <div className="mr-2">
                        <Button type="primary" className="bg-blue bold letter-spacing-01 mr-05 myBtn">
                            Contact
                        </Button>
                        <Button type="primary" className="bg-blue bold letter-spacing-01 myBtn" onClick={goBack}>
                            Back
                        </Button>
                    </div>
                </div>
            </div>
            <div className="h-100">
                {location.pathname == '/first-page' ? (<>
                    <Chooser />
                </>) : <>
                    <Outlet />
                </>}
            </div>
        </div>
    );
}

export { ChoosingPage };