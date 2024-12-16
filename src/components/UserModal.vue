<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal">
      <header class="modal-header">
        <h2>{{ modalTitle }}</h2>
        <button class="close-button" @click="closeModal">&times;</button>
      </header>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="code">{{ $t('admin.code') }}</label>
          <input
            v-model="formData.code"
            type="text"
            id="code"
            :disabled="!!props.itemToEdit"
            :placeholder="$t('admin.code')"
          />
          <p v-if="errors.code" class="error-message">{{ $t('admin.' + errors.code) }}</p>
        </div>

        <div class="form-group">
          <label for="image">{{ $t('admin.image') }}</label>
          <input @change="onImageChange" type="file" id="image" :placeholder="$t('admin.image')" />
          <p v-if="errors.image" class="error-message">{{ $t('admin.' + errors.image) }}</p>
        </div>

        <div class="form-group">
          <img class="img-preview" v-if="imagePreview" :src="imagePreview" alt="" />
        </div>

        <div class="form-group">
          <label for="name">{{ $t('admin.name') }}</label>
          <input v-model="formData.name" type="text" id="name" :placeholder="$t('admin.name')" />
          <p v-if="errors.name" class="error-message">{{ $t('admin.' + errors.name) }}</p>
        </div>

        <div class="form-group">
          <label for="joiningDate">{{ $t('admin.joining-date') }}</label>
          <input
            v-model="formData.joiningDate"
            type="date"
            id="joiningDate"
            :placeholder="$t('admin.joining-date')"
          />
          <p v-if="errors.joiningDate" class="error-message">
            {{ $t('admin.' + errors.joiningDate) }}
          </p>
        </div>

        <div class="form-group">
          <label for="information">{{ $t('admin.information') }}</label>
          <textarea
            v-model="formData.information"
            id="information"
            rows="4"
            :placeholder="$t('admin.information')"
          ></textarea>
          <p v-if="errors.information" class="error-message">
            {{ $t('admin.' + errors.information) }}
          </p>
        </div>

        <div class="modal-footer">
          <button type="button" @click="closeModal">{{ $t('admin.cancel') }}</button>
          <button type="submit">{{ $t('admin.save') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, reactive, type PropType } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  modalTitle: {
    type: String,
    default: 'User Modal',
  },
  itemToEdit: {
    type: Object as PropType<FormData | null>,
    required: false,
  },
})

interface FormData {
  code: string
  name: string
  joiningDate: string
  information: string
  image: File | null | string
}

const formData = ref<FormData>({
  code: '',
  name: '',
  joiningDate: '',
  information: '',
  image: null,
})

const imagePreview = ref<string | null>(null)

const errors = reactive({}) as Record<keyof FormData, string>

const emit = defineEmits(['close', 'save'])

watch(
  () => formData.value.code,
  (newValue) => {
    const trimmedValue = newValue.trim()
    if (formData.value.code !== trimmedValue) {
      formData.value.code = trimmedValue
    }
  },
)

watch(
  () => props.itemToEdit,
  (newValue) => {
    if (newValue) {
      formData.value = { ...newValue }
      if (newValue.image && typeof newValue.image === 'string') {
        imagePreview.value = newValue.image
      } else {
        imagePreview.value = null
      }
    } else {
      formData.value = {
        code: '',
        name: '',
        image: null,
        joiningDate: '',
        information: '',
      }
    }
  },
  { immediate: true },
)

const onImageChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]

  if (file) {
    const reader = new FileReader()

    reader.onload = () => {
      imagePreview.value = reader.result as string

      formData.value.image = file
    }
    reader.readAsDataURL(file)
  }

  errors.image = ''
}

const resetForm = () => {
  formData.value = {
    code: '',
    name: '',
    joiningDate: '',
    information: '',
    image: null,
  }
  imagePreview.value = null
  Object.keys(errors).forEach((key) => (errors[key as keyof FormData] = ''))
}

const closeModal = () => {
  emit('close')
  resetForm()
}

const handleSubmit = () => {
  const fields = [
    { key: 'code', message: 'code-required' },
    { key: 'name', message: 'name-required' },
    { key: 'image', message: 'image-required' },
    { key: 'joiningDate', message: 'joining-date-required' },
    { key: 'information', message: 'information-required' },
  ]

  let hasError = false

  for (const field of fields) {
    const key = field.key as keyof FormData
    const value =
      typeof formData.value[key] === 'string'
        ? (formData.value[key] as string).trim()
        : formData.value[key]

    if (!value) {
      errors[key] = field.message
      hasError = true
    } else {
      errors[key] = ''
    }
    formData.value[key] = value
  }

  if (hasError) {
    return
  }

  emit('save', formData.value)
  resetForm()
  closeModal()
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 50vw;
  max-width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;

  .img-preview {
    height: 100px;
    width: auto;
  }

  .error-message {
    font-size: 12px;
    font-style: italic;
    color: red;
    opacity: 0.8;
    padding-top: 5px;
  }
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 14px;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 4px;
  font-size: 14px;
  font-family: Inter;
}

textarea {
  resize: vertical;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

button {
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Inter;
}

button[type='button'] {
  background: #f4f4f4;
}

button[type='submit'] {
  background: #007bff;
  color: #fff;
}
</style>
