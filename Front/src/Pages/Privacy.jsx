import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button
        variant="outlined-none text-white absolute left-1 "
        onClick={handleClickOpen}
      >
       Legal Notice For User
      </button>
      <BootstrapDialog
        className="text-red-300"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title "
          className="font-bold text-2xl  text-blue-500"
        >
          Legal Notice
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
          <Typography gutterBottom>
            <span className="text-xl font-bold">Privacy Policy</span>
            <br /> The Privacy Policy explains how we collect, use, and protect
            your personal data. Information such as name, email, and browsing
            activity may be collected. We use this data to improve services,
            personalize content, and communicate with users. Your data is stored
            securely and only shared with trusted third parties when necessary.
            We never sell your personal information to advertisers or outside
            companies. You have the right to access, update, or delete your
            personal data. By using our site, you agree to this policy and data
            handling practices.
            <br />
          </Typography>

          <Typography gutterBottom>
            <br />
            <span className="text-xl font-bold">Terms of Service</span>
            <br /> The Terms of Service govern your access to and use of our
            website and services. Users must agree to follow all rules,
            policies, and applicable laws. We may modify or discontinue parts of
            the service at any time. Users are responsible for maintaining
            confidentiality of their account information. Unauthorized use or
            abuse of the platform may lead to suspension or legal action.
            Content shared by users must not violate copyright or contain
            harmful material. Continued use of the site means you accept all
            current terms and conditions.
          </Typography>

          <Typography gutterBottom>
             <br /><span className="text-xl font-bold">Our Cookie</span><br /> Policy explains how and why we use cookies
            on the website. Cookies are small text files stored on your device
            to enhance user experience. We use cookies for analytics, saving
            preferences, and providing personalized content. Some cookies are
            essential for the site to function properly. You can manage or
            disable cookies through your browser settings. Third-party services
            may also set cookies to collect data for analysis or advertising. By
            continuing to browse the site, you consent to our use of cookies.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
