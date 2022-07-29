<template>
  <div>
    <VTitle :jA="judulAtas" :jB="judulBawah"></VTitle>
    <FromPermohonan></FromPermohonan>
  </div>
</template>

<script>
import VTitle from "@/components/VTitle.vue";
import FromPermohonan from "@/components/beranda/form/VFromPermohonan.vue";

export default {
  components: {
    VTitle,
    FromPermohonan,
  },
  data() {
    return {
      judulAtas: "PERMOHONAN INFORMASI",
      judulBawah: "PPID Klaten",
    };
  },
};
</script>

<style>
</style>