<template>
  <div>
    <VTitle :jA="judulAtas" :jB="judulBawah"></VTitle>
    <PpidPembantu></PpidPembantu>
  </div>
</template>

<script>
import VTitle from "@/components/VTitle.vue";
import PpidPembantu from "@/components/ppidpembantu/VPembantu.vue";

export default {
  components: { VTitle, PpidPembantu },
  data() {
    return {
      judulAtas: "PPID Pembantu",
      judulBawah: "PPID Klaten",
    };
  },
};
</script>

<style>
</style>