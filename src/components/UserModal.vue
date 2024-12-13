<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal">
      <header class="modal-header">
        <h2>{{ modalTitle }}</h2>
        <button class="close-button" @click="closeModal">&times;</button>
      </header>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="code">Code</label>
          <input v-model="formData.code" type="text" id="code" required />
        </div>

        <div class="form-group">
          <label for="image">Image</label>
          <input @change="onImageChange" type="file" id="image" placeholder="Image URL" />
        </div>

        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="formData.name" type="text" id="name" required />
        </div>

        <div class="form-group">
          <label for="joiningDate">Joining Date</label>
          <input v-model="formData.joiningDate" type="date" id="joiningDate" required />
        </div>

        <div class="form-group">
          <label for="information">Information</label>
          <textarea v-model="formData.information" id="information" rows="4"></textarea>
        </div>

        <div class="modal-footer">
          <button type="button" @click="closeModal">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch, reactive } from 'vue'

defineProps({
  isOpen: Boolean,
  modalTitle: {
    type: String,
    default: 'User Modal',
  },
})

interface FormData {
  code: string
  name: string
  joiningDate: string
  information: string
  image: File | null 
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

const closeModal = () => {
  emit('close')
}

const handleSubmit = () => {
  emit('save', formData.value)
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
}

button[type='button'] {
  background: #f4f4f4;
}

button[type='submit'] {
  background: #007bff;
  color: #fff;
}
</style>
