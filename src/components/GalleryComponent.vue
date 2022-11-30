<template>
  <div class="container d-flex my-5 p-0">
    <div class="side d-flex flex-column">
      <a
        class="navbar-brand"
        href="#"
        v-for="(item, index) in arrSideProps"
        :key="index"
        @click.prevent="$emit('changeSide', arrSideProps)"
      >
        <img
          :src="require('@/assets/' + item + '.png')"
          alt=""
          style="border-radius: 20px"
        />
      </a>
    </div>

    <div class="preview" id="preview">
      <a class="navbar-brand" href="#">
        <img
          :src="require('@/assets/' + previewProps + '.png')"
          :style="stylingProps"
          alt=""
          style="border-radius: 20px"
        />
      </a>
    </div>

    <div class="description">
      <h3>{{ titleProps }}</h3>

      <p>IDR {{ priceProps }}</p>

      <router-link to="/shipping">
        <button class="font-weight-bold" type="submit">
          <span><img src="../assets/bx-cart-alt.png" alt="" /></span>
          Add to Chart
        </button>
      </router-link>

      <hr />

      <h5>About the product :</h5>

      <p>
        Tailored to a level of perfection synonymous with that of a Savile Row
        suit and with understated quality in the detail, Jetty has been
        influenced by timeless 1950s style
      </p>
      <p>
        Providing a subtle nod to the past, Jetty also provides a perfect
        solution for the way we work today. A comprehensive product family,
        Jetty features a variety of elegant chairs and sofas.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryComponent",
  data() {
    return {
      arrSideProps: ["side-1", "side-2", "side-3", "side-1", "side-2"],
    };
  },
  props: [
    "previewProps",
    "stylingProps",
    "titleProps",
    "priceProps",
    "sideProps",
  ],
};
</script>

<style>
</style>