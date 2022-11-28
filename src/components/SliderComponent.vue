<template>
  <div>
    <div class="other bg-light p-5">
      <h4>Complete Your Room</h4>
      <h4>With What We Designed</h4>
      <div class="d-flex justify-content-around">
        <CardComponent
          v-for="(item, index) in arrCardTittle"
          :key="index"
          :cardTitle="item"
          :cardPrice="arrCardPrice[index]"
          :cardImage="arrCardImages[index]"
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
  data() {
    return {
      arrCardTittle: [
        "Cangkir Mauttie",
        "Saman Kakka",
        "Lino Dino",
        "Syail Ammeno",
      ],
      arrCardPrice: ["89.300.000", "14.500.000", "22.000.000", "12.000.000"],
      arrCardImages: ["chair-1", "chair-2", "chair-3", "chair-4"],
    };
  },
};
</script>

<style>
</style>