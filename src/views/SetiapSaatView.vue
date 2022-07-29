<template>
  <div>
    <VTitle :jA="judulAtas" :jB="judulBawah"></VTitle>
    <VInformasiSetaipSaat></VInformasiSetaipSaat>
  </div>
</template>

<script>
import VTitle from "@/components/VTitle.vue";
import VInformasiSetaipSaat from "@/components/beranda/informasi/VInformasiSetiapSaat.vue";

export default {
  components: {
    VTitle,
    VInformasiSetaipSaat,
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