<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <h2>Temukan Kami</h2>
        <div>
          <l-map style="height: 400px" :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="markerLatLng">
              <l-popup>
                <a href="https://goo.gl/maps/zdGisGZJXuM5QbqE8">Google Map</a>
              </l-popup>
            </l-marker>
          </l-map>
        </div>
      </div>
      <div class="bottom">
        <div class="kontak">
          <h3>Kontak</h3>
          <ul>
            <li>
              <p>
                <i>
                  <font-awesome-icon :icon="iconAlamat" />
                </i>
                Jl. Pemuda No. 294, Klaten, 57424
              </p>
            </li>
            <li>
              <p>
                <i>
                  <font-awesome-icon :icon="iconPhone" />
                </i>
                (0272) 321046
              </p>
            </li>
            <li>
              <p>
                <i>
                  <font-awesome-icon :icon="iconFax" />
                </i>
                (0272) 322567
              </p>
            </li>
            <li>
              <p>
                <i>
                  <font-awesome-icon :icon="iconEmail" />
                </i>
                ppidklaten@gmail.com.
              </p>
            </li>
          </ul>
        </div>
        <div class="terkait">
          <h3>Link Terkait</h3>
          <ul>
            <li>
              <p>
                <a href="https://klatenkab.go.id/">Website Pemkab Klaten</a>
              </p>
            </li>
            <li>
              <p><a href="https://maturibu.klaten.go.id/">Matur Ibu</a></p>
            </li>
            <li>
              <p>
                <a href="http://simantara.klatenkab.go.id/home/">Simantara</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://smartcity.klaten.go.id/">Klaten Smart City</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://opendata.klaten.go.id/">Open Data Klaten</a>
              </p>
            </li>
            <li>
              <p><a href="#">PPID Kab Klaten</a></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMapLocationDot,
  faPhoneFlip,
  faFax,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    FontAwesomeIcon,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 16,
      center: [-7.71256, 110.59209],
      markerLatLng: [-7.71256, 110.59209],
      iconAlamat: faMapLocationDot,
      iconPhone: faPhoneFlip,
      iconFax: faFax,
      iconEmail: faEnvelope,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  list-style: none;
}

.container {
  display: flex;
  justify-content: center;
  padding: 20px 20px;
}

.content {
  width: 1024px;
  padding: 30px 30px;
  background-color: white;
  border-radius: 5px;
}

div h2 {
  margin-bottom: 15px;
  text-align: center;
}

.top {
  padding: 0 15px;
}

.bottom {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

li {
  padding: 5px 0;
  font-size: 17px;
}

i {
  margin-right: 10px;
  font-size: 18px;
  color: rgb(37, 37, 37);
}

.terkait a {
  color: black;
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 992px) {
}

@media screen and (max-width: 768px) {
  .container {
    padding: 10px;
  }

  .content {
    padding: 10px;
  }

  .top {
    padding: 0;
  }

  .bottom {
    justify-content: space-around;
    padding: 0;
  }
}

@media screen and (max-width: 576px) {
  .container {
    padding: 5px;
  }

  .content {
    padding: 7px;
  }

  .top {
    padding: 0;
  }

  .bottom {
    flex-direction: column;
    margin-top: 5px;
    padding: 5px;
  }

  .terkait {
    margin-top: 5px;
  }

  i {
    margin-right: 5px;
  }
}

@media screen and (max-width: 320px) {
  .container {
    padding: 5px;
  }

  .content {
    padding: 5px;
  }

  .top {
    padding: 0;
  }

  .bottom {
    flex-direction: column;
    margin-top: 5px;
    padding: 5px;
  }

  .terkait {
    margin-top: 5px;
  }

  i {
    margin-right: 5px;
  }
}
</style>