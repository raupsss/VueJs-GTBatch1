<template>
  <div>
    <nav class="navbar navbar-light bg-light navbar-expand-lg py-4 px-5">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link">/</span>
        </li>
        <li class="nav-item">
          <router-link to="/officeRoom" class="nav-link">Office Room</router-link>
        </li>
        <li class="nav-item">
          <span v-show="routeName == '/detail'" class="nav-link">/</span>
        </li>
        <li class="nav-item">
          <router-link
            v-show="routeName == '/detail'"
            to="/detail"
            class="nav-link active"
            >Details</router-link
          >
        </li>

        <li class="nav-item">
          <span v-show="routeName == '/shipping'" class="nav-link">/</span>
        </li>
        <li class="nav-item">
          <router-link
            v-show="routeName == '/shipping'"
            to="/detail"
            class="nav-link"
            >Details</router-link
          >
        </li>
        <li class="nav-item">
          <span v-show="routeName == '/shipping'" class="nav-link">/</span>
        </li>
        <li class="nav-item">
          <router-link
            v-show="routeName == '/shipping'"
            to="/shipping"
            class="nav-link active"
            >Shipping</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "BreadcrumbComponent",
  computed: {
    routeName() {
      return this.$route.path;
    },
  },
};
</script>

<style>
</style>