<template>
  <div class="project-container">
    <h2>Projects budget overview</h2>
    <div class="project-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <ProjectTile :project="project"></ProjectTile>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTile from "@/components/ProjectTile.vue";
export default {
  components: {
    ProjectTile
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Project A",
          budgetedHours: 200,
          spentHours: 115
        },
        {
          id: 2,
          name: "Project B",
          budgetedHours: 150,
          spentHours: 110
        },
        {
          id: 3,
          name: "Project C",
          budgetedHours: "100",
          spentHours: 90
        },
        {
          id: 4,
          name: "Project D",
          budgetedHours: 100,
          spentHours: 120
        },
        {
          id: 5,
          name: "Project E",
          budgetedHours: "120",
          spentHours: 115
        }
      ]
    };
  }
};
</script>
<style scoped>
.project-container {
  padding: 20px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>
