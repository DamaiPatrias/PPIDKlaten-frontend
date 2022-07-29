<template>
  <section>
    <h1>MAKLUMAT PPID PEMKAB KLATEN</h1>
    <div class="line"></div>
    <p>
      Kami berupaya memberikan Pelayanan Pengelola Informasi Dan Dokumentasi
      dengan sungguh-sungguh untuk dapat :
    </p>
    <ul v-for="item in data_maklumat" :key="item.id">
      <li>
        {{ item.maklumat }}
      </li>
      <!-- <li>Memberikan pelayanan informasi yang cepat dan akurat;</li>
      <li>
        Memberikan Kemudahan dalam mendapatkan informasi publik yang diperlukan;
      </li>
      <li>Menyediakan dan memberikan informasi publik yang akurat;</li>
      <li>
        Menyediakan daftar informasi publik untuk informasi yang wajib
        disediakan dan diumumkan;
      </li>
      <li>Menyiapkan ruang dan fasilitas yang nyaman;</li>
      <li>
        Merespon dengan cepat permintaan informasi dan keberatan atas informasi
        publik yang disampaikan baik langsung maupun media;
      </li>
      <li>Menyiapkan petugas informasi yang berdedikasi dan siap melayani;</li>
      <li>Melakukan Evaluasi dan perbaikan yang berkelanjutan;</li> -->
    </ul>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data_maklumat: [],
    };
  },
  mounted() {
    axios
      .get("http://beta.learning.klaten.go.id/api/maklumat")
      .then((response) => {
        this.data_maklumat = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
section {
  width: 100%;
}

h1 {
  /* margin-bottom: 10px; */
  /* width: 100%; */
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  font-size: 25px;
}

.line {
  height: 0.09rem;
  margin: 20px 0;
  background-color: darkgray;
}

p {
  font-weight: 700;
  margin-bottom: 7px;
}

ul {
  list-style-type: circle;
  padding: 0 20px;
}

li {
  margin: 3px 0;
}
</style>