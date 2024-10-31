import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const RegisterPrompt = ({ promptText, linkText, onRegisterClick }) => {
  return (
    <Stack direction="row">
      <Typography pr={0.5}>{promptText}</Typography>
      <Typography
        onClick={onRegisterClick}
        sx={{
          cursor: "pointer",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        {linkText}
      </Typography>
    </Stack>
  );
};

RegisterPrompt.propTypes = {
  promptText: PropTypes.string.isRequired, // Required text for the prompt
  linkText: PropTypes.string.isRequired, // Required text for the link
  onRegisterClick: PropTypes.func.isRequired, // Function to handle link click
};

export default RegisterPrompt;
