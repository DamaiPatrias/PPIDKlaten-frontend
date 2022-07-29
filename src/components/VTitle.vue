<template>
  <div class="container">
    <img
      src="http://beta.learning.klaten.go.id/storage/app/public/carousel/2022-07-07_gambar 1.png"
      alt="Gambar Judul"
    />
    <div class="text">
      <h1>{{ jA }}</h1>
      <h1>{{ jB }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "VTitle",
  props: ["jA", "jB"],
};
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
  height: 290px;
}

img {
  width: 100%;
  height: 100%;
  filter: brightness(50%);
  object-fit: cover;
}
.text {
  height: fit-content;
  position: absolute;
  top: 70px;
  margin-left: 120px;
  text-align: left;
  color: white;
  text-transform: uppercase;
  font-size: 28px;
}

@media screen and (max-width: 768px) {
  .text {
    top: 80px;
    margin-left: 80px;
    font-size: 22px;
  }
}

@media screen and (max-width: 425px) {
  .container {
    height: 250px;
  }

  .text {
    top: 40px;
    height: fit-content;
    margin-left: 30px;
    font-size: 19px;
  }
}
</style>