<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>
    <BreadcrumbComponent></BreadcrumbComponent>
    <GalleryComponent></GalleryComponent>
    <SliderComponent></SliderComponent>
    <FooterComponent></FooterComponent>
    <CopyrightComponent></CopyrightComponent>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import BreadcrumbComponent from './components/BreadcrumbComponent.vue'
import GalleryComponent from './components/GalleryComponent.vue'
import SliderComponent from './components/SliderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import CopyrightComponent from './components/CopyrightComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    BreadcrumbComponent,
    GalleryComponent,
    SliderComponent,
    FooterComponent,
    CopyrightComponent
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}

.description button{
    width: 50%;
    background-color: pink;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    padding: 5px 0px;
}
</style>
