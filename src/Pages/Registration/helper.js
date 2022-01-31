import { message } from "antd";
import { signUp } from "../../api/auth";




export const submitRegistration = (setButtonLoad, payload, history, form) => {
  
  setButtonLoad(true);
  console.log("payload");

  if (payload.radio) {
    signUp(payload)
      .then((res) => {
        setButtonLoad(false);
        console.log(res, "signup res");
        if (res.status === false) {
          message.error(res.message);
        } else if(res.status === true){
          form.resetFields();
          console.log(payload.first_name);
          message.success("Successfully Registered");
          history.push("/");
        }
      })
      .catch((er) => {
        console.log(er.response);
        setButtonLoad(false);
      });
  } else if (!payload.radio) {
    setButtonLoad(false);
    message.warning("Please accept the terms and condition");
  }
};
