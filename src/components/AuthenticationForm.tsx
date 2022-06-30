import {
  Anchor,
  Button,
  Divider,
  Group,
  LoadingOverlay,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { EnvelopeClosedIcon, LockClosedIcon } from "@modulz/radix-icons";
import React, { useEffect, useState } from "react";
import { GoogleIcon } from "../assets/GoogleIcon";
import { useAuthModal } from "../temp-context/AuthModalContext";
import axios from "axios"
import { errorToast, successToast } from "./Toast";
import { useAuth } from "../temp-context/AuthContext";

export interface AuthenticationFormProps {
  noShadow?: boolean;
  noPadding?: boolean;
  noSubmit?: boolean;
  style?: React.CSSProperties;
}

function AuthenticationForm({
  noShadow,
  noPadding,
  noSubmit,
  style,
}: AuthenticationFormProps) {
  const [formType, setFormType] = useState<"register" | "login">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>(null);
  const theme = useMantineTheme();
  const { authModalOpened, setAuthModalOpned } = useAuthModal();
  const { setToken, setIsAuthenticated, setUserData, isAuthenticated } =
    useAuth();


  const toggleFormType = () => {
    setFormType((current) => (current === "register" ? "login" : "register"));
    setError(null);
  };

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsOfService: true,
    },

    validationRules: {
      firstName: (value) => formType === "login" || value.trim().length >= 2,
      lastName: (value) => formType === "login" || value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      // password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
      confirmPassword: (val, values) =>
        formType === "login" || val === values.password,
    },

    errorMessages: {
      email: "Invalid email",
      password:
        "Password should contain 1 number, 1 letter and at least 6 characters",
      confirmPassword: "Passwords don't match. Try again",
    },
  });

  const loginclickhandler = async (e: { (e: any): void; preventDefault?: any; }) => {
    setLoading(true);
    try {
      const userData = await axios.post("/api/auth/login", {
        email: form.values.email,
        password: form.values.password,
      });
      setToken(userData.data.encodedToken);
      setIsAuthenticated(true);
      setUserData(userData.data.foundUser);
      setIsAuthenticated(true);
      setAuthModalOpned(false);
      successToast("Signup Success! Welcome onboard!");
    } catch (error) {
        errorToast(error);
    }
    setLoading(false);
  };

  // const registerclickhandler = async (e: { (e: any): void; preventDefault?: any; }) => {
  //   setLoading(true);
  //   try {
  //     const userData = await axios.post("/api/auth/signup", {
  //       email: "hiteshverma222@gmail.com",
  //       password: "hitesh123",
  //     });
  //     console.log(userData);
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  //   setLoading(false);
  // };


  const registerclickhandler = async () => {
    setLoading(true);
      try {
        await axios.post("/api/auth/signup", {
          email: form.values.email,
          password: form.values.password,
          firstName: form.values.firstName,
          lastName: form.values.lastName,
        });
        const userData = await axios.post("/api/auth/login", {
          email: form.values.email,
          password: form.values.password,
        });
        setToken(userData.data.encodedToken);
        setIsAuthenticated(true);
        setUserData(userData.data.foundUser);
        setIsAuthenticated(true);
        setAuthModalOpned(false);
        successToast("Signup Success! Welcome onboard!");
      } catch (error) {
          errorToast(error);
      }
    };

  const handleSubmit = () => {
    // setError(null);
    // setTimeout(() => {
    //   setLoading(false);
    //   setError(
    //     formType === 'register'
    //       ? 'User with this email already exists'
    //       : 'User with this email does not exist'
    //   );
    // }, 3000);

    formType==="login" ? loginclickhandler(e) : registerclickhandler();
  };



  return (
    <Paper
      p={noPadding ? 0 : "lg"}
      shadow={noShadow ? null : "sm"}
      style={{
        position: "relative",
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        ...style,
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)} >
        <LoadingOverlay visible={loading} />
        {formType === "register" && (
          <Group grow>
            <TextInput
              data-autofocus
              required
              placeholder="Your first name"
              label="First name"
              {...form.getInputProps("firstName")}
            />

            <TextInput
              required
              placeholder="Your last name"
              label="Last name"
              {...form.getInputProps("lastName")}
            />
          </Group>
        )}

        <TextInput
          mt="md"
          required
          placeholder="Your email"
          label="Email"
          icon={<EnvelopeClosedIcon />}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          mt="md"
          required
          placeholder="Password"
          label="Password"
          icon={<LockClosedIcon />}
          {...form.getInputProps("password")}
        />

        {formType === "register" && (
          <PasswordInput
            mt="md"
            required
            label="Confirm Password"
            placeholder="Confirm password"
            icon={<LockClosedIcon />}
            {...form.getInputProps("confirmPassword")}
          />
        )}

        {/* {formType === "register" && (
          <Checkbox
            mt="xl"
            label="I agree to sell my soul and privacy to this corporation"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />
        )} */}

        {error && (
          <Text color="red" size="sm" mt="sm">
            {error}
          </Text>
        )}

        {!noSubmit && (
          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="gray"
              onClick={toggleFormType}
              size="sm"
            >
              {formType === "register"
                ? "Have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>

            <Button color="blue" type="submit">
              {formType === "register" ? "Register" : "Login"}
            </Button>
          </Group>
        )}
      </form>
    </Paper>
  );
}

export { AuthenticationForm };
  function e(e: any) {
    throw new Error("Function not implemented.");
  }

