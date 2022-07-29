<template>
  <div class="container">
    <section>
      <VTabel :dataApi="data_ppid"></VTabel>
    </section>
    <!-- <div>
      {{ data_ppid }}
    </div> -->
  </div>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import VTabel from "@/components/ppidpembantu/VPpidTabel.vue";
import axios from "axios";

export default {
  components: {
    // FontAwesomeIcon,
    VTabel,
  },
  data() {
    return {
      ppid: [
        { nama: "Dinas Pendidikan", link: "google.com" },
        {
          nama: "Dinas Pariwisata, Kebudayaan, Pemuda dan Olahraga",
          link: "google.com",
        },
        { nama: "Dinas Kesehatan", link: "google.com" },
        {
          nama: "Dinas Sosial, Pemberdayaan Perempuan, Perlindungan Anak, Pengendalian Penduduk, dan Keluarga Berencana",
          link: "google.com",
        },
        { nama: "Dinas Kependudukan dan Pencatatan Sipil", link: "google.com" },
        { nama: "Dinas Pemberdayaan Masyarakat dan Desa", link: "google.com" },
        { nama: "Badan Kesatuan Bangsa dan Politk", link: "google.com" },
        {
          nama: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu",
          link: "google.com",
        },
        {
          nama: "Dinas Perdagangan, Koperasi dan Usaha Kecil Menengah",
          link: "google.com",
        },
        { nama: "Dinas Perindustrian dan Tenaga Kerja", link: "google.com" },
        {
          nama: "Dinas Komunikasi, Informatika, Persandian dan Statistik",
          link: "google.com",
        },
        {
          nama: "Dinas Perumahan Rakyat Dan Kawasan Permukiman",
          link: "google.com",
        },
        { nama: "Dinas Pekerjaan Umum dan Penataan Ruang", link: "google.com" },
        { nama: "Dinas Perhubungan", link: "google.com" },
        { nama: "Dinas Lingkungan Hidup dan Kebersihan", link: "google.com" },
        {
          nama: "Dinas Perumahan, Kawasan Permukiman dan Pertanahan",
          link: "google.com",
        },
        {
          nama: "Dinas Kearsipan dan adalah Kantor Perpustakaan",
          link: "google.com",
        },
        { nama: "Detasemen Polisi Pamong Praja", link: "google.com" },
        {
          nama: "Badan Kepegawaian Pendidikan dan Pelatihan Daerah",
          link: "google.com",
        },
        {
          nama: "Badan Perencanaan Pembangunan, Penelitian dan Pengembangan Daerah",
          link: "google.com",
        },
        { nama: "Badan Penanggulangan Bencana Daerah", link: "google.com" },
      ],
      search: "",
      data_ppid: [],
    };
  },
  mounted() {
    axios
      .get("http://beta.learning.klaten.go.id/api/ppid-pembantu")
      .then((response) => {
        this.data_ppid = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 25px 25px;
}

section {
  padding: 30px;
  background-color: white;
  border-radius: 7px;
}

@media screen and (min-width: 1025px) {
  section {
    width: 1024px;
  }
}

@media screen and (max-width: 425px) {
  .container {
    padding: 10px 5px;
  }

  section {
    padding: 10px;
  }
}
</style>