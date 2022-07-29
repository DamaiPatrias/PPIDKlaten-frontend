<template>
  <div id="app">
    <header>
      <VHeader></VHeader>
    </header>
    <router-view />
    <footer>
      <VFooter></VFooter>
    </footer>
  </div>
</template>

<script>
import VHeader from "@/components/VHeader.vue";
import VFooter from "@/components/VFooter.vue";

export default {
  components: {
    VHeader,
    VFooter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body {
  background-color: #f4f6f9;
}

a {
  color: red;
}
</style>
