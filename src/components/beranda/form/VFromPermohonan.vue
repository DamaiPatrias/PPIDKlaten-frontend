<template>
  <div class="container">
    <div class="content-container">
      <section class="form-container">
        <h1>Form Pengajuan Permohonan Informasi</h1>
        <hr />
        <div class="form">
          <div>
            <label for="" class="wajib">Nama Lengkap</label>
            <br />
            <input type="text" v-model="nama_lengkap" />
            <small style="color: red; margin-top: 0; padding-left: 5px">
              {{ error.nama_lengkap }}
            </small>
          </div>
          <div>
            <label for="" class="wajib">Pekerjaan</label>
            <br />
            <input type="text" v-model="pekerjaan" />
            <small style="color: red; margin-top: 0; padding-left: 5px">
              {{ error.pekerjaan }}
            </small>
          </div>
          <div>
            <label for="" class="wajib">Email</label>
            <br />
            <input type="email" v-model="email" />
            <small style="color: red; margin-top: 0; padding-left: 5px">
              {{ error.email }}
            </small>
          </div>
          <div>
            <label for="" class="wajib">No.Telp</label>
            <br />
            <input type="text" v-model="no_telp" />
            <small style="color: red; margin-top: 0; padding-left: 5px">
              {{ error.no_telp }}
            </small>
          </div>
          <div>
            <label for="" class="wajib">Alamat</label>
            <br />
            <input type="text" v-model="alamat" />
            <small style="color: red; margin-top: 0; padding-left: 5px">
              {{ error.alamat }}
            </small>
            <br />
            <div class="alamat">
              <section>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Provinsi"
                  v-model="provinsi"
                />
                <small style="color: red; margin-top: 0; padding-left: 5px">
                  {{ error.provinsi }}
                </small>
              </section>
              <section>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Kota"
                  v-model="kota"
                />
                <small style="color: red; margin-top: 0; padding-left: 5px">
                  {{ error.kota }}
                </small>
              </section>
              <section>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Kode Pos"
                  v-model="kodepos"
                />
                <small style="color: red; margin-top: 0; padding-left: 5px">
                  {{ error.kodepos }}
                </small>
              </section>
            </div>
          </div>
          <div>
            <div class="ktp">
              <div class="no">
                <label for="" class="wajib">NIK</label>
                <br />
                <input type="text" v-model="nik" />
                <small style="color: red; margin-top: 0; padding-left: 5px">
                  {{ error.nik }}
                </small>
              </div>
              <div class="foto">
                <label for="" class="wajib">Foto KTP</label>
                <br />
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  ref="file"
                  @change="uploadFile()"
                />
                <small style="color: red; margin-top: 0; padding-left: 5px">
                  {{ error.file }}
                </small>
              </div>
            </div>
          </div>
          <div>
            <label for="" class="wajib">OPD yang Dituju</label>
            <br />
            <select name="" id="" v-model="opd_tujuan">
              <option value="">Pilih</option>
              <option
                value="Badan Kepegawaian dan Pengembangan Sumber Daya Manusia"
              >
                Badan Kepegawaian dan Pengembangan Sumber Daya Manusia
              </option>
              <option
                value="Badan Perancangan, Penelitian dan Pengembangan Daerah"
              >
                Badan Perancangan, Penelitian dan Pengembangan Daerah
              </option>
              <option
                value="Badan Pengelolah Keuangan Pendapatan dan Aset Daerah<"
              >
                Badan Pengelolah Keuangan Pendapatan dan Aset Daerah
              </option>
              <option value="Dinas Perpustakaan dan Kearsipan">
                Dinas Perpustakaan dan Kearsipan
              </option>
              <option value="Dinas Kependudukan dan Pencatatan Sipil">
                Dinas Kependudukan dan Pencatatan Sipil
              </option>
              <option
                value="Dinas Kebudayan dan Kepemudaan dan Olahraga dan Pariwisata"
              >
                Dinas Kebudayan dan Kepemudaan dan Olahraga dan Pariwisata
              </option>
              <option value="Dinas Kesehatan">Dinas Kesehatan</option>
              <option value="Dinas Komunikasi dan Informatika">
                Dinas Komunikasi dan Informatika
              </option>
              <option value="Dinas Lingkungan Hidup dan Kehutanan">
                Dinas Lingkungan Hidup dan Kehutanan
              </option>
              <option value="Dinas Pemberdayaan Masyarakat Desa">
                Dinas Pemberdayaan Masyarakat Desa
              </option>
              <option value="Dinas Pendidikan">Dinas Pendidikan</option>
              <option
                value="Dinas Koperasi, Usaha Kecil Menengah dan Perdagangan"
              >
                Dinas Koperasi, Usaha Kecil Menengah dan Perdagangan
              </option>
              <option value="Dinas Perhubungan">Dinas Perhubungan</option>
              <option value="Dinas Perindustrian dan Tenaga Kerja">
                Dinas Perindustrian dan Tenaga Kerja
              </option>
              <option value="Dinas Ketahanan Pangan dan Pertanian">
                Dinas Ketahanan Pangan dan Pertanian
              </option>
              <option value="Dinas Perumahan Rakyat dan Kawasan Permukiman">
                Dinas Perumahan Rakyat dan Kawasan Permukiman
              </option>
              <option value="Dinas Penanaman Modal dan Pelayanan Satu Pintu">
                Dinas Penanaman Modal dan Pelayanan Satu Pintu
              </option>
              <option value="Dinas Pekerjaan Umun dan Penataan Ruang">
                Dinas Pekerjaan Umun dan Penataan Ruang
              </option>
              <option
                value="Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana"
              >
                Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak,
                Pengendalian Penduduk dan Keluarga Berencana
              </option>
              <option value="Inspektorat">Inspektorat</option>
              <option value="Kecamatan Bayat">Kecamatan Bayat</option>
              <option value="Kecamatan Cawas">Kecamatan Cawas</option>
              <option value="Kecamatan Ceper">Kecamatan Ceper</option>
              <option value="Kecamatan Delanggu">Kecamatan Delanggu</option>
              <option value="Kecamatan Gantiwarno">Kecamatan Gantiwarno</option>
              <option value="Kecamatan Jatinom">Kecamatan Jatinom</option>
              <option value="Kecamatan Jogonalan">Kecamatan Jogonalan</option>
              <option value="Kecamatan Juwiring">Kecamatan Juwiring</option>
              <option value="Kecamatan Kalikotes">Kecamatan Kalikotes</option>
              <option value="Kecamatan Karanganom">Kecamatan Karanganom</option>
              <option value="Kecamatan Karangdowo">Kecamatan Karangdowo</option>
              <option value="Kecamatan Karangnongko">
                Kecamatan Karangnongko
              </option>
              <option value="Kecamatan Kebonarum">Kecamatan Kebonarum</option>
              <option value="Kecamatan Kemalang">Kecamatan Kemalang</option>
              <option value="Kecamatan Klaten Selatan">
                Kecamatan Klaten Selatan
              </option>
              <option value="Kecamatan Klaten Tengah">
                Kecamatan Klaten Tengah
              </option>
              <option value="Kecamatan Klaten Selatan">
                Kecamatan Klaten Selatan
              </option>
              <option value="Kecamatan Manisrenggo">
                Kecamatan Manisrenggo
              </option>
              <option value="Kecamatan Ngawen">Kecamatan Ngawen</option>
              <option value="Kecamatan Pedan">Kecamatan Pedan</option>
              <option value="Kecamatan Polanharjo">Kecamatan Polanharjo</option>
              <option value="Kecamatan Prambanan">Kecamatan Prambanan</option>
              <option value="Kecamatan Trucuk">Kecamatan Trucuk</option>
              <option value="Kecamatan Tulung">Kecamatan Tulung</option>
              <option value="Kecamatan Wedi">Kecamatan Wedi</option>
              <option value="Kecamatan Wonosari">Kecamatan Wonosari</option>
              <option value="RSUD Bagas Waras">RSUD Bagas Waras</option>
              <option value="Satuan Polisi Pamong Praja">
                Satuan Polisi Pamong Praja
              </option>
              <option value="Sekretariat Daerah">Sekretariat Daerah</option>
              <option value="Sekretariat Dewan Perwakilan Daerah">
                Sekretariat Dewan Perwakilan Daerah
              </option>
              <option value="Staf Ahli Bupati">Staf Ahli Bupati</option>
            </select>
            <small style="color: red; margin-top: 0; padding-left: 5px">
              {{ error.opd_tujuan }}
            </small>
          </div>
          <div>
            <label for="">Rincian Informasi yang Dibutuhkan</label>
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              v-model="rincian_informasi"
            ></textarea>
          </div>
          <div>
            <label for="">Tujuan Penggunaan Informasi</label>
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              v-model="tujuan_informasi"
            ></textarea>
          </div>
          <div>
            <section class="cara">
              <div>
                <label for="" class="wajib">Cara Memperoleh Informasi</label>
                <br />
                <select name="" id="" v-model="memperoleh_informasi">
                  <option value="">Plih</option>
                  <option value="Melihat/Membaca/Mendengarkan/Mencatat">
                    Melihat/Membaca/Mendengarkan/Mencatat
                  </option>
                  <option value="Mendapatkan Salinan Informasi (Hardcopy)">
                    Mendapatkan Salinan Informasi (Hardcopy)
                  </option>
                  <option value="Mendapatkan Salinan Informasi (Softcopy)">
                    Mendapatkan Salinan Informasi (Softcopy)
                  </option>
                </select>
                <small style="color: red; margin-top: 0; padding-left: 5px">
                  {{ error.memperoleh_informasi }}
                </small>
              </div>
              <div>
                <label for="" class="wajib">Cara Mendapatkan Informasi</label>
                <br />
                <select name="" id="" v-model="mendapatkan_informasi">
                  <option value="">Plih</option>
                  <option value="Mengambil Langsung">Mengambil Langsung</option>
                  <option value="Kurir">Kurir</option>
                  <option value="Pos">Pos</option>
                  <option value="Faksimili">Faksimili</option>
                  <option value="E-mail">E-mail</option>
                </select>
                <small style="color: red; margin-top: 0; padding-left: 5px">
                  {{ error.mendapatkan_informasi }}
                </small>
              </div>
            </section>
          </div>
          <div>
            <button @click="inputData()" @keyup.enter="inputData">
              Proses
            </button>
          </div>
        </div>
      </section>
      <section class="menu-container">
        <ul>
          <li>
            <router-link to="/permohoan_informasi"
              >Permohonan Informasi</router-link
            >
          </li>
          <li><hr /></li>
          <li>
            <router-link to="/keberatan_informasi">
              Keberatan Informasi
            </router-link>
          </li>
          <li><hr /></li>
          <li>
            <a
              href="http://beta.learning.klaten.go.id/permohonan-informasi"
              target="blank"
            >
              Cek Pengajuan Informasi
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nama_lengkap: "",
      pekerjaan: "",
      email: "",
      no_telp: "",
      alamat: "",
      provinsi: "",
      kota: "",
      kodepos: "",
      nik: "",
      file: "",
      opd_tujuan: "",
      rincian_informasi: "",
      tujuan_informasi: "",
      mendapatkan_informasi: "",
      memperoleh_informasi: "",
      error: {
        nama_lengkap: "",
        pekerjaan: "",
        email: "",
        no_telp: "",
        alamat: "",
        provinsi: "",
        kota: "",
        kodepos: "",
        nik: "",
        file: "",
        opd_tujuan: "",
        rincian_informasi: "",
        tujuan_informasi: "",
        mendapatkan_informasi: "",
        memperoleh_informasi: "",
      },
    };
  },
  methods: {
    inputData() {
      if (
        this.nama_lengkap == "" &&
        this.pekerjaan == "" &&
        this.email == "" &&
        this.no_telp == "" &&
        this.alamat == "" &&
        this.provinsi == "" &&
        this.kota == "" &&
        this.kodepos == "" &&
        this.nik == "" &&
        this.file == "" &&
        this.opd_tujuan == "" &&
        this.mendapatkan_informasi == "" &&
        this.memperoleh_informasi == ""
      ) {
        this.error.nama_lengkap = "Nama Lengkap Wajib di Isi";
        this.error.pekerjaan = "Pekerjaan Wajib di Isi";
        this.error.email = "Email Wajib di Isi";
        this.error.no_telp = "Nomer Telepon Wajib di Isi";
        this.error.alamat = "Alamat Wajib di Isi";
        this.error.kota = "Kota Wajib di Isi";
        this.error.kodepos = "Kode Pos Wajib di Isi";
        this.error.nik = "NIK Wajib di Isi";
        this.error.file = "Silahkan Pilih Foto";
        this.error.opd_tujuan = "Silahkan Pilih OPD Tujuan";
        this.error.mendapatkan_informasi =
          "Silahkan Pilih Mendapatkan Informasi";
        this.error.memperoleh_informasi = "Silahkan Pilih Memperoleh Informasi";
      } else if (this.nik.length < 16 && this.nik.length > 16) {
        this.error.nik = "Masukkan NIK dengan B enar";
      } else if (this.file.size > 2048888) {
        this.error.file = "Ukuran Maksimal Foto 2 MB";
      } else {
        console.log("request server");
        let formData = new FormData();
        formData.append("nama_lengkap", this.nama_lengkap);
        formData.append("pekerjaan", this.pekerjaan);
        formData.append("email", this.email);
        formData.append("no_telp", this.no_telp);
        formData.append(
          "alamat_lengkap",
          this.alamat +
            "_" +
            this.provinsi +
            "_" +
            this.kota +
            "_" +
            this.kodepos
        );
        formData.append("nik", this.nik);
        formData.append("file_ktp", this.file);
        formData.append("opd_tujuan", this.opd_tujuan);
        formData.append("rincian_informasi", this.rincian_informasi);
        formData.append("tujuan_informasi", this.tujuan_informasi);
        formData.append("mendapatkan_informasi", this.mendapatkan_informasi);
        formData.append("memperoleh_informasi", this.memperoleh_informasi);

        axios
          .post(
            "http://beta.learning.klaten.go.id/api/permohonan-informasi-input",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((response) => {
            console.log(response);
            alert("Form Berhasil di Kirim");
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    uploadFile() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
  },
};
</script>

<style scoped>
* {
  list-style: none;
  box-sizing: border-box;
}

.wajib:after {
  content: "*";
  color: red;
  margin-left: 4px;
}

.container {
  display: flex;
  padding: 30px;
  justify-content: center;
}

.content-container {
  display: flex;
  justify-content: space-between;
  width: 1024px;
}

.form-container {
  width: 71%;
  padding: 40px;
  border-radius: 5px;
  background-color: white;
}

h1 {
  margin-bottom: 15px;
}

.form div {
  margin: 13px 0;
}

.form-container input {
  width: 100%;
  margin-top: 5px;
  padding: 7px 12px;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  background-color: #f2f2f2;
  font-size: 16px;
  color: #525252;
}

.form-container select {
  width: 100%;
  margin-top: 5px;
  padding: 7px 12px;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  background-color: #f2f2f2;
  font-size: 16px;
  color: #525252;
}

.form-container textarea {
  width: 100%;
  height: 100px;
  margin-top: 5px;
  padding: 7px 12px;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  background-color: #f2f2f2;
  font-size: 16px;
  color: #525252;
  resize: vertical;
}

.form-container label {
  font-size: 18px;
  font-weight: 600;
}

.alamat {
  display: flex !important;
  justify-content: space-between;
}

.alamat section {
  width: 32%;
}

.ktp {
  display: flex !important;
  justify-content: space-between;
}

.no {
  width: 65% !important;
}

.foto {
  width: 32% !important;
}

.foto input[type="file"] {
  border: none !important;
}

button {
  width: 130px;
  margin-top: 15px;
  padding: 10px 10px 12px 10px;
  border: none;
  border-radius: 0;
  background-color: #d12121;
  color: white;
  font-size: 20px;
  font-weight: 600;
}

.menu-container {
  width: 27%;
  height: fit-content;
  padding: 15px;
  background-color: white;
  border-radius: 6px;
}

.menu-container li {
  margin: 5px 0;
  width: 100%;
}

.menu-container a {
  display: flex;
  width: 100%;
  padding: 10px;
  margin: 0px 0;
  text-align: left;
  border: none;
  border-radius: 5px;
  color: #757575;
  font-size: 18px;
  font-weight: 600;
}

.menu-container a:hover {
  color: white;
  background-color: rgb(195, 195, 195);
}

.menu-container a.router-link-exact-active {
  color: white;
  background-color: #d12121;
}

/* .menu-container button:hover {
  color: #ffffff;
  background-color: #d12121;
} */

@media screen and (min-width: 1024px) {
  .form-container {
    padding: 20px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 10px 10px;
  }

  .form-container {
    padding: 20px;
  }

  .menu-container {
    width: 28%;
    padding: 10px;
  }

  .menu-container a {
    font-size: 16px;
  }
}

@media screen and (max-width: 425px) {
  .content-container {
    flex-direction: column-reverse;
  }

  .form-container {
    width: 100%;
  }

  .alamat {
    flex-direction: column;
    margin: 0px;
  }

  .alamat input {
    width: 100%;
  }

  .menu-container {
    width: 100%;
    margin-bottom: 7px;
  }

  .menu-container a {
    justify-content: center;
  }

  .ktp {
    flex-direction: column;
  }

  .no {
    width: 100% !important;
  }

  .foto {
    width: 100% !important;
  }
}
</style>