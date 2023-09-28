import Input from "./common/inputs";
import { useState } from "react";

const useForm = ({ initialValues = {}, onSubmit = () => {} }) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  };
  return {
    inputs,
    handleChange,
    handleSubmit,
  };
};
const Form = () => {
  const { inputs, handleChange, handleSubmit } = useForm({
    initialValues: { email: "", name: "", password: "" },
    onSubmit(inputs) {
      console.log(inputs);
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          name={"name"}
          onChange={handleChange}
          type="text"
          value={inputs.name}
          required
        />
        <Input
          label="Email"
          name="email"
          onChange={handleChange}
          type="email"
          value={inputs.email}
          required
        />
        <Input
          label="Password"
          name="password"
          onChange={handleChange}
          type="password"
          value={inputs.password}
          required
        />
        <button>Sign Up</button>
      </form>
    </>
  );
};
export default Form;
