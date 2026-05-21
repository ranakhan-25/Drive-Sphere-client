"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "../../lib/auth-client";

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      email: userData.email,
      password: userData.password,
      name: userData.name,
      image: userData.image,
      callbackURL: "/signin",
    });
    if (data) {
      router.push("/signin");
    } else if (error) {
      toast.error(error.message);
    }
  };

  const handelGoogleAuth = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if (!data) {
      toast.error("can't signin with google");
    }
    return router.push("/");
  };

  return (
    <div className="mx-4 sm:mx-auto bg-green-50 p-4 my-5 rounded-xl">
      <h1 className="text-3xl font-medium my-3 text-blue-950">Register</h1>
      <Form className="flex sm:w-100 w-full flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="name"
          type="text"
          minLength={3}
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label className="text-black">Name</Label>
          <Input
            className={"shadow bg-white text-black"}
            placeholder="Enter your Name"
          />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className="text-black">Email</Label>
          <Input
            className={"shadow bg-white text-black"}
            placeholder="john@example.com"
          />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label className="text-black">Password</Label>
          <Input
            className={"shadow bg-white text-black"}
            placeholder="Enter your password"
          />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="image"
          type="url"
          validate={(value) => {
            if (!value.startsWith("https")) {
              return "Enter your valid Image Url";
            }
            return null;
          }}
        >
          <Label className="text-black">Photo</Label>
          <Input
            className={"shadow bg-white text-black"}
            placeholder="Enter your Image Url"
          />
          <FieldError />
        </TextField>
        <div className="">
          <Button className={"w-full"} type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <div>
        <button
          onClick={handelGoogleAuth}
          className="flex items-center justify-center gap-3 w-full px-6 my-6 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>
      </div>
      <Link href="/signin" className="mt-3">
        <span className="text-black">
          have an account{" "}
          <span className="text-green-500 font-medium text-sm">SignIn</span>
        </span>
      </Link>
    </div>
  );
};

export default LoginPage;
