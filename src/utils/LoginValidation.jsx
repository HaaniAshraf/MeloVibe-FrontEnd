import * as Yup from "yup";

export const LoginValidation = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string().min(4).required("Please enter password"),
});
