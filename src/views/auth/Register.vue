<template>
  <!-- <form
    class="w-full h-full space-y-5 text-sm"
    @submit.prevent="handleRegister"
  >
    <h1 class="text-primary text-lg font-bold text-center">
      Create an account
    </h1>
    <p class="text-center bg-yellow-200 p-2">
      The username must be a valid email address upon creating an account, the
      link will be sent for confirmation.
    </p>

    <div class="w-full h-full space-y-5">
      <div class="flex flex-col gap-3">
        <label class="form-label">First Name</label>
        <input type="text" name="firstname" v-model="state.firstName" />
        <p v-if="$v.firstName.$error" class="text-red-500">
          {{ $v.firstName.$errors[0].$message }}
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <label class="form-label">Middle Name</label>
        <input type="text" v-model="state.middleName" />
        <p v-if="$v.middleName.$error" class="text-red-500">
          {{ $v.middleName.$errors[0].$message }}
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <label class="form-label">Last Name</label>
        <input type="text" v-model="state.lastName" />
        <p v-if="$v.lastName.$error" class="text-red-500">
          {{ $v.lastName.$errors[0].$message }}
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <label class="form-label">Email</label>
        <input type="text" v-model="state.email" />
        <p v-if="$v.email.$error" class="text-red-500">
          {{ $v.email.$errors[0].$message }}
        </p>
        <p class="text-red-500">This email is already exist</p>
      </div>

      <div class="flex flex-col gap-3">
        <label class="form-label">Password</label>
        <input
          type="password"
          v-model="state.password.password"
          @keyup="validatePolicy"
        />
        <p v-if="$v.password.password.$error" class="text-red-500">
          {{ $v.password.password.$errors[0].$message }}
        </p>
        <div class="text-gray-500">
          <p
            class="flex items-center space-x-4"
            :class="passwordPolicy.minLength ? 'text-green-500' : ''"
          >
            <CheckCircleIcon class="w-4 h-4" />
            <span>Atleast 8 characters</span>
          </p>
          <p
            class="flex items-center space-x-4"
            :class="passwordPolicy.upperCase ? 'text-green-500' : ''"
          >
            <CheckCircleIcon class="w-4 h-4" />
            <span>Atleast contain uppercase letters</span>
          </p>
          <p
            class="flex items-center space-x-4"
            :class="passwordPolicy.lowerCase ? 'text-green-500' : ''"
          >
            <CheckCircleIcon class="w-4 h-4" />
            <span>Atleast contain lowercase letters</span>
          </p>
          <p
            class="flex items-center space-x-4"
            :class="passwordPolicy.numeric ? 'text-green-500' : ''"
          >
            <CheckCircleIcon class="w-4 h-4" />
            <span>Atleast contain numeric characters (0-9)</span>
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <label class="form-label">Confirm Password</label>
        <input type="password" v-model="state.password.confirmPassword" />
        <p v-if="$v.password.confirmPassword.$error" class="text-red-500">
          {{ $v.password.confirmPassword.$errors[0].$message }}
        </p>
      </div>
    </div>

    
    <div class="flex items-center space-x-2">
      <input
        class="text-primary focus:ring-primary"
        type="checkbox"
        id="agreement"
      />
      <label for="agreement"
        >I agree to the <span class="simple-router-link">Terms</span>,
        <span class="simple-router-link">Privacy Policy</span>, and
        <span class="simple-router-link">Fees</span></label
      >
    </div>

    <p class="text-red-500">Please indicate that you agree the following...</p>
    <button class="primary-btn w-full focus:ring-2 focus:ring-primary">
      Create account
    </button>

    <p class="text-center">
      Already have an account?
      <router-link :to="{ name: 'login' }" class="simple-router-link"
        >Login</router-link
      >
    </p>
  </form> -->
  <div class="flex flex-col mx-auto md:p-6 h-auto md:w-3/4 lg:w-3/4 xl:w-2/4">
    <div
      class="flex items-center justify-center w-full h-full space-x-3 my-10 lg:hidden "
    >
      <img class="w-8 h-8" src="@/assets/logo.png" alt="logo" />
      <h2 class="text-lg font-bold text-primary tracking-wider uppercase">
        Sample University
      </h2>
    </div>
    <h1 class="text-xl font-bold text-primary mb-3">Register</h1>
    <p class="bg-yellow-100 p-2">
      The username must be a valid email address upon creating an account, the
      link will be sent for confirmation.
    </p>
    <form
      class="flex flex-col lg:flex-wrap space-y-4 mt-6"
      @submit.prevent="handleRegister"
    >
      <div>
        <label class="text-base font-semibold leading-relaxed text-primary"
          >First name
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          class="w-full px-4 py-2 mt-2"
          v-model="state.firstName"
        />
        <p v-if="$v.firstName.$error" class="text-red-500">
          {{ $v.firstName.$errors[0].$message }}
        </p>
      </div>
      <div>
        <label class="text-base font-semibold leading-relaxed text-primary"
          >Middle name
        </label>
        <input
          type="text"
          name="middlename"
          id="middlename"
          class="w-full px-4 py-2 mt-2"
          v-model="state.middleName"
        />
        <p v-if="$v.middleName.$error" class="text-red-500">
          {{ $v.middleName.$errors[0].$message }}
        </p>
      </div>
      <div>
        <label class="text-base font-semibold leading-relaxed text-primary"
          >Last name
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          class="w-full px-4 py-2 mt-2"
          v-model="state.lastName"
        />
        <p v-if="$v.lastName.$error" class="text-red-500">
          {{ $v.lastName.$errors[0].$message }}
        </p>
      </div>
      <div>
        <label class="text-base font-semibold leading-relaxed text-primary"
          >Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autocomplete="disable"
          class="w-full px-4 py-2 mt-2"
          v-model="state.email"
        />
        <p v-if="$v.email.$error" class="text-red-500">
          {{ $v.email.$errors[0].$message }}
        </p>
      </div>
      <div>
        <label class="text-base font-semibold leading-relaxed text-primary"
          >Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          class="w-full px-4 py-2 mt-2"
          v-model="state.password.password"
          @keyup="validatePolicy"
        />
        <p v-if="$v.password.password.$error" class="text-red-500">
          {{ $v.password.password.$errors[0].$message }}
        </p>
        <div class="mt-4 text-gray-500">
          <p
            class="flex items-center space-x-4"
            :class="passwordPolicy.minLength ? 'text-green-500' : ''"
          >
            <CheckCircleIcon class="w-4 h-4" />
            <span>Atleast 8 characters</span>
          </p>
          <p
            class="flex items-center space-x-4"
            :class="passwordPolicy.upperCase ? 'text-green-500' : ''"
          >
            <CheckCircleIcon class="w-4 h-4" />
            <span>Atleast contain uppercase letters</span>
          </p>
          <p
            class="flex items-center space-x-4"
            :class="passwordPolicy.lowerCase ? 'text-green-500' : ''"
          >
            <CheckCircleIcon class="w-4 h-4" />
            <span>Atleast contain lowercase letters</span>
          </p>
          <p
            class="flex items-center space-x-4"
            :class="passwordPolicy.numeric ? 'text-green-500' : ''"
          >
            <CheckCircleIcon class="w-4 h-4" />
            <span>Atleast contain numeric characters (0-9)</span>
          </p>
        </div>
      </div>
      <div>
        <label class="text-base font-semibold leading-relaxed text-primary"
          >Confirm Password
        </label>
        <input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          class="w-full px-4 py-2 mt-2"
          v-model="state.password.confirmPassword"
          @keyup="validateConfirmPassword"
        />
        <p v-if="!samePassword" class="text-red-500">
          Password must be match
        </p>
      </div>
      <div class="mt-2">
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          class="text-primary focus:ring-primary"
        />
        <label for="agreement">
          I agree to the <span class="simple-router-link">Terms</span>,
          <span class="simple-router-link">Privacy Policy</span>, and
          <span class="simple-router-link">Fees</span>
        </label>
      </div>
      <button
        type="submit"
        class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-primary hover:bg-primary-dark focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-black"
      >
        Submit
      </button>
    </form>
    <p class="mt-8 text-center">
      Already have an account?
      <router-link :to="{ name: 'login' }" class="simple-router-link"
        >Login</router-link
      >
    </p>
  </div>
</template>

<script>
import { CheckCircleIcon } from "@heroicons/vue/solid";
import { reactive, ref } from "vue";
import useValidate from "@vuelidate/core";
import { required, email, helpers, minLength } from "@vuelidate/validators";

export default {
  components: { CheckCircleIcon },
  setup() {
    const state = reactive({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      password: {
        password: "",
        confirmPassword: "",
      },
    });

    const upperCase = helpers.regex(/[A-Z]/);
    const lowerCase = helpers.regex(/[a-z]/);
    const numeric = helpers.regex(/[0-9]/);
    const passwordPolicyMessage = ref("Please complete the requirements below");
    const samePassword = ref(true);

    const rules = reactive({
      firstName: {
        required: helpers.withMessage("First name is required", required),
      },
      middleName: {
        required: helpers.withMessage("Middle name is required", required),
      },
      lastName: {
        required: helpers.withMessage("Last name is required", required),
      },
      email: {
        required: helpers.withMessage("Email is required", required),
        email,
      },
      password: {
        password: {
          required: helpers.withMessage("Password is required", required),
          minLength: helpers.withMessage(
            passwordPolicyMessage.value,
            minLength(8)
          ),
          upperCase: helpers.withMessage(
            passwordPolicyMessage.value,
            upperCase
          ),
          lowerCase: helpers.withMessage(
            passwordPolicyMessage.value,
            lowerCase
          ),
          numeric: helpers.withMessage(passwordPolicyMessage.value, numeric),
        },
      },
    });

    const passwordPolicy = reactive({
      minLength: false,
      upperCase: false,
      lowerCase: false,
      numeric: false,
    });

    const validatePolicy = () => {
      if (state.password.password.length > 7) {
        passwordPolicy.minLength = true;
      } else passwordPolicy.minLength = false;

      if (state.password.password.match(/[A-Z]/g)) {
        passwordPolicy.upperCase = true;
      } else passwordPolicy.upperCase = false;

      if (state.password.password.match(/[a-z]/g)) {
        passwordPolicy.lowerCase = true;
      } else passwordPolicy.lowerCase = false;

      if (state.password.password.match(/[0-9]/)) {
        passwordPolicy.numeric = true;
      } else passwordPolicy.numeric = false;
    };

    const validateConfirmPassword = () => {
      if (state.password.confirmPassword === state.password.password) {
        samePassword.value = true;
      } else samePassword.value = false;

      console.log(samePassword);
    };

    const $v = useValidate(rules, state);

    const handleRegister = () => {
      $v.value.$validate();
      console.log($v.value.password.confirmPassword);
      if (!$v.value.$error) {
        alert("form successfully submitted");
      } else alert("form failed");
    };

    return {
      CheckCircleIcon,
      state,
      rules,
      passwordPolicy,
      samePassword,
      validatePolicy,
      validateConfirmPassword,
      $v,
      handleRegister,
    };
  },
};
</script>

<style></style>
