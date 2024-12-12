<template>
  <div class="contact-us-container">
    <HomeHeader />
    <div class="contact-form">
      <h1>Contact Us</h1>
      <div class="content">
        <div class="left">
          <img src="../components/icons/contact-us.png" alt="" />
        </div>
        <div class="right">
          <form @submit.prevent="handleSubmit">
            <div class="input-container">
              <label class="image-label" for="#">Image</label>
              <div class="file-upload-form">
                <label for="file" class="file-upload-label">
                  <div v-if="imagePreview" class="image-preview" v-on:click="resetImage">
                    <img :src="imagePreview" alt="Image Preview" />
                  </div>
                  <div class="file-upload-design" v-else>
                    <FileUploadIcon />
                    <p>Drag and Drop</p>
                    <p>or</p>
                    <span class="browse-button">Browse file</span>
                  </div>
                  <input id="file" type="file" accept="image/*" @change="onImageChange" />
                </label>
              </div>
              <p v-if="errors.image" class="error-message">{{ errors.image }}</p>
            </div>
            <InputComp
              v-model="formData.title"
              label="Title"
              :error="errors.title"
              placeholder="Enter recipe title..."
              @update:error="errors.title = $event"
            />
            <div class="double">
              <InputComp
                v-model="formData.time"
                label="Time"
                :error="errors.time"
                placeholder="Enter recipe time..."
                @update:error="errors.time = $event"
              />
              <InputComp
                v-model="formData.type"
                label="Type"
                :error="errors.type"
                placeholder="Enter recipe type..."
                @update:error="errors.type = $event"
              />
            </div>
            <InputComp
              v-model="formData.description"
              label="Description"
              :error="errors.description"
              placeholder="Enter recipe description..."
              @update:error="errors.description = $event"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <MoreRecipesComp />
    <SubscribeCardComp />
    <FooterComp />
  </div>
</template>
<script lang="ts" setup>
import HomeHeader from '@/components/home/HomeHeader.vue'
import SubscribeCardComp from '@/components/home/SubscribeCardComp.vue'
import FooterComp from '@/components/home/FooterComp.vue'
import MoreRecipesComp from '@/components/home/MoreRecipesComp.vue'
import InputComp from '@/components/InputComp.vue'
import FileUploadIcon from '@/components/icons/svgs/FileUploadIcon.vue'
import { reactive, ref } from 'vue'
import { eventBus } from '@/utils/eventBus'

interface FormData {
  title: string
  description: string
  time: string
  type: string
  image: File | null
}

const formData = ref<FormData>({
  title: '',
  description: '',
  time: '',
  type: '',
  image: null,
})
const imagePreview = ref<string | null>(null)

const errors = reactive({}) as Record<keyof FormData, string>

const handleSubmit = () => {
  const fields = [
    { key: 'image', message: 'Image is required.' },
    { key: 'title', message: 'Title is required.' },
    { key: 'time', message: 'Time is required.' },
    { key: 'type', message: 'Type is required.' },
    { key: 'description', message: 'Description is required.' },
  ]

  let hasError = false

  for (const field of fields) {
    const key = field.key as keyof FormData
    if (!formData.value[key]) {
      errors[key] = field.message
      hasError = true
    } else {
      errors[key] = ''
    }
  }

  if (hasError) {
    return
  }

  eventBus.emit(formData.value)

  resetForm()
}

const resetForm = () => {
  formData.value = {
    title: '',
    description: '',
    image: null,
    time: '',
    type: '',
  }
  imagePreview.value = null
}

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

const resetImage = (event: MouseEvent) => {
  event.stopPropagation()

  formData.value.image = null
  imagePreview.value = null

  const inputElement = document.getElementById('file') as HTMLInputElement
  if (inputElement) {
    inputElement.value = ''
  }
}
</script>
<style lang="scss" scoped>
.contact-us-container {
  .contact-form {
    padding: 50px 80px;

    @media (max-width: 1023px) {
      padding: 30px;
    }

    h1 {
      color: #000;
      font-family: Inter;
      font-size: 64px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -2.56px;
      text-align: center;
      padding: 50px 0;

      @media (max-width: 1023px) {
        font-size: 50px;
        padding: 20px 0;
      }
    }

    .content {
      display: flex;

      .left {
        width: 35%;
        height: auto;
        border-radius: 30px;
        background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
        display: flex;
        justify-content: center;
        align-items: end;
        overflow: hidden;

        @media (max-width: 1023px) {
          display: none;
        }

        img {
          width: 95%;
          height: auto;
        }
      }

      .right {
        width: 65%;
        padding-left: 50px;

        @media (max-width: 1023px) {
          width: 100%;
          padding-left: 0;
        }

        form {
          width: 100%;

          .double {
            display: flex;
            justify-content: space-between;
            height: fit-content;

            .input-container {
              width: 48%;
            }
          }

          .image-label {
            color: rgba(0, 0, 0, 0.6);
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0.96px;
            text-transform: uppercase;
          }

          button {
            width: 180px;
            height: 64px;
            border-radius: 16px;
            background: #000;
            color: #e7f9fd;
            border: none;
            cursor: pointer;
            margin-top: 20px;

            &:hover {
              background: #1b1b1b;
            }
          }

          .error-message {
            font-size: 12px;
            font-style: italic;
            color: red;
            opacity: 0.8;
            padding-bottom: 10px;
          }

          .file-upload-form {
            width: fit-content;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 0;

            .file-upload-label input {
              display: none;
            }

            .file-upload-label svg {
              height: 50px;
              fill: rgb(82, 82, 82);
              margin-bottom: 20px;
            }
            .file-upload-label {
              cursor: pointer;
              background: #fff;
              padding: 20px 70px;
              border-radius: 40px;
              border: 2px dashed rgb(82, 82, 82);
              box-shadow: 0px 0px 200px -50px rgba(0, 0, 0, 0.719);
              opacity: 0.8;

              .image-preview {
                img {
                  height: 100px;
                  width: auto;
                }
              }

              .file-upload-design {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 5px;
                .browse-button {
                  background-color: rgb(82, 82, 82);
                  padding: 5px 15px;
                  border-radius: 10px;
                  color: white;
                  transition: all 0.3s;

                  &:hover {
                    background-color: rgb(14, 14, 14);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
