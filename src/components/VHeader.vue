<template>
  <div>
    <div class="header-container">
      <div class="logo">
        <h2>PPID Kabupaten Klaten</h2>
      </div>
      <div class="text">
        <ul>
          <li>
            <i>
              <font-awesome-icon :icon="iconPhone" />
            </i>
            <p>(0272) 321046</p>
          </li>
          <li>
            <i>
              <font-awesome-icon :icon="iconFax" />
            </i>
            <p>(0272) 322567</p>
          </li>
          <li>
            <i>
              <font-awesome-icon :icon="iconEmail" />
            </i>
            <p>ppidklaten@gmail.com</p>
          </li>
        </ul>
      </div>
      <div class="menu-icon">
        <i @click="show = !show">
          <font-awesome-icon :icon="iconMenu" />
        </i>
      </div>
    </div>
    <div class="nav-container">
      <nav>
        <ul>
          <li>
            <router-link class="link" to="/">Beranda</router-link>
          </li>
          <li>
            <router-link class="link" to="/profil"> Profil </router-link>
          </li>
          <li>
            <router-link class="link" to="/dokumen"> Dokumen </router-link>
          </li>
          <li>
            <router-link class="link" to="/ppid_pembantu"
              >PPID Pembantu</router-link
            >
          </li>
          <li>
            <router-link class="link" to="/about">Tentang Kami</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <MenuSm class="small-menu" v-show="show"></MenuSm>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFax } from "@fortawesome/free-solid-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuSm from "@/components/beranda/VMenuSM.vue";

export default {
  components: {
    FontAwesomeIcon,
    MenuSm,
  },
  data() {
    return {
      show: false,
      iconEmail: faEnvelope,
      iconFax: faFax,
      iconPhone: faPhoneFlip,
      iconMenu: faBars,
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}

.header-container {
  display: flex;
  align-items: center;
  padding: 15px 45px;
  border-bottom: 5px solid #d12121;
  background-color: white;
}

.logo {
  width: 30%;
  /* float: left; */
}

.logo h2 {
  font-size: 27px;
}

.text {
  width: 70%;
  height: max-content;
  text-align: right;
  /* float: right; */
}

.text p {
  display: inline;
  font-size: 15px;
  font-weight: 600;
}

i {
  margin-right: 7px;
  font-size: 12px;
}

.menu-icon {
  display: none;
  font-size: 25px;
}

nav {
  text-align: center;
}

ul li {
  display: inline-block;
  margin: 0 25px 0 25px;
  /* font-weight: 600; */
}

.nav-container {
  padding: 15px 10px;
  border-bottom: 2px solid #d12121;
  background-color: white;
}

.nav-container li {
  margin: 0 25px;
}

li a {
  color: black;
  font-weight: 600;
}

li a:hover {
  color: rgb(70, 70, 70);
}

li a.router-link-exact-active {
  color: #d12121;
}

.small-menu {
  display: none;
  border-bottom: 2px solid #d12121;
}

/* resposive */
@media screen and (min-width: 1025px) {
}

@media screen and (max-width: 992px) {
  .logo {
    width: 30%;
  }

  .text {
    width: 70%;
    text-align: right;
  }

  ul li {
    display: inline-block;
    margin: 0 0 0 20px;
    font-weight: 600;
    /* text-align: center; */
  }
}

@media screen and (max-width: 768px) {
  .header-container .text {
    display: none;
  }

  .logo {
    width: 90%;
    /* float: left; */
  }

  .menu-icon {
    display: block;
    width: 10%;
    text-align: center;
  }

  .menu-icon i {
    font-size: 25px;
  }

  .nav-container {
    display: none;
  }

  .small-menu {
    display: block;
  }
}

@media screen and (max-width: 576px) {
}

@media screen and (max-width: 320px) {
  .logo {
    font-size: 11px;
  }
}
</style>