import Input from "../common/inputs";
import { useFormik } from "formik";
import Joi, { allow } from "joi";

// const useForm = ({ initialValues = {}, onSubmit = () => {} }) => {
//   const [inputs, setInputs] = useState(initialValues);

//   const handleChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(inputs);
//   };
//   return {
//     inputs,
//     handleChange,
//     handleSubmit,
//   };
// };
// const Form = () => {
//   const { inputs, handleChange, handleSubmit } = useForm({
//     initialValues: { email: "", name: "", password: "" },
//     onSubmit(inputs) {
//       console.log(inputs);
//     },
//   });}

const SignUpForm = () => {
  const form = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validate(values) {
      const schema = Joi.object({
        name: Joi.string().min(2).max(255).required(),
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

    onSubmit(values) {
      console.log(values);
    },
  });

  return (
    <>
      <form className=" d-flex  flex-column" onSubmit={form.handleSubmit}>
        <Input
          error={form.touched.name && form.errors.name}
          {...form.getFieldProps("name")}
          label="Name"
          type="text"
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
        <button className=" bg-primary d-flex justify-content-center align-items-center mt-3 w-25">
          Sign Up
        </button>
      </form>
    </>
  );
};
export default SignUpForm;
