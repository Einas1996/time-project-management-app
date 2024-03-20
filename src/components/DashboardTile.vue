<template>
  <div class="project-container">
    <h2>Projects budget overview</h2>
    <div class="project-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h2>{{ project.name }}</h2>
        <p class="budgeted-color">
          Budgeted hours: <input v-model="project.budgetedhours" />
        </p>
        <p class="spent-color">Spent hours: {{ project.Spenthours }}</p>
        <p class="difference-color">
          Difference: {{ calculateDifference(project) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
          budgetedhours: "",
          Spenthours: 115
        },
        {
          id: 2,
          name: "Project B",
          budgetedhours: "",
          Spenthours: 110
        },
        {
          id: 3,
          name: "Project C",
          budgetedhours: "",
          Spenthours: 90
        },
        {
          id: 4,
          name: "Project D",
          budgetedhours: "",
          Spenthours: 100
        },
        {
          id: 5,
          name: "Project E",
          budgetedhours: "",
          Spenthours: 115
        }
      ]
    };
  },
  methods: {
    calculateDifference(project) {
      return project.budgetedhours - project.Spenthours;
    }
  }
};
</script>
<style scoped>
.budgeted-color {
  color: red;
}
.spent-color {
  color: green;
}
.difference-color {
  color: blue;
}
.project-container {
  padding: 20px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
}
</style>
