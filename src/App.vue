<template>
  <main class="main">
    <div v-if="errorLocation">
      <p class="error">Error fetching location</p>
    </div>
    <div v-else>
      <div v-if="fetchingLocation">
        <Loader/>
      </div>
      <div v-else>
        <h2 class="location">
          {{location.city}}, {{location.country_name}}
          <span
            role="img"
            aria-label="flag"
          >{{location.location.country_flag_emoji}}</span>
        </h2>
      </div>
    </div>
    <div v-if="errorForecast">
      <p class="error">Error fetching forecast</p>
    </div>
    <div v-else>
      <div v-if="fetchingForecast">
        <Loader/>
      </div>
      <div v-else>
        <div class="temp-wrapper">
          <h1 class="temp">{{forecast.currently.temperature}}</h1>
          <p class="summary">{{forecast.currently.summary}}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  data() {
    return {
      location: null,
      forecast: null,
      errorLocation: false,
      errorForecast: false,
      fetchingLocation: true,
      fetchingForecast: true
    };
  },
  components: {
    Loader
  },
  methods: {
    getLocation: function() {
      const ipstack_api_key = process.env.VUE_APP_IPSTACK_API_KEY;

      this.fetchingLocation = true;

      return fetch(`http://api.ipstack.com/check?access_key=${ipstack_api_key}`)
        .then(stream => stream.json())
        .then(data => {
          this.location = data;
          this.fetchingLocation = false;
          return {
            latitude: data.latitude,
            longitude: data.longitude
          };
        })
        .catch(() => {
          this.errorLocation = true;
          this.errorForecast = true;
          this.fetchingLocation = false;
          this.fetchingForecast = false;
        });
    },
    getForecast: function(location) {
      const api_url = process.env.VUE_APP_API_URL;

      this.fetchingForecast = true;

      fetch(
        `${api_url}/get/forecast/${location.latitude},${location.longitude}`
      )
        .then(stream => stream.json())
        .then(data => {
          this.forecast = data;
          this.fetchingForecast = false;
        })
        .catch(() => {
          this.errorForecast = true;
          this.fetchingForecast = false;
        });
    },
    getWeatherData: async function() {
      const location = await this.getLocation();
      if (location) {
        this.getForecast(location);
      }
    }
  },
  mounted() {
    this.getWeatherData();
  }
};
</script>

<style>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
h1,
h2,
h3,
p {
  margin: 0;
}
</style>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
}
.location {
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
}
.temp-wrapper {
  margin: 20px 0;
  text-align: center;
}
.temp {
  font-size: 2.2rem;
}
.summary {
  font-size: 1rem;
}
.error {
  color: #ff3b30;
}
</style>
