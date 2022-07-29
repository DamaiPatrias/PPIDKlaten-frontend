<template>
  <div>
    <VTitle :jA="judulAtas" :jB="judulBawah"></VTitle>
    <TentangKami></TentangKami>
  </div>
</template>

<script>
import VTitle from "@/components/VTitle.vue";
import TentangKami from "@/components/tentangkami/VTentang.vue";

export default {
  components: { VTitle, TentangKami },
  data() {
    return {
      judulAtas: "Tentang Kami",
      judulBawah: "PPID Klaten",
    };
  },
};
</script>

<style>
</style>