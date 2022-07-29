<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-item
        v-for="(slide, index) in slides"
        :key="slide"
        :slide="slide"
        :current-slide="currentSlide"
        :index="index"
      ></carousel-item>
      <div>
        <button class="control left" @click="left()">&#10094;</button>
        <button class="control right" @click="right()">&#10095;</button>
      </div>
      <div class="indicator">
        <div
          class="indicator-item"
          v-for="(item, index) in slides.length"
          :key="item"
          :class="{ active: currentSlide === index }"
          @click="changeSlide(index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselItem from "@/components/beranda/carousel/VCarouselItem.vue";

export default {
  props: ["slides"],
  components: { CarouselItem },
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },

    startSlide() {
      this.stopSlide();
      this.slideInterval = setInterval(() => {
        this.playSlide();
      }, 5000);
    },

    stopSlide() {
      clearInterval(this.slideInterval);
    },

    playSlide() {
      const index =
        this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
      this.setCurrentSlide(index);
    },

    changeSlide(index) {
      this.currentSlide = index;
      this.startSlide();
    },

    left() {
      const index =
        this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.startSlide();
    },

    right() {
      this.playSlide();
      this.startSlide();
    },
  },
  mounted() {
    this.startSlide();
  },
  beforeUnmount() {
    this.stopSlide();
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
}

.control {
  background: rgb(0, 0, 0, 0);
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 70px;
  top: calc(50% - 25px);
  color: white;
  font-size: 50px;
  text-shadow: 0px 0px 10px black;
  /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
  cursor: pointer;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

.indicator {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  z-index: 2;
  bottom: 0;
}

.indicator-item {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: none;
  background: #fff;
  opacity: 0.5;
  margin: 5px 7px;

  border-radius: 50%;
  cursor: pointer;
}

.active {
  opacity: 1;
}
</style>