import * as yup from "yup";

export const contactUsSchema = yup.object().shape({
  first_name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is a required field"),
  message: yup.string().required("This field is required"),
  phone_number: yup.number().required("Phone is a required field"),
});

export const registrationSchema = yup.object().shape({
  first_name: yup.string().required("Name is a required field"),
  last_name: yup.string().required("Name is a required field"),
  phone_number: yup.number().required("Phone is a required field"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is a required field"),
  gender: yup.string().required("This field is required"),
  educational_status: yup.number().required("This field is required"),
  privacy_policy_accepted: yup
    .bool()
    .oneOf([true], "You need to agree to the terms and conditions"),
});
