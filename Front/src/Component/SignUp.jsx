import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    maxWidth: "450px",
    width: "100%",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
  },
}));

export default function AuthDialog() {
  const [open, setOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const showSuccessToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: "#4BB543",
        color: "#fff",
        fontWeight: "bold",
      },
      icon: "✅",
    });
  };

  const showErrorToast = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: "#FF3333",
        color: "#fff",
        fontWeight: "bold",
      },
      icon: "❌",
    });
  };

  const showInfoToast = (message) => {
    toast.info(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: "#3498db",
        color: "#fff",
        fontWeight: "bold",
      },
      icon: "ℹ️",
    });
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const emailData = {
        user_name: data.Email,
        user_email: data.Number,
        message: data.password,
      };

      await emailjs.send(
        "service_rdnp30f",
        "template_y6wbv6p",
        emailData,
        "RyAVoqL79Wvg9GDeF"
      );
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: data.Email,
          password: data.password,
        })
      );

      showSuccessToast(`Account created successfully! Welcome ${data.Email}!`);
      setIsLoggedIn(true);
      setOpen(false);
      reset();
    } catch (error) {
      showErrorToast("Failed to create account. Please try again later.");
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    showInfoToast("You have been logged out successfully");
  };

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Sign Up
        </button>
      )}

      <BootstrapDialog
        onClose={() => {
          setOpen(false);
          reset();
        }}
        open={open}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 3,
            background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            color: "white",
          }}
          className="font-bold text-2xl"
        >
          Create Your Account
          <IconButton
            aria-label="close"
            onClick={() => {
              setOpen(false);
              reset();
            }}
            sx={{
              position: "absolute",
              right: 12,
              top: 12,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent dividers className="bg-gray-50">
            <Typography
              gutterBottom
              className="text-gray-600 mb-6 text-center text-sm"
            >
              Join our community to access exclusive features and content.
            </Typography>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  {...register("Email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.Email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="example@email.com"
                />
                {errors.Email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.Email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Phone Number
                  <span className="text-gray-500 ml-1">(Optional)</span>
                </label>
                <input
                  type="tel"
                  {...register("Number", {
                    pattern: {
                      value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                      message: "Invalid phone number",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.Number
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="+92 3202376159"
                />
                {errors.Number && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.Number.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Password*
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <span className="pr-3">already have account ?</span>
                <Link
                  to="/login"
                  onClick={() => {
                    setOpen(false);
                    reset();
                  }}
                  className="text-blue-500 font-extralight underline underline-offset-2"
                >
                  login
                </Link>
              </div>
            </div>
          </DialogContent>

          <DialogActions className="bg-gray-50 px-6 py-4">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                reset();
              }}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-4 py-2 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </DialogActions>
          
        </form>
      </BootstrapDialog>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </React.Fragment>
  );
}
