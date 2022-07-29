<template>
  <div>
    <VTitle :jA="judulAtas" :jB="judulBawah"></VTitle>
    <VInformasiBerkala></VInformasiBerkala>
  </div>
</template>

<script>
import VTitle from "@/components/VTitle.vue";
import VInformasiBerkala from "@/components/beranda/informasi/VInformasiBerkala.vue";

export default {
  components: {
    VTitle,
    VInformasiBerkala,
  },
  data() {
    return {
      judulAtas: "Informasi Pubilk",
      judulBawah: "PPID Klaten",
    };
  },
};
</script>

<style>
</style>