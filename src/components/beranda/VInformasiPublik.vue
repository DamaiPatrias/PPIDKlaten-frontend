<template>
  <div>
    <div class="container">
      <div class="title">
        <p>Klasifikasi Informasi Publik</p>
      </div>
      <div>
        <div class="container-item">
          <div class="item">
            <div class="icon">
              <!-- <img
                src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
              /> -->
              <i>
                <font-awesome-icon :icon="berkala" />
              </i>
            </div>
            <div class="text">
              <p>
                {{ data_teks_beranda[0].judul_beranda }}
              </p>
              <p>
                {{ data_teks_beranda[0].teks_beranda }}
              </p>
            </div>
            <div class="button">
              <router-link to="/informasi_berkala" class="link"
                ><button>Selengkapnya</button></router-link
              >
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <!-- <img
                src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
              /> -->
              <i>
                <font-awesome-icon :icon="sertaMerta" />
              </i>
            </div>
            <div class="text">
              <p>
                {{ data_teks_beranda[1].judul_beranda }}
              </p>
              <p>
                {{ data_teks_beranda[1].teks_beranda }}
              </p>
            </div>
            <div class="button">
              <router-link to="/informasi_serta_merta" class="link"
                ><button>Selengkapnya</button></router-link
              >
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <!-- <img
                src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
              /> -->
              <i>
                <font-awesome-icon :icon="setiapSaat" />
              </i>
            </div>
            <div class="text">
              <p>
                {{ data_teks_beranda[2].judul_beranda }}
              </p>
              <p>
                {{ data_teks_beranda[2].teks_beranda }}
              </p>
            </div>
            <div class="button">
              <router-link to="/informasi_setiap_saat" class="link"
                ><button>Selengkapnya</button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      berkala: faArrowsRotate,
      sertaMerta: faStopwatch,
      setiapSaat: faClock,
      data_teks_beranda: [],
    };
  },
  mounted() {
    axios
      .get("http://beta.learning.klaten.go.id/api/teks-beranda")
      .then((response) => {
        this.data_teks_beranda = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 30px;
  margin-top: 0px;
  width: 100%;
}

.container-item {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  margin-top: 30px;
}

.title {
  color: black;
  font-size: 37px;
}

.title p {
  letter-spacing: 2px;
  font-weight: 600;
  text-align: center;
}

.item {
  display: block;
  width: 32%;
  /* height: 620px; */
  padding: 0 0px 10px 0px;
  background-color: white;
  border-radius: 10px;
}

.icon {
  text-align: center;
  font-size: 100px;
  font-weight: 500;
  color: #b1b1b1;
}

.link {
  color: white;
}

.text {
  text-align: justify;
  padding: 15px;
}

.text p:nth-child(1) {
  text-align: center;
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 600;
}

.text p:nth-child(2) {
  color: rgb(27, 27, 27);
  font-size: 19px;
  font-weight: 400;
}

.button {
  margin: 15px 0;
  text-align: center;
}

.button button {
  width: 170px;
  padding: 5px 0px 7px 0px;
  border: none;
  text-align: center;
  border-radius: 13px;
  background-color: #d12121;
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
}

.button button:hover {
  background-color: #b62828;
}

@media screen and (min-width: 1025px) {
  .container {
    align-items: center;
  }

  .container-item {
    width: 1024px;
  }

  .item {
    margin: 0 10px;
  }
}

@media screen and (max-width: 898px) {
  .container {
    padding: 17px 7px;
  }

  .container-item {
    margin-top: 20px;
  }

  .title {
    font-size: 28px;
  }

  .item {
    width: 32.5%;
  }

  .text {
    padding: 5px 10px;
  }

  .text p:nth-child(1) {
    text-align: center;
    margin-bottom: 7px;
    font-size: 20px;
    font-weight: 600;
  }

  .text p:nth-child(2) {
    font-size: 14px;
    font-weight: 400;
  }
}

@media screen and (max-width: 769px) {
  .container {
    padding: 17px 7px;
  }

  .container-item {
    margin-top: 20px;
  }

  .title {
    font-size: 28px;
  }

  .item {
    width: 32.5%;
  }

  .text {
    padding: 5px 10px;
  }

  .text p:nth-child(1) {
    text-align: center;
    margin-bottom: 7px;
    font-size: 20px;
    font-weight: 600;
  }

  .text p:nth-child(2) {
    font-size: 14px;
    font-weight: 400;
  }
}

@media screen and (max-width: 480px) {
  .container-item {
    flex-flow: column;
  }

  .item {
    width: 100%;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 320px) {
  .container-item {
    flex-flow: column;
  }

  .item {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>