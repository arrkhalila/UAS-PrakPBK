<template>
    <div class="weather-widget">
      <h2 class="widget-title">WEATHER</h2>
      <div class="location-input">
        <label for="location">Masukkan Lokasi Anda :</label>
        <input type="text" id="location" v-model="location" />
        <br><button @click="fetchWeatherData">Get Data</button>
      </div>
      <div v-if="weatherData" class="weather-data">
        <p class="location">Location: {{ weatherData.name }}</p>
        <p v-if="weatherData.main" class="temperature">
          Suhu : {{ weatherData.main.temp }}°C
        </p>
        <p v-if="weatherData.weather" class="description">
          Deskripsi Cuaca : {{ weatherData.weather[0].description }}
        </p>
      </div>
      <p v-else>Loading data...</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        location: '',
        weatherData: null
      };
    },
    methods: {
      async fetchWeatherData() {
        try {
          const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          this.weatherData = data;
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .weather-widget {
  border: 1.5px solid #bdbcbc;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #d4e8fc;
  border-radius: 8px;
}
.widget-title {
  margin-top: 0;
  color: #1d4158;
}
.location-input button{
  margin-bottom: 10px;
  margin-top: 10px;
}
.location-input input{
  margin-left: 10px;
}
.weather-data {
  margin-top: 10px;
}
.location {
  font-size: 18px;
  font-weight: bold;
}
.temperature {
  font-size: 24px;
  color: #ff5722;
}
.description {
  font-size: 16px;
}
h2, p{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
  </style>