<template>
  <div class="nav-sm-container">
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
</template>

<script>
export default {};
</script>

<style scoped>
.nav-sm-container {
  background-color: white;
  padding: 0 17px;
}

ul li {
  list-style: none;
  padding: 8px 0;
}

.link {
  color: black;
  font-weight: 500;
}
</style>