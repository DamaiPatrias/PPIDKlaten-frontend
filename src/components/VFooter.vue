<template>
  <div class="footer-container">
    <div class="up">
      <div>
        <h2>PPID Kabupaten Klaten</h2>
      </div>
      <div>
        <h4>Menu</h4>
        <ul>
          <li>
            <router-link to="/">Beranda</router-link>
          </li>
          <li>
            <router-link to="/profil"> Profil </router-link>
          </li>
          <li>
            <router-link to="/dokumen"> Dokumen </router-link>
          </li>
          <li>
            <router-link to="/ppid_pembantu">PPID Pembantu</router-link>
          </li>
          <li>
            <router-link class="link" to="/about">Tentang Kami</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Kontak Kami</h4>
        <ul>
          <li>
            <p>
              <font-awesome-icon :icon="iconPhone" />
              (0272) 321046
            </p>
          </li>
          <li>
            <p>
              <font-awesome-icon :icon="iconFax" />
              (0272) 322567
            </p>
          </li>
          <li>
            <p>
              <font-awesome-icon :icon="iconEmail" />
              ppidklaten@gmail.com
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="down">
      <p>© Dinas Komunikasi dan Informatika</p>
      <p>2022</p>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFax } from "@fortawesome/free-solid-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      iconEmail: faEnvelope,
      iconFax: faFax,
      iconPhone: faPhoneFlip,
    };
  },
};
</script>

<style scoped>
* {
  list-style: none;
}

.footer-container {
  height: fit-content;
  /* margin-top: 40px; */
  padding: 50px;
  color: white;
  background-color: #d12121;
}

.up {
  display: flex;
  margin-bottom: 25px;
}

.up div:nth-child(1) {
  padding: 0;
  margin: -5px 0;
  width: 50%;
}

.up div:nth-child(2) {
  width: 25%;
}

.up div:nth-child(2) a {
  color: white;
}

.up div:nth-child(3) {
  width: 25%;
}

.up div li {
  margin: 13px 0px;
}

.down {
  display: flex;
  width: 100%;
  padding-top: 20px;
  border-top: 2px solid white;
}

.down p:nth-child(1) {
  width: 50%;
  padding-left: 20px;
}

.down p:nth-child(2) {
  width: 50%;
  text-align: right;
  padding-right: 20px;
}

@media screen and (min-width: 1025px) {
}

@media screen and (max-width: 992px) {
  .footer-container {
    padding: 25px;
  }

  .up div:nth-child(1) {
    padding: 0;
    margin: -5px 0;
    width: 49%;
  }

  .up div:nth-child(2) {
    width: 23%;
  }

  .up div:nth-child(3) {
    width: 28%;
  }
}

@media screen and (max-width: 768px) {
  .footer-container {
    padding: 25px;
  }

  .up div:nth-child(1) {
    padding: 0;
    margin: -5px 0;
    width: 45%;
  }

  .up div:nth-child(2) {
    width: 20%;
  }

  .up div:nth-child(3) {
    width: 35%;
  }
}

@media screen and (max-width: 576px) {
  .footer-container {
    padding: 25px;
  }

  .up {
    flex-direction: column;
    margin-bottom: 7px;
  }

  .up div:nth-child(1),
  .up div:nth-child(2),
  .up div:nth-child(3) {
    width: 100%;
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 320px) {
  .footer-container {
    padding: 25px;
  }

  .up {
    flex-direction: column;
    margin-bottom: 7px;
  }

  .up div:nth-child(1) {
    padding: 0;
    margin: 7px 0 20px 0;
    width: 100%;
    text-align: center;
  }

  .up div:nth-child(2) {
    width: 100%;
    margin-bottom: 15px;
  }

  .up div:nth-child(3) {
    width: 100%;
  }

  .up div li {
    margin: 10px 0px;
  }

  .down {
    display: flex;
    width: 100%;
    padding-top: 10px;
    border-top: 2px solid white;
  }

  .down p:nth-child(1) {
    width: 80%;
    padding-left: 10px;
    font-size: 10px;
  }

  .down p:nth-child(2) {
    width: 20%;
    text-align: right;
    padding-right: 10px;
    font-size: 10px;
  }
}
</style>