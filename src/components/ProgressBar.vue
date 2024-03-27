<template>
  <div class="progress-bar-container">
    <div class="progress-bar">
      <div
        class="progress-fill"
        :style="{
          width: progressPercentage + '%',
          backgroundColor: progressBarColor
        }"
      ></div>
    </div>
    <!-- <div class="extra-hours" v-if="extraHours > 0">
      Extra hours: {{ extraHours }}
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    spentHours: {
      type: Number,
      required: true
    },
    budgetedHours: {
      type: Number,
      required: true
    }
  },
  computed: {
    progressPercentage() {
      return (this.spentHours / this.budgetedHours) * 100;
    },
    progressBarColor() {
      return this.spentHours > this.budgetedHours ? "red" : "black";
    },
    extraHours() {
      return Math.max(0, this.spentHours - this.budgetedHours);
    }
  }
};
</script>

<style>
.progress-bar-container {
  position: relative;
}

.progress-bar {
  width: 100%;
  height: 15px;
  background-color: #f0f0f0;
  border-radius: 4px;
  border: 1px solid #111010;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.extra-hours {
  font-size: 14px;
  color: red;
}
</style>
