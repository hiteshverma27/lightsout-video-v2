import {
  Anchor,
  Box,
  Button,
  Center,
  Group,
  LoadingOverlay,
  Paper,
  PasswordInput,
  Progress,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { useForm, useInputState } from "@mantine/hooks";
import { EnvelopeClosedIcon, LockClosedIcon } from "@modulz/radix-icons";
import axios from "axios";
import React, { useState } from "react";
import { Check, X } from "tabler-icons-react";
import { useAuth } from "../contexts/AuthContext";
import { useAuthModal } from "../contexts/AuthModalContext";
import { errorToast, successToast } from "./Toast";

//password input
function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) {
  return (
    <Text color={meets ? "teal" : "red"} mt={5} size="sm">
      <Center inline>
        {meets ? <Check size={14} /> : <X size={14} />}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

export function PasswordStrength() {
  const [value, setValue] = useInputState("");
  const strength = getStrength(value);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ bar: { transitionDuration: "0ms" } }}
        value={
          value.length > 0 && index === 0
            ? 100
            : strength >= ((index + 1) / 4) * 100
            ? 100
            : 0
        }
        color={strength > 80 ? "teal" : strength > 50 ? "yellow" : "red"}
        key={index}
        size={4}
      />
    ));

  return (
    <div>
      <PasswordInput
        value={value}
        onChange={setValue}
        placeholder="Your password"
        label="Password"
        required
      />

      <Group spacing={5} grow mt="xs" mb="md">
        {bars}
      </Group>

      <PasswordRequirement
        label="Has at least 6 characters"
        meets={value.length > 5}
      />
      {checks}
    </div>
  );
}
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
  const { setAuthModalOpned } = useAuthModal();
  const { setToken, setIsAuthenticated, setUserData } = useAuth();

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
      password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
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

  const loginclickhandler = async (e: {
    (e: any): void;
    preventDefault?: any;
  }) => {
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
      axios.defaults.headers.common["authorization"] =
        userData.data.encodedToken;
      successToast("Signup Success! Welcome onboard!");
    } catch (error) {
      errorToast(error);
    }
    setLoading(false);
  };
  const guestLoginHandler = async (e: {
    (e: any): void;
    preventDefault?: any;
  }) => {
    setLoading(true);
    try {
      const userData = await axios.post("/api/auth/login", {
        email: "hiteshverma@gmail.com",
        password: "hitesh123",
      });
      setToken(userData.data.encodedToken);
      setIsAuthenticated(true);
      setUserData(userData.data.foundUser);
      setIsAuthenticated(true);
      setAuthModalOpned(false);
      axios.defaults.headers.common["authorization"] =
        userData.data.encodedToken;
      successToast(`Welcome back ${userData.data.foundUser.firstName}!`);
    } catch (error) {
      errorToast(error);
    }
    setLoading(false);
  };

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
      axios.defaults.headers.common["authorization"] =
        userData.data.encodedToken;
      successToast("Signup Success! Welcome onboard!");
    } catch (error) {
      errorToast(error);
    }
    setLoading(false);
  };

  const handleSubmit = () => {
    formType === "login" ? loginclickhandler(e) : registerclickhandler();
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
      <form onSubmit={form.onSubmit(handleSubmit)}>
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
            <Button color="blue" onClick={() => guestLoginHandler(e)}>
              Guest Login
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
