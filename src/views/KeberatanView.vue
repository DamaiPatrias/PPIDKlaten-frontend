<template>
  <div>
    <VTitle :jA="judulAtas" :jB="judulBawah"></VTitle>
    <FromKeberatan></FromKeberatan>
  </div>
</template>

<script>
import VTitle from "@/components/VTitle.vue";
import FromKeberatan from "@/components/beranda/form/VFormKeberatan.vue";

export default {
  components: {
    VTitle,
    FromKeberatan,
  },
  data() {
    return {
      judulAtas: "KEBERATAN INFORMASI",
      judulBawah: "PPID Klaten",
    };
  },
};
</script>

<style>
</style>