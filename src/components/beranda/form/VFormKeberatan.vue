<template>
  <div class="container">
    <div class="content-container">
      <section class="form-container">
        <h1>Form Pengajuan Keberatan Informasi</h1>
        <hr />
        <div class="form">
          <div>
            <label for="" class="wajib"
              >Nomor Registrasi Permohonan Informasi</label
            >
            <br />
            <input type="text" v-model="nomor_registrasi" />
            <small style="color: red; margin-top: 0; padding-left: 5px">
              {{ error.nomor_registrasi }}
            </small>
          </div>
          <div>
            <label for="" class="wajib">Tujuan Penggunaan Informasi</label>
            <br />
            <input type="text" v-model="tujuan_informasi" />
            <small style="color: red; margin-top: 0; padding-left: 5px">
              {{ error.tujuan_informasi }}
            </small>
          </div>
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
            <input type="text" v-model="email" />
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
          <div class="check-container">
            <label for="" class="checked"
              ><input type="checkbox" v-model="checked" /> Permohonan ini
              Dikuasakan</label
            >
            <p>
              Dicentang jika ada kuasa pemohonya dan melampirkan Surat Kuasa
            </p>
          </div>
          <div class="kuasa" v-if="checked">
            <h3>Identitas Kuasa Pemohon</h3>
            <p>
              Identitas kuasa pemohon diisi jika ada kuasa pemohonya dan
              melampirkan Surat Kuasa
            </p>
            <div>
              <label for="">Nama Lengkap</label>
              <br />
              <input type="text" v-model="nama_lengkap_kuasa" />
              <small style="color: red; margin-top: 0; padding-left: 5px">
                {{ error.nama_lengkap_kuasa }}
              </small>
            </div>
            <div>
              <label for="">Pekerjaan</label>
              <br />
              <input type="text" v-model="pekerjaan_kuasa" />
              <small style="color: red; margin-top: 0; padding-left: 5px">
                {{ error.pekerjaan_kuasa }}
              </small>
            </div>
            <div>
              <label for="">Email</label>
              <br />
              <input type="text" v-model="email_kuasa" />
              <small style="color: red; margin-top: 0; padding-left: 5px">
                {{ error.email_kuasa }}
              </small>
            </div>
            <div>
              <label for="">No.Telp</label>
              <br />
              <input type="text" v-model="no_telp_kuasa" />
              <small style="color: red; margin-top: 0; padding-left: 5px">
                {{ error.no_telp_kuasa }}
              </small>
            </div>
            <div>
              <label for="">Alamat</label>
              <br />
              <input type="text" v-model="alamat_kuasa" />
              <small style="color: red; margin-top: 0; padding-left: 5px">
                {{ error.alamat_kuasa }}
              </small>
              <br />
              <div class="alamat">
                <section>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Provinsi"
                    v-model="provinsi_kuasa"
                  />
                  <small style="color: red; margin-top: 0; padding-left: 5px">
                    {{ error.provinsi_kuasa }}
                  </small>
                </section>
                <section>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Kota"
                    v-model="kota_kuasa"
                  />
                  <small style="color: red; margin-top: 0; padding-left: 5px">
                    {{ error.kota_kuasa }}
                  </small>
                </section>
                <section>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Kode Pos"
                    v-model="kodepos_kuasa"
                  />
                  <small style="color: red; margin-top: 0; padding-left: 5px">
                    {{ error.kodepos_kuasa }}
                  </small>
                </section>
              </div>
            </div>
            <div>
              <label for="">Upload Surat Kuasa</label>
              <br />
              <input
                type="file"
                accept="file/pdf"
                ref="file"
                @change="uploadFile()"
              />
              <br />
              <small style="color: red; margin-top: 0; padding-left: 5px">
                {{ error.file }}
              </small>
            </div>
          </div>
          <div class="radio">
            <p for="">Alasan Pengajuan Keberatan</p>
            <input
              type="radio"
              v-model="alasan"
              value="Permohonan Informasi di tolak"
            />
            <label>Permohonan Informasi di tolak</label>
            <br />
            <input
              type="radio"
              v-model="alasan"
              value="Informasi berkala tidak di sediakan"
            />
            <label>Informasi berkala tidak di sediakan</label>
            <br />
            <input
              type="radio"
              v-model="alasan"
              value="Permintaan informasi tidak ditanggapi"
            />
            <label>Permintaan informasi tidak ditanggapi</label>
            <br />
            <input
              type="radio"
              v-model="alasan"
              value="Permintaan informasi ditanggapi tidak sebagaimana yang
              diminta"
            />
            <label
              >Permintaan informasi ditanggapi tidak sebagaimana yang
              diminta</label
            >
            <br />
            <input
              type="radio"
              v-model="alasan"
              value="Permintaan informasi tidak dipenuhi"
            />
            <label>Permintaan informasi tidak dipenuhi</label>
            <br />
            <input
              type="radio"
              v-model="alasan"
              value="Biaya yang dikenakan tidak wajar"
            />
            <label>Biaya yang dikenakan tidak wajar</label>
            <br />
            <input
              type="radio"
              v-model="alasan"
              value="Informasi disampaikan melebihi jangka waktu yang di tentukan"
            />
            <label
              >Informasi disampaikan melebihi jangka waktu yang di tentukan
            </label>
            <br />
            <small style="color: red; margin-bottom: 5px; padding-left: 5px">
              {{ error.alasan }}
            </small>
          </div>
          <div>
            <button @click="inputData()">Proses</button>
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
              href="http://beta.learning.klaten.go.id/keberatan-informasi"
              target="blank"
            >
              Cek Keberatan Informasi
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
      checked: false,
      nomor_registrasi: "",
      tujuan_informasi: "",
      nama_lengkap: "",
      pekerjaan: "",
      email: "",
      no_telp: "",
      alamat: "",
      provinsi: "",
      kota: "",
      kodepos: "",
      nama_lengkap_kuasa: "",
      pekerjaan_kuasa: "",
      email_kuasa: "",
      no_telp_kuasa: "",
      alamat_kuasa: "",
      provinsi_kuasa: "",
      kota_kuasa: "",
      kodepos_kuasa: "",
      file: "",
      alasan: "",
      error: {
        nomor_registrasi: "",
        tujuan_informasi: "",
        nama_lengkap: "",
        pekerjaan: "",
        email: "",
        no_telp: "",
        alamat: "",
        provinsi: "",
        kota: "",
        kodepos: "",
        nama_lengkap_kuasa: "",
        pekerjaan_kuasa: "",
        email_kuasa: "",
        no_telp_kuasa: "",
        alamat_kuasa: "",
        provinsi_kuasa: "",
        kota_kuasa: "",
        kodepos_kuasa: "",
        file: "",
        alasan: "",
      },
    };
  },
  methods: {
    inputData() {
      if (this.checked == false) {
        if (
          this.nomor_registrasi == "" &&
          this.tujuan_informasi == "" &&
          this.nama_lengkap == "" &&
          this.pekerjaan == "" &&
          this.email == "" &&
          this.no_telp == "" &&
          this.alamat == "" &&
          this.provinsi == "" &&
          this.kota == "" &&
          this.kodepos == "" &&
          this.alasan == ""
        ) {
          this.error.nomor_registrasi =
            "Nomor Registrasi Permohonan Informasi Wajib di Isi";
          this.error.tujuan_informasi =
            "Tujuan Penggunaan Informasi Wajib di Isi";
          this.error.nama_lengkap = "Nama Lengkap Wajib di Isi";
          this.error.pekerjaan = "Pekerjaan Wajib di Isi";
          this.error.email = "Email Wajib di Isi";
          this.error.alamat = "Alamat Wajib di Isi";
          this.error.no_telp = "Nomer Telepon Wajib di Isi";
          this.error.provinsi = "Provinsi Wajib di Isi";
          this.error.kota = "Kota Wajib di Isi";
          this.error.kodepos = "Kode Pos Wajib di Isi";
          this.error.alasan = "Silahkan Pilih Alasan Keberatan Informasi";
        } else {
          console.log("request serve");
          let formData = new FormData();
          formData.append(
            "nomer_registrasi_permohonan_informasi",
            this.nomor_registrasi
          );
          formData.append("tujuan_penggunaan_informasi", this.tujuan_informasi);
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
          formData.append("alasan_keberatan", this.alasan);

          axios
            .post(
              "http://beta.learning.klaten.go.id/api/keberatan-informasi-input",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((response) => {
              console.log(response);
              alert("Data Berhasil di Kirim");
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else {
        if (
          this.nomor_registrasi == "" &&
          this.tujuan_informasi == "" &&
          this.nama_lengkap == "" &&
          this.pekerjaan == "" &&
          this.email == "" &&
          this.no_telp == "" &&
          this.alamat == "" &&
          this.provinsi == "" &&
          this.kota == "" &&
          this.kodepos == "" &&
          this.nama_lengkap_kuasa == "" &&
          this.pekerjaan_kuasa == "" &&
          this.email_kuasa == "" &&
          this.no_telp_kuasa == "" &&
          this.alamat_kuasa == "" &&
          this.provinsi_kuasa == "" &&
          this.kota_kuasa == "" &&
          this.kodepos_kuasa == "" &&
          this.file == "" &&
          this.alasan == ""
        ) {
          this.error.nomor_registrasi =
            "Nomor Registrasi Permohonan Informasi Wajib di Isi";
          this.error.tujuan_informasi =
            "Tujuan Penggunaan Informasi Wajib di Isi";
          this.error.nama_lengkap = "Nama Lengkap Wajib di Isi";
          this.error.pekerjaan = "Pekerjaan Wajib di Isi";
          this.error.email = "Email Wajib di Isi";
          this.error.alamat = "Alamat Wajib di Isi";
          this.error.no_telp = "Nomer Telepon Wajib di Isi";
          this.error.provinsi = "Provinsi Wajib di Isi";
          this.error.kota = "Kota Wajib di Isi";
          this.error.kodepos = "Kode Pos Wajib di Isi";
          this.error.nama_lengkap_kuasa = "Nama Lengkap Wajib di Isi";
          this.error.pekerjaan_kuasa = "Pekerjaan Wajib di Isi";
          this.error.email_kuasa = "Email Wajib di Isi";
          this.error.alamat_kuasa = "Alamat Wajib di Isi";
          this.error.no_telp_kuasa = "Nomer Telepon Wajib di Isi";
          this.error.provinsi_kuasa = "Provinsi Wajib di Isi";
          this.error.kota_kuasa = "Kota Wajib di Isi";
          this.error.kodepos_kuasa = "Kode Pos Wajib di Isi";
          this.error.file = "Surat Kuasa Wajib di Sertakan";
          this.error.alasan = "Silahkan Pilih Alasan Keberatan Informasi";
        } else if (this.file.size > 5242880) {
          this.error.file = "Ukuran Maksimal Foto 5 MB";
        } else {
          console.log("request serve");
          let formData = new FormData();
          formData.append(
            "nomer_registrasi_permohonan_informasi",
            this.nomor_registrasi
          );
          formData.append("tujuan_penggunaan_informasi", this.tujuan_informasi);
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
          formData.append("nama_lengkep_kuasa", this.nama_lengkap_kuasa);
          formData.append("pekerjaan_kuasa", this.pekerjaan_kuasa);
          formData.append("email_kuasa", this.email_kuasa);
          formData.append("no_telp_kuasa", this.no_telp_kuasa);
          formData.append("file_surat_kuasa", this.file);
          formData.append("alasan_keberatan", this.alasan);

          axios
            .post(
              "http://127.0.0.1:8000/api/keberatan-informasi-input",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((response) => {
              console.log(response);
              alert("Data Berhasil di Kirim");
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        }
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
  margin: 10px 0;
}

.form-container input[type="text"] {
  width: 100%;
  margin-top: 5px;
  padding: 7px 12px;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  background-color: #f2f2f2;
  font-size: 16px;
  color: #525252;
}

input[type="file"] {
  width: fit-content;
  margin-top: 5px;
  padding: 7px 12px;
  border-radius: 5px;
  background-color: #f2f2f2;
  font-size: 16px;
  color: #525252;
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

input[type="checkbox"] {
  width: 17px;
  height: 17px;
}

.check-container {
  margin: 22px 0;
}

.checked {
  font-size: 22px !important;
  font-weight: 700 !important;
}

.check-container p,
.kuasa p {
  font-style: italic;
}

.radio p {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
}

.radio label {
  font-weight: unset !important;
  margin-left: 15px;
}

input[type="radio"] {
  margin-bottom: 10px;
}

button {
  width: 130px;
  margin-top: 10px;
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
  .container {
    padding: 10px 10px;
  }

  .content-container {
    flex-direction: column-reverse;
  }

  .form-container {
    width: 100%;
  }

  .kuasa {
    width: 260px;
  }

  .alamat {
    flex-direction: column;
    margin: 0px;
  }

  .alamat input[type="text"] {
    width: 100%;
  }

  .menu-container {
    width: 100%;
    margin-bottom: 7px;
  }

  .menu-container a {
    justify-content: center;
  }
}
</style>