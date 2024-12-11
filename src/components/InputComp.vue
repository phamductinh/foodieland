<template>
  <div class="input-container">
    <label v-if="label" class="input-label">{{ label }}</label>
    <input
      class="input-field"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :error="error"
      @input="onInput"
      :class="{ 'input-error': error }"
    />
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue', 'update:error'])
defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Enter text...',
  },
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  error: {
    type: String,
    default: '',
  },
})

const onInput = (event: Event) => {
  const inputElement = event.target as HTMLInputElement
  const value = inputElement?.value
  if (value !== undefined) {
    emit('update:modelValue', value)
    emit('update:error', '')
  }
}
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 10px 0;

  .input-label {
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.96px;
    text-transform: uppercase;
  }

  .input-field {
    padding: 20px;
    font-size: 14px;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.3s;
    opacity: 0.8;
  }

  .input-field.input-error {
    border-color: red;
  }

  .error-message {
    font-size: 12px;
    font-style: italic;
    color: red;
    opacity: 0.8;
  }
}
</style>
