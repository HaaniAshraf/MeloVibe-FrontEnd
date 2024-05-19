import * as Yup from "yup";

export const SignupValidation = Yup.object({
  userName: Yup.string()
    .max(15, "Name cannot exceed 15 characters")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/,
      "Name must contain both letter and number"
    )
    .required("Please enter name"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string().min(4).required("Please enter password"),
});
