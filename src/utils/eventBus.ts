import { reactive } from 'vue'

interface FormData {
  title: string
  description: string
  image: File | null
  time: string
  type: string
}

export const eventBus = reactive({
  formData: null as FormData | null,
  emit: (data: FormData) => {
    eventBus.formData = data
  },
  listen() {
    return this.formData
  },
})
