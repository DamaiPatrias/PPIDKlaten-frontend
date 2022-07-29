<template>
  <div>
    <VTitle :jA="judulAtas" :jB="judulBawah"></VTitle>
    <VDokumen></VDokumen>
  </div>
</template>

<script>
import VTitle from "@/components/VTitle.vue";
import VDokumen from "@/components/dokumen/VDokumen.vue";

export default {
  components: {
    VTitle,
    VDokumen,
  },
  data() {
    return {
      judulAtas: "Dokumen",
      judulBawah: "PPID Klaten",
    };
  },
};
</script>

<style>
</style>