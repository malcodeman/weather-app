<template>
  <main class="main">
    <div v-if="fetching && !location">
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
    <div v-if="fetching && !forecast">
      <Loader/>
    </div>
    <div class="temp-wrapper" v-else>
      <h1 class="temp">{{forecast.currently.temperature}}</h1>
      <p class="summary">{{forecast.currently.summary}}</p>
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
      error: false,
      fetching: false
    };
  },
  components: {
    Loader
  },
  methods: {
    getLocation: function() {
      const ipstack_api_key = process.env.VUE_APP_IPSTACK_API_KEY;

      this.fetching = true;

      return fetch(`http://api.ipstack.com/check?access_key=${ipstack_api_key}`)
        .then(stream => stream.json())
        .then(data => {
          this.location = data;
          this.fetching = false;
          return {
            latitude: data.latitude,
            longitude: data.longitude
          };
        })
        .catch(() => {
          this.error = true;
          this.fetching = false;
        });
    },
    getForecast: function(location) {
      const api_url = process.env.VUE_APP_API_URL;

      this.fetching = true;

      fetch(
        `${api_url}/get/forecast/${location.latitude},${location.longitude}`
      )
        .then(stream => stream.json())
        .then(data => {
          this.forecast = data;
          this.fetching = false;
        })
        .catch(() => {
          this.error = true;
          this.fetching = false;
        });
    },
    getWeatherData: async function() {
      const location = await this.getLocation();
      this.getForecast(location);
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
</style>
