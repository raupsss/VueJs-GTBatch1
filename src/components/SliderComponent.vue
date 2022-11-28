<template>
  <div>
    <div class="other bg-light p-5">
      <h4>Complete Your Room</h4>
      <h4>With What We Designed</h4>
      <div class="d-flex justify-content-around">
        <CardComponent
          cardTitle="Cangkir Mauttie"
          cardPrice="89.300.000"
          cardImage="chair-1"
        ></CardComponent>
        <CardComponent
          cardTitle="Saman Kakka"
          cardPrice="14.500.000"
          cardImage="chair-2"
        ></CardComponent>
        <CardComponent
          cardTitle="Lino Dino"
          cardPrice="22.000.000"
          cardImage="chair-3"
        ></CardComponent>
        <CardComponent
          cardTitle="Syail Ammeno"
          cardPrice="12.000.000"
          cardImage="chair-4"
        ></CardComponent>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
export default {
  name: "SliderComponent",
  components: {
    CardComponent,
  },
};
</script>

<style>
</style>