<template>
  <div class="card-body border-color-pink">
    <h5 class="card-title">Success!</h5>
    <p class="card-text">Your Data Has Been Changed!</p>
    <a @click="reload()" class="btn bg-color-pink text-dark">Back</a>
  </div>
</template>

<script>
export default {
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>

<style scoped>
.border-color-pink {
  border: solid 2px #f9cada;
}

.bg-color-pink {
  background-color: #f9cada;
}
</style>