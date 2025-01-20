<script setup lang="ts">
const { data } = await useFetch("/api/weather/forecast?location=berlin");
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold text-red-400">Weather app</h1>
    <li v-for="item in data?.timelines.daily">
      <p>Time: {{ item.time }}</p>
      <p>Temperature min: {{ item.values.temperatureApparentMin }}</p>
    </li>
  </main>
</template>
