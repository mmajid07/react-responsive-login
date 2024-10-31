import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PropTypes from "prop-types";

const CustomTextField = ({
  placeholder,
  func,
  value,
  name,
  error,
  type,
  width = "100%",
  startAdornment, // New prop for start adornment
  endAdornment, // New prop for end adornment
}) => {
  return (
    <TextField
      type={type}
      variant="outlined"
      placeholder={placeholder}
      onChange={func}
      value={value}
      name={name}
      error={!!error}
      helperText={error}
      InputProps={{
        startAdornment: startAdornment ? (
          <InputAdornment position="start">
            {startAdornment} {/* Render start adornment */}
          </InputAdornment>
        ) : null,
        endAdornment: endAdornment ? (
          <InputAdornment position="end">
            {endAdornment} {/* Render end adornment */}
          </InputAdornment>
        ) : null,
      }}
      sx={{ width, ...CustemTextFieldStyle }}
    />
  );
};

CustomTextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  width: PropTypes.string,
  startAdornment: PropTypes.element, // Start adornment should be a React element
  endAdornment: PropTypes.element, // End adornment should be a React element
};

export default CustomTextField;

const CustemTextFieldStyle = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#3B364C",
    borderRadius: "10px",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid",
      borderRadius: "10px",
      borderColor: "white",
    },
    "& input": {
      color: "white",
    },
    "& input::placeholder": {
      color: "grey",
      opacity: 1,
    },
  },
};
