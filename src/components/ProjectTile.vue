<template>
  <div class="project-card">
    <h2>{{ project.name }}</h2>
    <p class="spent-hours-style">{{ project.spentHours }}</p>
    <p class="budgeted-hours-style">{{ project.budgetedHours }}</p>
    <ProgressBar
      :spentHours="project.spentHours"
      :budgetedHours="project.budgetedHours"
    />
    <!-- <p>Difference: {{ calculateDifference(project) }}</p> -->
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
export default {
  props: {
    project: {
      type: Array,
      required: true
    }
  },
  methods: {
    calculateDifference(project) {
      return project.budgetedHours - project.spentHours;
    }
  },
  components: {
    ProgressBar
  }
};
</script>
<style scoped>
.budgeted-hours-style {
  color: #333;
  font-size: 16px;
}
.spent-hours-style {
  color: #333;
  font-size: 14px;
  font-weight: bold;
}

.spent-hours-style,
.budgeted-hours-style {
  display: inline-block;
  margin-right: 50px;
}
.project-card {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
