import { Button, Col, Form, Input, Modal, Row } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Chooser } from "./Chooser";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import TextArea from "antd/es/input/TextArea";

const ChoosingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [openModal, isOpenModal] = useState(false);
  const form = useRef();

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
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <div className="overflow-hidden w-100 h-100">
            <div className="w-100 bg-red p-1">
                <div className="flex space-between w-100" >
                    <div className="title">
                        Brief History of China
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

            <Modal title="Send me an email" open={openModal} footer={null} onCancel={()=>{
                isOpenModal((prev)=>!prev);
            }} destroyOnClose={true}>
            <div className="w-100 h-100 flex justify-center align-center">  
                <form ref={form} onSubmit={sendEmail} className="w-100">
                    <Row className="p-1">
                        <Col span={6}>
                    <label>Name:</label>
                        </Col>
                        <Col span={16}>
                    <input type="text" name="user_name" className="input-style" autoComplete={false} id="inputTY"/>
                        </Col>
                    </Row>
                    <Row  className="p-1">
                        <Col span={6}>
                    <label>Email:</label>
                        </Col>
                        <Col span={16}>
                    <input type="email" name="user_email" className="input-style"  autoComplete={false}/>
                        </Col>
                    </Row>
                    <Row  className="p-1">
                        <Col span={6}>
                    <label>Message:</label>
                        </Col>
                        <Col span={16}>
                    <textarea name="message" rows={5} className="w-100"  autoComplete={false}/>
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