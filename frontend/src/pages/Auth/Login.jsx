import { Alert, Button, Card, Label, TextInput } from "flowbite-react";
import { Controller, useForm } from "react-hook-form";
import { HiHeart, HiLockClosed, HiMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/slices/authSlice";
import * as yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    submitted,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    const result = await dispatch(loginAction(data));
    console.log(result)
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <div className="space-y-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <HiHeart className="h-12 w-12 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome Back to Mama Care
              </h1>
              <p className="text-gray-500">
                Join our healthcare community for better care
              </p>
            </div>

            {submitted ? (
              <Alert color="success">
                Registration successful! Welcome to our healthcare platform.
              </Alert>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Email" />
                    </div>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          {...field}
                          id="email"
                          type="email"
                          icon={HiMail}
                          placeholder="example@gmail.com"
                          color={errors.email?.message ? "failure" : "gray"}
                          helperText={errors.email?.message}
                        />
                      )}
                    />
                  </div>

                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password" value="Password" />
                    </div>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          id="password"
                          type="password"
                          icon={HiLockClosed}
                          placeholder="********"
                          color={errors.password?.message ? "failure" : "gray"}
                          helperText={errors.password?.message}
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 ">
                  <Button
                    type="button"
                    color="gray"
                    onClick={() => navigate("/register")}
                    className="hover:text-blue-500 hover:underline focus:outline-none focus:underline"
                  >
                    Don&apos;t have an account? Register
                  </Button>
                  <Button type="submit" color="blue">
                    Login
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
