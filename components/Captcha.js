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
    <div>
      <h1>reCAPTCHA验证示例</h1>
      <ReCAPTCHA
        ref={recaptchaRef}
        // size="invisible"
        sitekey="6LcyhMEmAAAAADQz87h6JYJiR3-bw6aTsKGtD9TC"
        onChange={onRecaptchaVerify}
      />
      {/* onClick={submitForm} */}
      <button>提交</button>
    </div>
  );
};

export default MyComponent;
