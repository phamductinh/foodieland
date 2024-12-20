<template>
  <div class="modal" v-if="visible" @click="emitClose">
    <div class="modal-content" @click.stop>
      <h2>{{ title }}</h2>
      <div class="modal-body">
        <p><strong>Strengths:</strong> {{ data.strengths.map((s) => s.label).join(', ') }}</p>
        <p>
          <strong>Joining Date:</strong>
          {{ formatDate(data.joiningDate, 'MM/DD/YYYY HH:mm') }}
        </p>
        <p><strong>Work Type:</strong> {{ data.isWorkType === true ? 'Online' : 'Offline' }}</p>
        <p><strong>Social URL:</strong> {{ data.socialURL }}</p>
      </div>
      <div class="btns">
        <button class="save" @click="handleSubmit">Save</button>
        <button class="close" @click="emitClose">Close</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment'
import { defineProps } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
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

const data = props.data

const emit = defineEmits(['close'])

const emitClose = () => {
  emit('close')
}

const handleSubmit = () => {
  if (data) {
    store.commit('setAboutUsData', data)
    emitClose()
  }
}

const formatDate = (date: string, format: string = 'MM/DD/YYYY'): string => {
  if (date && format) {
    return moment(date).format(format)
  } else {
    return ''
  }
}
</script>

<style lang="scss" scoped>
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

    .btns {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;

      button {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;

        &.save {
          background: #627d98;
          color: white;

          &:hover {
            background: #7897b6;
          }
        }

        &.close {
          background: #e7e7e7;
          color: #696969;
        }
      }
    }
  }
}
</style>
