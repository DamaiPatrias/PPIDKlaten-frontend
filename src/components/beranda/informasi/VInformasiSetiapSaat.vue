<template>
  <div>
    <div class="container">
      <div class="item-container">
        <div class="menu-container">
          <section class="menu">
            <ul>
              <li>
                <router-link to="/informasi_berkala">
                  Informasi Berkala
                </router-link>
              </li>
              <li><hr /></li>
              <li>
                <router-link to="/informasi_serta_merta">
                  Informasi Serta Merta
                </router-link>
              </li>
              <li><hr /></li>
              <li>
                <router-link to="/informasi_setiap_saat">
                  Informasi Setiap Saat
                </router-link>
              </li>
            </ul>
          </section>
        </div>
        <div class="content-container">
          <section class="content">
            <div>
              <h1>Informasi Setiap Saat</h1>
              <div class="filter">
                <div>
                  <div class="select">
                    <label for=""
                      >Tampilkan
                      <select
                        name="tableLimit"
                        id="tabelLimit"
                        v-model="limit"
                        @click="resetPage(1)"
                      >
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                      </select>
                      Baris
                    </label>
                  </div>
                </div>
                <div>
                  <div class="input">
                    <label for="">
                      <i>
                        <font-awesome-icon :icon="iconSearch" />
                      </i>
                    </label>
                    <input
                      type="text"
                      v-model="search"
                      placeholder="Pencarian"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Informasi Publik</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in paginationTable" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.nama_dokumen_setiap_saat }}</td>
                    <td>
                      <a :href="item.link_dokumen_setiap_saat" target="blank">
                        <button>Detail</button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pagination">
              <span class="item">
                <button @click="prevPage">
                  <font-awesome-icon :icon="iconPrev" />
                </button>
                <span>
                  <p>{{ currentPage }}</p>
                  dari
                  <p>{{ lastPage }}</p>
                  Halaman</span
                >
                <button @click="nextPage">
                  <font-awesome-icon :icon="iconNext" />
                </button>
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
// import $ from "jquery";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      limit: "25",
      search: "",
      iconSearch: faMagnifyingGlass,
      iconPrev: faAngleLeft,
      iconNext: faAngleRight,
      currentPage: 1,
      isActive: true,
      dataTable: [],
    };
  },
  methods: {
    resetPage(reset) {
      this.currentPage = reset;
    },
    nextPage() {
      if (this.currentPage * this.limit < this.dataTable.length)
        this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    changePage(page) {
      this.currentPage = page;
    },
  },
  computed: {
    searchTable() {
      return this.dataTable.filter((item) => {
        return (
          item.nama_dokumen_setiap_saat
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
    paginationTable() {
      var start = (this.currentPage - 1) * this.limit;
      var end = start + this.limit;
      return this.searchTable.slice(start, end);
    },
    lastPage() {
      return Math.ceil(this.dataTable.length / this.limit);
    },
  },
  mounted() {
    axios
      .get("http://beta.learning.klaten.go.id/api/setiap-saat")
      .then((response) => {
        this.dataTable = response.data;
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
  justify-content: center;
  padding: 5px;
}

.item-container {
  display: flex;
  align-content: space-between;
  width: 1024px;
}

.menu-container {
  width: 25%;
  padding: 10px;
}

.content-container {
  width: 75%;
  padding: 10px;
}

.menu {
  height: fit-content;
  padding: 15px 15px;
  border-radius: 5px;
  background-color: white;
}

ul {
  list-style: none;
  text-align: center;
}

.menu a {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  height: 40px;
  border-radius: 5px;
  color: #757575;
  font-size: 18px;
  font-weight: 600;
}

.menu-container a:hover {
  color: white;
  background-color: rgb(195, 195, 195);
}

.menu a.router-link-exact-active {
  color: #ffffff;
  background-color: #d12121;
}

.menu .button {
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

.menu .button:hover {
  color: #ffffff;
  background-color: #757575;
}

.active {
  color: #ffffff;
  background-color: #d12121;
}

.content {
  height: fit-content;
  padding: 40px 40px;
  border-radius: 5px;
  background-color: white;
}

.dataTables_length {
  background-color: #d12121;
}

.content h1 {
  width: 100%;
  padding: 10px 30px;
  border-radius: 5px;
  background-color: #fafafa;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 1px;
}

.filter {
  display: flex;
  margin: 0px 0;
  padding: 7px 0px;
}

.filter div:nth-child(1) {
  width: 50%;
}

.filter div:nth-child(2) {
  width: 50%;
  text-align: right;
}

.filter label {
  font-size: 17px;
  color: gray;
}

.select,
.input {
  display: inline;
  padding: 5px 10px;
  background-color: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 5px;
}

select {
  width: 70px;
  padding: 4px 5px;
  background-color: #fafafa;
  border: none;
  border: 1px solid gray;
  font-size: 15px;
  /* color: gray; */
}

select:focus {
  outline: none !important;
}

i {
  padding: 0 10px 0 10px;
}

input {
  width: 154.2px;
  padding: 5px 0px;
  background-color: #fafafa;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 17px;
  font-weight: 100;
}

input:focus {
  outline: none !important;
}

input:focus {
  outline: none !important;
}

table {
  width: 100%;
  margin-top: 10px;
  text-align: left;
  border-collapse: collapse;
  border-bottom: 1px solid #757575;
}

th {
  padding: 10px 5px;
  background-color: #d12121;
  border-bottom: 1px solid white;
  color: white;
}

td {
  padding: 7px 5px;
  border-bottom: 1px solid #eeeeee;
}

th:nth-child(1) {
  border-top-left-radius: 5px;
  border-right: 1px solid white;
  text-align: center;
}

th:nth-child(2) {
  padding: 0 20px;
  border-right: 1px solid white;
}

th:nth-child(3) {
  border-top-right-radius: 5px;
}

td:nth-child(1) {
  width: 10%;
  text-align: center;
  border-right: 1px solid #eeeeee;
}

td:nth-child(2) {
  padding: 0 20px;
  width: 70%;
  border-right: 1px solid #eeeeee;
}

th:nth-child(3),
td:nth-child(3) {
  text-align: center;
}

button {
  padding: 7px 25px;
  border: 0;
  border-radius: 3px;
  background-color: #10c7ce;
  color: white;
  font-weight: 500;
  font-size: 15px;
}

.pagination {
  margin-top: 10px;
  padding: 10px 0;
  text-align: right;
}

.item {
  width: fit-content;
  padding: 6px;
  /* background: #f2f2f2; */
  border-radius: 5px;
  color: #d12121;
  font-weight: 400;
}

.item button {
  padding: 0 8px;
  background-color: #d12121;
  color: white;
  border: 1px solid #d12121;
  border-radius: 2px;
  font-size: 17px;
}

.item button:active {
  background-color: #b81e1e;
}

.item span {
  margin: 0 5px;
  font-size: 17px;
}

.item p {
  width: 10px;
  display: inline-block;
  font-weight: 600;
}

@media screen and (min-width: 1025px) {
}

@media screen and (max-width: 992px) {
  .menu a {
    height: 50px;
  }
}

@media screen and (max-width: 768px) {
  .menu-container {
    width: 25%;
    padding: 5px;
  }

  .content-container {
    width: 75%;
    padding: 5px;
  }

  .menu {
    padding: 10px 5px;
  }

  ul {
    padding: 0;
  }

  .menu a {
    height: 50px;
  }

  .content {
    padding: 10px 10px;
  }

  .filter {
    flex-direction: column;
  }

  .filter div:nth-child(1) {
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    background-color: #f2f2f2;
    border-radius: 5px;
  }

  .filter div:nth-child(2) {
    width: 100%;
    text-align: left;
    background-color: #f2f2f2;
    border-radius: 5px;
  }

  input {
    width: 85%;
  }
}

@media screen and (max-width: 576px) {
  .item-container {
    flex-direction: column;
  }

  .menu-container {
    width: 100%;
    padding: 5px;
  }

  .content-container {
    width: 100%;
    padding: 5px;
  }

  .filter {
    flex-direction: column;
    margin-top: 5px;
    padding: 0;
  }

  .filter div:nth-child(1) {
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    background-color: #f2f2f2;
    border-radius: 5px;
  }

  .filter div:nth-child(2) {
    width: 100%;
    text-align: left;
    background-color: #f2f2f2;
    border-radius: 5px;
  }
}
</style>