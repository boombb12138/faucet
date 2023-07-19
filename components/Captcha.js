import { Box } from "@mui/material";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import API from "../common/API";

const MyComponent = ({ setToken }) => {
  const recaptchaRef = useRef(null);
  let checkRecaptcha = `/jeecg-boot/faecut/checkRecaptcha?`;

  const onRecaptchaVerify = async (response) => {
    // 在这里执行验证通过后的操作
    // /jeecg-boot/faecut/checkRecaptcha
    console.log("onRecaptchaVerify", response);

    try {
      checkRecaptcha += response;
      const { data } = await API.post(checkRecaptcha);
      const records = data.result;
      console.log("reCAPTCHA响应：", records);
      setToken(response);
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = () => {
    recaptchaRef.current.execute();
  };

  return (
    <Box sx={{ marginTop: "10px" }}>
      <ReCAPTCHA
        ref={recaptchaRef}
        // size="invisible"
        sitekey="6Ld1izcnAAAAAK5N_STEhjMZKEI5ITlX9b5KSVQf"
        onChange={onRecaptchaVerify}
      />

      {/* <button onClick={submitForm}>Submit</button> */}
    </Box>
  );
};

export default MyComponent;
