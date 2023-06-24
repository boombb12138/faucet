import { Box } from "@mui/material";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const MyComponent = () => {
  const recaptchaRef = useRef(null);

  const onRecaptchaVerify = (response) => {
    console.log("reCAPTCHA响应：", response);
    // 在这里执行验证通过后的操作
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
        onChange={onRecaptchaVerify}
      />

      <button onClick={submitForm}>Submit</button>
    </Box>
  );
};

export default MyComponent;
