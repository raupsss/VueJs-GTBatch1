<template>
  <div>
    <!-- Navbar -->
    <nav
      class="
        navbar navbar-light navbar-expand-lg
        justify-content-between
        py-4
        px-5
      "
    >
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="" />
      </a>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/shippingList" class="nav-link"
            >Shipping List</router-link
          >
        </li>
        <li>
          <a class="navbar-brand" href="#">
            <img src="../assets/bx-cart-alt.png" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style>
</style>