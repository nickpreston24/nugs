<template>
  <div class="gentle-flex">
    <form class="login-form" @submit.prevent="loginUser">
      <form-input
        label="Email"
        v-model="values.email"
        type="email"
        @validate="validate('email')"
        name="email"
        :error="errors.email"
      ></form-input>
      <form-input
        label="Password"
        v-model="values.password"
        type="password"
        @validate="validate('password')"
        name="password"
        :error="errors.password"
      ></form-input>
      <button class="btn btn-primary btn-block">Login</button>
    </form>
  </div>
</template>

<script>
import * as yup from "yup";
import FormInput from "../components/atoms/FormInput.vue";

const loginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default {
  name: "app",
  components: {
    "form-input": FormInput,
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

<style>
.login-form {
  max-width: 400px;
  width: 100%;
}
</style>