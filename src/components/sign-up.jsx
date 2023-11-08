import PageHeader from "../common/pageHeader";
import Input from "../common/inputs";
import SignUpForm from "./form";
import usersService from "../services/userServices";
import { useFormik } from "formik";

import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Joi from "joi";
import { useAuth } from "../contexts/auth.context";

const SignUp = ({ redirect }) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const { user, signUp } = useAuth();
  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate(values) {
      const schema = Joi.object({
        name: Joi.string().min(6).max(255).required(),
        email: Joi.string()
          .min(2)
          .max(255)
          .required()
          .email({ tlds: { allow: false } }),
        password: Joi.string().min(2).max(255).required(),
      });
      const { error } = schema.validate(values, { abortEarly: false });

      if (!error) {
        return null;
      }
      const errors = {};
      for (const detail of error.details) {
        const key = detail.path[0];
        errors[key] = detail.message;
      }
      return errors;
    },

    async onSubmit(values) {
      console.log(values);
      try {
        await signUp({ ...values, biz: false });
        if (redirect) {
          navigate(redirect);
        }
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <form onSubmit={form.handleSubmit}>
        {serverError && <div className="alert alert-danger">{serverError}</div>}
        <Input
          error={form.touched.name && form.errors.name}
          {...form.getFieldProps("name")}
          label="Name"
          type="name"
          required
        />
        <Input
          error={form.touched.email && form.errors.email}
          {...form.getFieldProps("email")}
          label="Email"
          type="email"
          required
        />
        <Input
          error={form.touched.password && form.errors.password}
          {...form.getFieldProps("password")}
          label="Password"
          type="password"
          required
        />
        <button>Sign Up</button>
      </form>
    </>
  );
};
export default SignUp;
