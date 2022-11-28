<template>
  <div>
    <div class="footerTitle text-center my-5">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="" />
      </a>
    </div>

    <div class="footerItem d-flex justify-content-around mb-5 p-5">
      <div class="overview d-flex flex-column">
        <h5>Overview</h5>
        <a class="p-0 nav-link text-dark" href="">Shipping</a>
        <a class="p-0 nav-link text-dark" href="">Refund</a>
        <a class="p-0 nav-link text-dark" href="">Promotion</a>
      </div>

      <div class="company d-flex flex-column">
        <h5>Company</h5>
        <a class="p-0 nav-link text-dark" href="">About</a>
        <a class="p-0 nav-link text-dark" href="">Career</a>
        <a class="p-0 nav-link text-dark" href="">Contact Us</a>
      </div>

      <div class="explore d-flex flex-column">
        <h5>Explore</h5>
        <a class="p-0 nav-link text-dark" href="">Terms & Condition</a>
        <a class="p-0 nav-link text-dark" href="">Privacy Policy</a>
        <a class="p-0 nav-link text-dark" href="">For Developer</a>
      </div>

      <div class="search">
        <h5>Special Letter</h5>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2 bg-light border-0"
            type="search"
            placeholder="Your Email Address"
            aria-label="Search"
          />
          <button
            class="btn my-2 my-sm-0"
            type="submit"
            style="background-color: pink"
          >
            <span>
              <img src="../assets/tele-icon.png" alt="" />
            </span>
          </button>
        </form>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style>
</style>