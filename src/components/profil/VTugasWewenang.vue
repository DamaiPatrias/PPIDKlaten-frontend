<template>
  <section>
    <h1>TUGAS & WEWENANG PPID PEMKAB KLATEN</h1>
    <div class="line"></div>
    <table>
      <tr>
        <td><h3>Tugas & Wewenang</h3></td>
      </tr>
      <tr>
        <td>
          Berdasarkan Peraturan Bupati Klaten Nomor 23 Tahun 2011 Tentang
          Pedoman Pengelolaan Pelayanan Informasi dan Dokumentasi Di Lingkungan
          Pemerintah Kabupaten Klaten.
        </td>
      </tr>
      <tr>
        <td>
          <h3>PPID Pemkab Klaten memiliki tugas :</h3>
        </td>
      </tr>
      <tr>
        <td>
          <ul v-for="item in data_tugas_wewenang" :key="item.id">
            <li v-if="item.jenis == 'tugas'">
              {{ item.isi_tugas_wewenang }}
            </li>
            <!-- <li>
              Meminta dan memperoleh informasi dari unit kerja/komponen/satuan
              kerja yang menjadi cakupan kerjanya;
            </li>
            <li>
              Mengkoordinasikan pemberian pelayanan informasi dengan PPID
              Pembantu dan/atau Pejabat Fungsional yang menjadi cakupan
              kerjanya;
            </li>
            <li>
              Menentukan atau menetapkan suatu informasi dapat/tidaknya diakses
              oleh publik; dan
            </li>
            <li>
              Menugaskan PPID Pembantu dan/atau Pejabat Fungsional untuk
              membuat, mengumpulkan, serta memelihara informasi dan dokumentasi
              untuk kebutuhan organisasi.
            </li> -->
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <h3>PPID Pemkab Klaten memiliki kewenangan :</h3>
        </td>
      </tr>
      <tr>
        <td>
          <ul v-for="item in data_tugas_wewenang" :key="item.id">
            <li v-if="item.jenis == 'wewenang'">
              {{ item.isi_tugas_wewenang }}
            </li>
            <!-- <ul>
            <li>
              Mengkoordinasikan dan mengkonsolidasikan pengumpulan bahan
              informasi dan dokumentasi dari PPID Pembantu;
            </li>
            <li>
              Menyimpan, mendokumentasikan, menyediakan dan memberi pelayanan
              informasi kepada publik;
            </li>
            <li>Melakukan verifikasi bahan informasi publik;</li>
            <li>Melakukan uji konsekuensi atas informasi yang dikecualikan;</li>
            <li>Melakukan pemutakhiran informasi dan dokumentasi; dan</li>
            <li>
              Menyediakan informasi dan dokumentasi untuk diakses oleh
              masyarakat.
            </li> -->
          </ul>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data_tugas_wewenang: [],
    };
  },
  mounted() {
    axios
      .get("http://beta.learning.klaten.go.id/api/tugas-wewenang")
      .then((response) => {
        this.data_tugas_wewenang = response.data;
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

td {
  padding: 15px 5px 0 5px;
}

ul {
  list-style-type: circle;
  padding: 0 20px;
}

li {
  margin: 3px 0;
}
</style>