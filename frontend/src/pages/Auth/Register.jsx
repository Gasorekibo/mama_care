import { Button, Label, TextInput, Card, Alert } from "flowbite-react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerAction } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import {
  HiUser,
  HiMail,
  HiPhone,
  HiLockClosed,
  HiLocationMarker,
  HiOfficeBuilding,
  HiMap,
  HiHeart,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import getLocation from "../../helper/getLocation";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = yup
    .object({
      fullName: yup.string().required("Full name is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
      phoneNumber: yup.string().required("Phone number is required"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      address: yup.string().required("Address is required"),
      region: yup.string().required("Region is required"),
      province: yup.string().required("Province is required"),
    })
    .required();
  const {
    formState: { errors },
    submitted,
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      address: "",
      region: "",
      province: "",
    },
  });

  const onSubmit = async (data) => {
    const { latitude, longitude } = await getLocation();
    const dataToSubmit = {
      full_name: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      location: {
        latitude,
        longitude,
        address: data.address,
        region: data.region,
        province: data.province,
      },
    };
    const result = await dispatch(registerAction(dataToSubmit));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/login");
    } else {
      toast.error(result.payload || "Registration failed. Please try again.");
    }
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
                Mama Care Registration
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
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="fullName" value="Full Name" />
                    </div>
                    <Controller
                      name="fullName"
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          id="fullName"
                          type="text"
                          icon={HiUser}
                          placeholder="Eric Cartman"
                          color={errors.fullName?.message ? "failure" : "gray"}
                          helperText={errors.fullName?.message}
                          {...field}
                        />
                      )}
                    />
                  </div>

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
                      <Label htmlFor="phone Number" value="Phone" />
                    </div>
                    <Controller
                      name="phoneNumber"
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          id="phone"
                          type="text"
                          icon={HiPhone}
                          placeholder="+243 999 999 999"
                          color={
                            errors.phoneNumber?.message ? "failure" : "gray"
                          }
                          helperText={errors.phone?.message}
                          {...field}
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

                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="address" value="Address" />
                    </div>
                    <Controller
                      name="address"
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          id="address"
                          type="text"
                          icon={HiLocationMarker}
                          placeholder="123 Main St"
                          color={errors.address?.message ? "failure" : "gray"}
                          helperText={errors.address?.message}
                          {...field}
                        />
                      )}
                    />
                  </div>

                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="region" value="region" />
                    </div>
                    <Controller
                      name="region"
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          id="region"
                          type="text"
                          icon={HiOfficeBuilding}
                          placeholder="Goma"
                          color={errors.region?.message ? "failure" : "gray"}
                          helperText={errors.region?.message}
                          {...field}
                        />
                      )}
                    />
                  </div>

                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="province" value="Province" />
                    </div>
                    <Controller
                      name="province"
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          id="province"
                          type="text"
                          icon={HiMap}
                          placeholder="North Kivu"
                          color={errors.province?.message ? "failure" : "gray"}
                          helperText={errors.province?.message}
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
                    onClick={() => navigate("/login")}
                    className="hover:text-blue-500 hover:underline focus:outline-none focus:underline"
                  >
                    Already have an account? Login
                  </Button>
                  <Button type="submit" color="blue">
                    Register
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

export default Register;
