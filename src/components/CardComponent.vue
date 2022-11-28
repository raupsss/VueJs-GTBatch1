<template>
  <div class="other bg-light p-0">
    <div class="d-flex justify-content-around my-5">
      <div class="card border-0" style="width: 18rem; border-radius: 20px">
        <img
          class="card-img-top"
          :src="require('@/assets/' + cardImage + '.png')"
          alt=""
          style="border-radius: 50px; padding: 20px 20px 0px 20px"
        />
        <div class="card-body">
          <h5 class="card-title">{{ cardTitle }}</h5>
          <p class="card-text">IDR {{ cardPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["cardTitle", "cardPrice", "cardImage"],
};
</script>

<style>
</style>