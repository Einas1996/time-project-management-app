<template>
  <div class="flex flex-wrap">
    <div
      v-for="project in projects"
      :key="project.id"
      class="w-1/3 bg-gray-200 p-4 rounded-md shadow-md mb-4 mr-4"
    >
      <h2 class="text-xl font-semibold">{{ project.name }}</h2>
      <p>content</p>
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
        { id: 1, name: "Project A", totalHours: 80 },
        { id: 2, name: "Project B", totalHours: 120 },
        { id: 3, name: "Project C", totalHours: 40 }
      ]
    };
  }
};
</script>
