<template>
  <section>
    <h1>STRUKTUR ORGANISASI PPID PEMKAB KLATEN</h1>
    <div class="line"></div>
    <table>
      <thead>
        <tr style="border-bottom: 1px solid #a9a9a9">
          <th>Jabatan</th>
          <th>Pemangku Jabatan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data_struktur" :key="item.id">
          <th>
            {{ item.jabatan }}
          </th>
          <td>
            {{ item.pemangku_jabatan }}
          </td>
        </tr>
      </tbody>
      <!-- <tr>
        <th>Atasan PPID</th>
        <td>Sekretaris Daerah Kabupaten Klaten</td>
      </tr>
      <tr>
        <th>PPID Utama</th>
        <td>Kepala Dinas Komunikasi Informatika Kabupaten Klaten</td>
      </tr>
      <tr>
        <th>Koordinator Bidang Pengelolaan Informasi</th>
        <td>Sekretaris Dinas Komunikasi Informatika Kabupaten Klaten</td>
      </tr>
      <tr>
        <th>Koordinator Bidang Pelayanan Informasi, Dokumentasi dan Arsip</th>
        <td>
          Kabid Komunikasi dan Persandian Dinas Komunikasi Informatika Kabupaten
          Klaten
        </td>
      </tr>
      <tr>
        <th rowspan="3">Tim Penyelesaian Sengketa Informasi</th>
        <td>
          Kasi Komunikaasi dan Desiminasi Informasi Dinas Komunikasi Informatika
          Kabupaten Klaten
        </td>
      </tr>
      <tr>
        <td>Kasubbag Perencanaan Inspektorat Kabupaten Klaten</td>
      </tr>
      <tr>
        <td>
          Kasubbag Bantuan Hukum dan Hak Asasi Manusia Bagian Hukum Sekretariat
          Daerah Kabupaten Klaten
        </td>
      </tr>
      <tr>
        <th>PPID Pembantu</th>
        <td>Sekretaris/ Kepala Bidang di masing - masing Perangkat Daerah</td>
      </tr> -->
    </table>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data_struktur: [],
    };
  },
  mounted() {
    axios
      .get("http://beta.learning.klaten.go.id/api/struktur")
      .then((response) => {
        this.data_struktur = response.data;
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

table {
  width: 100%;
  border-collapse: collapse;
  /* border: 1px solid rgb(110, 110, 110); */
}

tr {
  text-align: left;
}

thead th {
  vertical-align: top;
  padding: 15px 20px;
  background-color: rgb(110, 110, 110);
  color: white;
  text-transform: uppercase;
}

tbody th {
  padding: 17px 20px;
  border-bottom: 1px solid rgb(110, 110, 110);
}

td {
  vertical-align: top;
  padding: 17px 20px;
  border-bottom: 1px solid rgb(110, 110, 110);
  /* border-left: 1px solid rgb(110, 110, 110); */
}
</style>