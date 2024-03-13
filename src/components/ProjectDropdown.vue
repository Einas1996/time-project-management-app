<template>
  <div>
    <p>Select a project from the list:</p>
    <select v-model="selectedProject" @change="updateSelectedProject">
      <option disabled value="">Select a project</option>
      <option v-for="project in projects" :key="project.id" :value="project.id">
        {{ project.name }}
      </option>
    </select>
    <p v-if="selectedProjectName">
      Selected project: {{ selectedProjectName }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProject: null,
      selectedProjectName: null,
      projects: [
        { id: 1, name: "Project 1" },
        { id: 2, name: "Project 2" },
        { id: 3, name: "Project 3" }
      ]
    };
  },
  methods: {
    updateSelectedProject() {
      const project = this.projects.find((p) => p.id === this.selectedProject);
      this.selectedProjectName = project ? project.name : null;
    }
  }
};
</script>
