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
      return this.spentHours > this.budgetedHours ? "red" : "green";
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
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  position: relative;
  box-shadow: inset 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
}

.progress-fill {
  height: 100%;
  transition: width 0.3s ease;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 2rem 2rem;
  animation: progress-animation 2s linear infinite;
}

@keyframes progress-animation {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}
</style>
