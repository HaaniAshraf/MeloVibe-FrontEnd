import * as Yup from "yup";

export const SignupValidation = Yup.object({
  name: Yup.string().max(15).required("Please enter name"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string().min(4).required("Please enter password"),
});
