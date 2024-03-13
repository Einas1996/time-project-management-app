<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <BarChart></BarChart>
  </div>
</template>
<script>
// import BarChart from "@/components/BarChart.vue";

export default {
  name: "HomeView",
  props: {
    msg: {
      type: String,
      default: "Welcome to the project time tracking app."
    }
  }
  // components: {
  //   BarChart
  // }
};
</script>
