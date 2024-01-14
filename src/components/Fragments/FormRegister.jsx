import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="Jojo Sigarantang"
        name="fullName"
      ></InputForm>
      <InputForm
        label="Username/Email"
        type="text"
        placeholder="example@gmail.com"
        name="email"
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        placeholder="************"
        name="password"
      ></InputForm>
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="************"
        name="confirmPassword"
      ></InputForm>

      <Button classname="bg-blue-700 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
