<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <BreadcrumbComponent></BreadcrumbComponent>
    <ShippingListComponent
      @updateShipping="funcUpdateShipping"
      v-show="viewForm"
    ></ShippingListComponent>
    <FormShipping
      v-show="!viewForm"
      :shippingDataProps="shippingData"
    ></FormShipping>
    <FooterComponent></FooterComponent>
    <CopyrightComponent></CopyrightComponent>
  </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import BreadcrumbComponent from "../components/BreadcrumbComponent.vue";
import FormShipping from "../components/FormShipping.vue";
import ShippingListComponent from "../components/ShippingListComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import CopyrightComponent from "../components/CopyrightComponent.vue";

export default {
  name: "ShippingList",
  data() {
    return {
      shippingData: null,
      viewForm: true,
    };
  },
  components: {
    NavbarComponent,
    BreadcrumbComponent,
    FormShipping,
    ShippingListComponent,
    FooterComponent,
    CopyrightComponent,
  },

  methods: {
    funcUpdateShipping(item) {
      this.shippingData = item;
      this.viewForm = false;
    },
  },

  watch: {},
};
</script>

<style>
</style>