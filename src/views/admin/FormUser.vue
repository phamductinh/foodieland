<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <MultiSelectComp
        top_label="Strengths:"
        :options="strengths"
        v-model="selectedOptions"
        placeholder="Select options..."
        :error="formErrors.selectedOptions"
      />
      <DatePickerComp
        @update:datetime="handleDatetimeUpdate"
        top_label="Joining Date:"
        :isShowTime="true"
        :error="formErrors.selectedDateTime"
        :resetTrigger="resetFormTrigger"
      />
      <div class="input-box">
        <p class="input-label"><span>Required</span>Work:</p>
        <div class="box">
          <label for="online"
            ><input
              type="radio"
              name="work"
              id="online"
              value="Online"
              v-model="workType"
            />Online</label
          >
          <label for="offline"
            ><input
              type="radio"
              name="work"
              id="offline"
              value="Offline"
              v-model="workType"
            />Offline</label
          >
        </div>
        <p v-if="formErrors.workType" class="error-msg">{{ formErrors.workType }}</p>
      </div>
      <div class="input-box">
        <p class="input-label"><span>Required</span>URL:</p>
        <input class="input-url" type="text" placeholder="Social URL" v-model="socialURL" />
        <p v-if="formErrors.socialURL" class="error-msg">{{ formErrors.socialURL }}</p>
      </div>
      <div class="btns">
        <button class="btn-submit" type="submit">Submit</button>
        <button class="btn-cancel" type="button" @click="resetForm">Cancel</button>
      </div>
    </form>
    <UserModal
      v-if="isModalVisible"
      title="Form Submitted Successfully"
      :visible="isModalVisible"
      :data="submittedData"
      @close="closeModal"
    />
  </div>
</template>
<script lang="ts" setup>
import MultiSelectComp from '@/components/MultiSelectComp.vue'
import DatePickerComp from '@/components/DatePickerComp.vue'
import UserModal from './UserModal.vue'
import { reactive, ref, watch } from 'vue'

const strengths = ref([
  { id: 1, label: 'Problem Solving' },
  { id: 2, label: 'Programming' },
  { id: 3, label: 'System Design' },
  { id: 4, label: 'Cloud Computing' },
  { id: 5, label: 'Cybersecurity' },
  { id: 6, label: 'Database Management' },
  { id: 7, label: 'Team Collaboration' },
  { id: 8, label: 'Critical Thinking' },
])

const selectedOptions = ref([])
const selectedDateTime = ref('')
const workType = ref('')
const socialURL = ref('')
const formErrors = reactive({
  selectedOptions: '',
  selectedDateTime: '',
  workType: '',
  socialURL: '',
})

const resetFormTrigger = ref(false)
const isModalVisible = ref(false)
const submittedData = ref({
  strengths: [],
  joiningDate: '',
  workType: '',
  socialURL: '',
})

watch(selectedOptions, (newValue) => {
  if (newValue.length) {
    formErrors.selectedOptions = ''
  }
})

watch(selectedDateTime, (newValue) => {
  if (newValue) {
    formErrors.selectedDateTime = ''
  }
})

watch(workType, (newValue) => {
  if (newValue) {
    formErrors.workType = ''
  }
})

watch(socialURL, (newValue) => {
  if (newValue.trim()) {
    formErrors.socialURL = ''
  }
})

const handleDatetimeUpdate = (datetime: string) => {
  selectedDateTime.value = datetime
  console.log(selectedDateTime.value)
}

const validateForm = () => {
  let isValid = true

  if (!selectedOptions.value.length) {
    formErrors.selectedOptions = 'Please select at least one strength.'
    isValid = false
  } else {
    formErrors.selectedOptions = ''
  }

  if (!selectedDateTime.value) {
    formErrors.selectedDateTime = 'Joining date is required.'
    isValid = false
  } else {
    formErrors.selectedDateTime = ''
  }

  if (!workType.value) {
    formErrors.workType = 'Please select a work type.'
    isValid = false
  } else {
    formErrors.workType = ''
  }

  if (!socialURL.value.trim()) {
    formErrors.socialURL = 'Social URL is required.'
    isValid = false
  } else if (!/[\w\-\.]+\.[a-z]{2,}/i.test(socialURL.value.trim())) {
    formErrors.socialURL = 'Invalid URL format.'
    isValid = false
  } else {
    formErrors.socialURL = ''
  }

  return isValid
}

const handleSubmit = () => {
  if (validateForm()) {
    submittedData.value = {
      strengths: selectedOptions.value,
      joiningDate: selectedDateTime.value,
      workType: workType.value,
      socialURL: socialURL.value,
    }
    isModalVisible.value = true
  }
}

const closeModal = () => {
  isModalVisible.value = false
}

const resetForm = () => {
  selectedOptions.value = []
  selectedDateTime.value = ''
  workType.value = ''
  socialURL.value = ''
  resetFormTrigger.value = true
  setTimeout(() => {
    resetFormTrigger.value = false
  }, 0)
  for (const key in formErrors) {
    formErrors[key] = ''
  }
}
</script>
<style lang="scss">
.form-container {
  padding: 80px;

  form {
    width: 100%;
    height: auto;
    padding: 50px;
    border: 1px solid #dcdcdc;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-family: Inter;

    .error-msg {
      font-size: 13px;
      color: red;
      opacity: 0.8;
      font-style: italic;
      padding-top: 5px;
    }

    .input-box {
      .input-label {
        font-family: Inter;
        padding-bottom: 5px;
        font-size: 14px;
        color: #333;
        cursor: default;

        span {
          display: inline-block;
          font-size: 12px;
          line-height: 20px;
          font-weight: 600;
          text-align: center;
          padding: 0 5px;
          color: #fff;
          background: #627d98;
          border-radius: 4px;
          margin-right: 8px;
        }
      }

      .box {
        display: flex;
        label {
          width: 200px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid #dcdcdc;
          cursor: pointer;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          color: #666;
        }
      }

      .input-url {
        padding: 12px;
        width: 100%;
        border: 1px solid #dcdcdc;
        outline: none;
        border-radius: 4px;
        font-size: 13px;
        font-family: Inter;
        font-weight: 400;
      }
    }

    .btns {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;

      .btn-submit {
        background: #627d98;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        padding: 10px 12px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .btn-cancel {
        background: #b5b5b6;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        padding: 10px 12px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
}
</style>
