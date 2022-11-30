<template>
  <div id="detail">
    <NavbarComponent></NavbarComponent>
    <BreadcrumbComponent></BreadcrumbComponent>
    <GalleryComponent
      :previewProps="preview"
      :titleProps="titleFirst"
      :priceProps="priceFirst"
      :stylingProps="styling"
    ></GalleryComponent>
    <SliderComponent @changeImage="funChangeImage"></SliderComponent>
    <FooterComponent></FooterComponent>
    <CopyrightComponent></CopyrightComponent>
  </div>
</template>

<script>

import NavbarComponent from "../components/NavbarComponent.vue";
import BreadcrumbComponent from "../components/BreadcrumbComponent.vue";
import GalleryComponent from "../components/GalleryComponent.vue";
import SliderComponent from "../components/SliderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import CopyrightComponent from "../components/CopyrightComponent.vue";

export default {
    
  name: "DetailPage",
  data() {
    return {
      preview: "chair",
      titleFirst: "Chair Tatty",
      priceFirst: "12.000.000",
      styling: null,
    };
  },
  components: {
    NavbarComponent,
    BreadcrumbComponent,
    GalleryComponent,
    SliderComponent,
    FooterComponent,
    CopyrightComponent,
  },
  methods: {
    funChangeImage(imgLink, titleLink, priceLink) {
      this.preview = imgLink;
      this.titleFirst = titleLink;
      this.priceFirst = priceLink;
      this.styling = { width: 560 + "px", height: 609 + "px" };
      return { top: 0 };
      // alert(imgLink);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.description button {
  width: 50%;
  background-color: pink;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  padding: 5px 0px;
}
</style>