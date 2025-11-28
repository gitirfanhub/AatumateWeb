import React, { useState } from "react";
import LoginStyleWrapper from "./LoginStyles";
import { Inputstyle } from "../../components/TextFieldInput";
import Button from "../../components/Button";
import { MSG_TYPE, useToaster } from "../../components/Toastbar";
import { postData } from "../../utils/fetchData";
import LoginJson from "../../json/Login.json";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { MdPersonOutline } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { useBrandsContext } from "../../context/brands_context";
import { useCartContext } from "../../context/cart_context";

const initialValues = {
  phoneNumber: "",
  password: "",
  showPassword: false
};

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Must be 8 characters or more")
    .matches(/[a-z]+/, "One lowercase character")
    .matches(/[A-Z]+/, "One uppercase character")
    .matches(/[@$!%*#?&]+/, "One special character")
    .matches(/\d+/, "One number")
});

const Login = () => {
  const navigate = useNavigate();
  const toaster = useToaster();
  const { fetchCustomerVehicle } = useBrandsContext();
  const { totalCartItems } = useCartContext();
  const [data, setData] = useState(initialValues);

  const handleClickShowPassword = () => {
    setData({ ...data, showPassword: !data.showPassword });
  };

  const handleMouseShowPassword = (event) => {
    event.preventDefault();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoginJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const onsubmit = async (values, submitProps) => {
    try {
      data.phoneNumber = values.phoneNumber;
      data.password = values.password;
      const response = await postData("clogin", data);
      if (response.data) {
        submitProps.resetForm();
        localStorage.clear();
        sessionStorage.clear();
        localStorage.setItem("jwt_token", response.data.token);
        localStorage.setItem("user_detail", JSON.stringify(response.data));
        localStorage.setItem("is_loggedin", true);
        fetchCustomerVehicle("customer-car", response.data.token);
        totalCartItems();
        navigate("/");
      } else {
        toaster(MSG_TYPE.ERROR, response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginStyleWrapper>
      <div className="login-container">
        <div className="login-form">
          <div className="image-section">
            {/* <Lottie options={defaultOptions} /> */}
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={onsubmit}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <Inputstyle>
                      <TextField
                        autoComplete="off"
                        variant="outlined"
                        label="Phone Number *"
                        id="phoneNumber"
                        name="phoneNumber"
                        fullWidth
                        value={values.phoneNumber}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton>
                                <MdPersonOutline />
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        helperText={
                          errors.phoneNumber &&
                          touched.phoneNumber &&
                          errors.phoneNumber
                        }
                        error={errors.phoneNumber && touched.phoneNumber}
                      />
                    </Inputstyle>
                  </div>
                  <div className="field">
                    <Inputstyle>
                      <TextField
                        type={data.showPassword ? "text" : "password"}
                        variant="outlined"
                        label="Password *"
                        id="password"
                        name="password"
                        fullWidth
                        value={values.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseShowPassword}
                              >
                                {data.showPassword ? (
                                  <MdVisibility />
                                ) : (
                                  <MdVisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        helperText={
                          errors.password && touched.password && errors.password
                        }
                        error={errors.password && touched.password}
                      />
                    </Inputstyle>
                  </div>
                  <Button type="submit">Login</Button>
                  <p className="instruct">
                    Don't have an account? Please &nbsp;
                    <Link to="/signup">Signup</Link>
                  </p>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </LoginStyleWrapper>
  );
};

export default Login;
