import * as Yup from "yup";

// Artist validation schema
export const ArtistValidation = Yup.object().shape({
  profileImg: Yup.mixed()
    .nullable()
    .required("Please select a profile picture")
    .test("fileType", "Only image files are allowed", (value) =>
      value ? value.type.startsWith("image/") : true
    )
    .test("fileSize", "File size should be less than 2MB", (value) =>
      value ? value.size <= 2000000 : true
    ),
  name: Yup.string()
    .max(15, "Name cannot exceed 15 characters")
    .matches(/^[A-Za-z\s]+$/, "Name must contain only letters")
    .required("Please enter name"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Please input a stronger password"
    )
    .required("Please enter password"),
});

// User signup validation schema
export const SignupValidation = Yup.object().shape({
  userName: Yup.string()
    .max(15, "Username cannot exceed 15 characters")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/,
      "Username must include both letter and number"
    )
    .required("Please enter username"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Please input a stronger password"
    )
    .required("Please enter password"),
});

// Admin validation schema
export const AdminValidation = Yup.object().shape({
  userName: Yup.string()
    .max(15, "Username cannot exceed 15 characters")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/,
      "Username must include both letter and number"
    )
    .required("Please enter username"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Please input a stronger password"
    )
    .required("Please enter password"),
  secretKey: Yup.string().required("Please enter secret key"),
});

// Login validation schema
export const LoginValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string().required("Please enter password"),
});

// Forgot Password Validation
export const ForgotPassValidation = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

// New Password Validation
export const NewPasswordValidation = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Please input a stronger password"
    )
    .required("Please enter password"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm password"),
});

export const MusicValidationSchema = Yup.object().shape({
  songImage: Yup.string().required("Song image is required"),
  songName: Yup.string().required("Song name is required"),
  artistName: Yup.string().required("Artist name is required"),
  musicCategory: Yup.string().required("Music category is required"),
  musicAudio: Yup.string().required("Music audio file is required"),
});