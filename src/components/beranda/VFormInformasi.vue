<template>
  <div class="container">
    <div class="title">
      <p>Permohonan Informasi</p>
    </div>
    <div class="container-item">
      <div class="item">
        <router-link class="link" to="/permohoan_informasi">
          <!-- <img src="../../assets/Form-Pengajuan-Informasi-Baru.png" /> -->
          <i class="icon">
            <font-awesome-icon :icon="iconPermohonan" />
          </i>
          <p>Pengajuan Permohonan Informasi</p>
        </router-link>
      </div>
      <div class="item">
        <router-link class="link" to="/keberatan_informasi">
          <!-- <img src="../../assets/Form-Pengajuan-Keberatan.png" /> -->
          <i class="icon">
            <font-awesome-icon :icon="iconKeberatan" />
          </i>
          <p>Pengajuan Keberatan Informasi</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faFileCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      iconPermohonan: faFileCirclePlus,
      iconKeberatan: faFileCircleXmark,
    };
  },
};
</script>

<style scoped>
.container {
  padding: 40px 85px;
  background-color: #d12121;
}

.title {
  color: white;
  font-size: 34px;
}

.title p {
  letter-spacing: 2px;
  font-weight: 600;
}

.container-item {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

img {
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  border: none;
  /* background-color: lightgray; */
}

.icon {
  color: white;
  font-size: 100px;
}

.link p {
  margin-top: 15px;
  font-size: 26px;
  color: white;
  letter-spacing: 1px;
}

@media screen and (min-width: 1025px) {
  .container {
    align-items: center;
  }

  .container-item {
    width: 1024px;
  }
}

@media screen and (max-width: 789px) {
  .container {
    padding: 40px 20px;
  }

  .container-item {
    justify-content: space-between;
  }
}

@media screen and (max-width: 452px) {
  .container {
    padding: 20px 10px;
  }

  .container-item {
    flex-direction: column;
    margin-top: 30px;
  }

  .title {
    font-size: 28px;
  }

  .title p {
    letter-spacing: 0px;
  }

  .item {
    margin-bottom: 30px;
  }

  img {
    width: 90px;
    height: 90px;
    border: none;
    margin-bottom: 0px;
  }

  .link p {
    font-size: 20px;
    color: white;
    letter-spacing: 1px;
    margin-top: 0px;
  }
}
</style>