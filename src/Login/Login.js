import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CustomTextField from "./Components/CustomTextField";
import RegisterPrompt from "./Components/RegisterPrompt";
import { Apple, Google, Visibility, VisibilityOff } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../src/App.css";

export const Login = () => {
  const initialValue = { fname: "", lname: "", email: "", password: "" };
  const [inputValue, setInputValue] = useState(initialValue);
  const [errorMessages, setErrorMessages] = useState(initialValue);
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const validateInputs = () => {
    const errors = {};

    if (inputValue.fname.trim() === "") {
      errors.fname = "First Name is required.";
    }
    if (inputValue.lname.trim() === "") {
      errors.lname = "Last Name is required.";
    }
    if (inputValue.email.trim() === "") {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(inputValue.email)) {
      errors.email = "Email is not valid.";
    }
    if (inputValue.password.trim() === "") {
      errors.password = "Password is required.";
    } else if (inputValue.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      // Submit the form or perform desired action
      console.log("Submitted Data:", inputValue);
    }
  };
  const imagesList = [
    "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
        <ul
          style={{ margin: "0px", display: "flex", justifyContent: "center" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "12px", // Adjust width to change the dot size
          height: "12px", // Adjust height to change the dot size
          borderRadius: "50%", // Makes the dot circular
          backgroundColor: "gray", // Color of inactive dots
          margin: "0 5px", // Spacing between dots
        }}
      />
    ),
  };

  return (
    <Box
      sx={{
        backgroundColor: "#5B566C",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          height: { lg: "90%", xl: "90%", md: "90", sm: "100%", xs: "100%" },
          width: { lg: "80%", xl: "80%", md: "90", sm: "100%", xs: "100%" },
          backgroundColor: "#2B2738",
          borderRadius: {
            lg: "20px",
            xl: "20px",
            mk: "20px",
            sm: "0px",
            xs: "0px",
          },
          overflow: "hidden",
        }}
      >
        <Stack
          sx={{
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center ",
            flexDirection: {
              lg: "row",
              xl: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
          }}
        >
          {/* Left Side Box */}
          <Box
            sx={{
              height: {
                lg: "100%",
                xl: "100%",
                md: "100%",
                sm: "30%",
                xs: "30%",
              },
              width: {
                lg: "60%",
                xl: "60%",
                md: "60%",
                sm: "100%",
                xs: "100%",
              },
              padding: {
                lg: "13px 1% ",
                xl: "13px 1% ",
                md: "13px 1% ",
                sm: "0px 0px",
                xs: "0px 0px",
              },
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Slider
              {...settings}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              {imagesList.map((item, index) => (
                <Box
                  key={index}
                  component="img"
                  src={item}
                  alt="Slider Images"
                  sx={{
                    width: "100%",
                    objectFit: "cover",
                    height: {
                      xs: "30vh", // Extra small devices (mobile)
                      sm: "30vh", // Small devices (tablet)
                      md: "96vh", // Medium devices (small laptop)
                      lg: "86vh", // Large devices (desktop)
                      xl: "86vh", // Extra large devices (wider desktops)
                    },
                  }}
                />
              ))}
            </Slider>
          </Box>

          {/* Right Side Box */}
          <Box
            sx={{
              width: {
                lg: "35%",
                xl: "35%",
                md: "35%",
                sm: "97%",
                xs: "97%",
              },
              height: {
                lg: "90%",
                xl: "90%",
                md: "90%",
                sm: "65%",
                xs: "65%",
              },
              display: "flex",
              alignItems: "start",
              justifyContent: "space-around",
              flexDirection: "column",
              color: "white",
              marginBottom: "25px",
              padding: {
                lg: "0px 1% ",
                xl: "0px 1% ",
                md: "0px 1% ",
                sm: "0px 5px",
                xs: "0px 5px",
              },
            }}
          >
            <Box>
              <Typography variant="h3" pb={1}>
                Login Account
              </Typography>
              <RegisterPrompt
                promptText="If you don't have an Account"
                linkText="Register"
                onRegisterClick={() => console.log("Register clicked!")}
              />
            </Box>

            <Box
              sx={{
                width: "100%",
                height: {
                  lg: "50%",
                  xl: "50%",
                  md: "50%",
                  sm: "50%",
                  xs: "50%",
                },
                display: "flex",
                alignItems: "start",
                justifyContent: "space-evenly",
                flexDirection: "column",
              }}
            >
              <Stack direction={"row"} spacing={1} sx={{ width: "100%" }}>
                <Stack direction={"column"} sx={{ width: "50%" }}>
                  <CustomTextField
                    placeholder="First Name"
                    value={inputValue.fname}
                    func={handleInput}
                    width="100%"
                    name="fname"
                  />
                  {errorMessages.fname && (
                    <p
                      style={{
                        color: "red",
                        paddingLeft: "5px",
                        margin: "0px",
                      }}
                    >
                      {errorMessages.fname}
                    </p>
                  )}
                </Stack>
                <Stack direction={"column"} sx={{ width: "50%" }}>
                  <CustomTextField
                    placeholder="last Name"
                    value={inputValue.lname}
                    func={handleInput}
                    width="100%"
                    name="lname"
                  />
                  {errorMessages.lname && (
                    <p
                      style={{
                        color: "red",
                        paddingLeft: "5px",
                        margin: "0px",
                      }}
                    >
                      {errorMessages.lname}
                    </p>
                  )}
                </Stack>
              </Stack>
              <Stack width={"100%"}>
                <CustomTextField
                  placeholder="Email"
                  value={inputValue.email}
                  func={handleInput}
                  width="100%"
                  name="email"
                />
                {errorMessages.email && (
                  <p
                    style={{
                      color: "red",
                      paddingLeft: "5px",
                      margin: "0px",
                    }}
                  >
                    {errorMessages.email}
                  </p>
                )}
              </Stack>
              <Stack width={"100%"}>
                <CustomTextField
                  placeholder="Enter Your Password"
                  value={inputValue.password}
                  func={handleInput}
                  width="100%"
                  name="password"
                  type={showPassword !== true ? "password" : "text"}
                  endAdornment={
                    <IconButton
                      onClick={() =>
                        setShowPassword(showPassword === true ? false : true)
                      }
                    >
                      {showPassword !== true ? (
                        <VisibilityOff sx={{ color: "grey" }} />
                      ) : (
                        <Visibility sx={{ color: "grey" }} />
                      )}
                    </IconButton>
                  }
                />
                {errorMessages.password && (
                  <p
                    style={{
                      color: "red",
                      paddingLeft: "5px",
                      margin: "0px",
                    }}
                  >
                    {errorMessages.password}
                  </p>
                )}
              </Stack>
              <Stack
                direction={"row"}
                sx={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",
                }}
              >
                <Checkbox
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
                <Typography pt={1.2}>
                  <RegisterPrompt
                    promptText="I agree to the"
                    linkText="Terms & Conditions"
                    onRegisterClick={() => console.log("Register clicked!")}
                  />
                </Typography>
              </Stack>
            </Box>

            <Button
              variant="contained"
              onClick={() => {
                handleSubmit();
                window.localStorage.setItem(
                  "UserData",
                  JSON.stringify(inputValue)
                );
                const data = localStorage.getItem("UserData");
                console.log("Local Storage Data :", JSON.parse(data));
              }}
              sx={{
                width: "100%",
                height: "55px",
                backgroundColor: "#6E54B5",
                textTransform: "none",
              }}
            >
              Login Account
            </Button>
            <Stack direction="row" alignItems="center" spacing={2} width="100%">
              <Divider sx={{ flex: 1, bgcolor: "grey.500" }} />
              <Typography sx={{ whiteSpace: "nowrap" }}>
                OR login With
              </Typography>
              <Divider sx={{ flex: 1, bgcolor: "grey.500" }} />
            </Stack>

            <Stack direction="row" alignItems="center" spacing={2} width="100%">
              <Button
                sx={{
                  width: "50%",
                  height: "55px",
                  textTransform: "none",
                  borderColor: "grey.500",
                  color: "white",
                }}
                variant="outlined"
                startIcon={<Google />}
              >
                Google
              </Button>
              <Button
                sx={{
                  width: "50%",
                  height: "55px",
                  textTransform: "none",
                  borderColor: "grey.500",
                  color: "white",
                }}
                variant="outlined"
                startIcon={<Apple />}
              >
                Apple
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};
