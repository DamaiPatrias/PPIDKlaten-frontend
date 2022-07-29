<template>
  <div>
    <Carousel :slides="photos"></Carousel>
    <VTitle :jA="judulAtas" :jB="judulBawah" class="judul"></VTitle>
    <VFormInformasi></VFormInformasi>
    <VInformasiPublik></VInformasiPublik>
  </div>
</template>

<script>
import Carousel from "@/components/beranda/carousel/VCarousel.vue";
import VFormInformasi from "@/components/beranda/VFormInformasi.vue";
import VInformasiPublik from "@/components/beranda/VInformasiPublik.vue";
import VTitle from "@/components/VTitle.vue";
import axios from "axios";

export default {
  components: {
    Carousel,
    VFormInformasi,
    VInformasiPublik,
    VTitle,
  },
  data() {
    return {
      judulAtas: "Beranda",
      judulBawah: "PPID Klaten",
      photos: [],
    };
  },
  mounted() {
    axios
      .get("http://beta.learning.klaten.go.id/api/carousel")
      .then((response) => {
        for (let index = 0; index < response.data.length; index++) {
          // console.log(response.data[index].link_gambar);
          this.photos.push(response.data[index].link_gambar);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
}

@media screen and (min-width: 769px) {
  .judul {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .carousel {
    display: none;
  }
}
</style>