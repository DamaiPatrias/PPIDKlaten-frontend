<template>
  <div>
    <VTitle :jA="judulAtas" :jB="judulBawah"></VTitle>
    <VInformasiSertaMerta></VInformasiSertaMerta>
  </div>
</template>

<script>
import VTitle from "@/components/VTitle.vue";
import VInformasiSertaMerta from "@/components/beranda/informasi/VInformasiSertaMerta.vue";

export default {
  components: {
    VTitle,
    VInformasiSertaMerta,
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