import * as Yup from "yup";

export const ArtistValidation = Yup.object({
  profilePicture: Yup.mixed()
    .test("fileType", "Only image files are allowed", (value) =>
      value ? value.type.startsWith("image/") : true
    )
    .test("fileSize", "File size should be less than 2MB", (value) =>
      value ? value.size <= 2000000 : true
    )
    .required("Please select a profile picture"),
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

export const SignupValidation = Yup.object({
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

export const LoginValidation = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string().min(4).required("Please enter password"),
});
