<template>
  <div class="container">
    <section>
      <VTabel :data="data_dokumen"></VTabel>
    </section>
  </div>
</template>

<script>
import VTabel from "@/components/dokumen/VTabel.vue";
import axios from "axios";

export default {
  components: { VTabel },
  data() {
    return {
      text: [
        "Undang-undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.",
        "Undang-undang Nomor 25 Tahun 2009 tentang Pelayanan Publik.",
        "Peraturan Komisi Informasi Pusat No 1 Tahun 2010 Tentang Standar Layanan Informasi Publik.",
        "Peraturan Komisi Informasi Pusat No 1 Tahun 2013 Tentang Prosedur Penyelesaian Sengketa Informasi Publik.",
        "Peraturan Komisi Informasi Pusat No 1 Tahun 2017 Tentang Klasifikasi Informasi Publik.",
        "Bagan Struktur Organisasi Pejabat Pengelola Informasi Dan Dokumentasi Pemerintah Kabupaten Klaten.",
        "SOP Penyusunan Daftar Informasi Dan Dokumentasi Publik.",
        "SOP Pelayanan Permohonan Informasi Publik.",
        "SOP Uji Konsekuensi Informasi Publik.",
        "SOP Penanganan Keberatan Informasi Publik.",
        "SOP Fasilitasi Sengketa Informasi.",
        "SOP",
        "Formulir Permohonan Informasi",
        "Formulir Pengajuan Keberatan",
      ],
      data_dokumen: [],
    };
  },
  mounted() {
    axios
      .get("http://beta.learning.klaten.go.id/api/dokumen")
      .then((response) => {
        this.data_dokumen = response.data;
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