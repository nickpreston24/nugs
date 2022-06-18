<template>
  <Row>
    <form class="login-form" @submit.prevent="loginUser">
      <Stack>
        <form-input
          class="border-2 border-warmGray-400 max-w-md bg-warmGray-500"
          label="Email"
          v-model="values.email"
          type="email"
          @validate="validate('email')"
          name="email"
          :error="errors.email"
        ></form-input>
        <form-input
          class="border-2 border-warmGray-400 max-w-md bg-warmGray-500"
          label="Password"
          v-model="values.password"
          type="password"
          @validate="validate('password')"
          name="password"
          :error="errors.password"
        ></form-input>
        <Brandon class="btn btn-primary btn-block">Login</Brandon>
      </Stack>
    </form>
  </Row>
</template>

<script>
import * as yup from "yup";
import { FormInput, Brandon } from "../components/atoms";
import { Row, Stack } from "../components/flex";
const loginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default {
  name: "app",
  components: {
    "form-input": FormInput,
    Row,
    Stack,
    Brandon,
  },
  data() {
    return {
      values: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {
      loginFormSchema
        .validate(this.values, { abortEarly: false })
        .then()
        .catch((err) => {
          err.inner.forEach((error) => {
            this.errors = { ...this.errors, [error.path]: error.message };
          });
        });
    },
    validate(field) {
      loginFormSchema
        .validateAt(field, this.values)
        .then(() => {
          this.errors[field] = "";
        })
        .catch((err) => {
          this.errors[err.path] = err.message;
        });
    },
  },
};
</script>
