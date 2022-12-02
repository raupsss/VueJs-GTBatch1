<template>
  <div>
    <div class="row justify-content-center">
      <div class="my-5 d-none" id="message">
        <h3 id="titleMessage"></h3>
        <p id="mainMessage"></p>
        <a href="index.html">
          <button
            type="submit"
            class="btn"
            style="background-color: pink; border: none"
          >
            Back
          </button>
        </a>
      </div>
      <div class="col-6 p-5 rounded">
        <form
          v-show="!success && !successSubmit"
          @submit.prevent="inputShipping"
          class="m-0 px-5 pb-5"
          id="formShipping"
          style="border: 1px solid pink; border-radius: 20px"
        >
          <h1 class="text-center my-5">Shipping Form</h1>
          <div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="firstName">First Name</label>
                <input
                  v-model="shippingData.first_name"
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="phoneNumber">Phone Number</label>
                <input
                  v-model="shippingData.phone_number"
                  type="number"
                  class="form-control"
                  id="phoneNumber"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="lastName">Last Name</label>
                <input
                  v-model="shippingData.last_name"
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Enter your Last Name"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="city">City</label>
                <input
                  v-model="shippingData.city"
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="Enter city"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="email">Email Address</label>
                <input
                  v-model="shippingData.email"
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="postalCode">Postal Code</label>
                <input
                  v-model="shippingData.postal_code"
                  type="text"
                  class="form-control"
                  id="postalCode"
                  placeholder="Enter postal code"
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <textarea
              v-model="shippingData.address"
              name=""
              id="address"
              required
              class="form-control"
            ></textarea>
          </div>
          <button
            id=""
            type="submit"
            class="btn"
            style="background-color: pink; color: black; border: none"
          >
            {{ buttonValue }}
          </button>
        </form>
        <SuccessForm v-show="success"></SuccessForm>
        <SuccessFormSubmit v-show="successSubmit"></SuccessFormSubmit>
      </div>
    </div>
  </div>
</template>

<script>
import shippingService from "../services/shippingService.js";
import SuccessForm from "./SuccessForm.vue";
import SuccessFormSubmit from "./SuccessFormSubmit.vue";

export default {
  name: "FormShipping",

  data() {
    return {
      shippingData: {
        first_name: null,
        last_name: null,
        email: null,
        phone_number: null,
        city: null,
        postal_code: null,
        address: null,
      },
      success: false,
      successSubmit: false,
      buttonValue: "Submit",
    };
  },

  components: {
    SuccessForm,
    SuccessFormSubmit,
  },

  methods: {
    cekInput() {
      console.log(this.shippingData);
    },

    inputShipping() {
      let data = this.shippingData;
      if (this.buttonValue === "Submit") {
        shippingService
          .create(data)
          .then((response) => {
            console.log(response.data);
            this.successSubmit = true;
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        shippingService
          .updateShipping(data.id, data)
          .then((response) => {
            console.log(response.data);
            this.success = true;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },

  props: ["shippingDataProps"],

  watch: {
    shippingDataProps(newValue) {
      this.shippingData = newValue;
      console.log(this.shippingData);
      this.buttonValue = "Update";
    },
  },
};
</script>

<style>
</style>