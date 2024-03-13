<template>
  <div class="home">
    <ProjectDropdown></ProjectDropdown>
    <LayoutComponent></LayoutComponent>
    <!-- <BarChart></BarChart> -->
  </div>
</template>
<script>
import LayoutComponent from "@/components/LayoutComponent.vue";
import ProjectDropdown from "@/components/ProjectDropdown.vue";
// import BarChart from "@/components/BarChart.vue";

export default {
  name: "HomeView",
  components: {
    ProjectDropdown,
    LayoutComponent
    // BarChart
  }
};
</script>
