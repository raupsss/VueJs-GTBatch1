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
          <a class="nav-link" href="#">Showcase</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Catalog</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Delivery</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Rewards</a>
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