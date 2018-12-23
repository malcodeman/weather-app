<template>
  <div class="loader-wrapper">
    <div class="loader"/>
  </div>
</template>

<style scoped>
.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
}
@keyframes rotate360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loader {
  color: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  border-top: 2px solid #fff;
  width: 24px;
  height: 24px;
  animation: rotate360 2s linear infinite;
  margin: 0 6px;
}
</style>
