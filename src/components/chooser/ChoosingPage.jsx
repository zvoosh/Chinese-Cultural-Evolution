import { Button, Col, Form, Input, message, Modal, notification, Row } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Chooser } from "./Chooser";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { PiPersonSimpleBold } from "react-icons/pi";
import { LuPaintbrush2 } from "react-icons/lu";
import { GiCeremonialMask } from "react-icons/gi";
import { IoHammerOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const ChoosingPage = () => {
    const navigate = useNavigate();
    // const [messageApi, contextHolder] = message.useMessage();
    const [api, contextHolder] = notification.useNotification();
    const location = useLocation();
    const [openModal, isOpenModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const form = useRef();
  
  const handleNavigation = (path) => {
    navigate(path);
};

    const goBack = () => {
        navigate(-1);
    };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_l77s68e', 'template_yev6wql', form.current, {
            publicKey: 'AoqdNMr_Mrg_Hzm_T',
          })
          .then(
            () => {
                api.success({
                    message: "Successful",
                    description: "Message was sent successfully",
                    placement: "topRight"
                })
              isOpenModal(false);
            },
            (error) => {
                api.error({
                    message: "Error",
                    description: "Message wasn't sent successfuly",
                    placement: "topRight"
                })
                isOpenModal(false);
            },
          );
      };

    return (
        <div className="overflow-hidden w-100 h-100">
            <div className="w-100  hd-bg-image bg-red p-1">
            {contextHolder}
                    <div className="disable-enable">
                <div className="flex space-between w-100" >
                    <div className="title">
                        Brief History of China
                    </div>    
                    <div className="side-menu">

                            <div className="menu-icon" onClick={()=>setIsMenuOpen((prev)=>!prev)}>
                        <IoMdMenu/>
                    </div>
                        {isMenuOpen && (
                            <div className={`open-menu ${isMenuOpen ? "opened" : ""}`}>
                                <div className="title mt-1 ml-1">
                                    Brief History of China
                                </div>
                                <div className="head-navigation">
                                    <div  className={`head-nav-link  ${location.pathname == '/' &&  'active-link'}`}  onClick={() => {
                                        handleNavigation('/')
                                        setIsMenuOpen(false);
                                    }}>
                                    <div className="mr-1"><FaHome style={{marginRight:'1rem'}}/>Home</div>
                                    </div>
                                    <div  className={`head-nav-link ${location.pathname == '/people' &&  'active-link'}`}  onClick={() => {
                                        handleNavigation('/people')
                                        setIsMenuOpen(false);
                                    }}>
                                    <div className="mr-1"> <PiPersonSimpleBold style={{marginRight:'1rem'}}/> People</div>
                                    </div>
                                    <div  className={`head-nav-link ${location.pathname == '/painting' &&  'active-link'}`}  onClick={() => {
                                        handleNavigation('/painting')
                                        setIsMenuOpen(false);
                                    }}>
                                    <div className="mr-1"><LuPaintbrush2  style={{marginRight:'1rem'}}/>Paintings</div>
                                    </div>
                                    <div  className={`head-nav-link ${location.pathname == '/folklore' &&  'active-link'}`}  onClick={() => {
                                        handleNavigation('/folklore')
                                        setIsMenuOpen(false);
                                    }}>
                                    <div className="mr-1"><GiCeremonialMask style={{marginRight:'1rem'}}/> Folklore</div>
                                    </div>
                                    <div  className={`head-nav-link ${location.pathname == '/craftmenship' &&  'active-link'}`}  onClick={() => {
                                        handleNavigation('/craftmenship')
                                        setIsMenuOpen(false);
                                    }}>
                                    <div className="mr-1"><IoHammerOutline style={{marginRight:'1rem'}} />Craftmenship</div>
                                    </div>
                                    </div>
                                    <div className=" mr-1 flex justify-end align-end">
                                    <div  className='head-nav-link' onClick={()=>{
                                    isOpenModal((prev)=>!prev)
                                }}><TfiEmail style={{marginRight:'1rem'}} />Contact</div>
                                </div>
                            </div>
                            )}
                        
                    </div>
                    
                </div>
                    </div>
                    <div className="enable-disable w-100">
                        
                <div className="flex space-between w-100" >
                    <div className="title">
                        Brief History of China
                    </div>    
                    <div className="head-navigation">
                        <div  className={`head-nav-link  ${location.pathname == '/' &&  'active-link'}`}   onClick={() => {
                            handleNavigation('/')
                        }}>Home</div>
                        <div  className={`head-nav-link  ${location.pathname == '/people' &&  'active-link'}`}   onClick={() => {
                            handleNavigation('/people')
                        }}>People</div>
                        <div  className={`head-nav-link  ${location.pathname == '/painting' &&  'active-link'}`}  onClick={() => {
                            handleNavigation('/painting')
                        }}>Paintings</div>
                        <div className={`head-nav-link  ${location.pathname == '/folklore' &&  'active-link'}`} onClick={() => {
                            handleNavigation('/folklore')
                        }}>Folklore</div>
                        <div className={`head-nav-link  ${location.pathname == '/craftmenship' &&  'active-link'}`} onClick={() => {
                            handleNavigation('/craftmenship')
                        }}>Craftmenship</div>
                    </div>
                    <div className="mr-2 button-holder">
                        <Button type="primary" className="bg-blue bold letter-spacing-01 mr-05 myBtn" onClick={()=>{
                            isOpenModal((prev)=>!prev)
                        }}>
                            Contact
                        </Button>
                        <Button type="primary" className="bg-blue bold letter-spacing-01 myBtn" onClick={goBack}>
                            Back
                        </Button>
                    </div>
                            </div>
                            </div>
            </div>

            <Modal centered title="Send me an email" open={openModal} footer={null} onCancel={()=>{
                isOpenModal((prev)=>!prev);
            }} destroyOnClose={true}>
            <div className="w-100 h-100 flex justify-center align-center">  
                <form ref={form} onSubmit={sendEmail} className="w-100">
                    <Row className="p-1">
                        <Col span={6}>
                    <label>Name:</label>
                        </Col>
                        <Col span={16}>
                    <input type="text" name="user_name" className="input-style" autoComplete={false} id="inputTY" required />
                        </Col>
                    </Row>
                    <Row  className="p-1">
                        <Col span={6}>
                    <label>Email:</label>
                        </Col>
                        <Col span={16}>
                    <input type="email" name="user_email" className="input-style"  autoComplete={false} required />
                        </Col>
                    </Row>
                    <Row  className="p-1">
                        <Col span={6}>
                    <label>Message:</label>
                        </Col>
                        <Col span={16}>
                    <textarea name="message" rows={5} className="w-100"  autoComplete={false} required />
                        </Col>
                    </Row>
                    <Row justify={"end"}>
                        <Button type="primary" htmlType="submit">
                            Send
                        </Button>
                    {/* <input type="submit" value="Send" /> */}
                    </Row>
                </form>
            </div>
      </Modal>


            <div className="h-100">
                {location.pathname == '/' ? (<>
                    <Chooser />
                </>) : <>
                    <Outlet />
                </>}
            </div>
        </div>
    );
}

export { ChoosingPage };