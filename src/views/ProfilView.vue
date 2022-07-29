<template>
  <div>
    <VTitle :jA="judulAtas" :jB="judulBawah"></VTitle>
    <VProfil></VProfil>
  </div>
</template>

<script>
import VTitle from "@/components/VTitle.vue";
import VProfil from "@/components/profil/VProfil.vue";

export default {
  components: {
    VTitle,
    VProfil,
  },
  data() {
    return {
      judulAtas: "Profil",
      judulBawah: "PPID Klaten",
    };
  },
};
</script>

<style>
</style>