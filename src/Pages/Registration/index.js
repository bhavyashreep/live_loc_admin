import React, { useEffect, useState } from "react";
import "./index.scss";
import { Input, Form, Checkbox, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { Link, useHistory } from "react-router-dom";


import { submitRegistration } from "./helper";



const Registration = () => {

  const [radio, setRadio] = useState(false);
  const [loadbutton, setButtonLoad] = useState(false);

  const [form] = Form.useForm();


  let history = useHistory();

  const onChange = (e) => {
    setRadio(e.target.checked);
  };
 

  const submitData = (values) => {
    console.log("values",values);
    const payload = {
      ...values,
      radio,

    };
    submitRegistration(setButtonLoad, payload, history, form);
  };

  return (
    <div className="reg-modal">
      <div className="reg-modal-top">
        <Link to="/">
          <CloseOutlined
          
            className="reg-modal-close"
          />
        </Link>
        <h2>Registration</h2>
      </div>
      <Form form={form} onFinish={submitData}>
        <Form.Item name="name">
          <Input className="custom-input" placeholder="Name" />
        </Form.Item>
        <Form.Item name="mobile">
          <Input className="custom-input" placeholder="Mobile" />
        </Form.Item>
        <Form.Item name="password">
          <Input className="custom-input" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Checkbox defaultChecked={radio} onChange={onChange} style={{marginRight:"10px"}} />
            <span className="terms">I agree to all the terms and conditions</span>
          {/* </Button> */}
   
        </Form.Item>
        <Button
          loading={loadbutton}
          disabled={loadbutton}
          htmlType="submit"
          className="reg-finish"
          style={{color:"white"}}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
