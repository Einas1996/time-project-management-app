<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ProjectDropdown></ProjectDropdown>
    <!-- <BarChart></BarChart> -->
  </div>
</template>
<script>
import ProjectDropdown from "@/components/ProjectDropdown.vue";
// import BarChart from "@/components/BarChart.vue";

export default {
  name: "HomeView",
  props: {
    msg: {
      type: String,
      default: "Welcome to the project time management app."
    }
  },
  components: {
    ProjectDropdown
    // BarChart
  }
};
</script>
