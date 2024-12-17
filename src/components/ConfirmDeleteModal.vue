<template>
  <div v-if="isVisible" className="modal-delete-overlay" @click="closeModal">
    <div className="card">
      <div className="header">
        <div className="image">
          <WarningIcon />
        </div>
        <div className="content">
          <span className="title">{{ $t('admin.confirm-delete') }}</span>
          <p className="message">
            {{ $t('admin.confirm-delete-text') }}
          </p>
        </div>
        <div className="actions">
          <button className="cancel" type="button" @click="closeModal">
            {{ $t('admin.cancel') }}
          </button>
          <button className="desactivate" type="button" @click="confirmDelete">
            {{ $t('admin.delete') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import WarningIcon from './icons/svgs/WarningIcon.vue'

const emit = defineEmits<{
  (event: 'confirm-delete'): void
  (event: 'close-modal'): void
}>()

defineProps<{
  isVisible: boolean
}>()

const closeModal = () => {
  emit('close-modal')
}

const confirmDelete = () => {
  emit('confirm-delete')
  emit('close-modal')
}
</script>
<style lang="scss" scoped>
.modal-delete-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    overflow: hidden;
    position: relative;
    background-color: #ffffff;
    text-align: left;
    border-radius: 0.5rem;
    max-width: 290px;
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);

    .header {
      padding: 1.25rem 1rem 1rem 1rem;
      background-color: #ffffff;

      .image {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        background-color: #fee2e2;
        flex-shrink: 0;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        border-radius: 9999px;

        svg {
          color: #dc2626;
          width: 1.5rem;
          height: 1.5rem;
        }
      }

      .content {
        margin-top: 0.75rem;
        text-align: center;

        .title {
          color: #111827;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5rem;
        }

        .message {
          margin-top: 0.5rem;
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }

      .actions {
        margin: 0.75rem 1rem;
        display: flex;
        justify-content: space-evenly;

        .desactivate {
          padding: 0.5rem 1rem;
          background-color: #dc2626;
          color: #ffffff;
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 500;
          justify-content: center;
          border-radius: 0.375rem;
          border-width: 1px;
          border-color: transparent;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          cursor: pointer;

          &:hover {
            background-color: #b61212;
          }
        }

        .cancel {
          padding: 0.5rem 1rem;
          background-color: #ffffff;
          color: #374151;
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 500;
          justify-content: center;
          border-radius: 0.375rem;
          border: 1px solid #d1d5db;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          cursor: pointer;

          &:hover {
            background-color: #d4d4d4;
          }
        }
      }
    }
  }
}
</style>
