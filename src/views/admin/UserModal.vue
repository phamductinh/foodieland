<template>
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <h2>{{ title }}</h2>
      <div class="modal-body">
        <p><strong>Strengths:</strong> {{ data.strengths.map((s) => s.label).join(', ') }}</p>
        <p><strong>Joining Date:</strong> {{ data.joiningDate }}</p>
        <p><strong>Work Type:</strong> {{ data.workType }}</p>
        <p><strong>Social URL:</strong> {{ data.socialURL }}</p>
      </div>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-content {
    max-width: 80%;
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    font-family: Inter;

    h2 {
      margin-bottom: 15px;
    }

    .modal-body {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 15px;

      p {
        text-wrap: wrap;
      }
    }

    button {
      margin-top: 20px;
      padding: 10px 20px;
      background: #627d98;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>
