<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <header class="modal-header">
        <h2>{{ modalTitle }}</h2>
        <button class="close-button" @click="closeModal">&times;</button>
      </header>

      <form @submit.prevent="handleSubmit">
        <MultiSelectComp
          :top_label="$t('admin.users')"
          :options="usersList"
          v-model="selectedOptions"
          :isChooseUser="true"
          :placeholder="$t('admin.select-options')"
        />

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
import MultiSelectComp from '@/components/MultiSelectComp.vue'

const selectedOptions = ref([])

const props = defineProps({
  isOpen: Boolean,
  modalTitle: {
    type: String,
    default: 'List Users Modal',
  },
  itemToEdit: {
    type: Object as PropType<FormData | null>,
    required: false,
  },
})

interface User {
  code: string
  name: string
  image: string
  joiningDate: string
  information: string
}

const usersList = ref<User[]>([
  {
    code: 'T233',
    name: 'Nguyen Van A',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2020-11-23',
    information: 'Creative thinker',
  },
  {
    code: 'T943',
    name: 'Tran Van B',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2017-04-11',
    information: 'Fast learner',
  },
  {
    code: 'T934',
    name: 'Le Thi C',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2017-10-31',
    information: 'Hard working',
  },
  {
    code: 'T535',
    name: 'Pham Van D',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2019-07-26',
    information: 'Creative thinker',
  },
  {
    code: 'T470',
    name: 'Hoang Thi E',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2018-04-01',
    information: 'Innovative',
  },
  {
    code: 'T599',
    name: 'Bui Minh F',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2022-07-09',
    information: 'Creative thinker',
  },
  {
    code: 'T625',
    name: 'Nguyen Hai G',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2019-01-17',
    information: 'Problem solver',
  },
  {
    code: 'T866',
    name: 'Pham Anh H',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2020-03-14',
    information: 'Very dedicated',
  },
  {
    code: 'T227',
    name: 'Doan Van I',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2021-06-18',
    information: 'Great team player',
  },
  {
    code: 'T393',
    name: 'Tran Huu J',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2018-02-05',
    information: 'Innovative',
  },
  {
    code: 'T548',
    name: 'Nguyen Thi K',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2020-11-21',
    information: 'Great team player',
  },
  {
    code: 'T740',
    name: 'Vo Van L',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2021-12-18',
    information: 'Fast learner',
  },
  {
    code: 'T439',
    name: 'Le Huu M',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2017-04-05',
    information: 'Problem solver',
  },
  {
    code: 'T842',
    name: 'Tran Minh N',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2018-01-10',
    information: 'Reliable',
  },
  {
    code: 'T431',
    name: 'Pham Thi O',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2021-07-13',
    information: 'Reliable',
  },
])

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

const emit = defineEmits(['close', 'submit', 'update:itemToEdit'])

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
  emit('update:itemToEdit', null)
}

const handleSubmit = () => {
  emit('submit', selectedOptions.value)
  resetForm()
  closeModal()
}
</script>

<style lang="scss">
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
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

form {
  input[type='checkbox'] {
    width: fit-content;
  }

  button {
    margin-left: 0.5rem;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
  }

  .multi-selected-item {
    padding: 5px 0;
  }
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 50px;

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
}
</style>
