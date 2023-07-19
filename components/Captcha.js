import { Box } from "@mui/material";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import API from "../common/API";

const MyComponent = ({ setToken }) => {
  const recaptchaRef = useRef(null);
  let checkRecaptcha = `/jeecg-boot/faecut/checkRecaptcha?`;

  const onRecaptchaVerify = async (response) => {
    console.log("reCAPTCHA响应：", response);
    setToken(response);
    // 在这里执行验证通过后的操作
    // /jeecg-boot/faecut/checkRecaptcha
    // checkRecaptcha += response;
    // try {
    //   const response = await API.post(checkRecaptcha);
    //   const records = response.data.result;
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const submitForm = () => {
    recaptchaRef.current.execute();
  };

  return (
    <Box sx={{ marginTop: "10px" }}>
      <ReCAPTCHA
        ref={recaptchaRef}
        // size="invisible"
        sitekey="6LcyhMEmAAAAADQz87h6JYJiR3-bw6aTsKGtD9TC"
        onChange={onRecaptchaVerify()}
      />

      {/* <button onClick={submitForm}>Submit</button> */}
    </Box>
  );
};

export default MyComponent;
