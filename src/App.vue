<template>
  <main class="main">
    <div v-if="location">
      <h2 class="location">
        {{location.city}}, {{location.country_name}}
        <span
          role="img"
          aria-label="flag"
        >{{location.location.country_flag_emoji}}</span>
      </h2>
    </div>
    <p v-if="error">Error!</p>
    <p v-if="loading">Loading...</p>
    <div class="temp-wrapper" v-if="forecast">
      <h1 class="temp">{{forecast.currently.temperature}}</h1>
      <p class="summary">{{forecast.currently.summary}}</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      location: null,
      forecast: null,
      error: false,
      loading: false
    };
  },
  methods: {
    getLocation: function() {
      const ipstack_api_key = process.env.VUE_APP_IPSTACK_API_KEY;

      return fetch(`http://api.ipstack.com/check?access_key=${ipstack_api_key}`)
        .then(stream => stream.json())
        .then(data => {
          this.loading = false;
          this.location = data;
          return {
            latitude: data.latitude,
            longitude: data.longitude
          };
        })
        .catch(() => {
          this.error = true;
          this.loading = false;
        });
    },
    getForecast: function(location) {
      const darksky_api_key = process.env.VUE_APP_DARKSKY_API_KEY;
      fetch(
        `https://api.darksky.net/forecast/${darksky_api_key}/${
          location.latitude
        },${location.longitude}?units=auto`
      )
        .then(stream => stream.json())
        .then(data => {
          this.loading = false;
          this.forecast = data;
        })
        .catch(() => {
          this.error = true;
          this.loading = false;
        });
    },
    getWeatherData: async function() {
      this.loading = true;

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
