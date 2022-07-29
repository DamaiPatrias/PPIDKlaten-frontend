<template>
  <section>
    <h1>Visi Misi PPID PEMKAB KLATEN</h1>
    <div class="line"></div>
    <table>
      <tr>
        <td><h3>VISI</h3></td>
      </tr>
      <tr v-for="item in data_visi_misi" :key="item.id">
        <td v-if="item.jenis == 'visi'">
          <p>
            {{ item.isi_visi_misi }}
          </p>
        </td>
      </tr>
      <tr>
        <td><h3>MISI</h3></td>
      </tr>
      <tr>
        <td>
          <ul class="list" v-for="item in data_visi_misi" :key="item.id">
            <li v-if="item.jenis == 'misi'">
              <p>
                {{ item.isi_visi_misi }}
              </p>
            </li>
            <!-- <li>
              <p>
                Mendorong akselerasi pelayanan informasi publik di setiap Satuan
                Kerja Perangkat Daerah di lingkungan Kabupaten Klaten.
              </p>
            </li>
            <li>
              <p>
                Mewujudkan sumber daya manusia pelayanan informasi publik yang
                handal dan profesional.
              </p>
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
      data_visi_misi: [],
    };
  },
  mounted() {
    axios
      .get("http://beta.learning.klaten.go.id/api/visi-misi")
      .then((response) => {
        this.data_visi_misi = response.data;
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

h5 {
  margin: 5px 0;
}

h3 {
  padding: 10px 0;
  letter-spacing: 1px;
}

ul {
  list-style-type: circle;
  padding: 0 20px;
}
</style>