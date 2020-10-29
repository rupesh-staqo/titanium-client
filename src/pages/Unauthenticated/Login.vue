<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="login-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="text-center text-white py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <img src="@/assets/images/logo.png" alt="logo" />
              </div>
              <h4>Hello! let's get started</h4>
              <h6 class="font-weight-light">Sign in to continue.</h6>
              <ValidationObserver v-slot="{ handleSubmit }">
                <form class="pt-3">
                  <div class="form-group">
                    <ValidationProvider
                      name="user_email"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <input
                        type="text"
                        v-model="user_email"
                        class="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username"
                      />
                      <div class="invalid-feedback">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <ValidationProvider
                      name="password"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <input
                        type="password"
                        v-model="password"
                        class="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                      <div class="invalid-feedback">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <div class="mt-3">
                    <a
                      class="btn btn-rounded btn-block btn-dark btn-lg font-weight-bold auth-form-btn"
                      v-on:click="handleSubmit(login)"
                      >{{ loading ? "Requesting..." : "LOGIN" }}</a
                    >
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AUTH_REQUEST } from "../../store/actions/auth";

export default {
  name: "Login",
  props: {
    source: String,
  },
  data() {
    return {
      user_email: "",
      password: "",
      otp: "",
      show_otp_popup: false,
      postData: {},
      loading: false,
    };
  },
  methods: {
    login: async function () {
      this.loading = true;
      const { user_email, password } = this;
      this.postData = {
        user_email: user_email,
        password: password,
      };
      await this.$store.dispatch(AUTH_REQUEST, this.postData);
      this.loading = false;
    },
  },
};
</script>