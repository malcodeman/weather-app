<template>
  <div>
    <h1>Summary</h1>
    <p v-if="error">Error!</p>
    <p v-if="loading">Loading...</p>
    <p v-if="forecast">{{forecast.currently.summary}}</p>
  </div>
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

          return {
            latitude: data.latitude,
            longitude: data.longitude
          };
        })
        .catch(error => {
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
          console.log(data);
          this.loading = false;
          this.forecast = data;
        })
        .catch(error => {
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


<style scoped>
</style>
