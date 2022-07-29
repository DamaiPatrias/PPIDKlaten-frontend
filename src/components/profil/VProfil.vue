<template>
  <div class="container">
    <div class="container-item">
      <div class="menu">
        <section class="menu-item">
          <ul>
            <li>
              <button
                @click="change(1)"
                v-bind:class="{ active: nilai1, nohover: nilai1 }"
              >
                Visi Misi
              </button>
            </li>
            <li class="line-btn"></li>
            <li>
              <button
                @click="change(2)"
                v-bind:class="{ active: nilai2, nohover: nilai2 }"
              >
                Tugas & Wenenang
              </button>
            </li>
            <li class="line-btn"></li>
            <li>
              <button
                @click="change(3)"
                v-bind:class="{ active: nilai3, nohover: nilai3 }"
              >
                Struktur
              </button>
            </li>
            <li class="line-btn"></li>
            <li>
              <button
                @click="change(4)"
                v-bind:class="{ active: nilai4, nohover: nilai4 }"
              >
                Maklumat
              </button>
            </li>
          </ul>
        </section>
      </div>
      <div class="content">
        <section class="content-item">
          <div v-show="nilai1">
            <VVisiMisi></VVisiMisi>
          </div>
          <div v-show="nilai2">
            <VTugasWewenang></VTugasWewenang>
          </div>
          <div v-show="nilai3">
            <VStruktur></VStruktur>
          </div>
          <div v-show="nilai4">
            <VMaklumat></VMaklumat>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import VVisiMisi from "@/components/profil/VVisiMisi.vue";
import VTugasWewenang from "@/components/profil/VTugasWewenang.vue";
import VStruktur from "@/components/profil/VStruktur.vue";
import VMaklumat from "@/components/profil/VMaklumat.vue";

export default {
  components: {
    VVisiMisi,
    VTugasWewenang,
    VStruktur,
    VMaklumat,
  },
  data() {
    return {
      nilai1: true,
      nilai2: false,
      nilai3: false,
      nilai4: false,
    };
  },
  methods: {
    change(btn) {
      if (btn == 1) {
        (this.nilai1 = true),
          (this.nilai2 = false),
          (this.nilai3 = false),
          (this.nilai4 = false);
      } else if (btn == 2) {
        (this.nilai1 = false),
          (this.nilai2 = true),
          (this.nilai3 = false),
          (this.nilai4 = false);
      } else if (btn == 3) {
        (this.nilai1 = false),
          (this.nilai2 = false),
          (this.nilai3 = true),
          (this.nilai4 = false);
      } else {
        (this.nilai1 = false),
          (this.nilai2 = false),
          (this.nilai3 = false),
          (this.nilai4 = true);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.container-item {
  display: flex;
  width: 100%;
  justify-content: center;
  /* align-content: space-around; */
}

.menu {
  width: 25%;
  padding: 10px;
  /* background-color: aqua; */
}

.content {
  width: 75%;
  padding: 10px;
  /* background-color: blue; */
}

.menu-item {
  /* width: 100%; */
  height: fit-content;
  padding: 15px 15px;
  border-radius: 5px;
  background-color: white;
}

.content-item {
  /* width: 100%; */
  height: fit-content;
  width: fit-content;
  padding: 50px;
  border-radius: 5px;
  background-color: white;
}

.menu ul {
  text-align: center;
}

ul {
  list-style: none;
}

.menu button {
  width: 100%;
  padding: 10px;
  margin: 0px 0;
  text-align: left;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: #757575;
  font-size: 18px;
  font-weight: 600;
}

.menu button:hover {
  color: white;
  background-color: rgb(195, 195, 195);
}

.nohover {
  pointer-events: none;
}

.menu .active {
  color: #ffffff;
  background-color: #d12121;
}

.line-btn {
  width: 100%;
  height: 0.06rem;
  background-color: darkgray;
}

@media screen and (min-width: 1025px) {
  .container-item {
    width: 1024px;
  }

  .item {
    margin: 0 10px;
  }
}

@media screen and (max-width: 992px) {
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0;
  }

  .container-item {
    flex-direction: row;
    padding: 10px;
  }

  .menu {
    padding: 0 5px 0 0;
    width: 25%;
  }

  .menu button {
    padding: 5px;
  }

  .content {
    padding: 0 0 0 5px;
    width: 75%;
  }

  .content-item {
    padding: 12px;
  }
}

@media screen and (max-width: 576px) {
  .container {
    padding: 0;
  }

  .container-item {
    padding: 0;
    flex-direction: column;
  }

  .menu {
    width: 100%;
    /* margin-bottom: 10px; */
    padding: 10px 10px 5px 10px;
  }

  .menu button {
    padding: 7px 10px;
  }

  .content {
    padding: 5px 10px 10px 10px;
    width: 100%;
  }

  .content-item {
    padding: 10px;
  }
}

@media screen and (max-width: 320px) {
  .container {
    padding: 0;
  }

  .container-item {
    padding: 0;
    flex-direction: column;
  }

  .menu {
    width: 100%;
    margin-top: 10px;
    padding: 0 10px;
  }

  .menu button {
    padding: 7px 10px;
  }

  .content {
    padding: 10px;
    width: 100%;
  }

  .content-item {
    padding: 10px;
  }
}
</style>