<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <BreadcrumbComponent></BreadcrumbComponent>
    <FormShipping></FormShipping>
    <FooterComponent></FooterComponent>
    <CopyrightComponent></CopyrightComponent>
  </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import BreadcrumbComponent from "../components/BreadcrumbComponent.vue";
import FormShipping from "../components/FormShipping.vue";
import FooterComponent from "../components/FooterComponent.vue";
import CopyrightComponent from "../components/CopyrightComponent.vue";

export default {
  name: "ShippingPage",
  components: {
    NavbarComponent,
    BreadcrumbComponent,
    FormShipping,
    FooterComponent,
    CopyrightComponent,
  },
};
</script>

<style>
</style>