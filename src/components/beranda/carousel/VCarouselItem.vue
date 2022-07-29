<template>
  <transition name="slide">
    <div class="carousel-item" v-show="currentSlide === index">
      <img :src="slide" alt="" />
    </div>
  </transition>
</template>

<script>
export default {
  props: ["slide", "currentSlide", "index"],
};
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

img {
  width: 100%;
  height: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 2s;
}

.slide-enter {
  opacity: 0;
}

.slide-leave-to {
  opacity: 0;
}
</style>