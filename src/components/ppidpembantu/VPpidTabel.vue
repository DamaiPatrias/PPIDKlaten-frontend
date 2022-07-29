<template>
  <div>
    <div class="input">
      <label for="">
        <i>
          <font-awesome-icon :icon="iconSearch" />
        </i>
      </label>
      <input type="text" v-model="search" placeholder="Pencarian" />
    </div>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th @click="sorted()">Instansi</th>
          <th>Link Website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in searchTabel" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.nama_instansi }}</td>
          <td>
            <button>
              <a :href="item.link_instansi">Detail</a>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      search: "",
      iconSearch: faMagnifyingGlass,
      datat: this.dataApi,
    };
  },
  props: ["dataApi"],
  methods: {
    sorted() {
      return this.datat.sort();
    },
  },
  computed: {
    searchTabel() {
      return this.dataApi.filter((item) => {
        return (
          item.nama_instansi.toLowerCase().indexOf(this.search.toLowerCase()) >
          -1
        );
      });
    },
  },
};
</script>

<style scoped>
.input {
  width: 240px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

i {
  padding: 0 10px 0 10px;
  font-size: 17px;
  color: gray;
}

input {
  width: 196px;
  padding: 5px 0px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  color: gray;
}

input:focus {
  outline: none !important;
}

table {
  width: 100%;
  margin-top: 20px;
  padding: 5px;
  border-collapse: collapse;
  /* border-radius: 10px; */
  border-bottom: 1px solid #eeeeee;
}

th {
  padding: 10px 10px;
  background-color: #d12121;
  border-bottom: 1px solid white;
  text-align: left;
  color: white;
}

td {
  padding: 7px 10px;
  vertical-align: top;
  border-bottom: 1px solid #eeeeee;
}

th:nth-child(1) {
  width: 5%;
  border-top-left-radius: 5px;
  border-right: 1px solid white;
}

th:nth-child(2) {
  width: 80%;
  border-right: 1px solid white;
}

th:nth-child(3) {
  width: 20%;
  border-top-right-radius: 5px;
  text-align: center;
}

td:nth-child(1) {
  text-align: center;
  border-right: 1px solid #eeeeee;
}

td:nth-child(2) {
  border-right: 1px solid #eeeeee;
}

td:nth-child(3) {
  text-align: center;
}

td button {
  padding: 7px 25px;
  border: 0;
  border-radius: 5px;
  background-color: #17b9be;
  /* color: white !important; */
}

button a {
  color: white !important;
  font-size: 14px;
  font-weight: 500;
}
</style>