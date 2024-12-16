<template>
  <div class="manage-users-container">
    <div class="side-bar">
      <h3>{{ $t('admin.advanced-search') }}</h3>
      <hr />
      <nav>
        <ul>
          <li v-for="(item, index) in sidebarItems" :key="index" @click="openModal(item.key)">
            <p>{{ $t('admin.' + item.title) }}</p>
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <div class="modal-search" ref="modalRef">
            <SearchModal
              :isVisible="isModalVisible"
              :title="modalTitle"
              :type="modalType"
              :searchTermText="searchTermText"
              :searchTermCode="searchTermCode"
              :searchTermStartDate="searchTermStartDate"
              :searchTermEndDate="searchTermEndDate"
              @submit="handleModalSubmit"
              @cancel="handleModalCancel"
            />
          </div>
        </ul>
      </nav>
    </div>
    <div class="content">
      <div class="title">
        <div class="left">
          <i class="fa-solid fa-user-group"></i>
          <p>{{ $t('admin.manage-users') }}</p>
        </div>
        <ChangeLanguage />
      </div>

      <div class="search-term">
        <p v-if="searchTermText">
          {{ $t('admin.name') }}: <span>{{ searchTermText }}</span>
          <i class="fa-solid fa-xmark" @click="clearValue('text')"></i>
        </p>
        <p v-if="searchTermCode">
          {{ $t('admin.code') }}: <span>{{ searchTermCode }}</span>
          <i class="fa-solid fa-xmark" @click="clearValue('code')"></i>
        </p>
        <p v-if="searchTermStartDate && searchTermEndDate">
          {{ $t('admin.from') }}: <span>{{ formatDate(searchTermStartDate) }}</span>
          {{ $t('admin.to') }}
          <span>{{ formatDate(searchTermEndDate) }}</span>
          <i class="fa-solid fa-xmark" @click="clearValue('range')"></i>
        </p>
      </div>

      <div class="btn-add-new">
        <button class="btn btn-more" @click="toggleActionsListOpen"><p>...</p></button>
        <button class="btn" @click="openUserModal"><i class="fa-solid fa-plus"></i></button>
        <div v-show="isActionsListOpen" class="actions-list" ref="modalActionsRef">
          <button @click="openDeleteModal" :disabled="itemsToDelete.length === 0">
            {{ $t('admin.delete') }}<i class="fa-solid fa-delete-left"></i>
          </button>
          <button @click="handleOpenEditModal" :disabled="itemsToDelete.length !== 1">
            {{ $t('admin.edit') }}<i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </div>

      <ConfirmDeleteModal
        :isVisible="isModalDeleteVisible"
        @confirm-delete="handleDeleteSelectedItems"
        @close-modal="closeDeleteModal"
      />

      <UserModal
        :isOpen="isModalOpen"
        :modalTitle="$t('admin.modal-user')"
        :itemToEdit="itemToEdit"
        @close="closeModal"
        @save="saveUserData"
      />

      <div class="board">
        <TableComp
          :headers="headers"
          :items="filteredUsersList"
          :tableKeys="tableKeys"
          @update:selectedItems="handleSelectedItems"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import SearchModal from '@/components/SearchModal.vue'
import TableComp from '@/components/TableComp.vue'
import UserModal from '@/components/UserModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue'
import moment from 'moment'
import ChangeLanguage from '@/components/ChangeLanguage.vue'

const formatDate = (date: string): string => {
  return moment(date).format('DD-MM-YYYY')
}

const isModalOpen = ref(false)
const isActionsListOpen = ref(false)
const modalRef = ref<HTMLElement | null>(null)
const modalActionsRef = ref<HTMLElement | null>(null)

const headers = ['code', 'name', 'image', 'joining-date', 'information']
const tableKeys = ['code', 'name', 'image', 'joiningDate', 'information']

interface SidebarItem {
  key: 'code' | 'text' | 'range'
  title: string
}

const sidebarItems: SidebarItem[] = [
  { key: 'code', title: 'employee-code' },
  { key: 'text', title: 'employee-name' },
  { key: 'range', title: 'joining-date' },
]

interface User {
  code: string
  name: string
  image: string
  joiningDate: string
  information: string
}

const usersList = ref<User[]>([
  {
    code: 'T007',
    name: 'Pham Duc Tinh',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2017-03-01',
    information: 'So fking good',
  },
  {
    code: 'T019',
    name: 'ThanhNC',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2017-09-10',
    information: 'ga',
  },
  {
    code: 'T032',
    name: 'Nguyen Minh Anh',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2018-01-15',
    information: 'Excellent worker',
  },
  {
    code: 'T045',
    name: 'Le Quang Hieu',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2019-06-22',
    information: 'Good performance',
  },
  {
    code: 'T051',
    name: 'Tran Thi Lan',
    image: '/src/components/icons/contact-us.png',
    joiningDate: '2020-12-05',
    information: 'Hard working',
  },
])

const itemToEdit = ref<User | null>(null)

const isModalVisible = ref(false)
const isModalDeleteVisible = ref(false)
const modalType = ref<'text' | 'range' | 'code'>('text')
const modalTitle = ref('')
interface RangeValue {
  start: string
  end: string
}

const searchTermText = ref('')
const searchTermCode = ref('')
const searchTermStartDate = ref('')
const searchTermEndDate = ref('')

type SearchPayload = { searchText: string } | { searchCode: string } | { searchRange: RangeValue }

const openModal = (type: 'text' | 'range' | 'code') => {
  modalType.value = type
  if (type === 'text') {
    modalTitle.value = 'employee-name'
  }
  if (type === 'range') {
    modalTitle.value = 'select-date-range'
  }
  if (type === 'code') {
    modalTitle.value = 'employee-code'
  }
  if (!isModalVisible.value) {
    isModalVisible.value = true
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClick)
    }, 0)
  } else {
    handleModalCancel()
  }
}

const toggleActionsListOpen = () => {
  if (!isActionsListOpen.value) {
    isActionsListOpen.value = true
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClick)
    }, 0)
  } else {
    isActionsListOpen.value = false
    document.removeEventListener('click', handleOutsideClick)
  }
}

const handleModalSubmit = (payload: SearchPayload) => {
  if ('searchRange' in payload) {
    searchTermStartDate.value = payload.searchRange.start
    searchTermEndDate.value = payload.searchRange.end
  }
  if ('searchText' in payload) {
    searchTermText.value = payload.searchText
  }
  if ('searchCode' in payload) {
    searchTermCode.value = payload.searchCode
  }
  isModalVisible.value = false
}

const filteredUsersList = computed(() => {
  return usersList.value.filter((user) => {
    const matchText = searchTermText.value
      ? user.name.toLowerCase().includes(searchTermText.value.toLowerCase())
      : true

    const matchCode = searchTermCode.value
      ? user.code.toLowerCase().includes(searchTermCode.value.toLowerCase())
      : true

    const matchDateRange =
      searchTermStartDate.value && searchTermEndDate.value
        ? new Date(user.joiningDate) >= new Date(searchTermStartDate.value) &&
          new Date(user.joiningDate) <= new Date(searchTermEndDate.value)
        : true

    return matchText && matchCode && matchDateRange
  })
})

const itemsToDelete = ref<string[]>([])

const openDeleteModal = () => {
  isModalDeleteVisible.value = true
}

const closeDeleteModal = () => {
  isModalDeleteVisible.value = false
}

const handleDeleteSelectedItems = () => {
  if (itemsToDelete.value.length > 0) {
    usersList.value = usersList.value.filter((user) => !itemsToDelete.value.includes(user.code))
    itemsToDelete.value = []
    handleSelectedItems([])
    isActionsListOpen.value = false
    isModalDeleteVisible.value = false
  }
}

const handleModalCancel = () => {
  isModalVisible.value = false
  document.removeEventListener('click', handleOutsideClick)
}
const clearValue = (type: 'text' | 'range' | 'code') => {
  if (type === 'text') {
    searchTermText.value = ''
  }
  if (type === 'code') {
    searchTermCode.value = ''
  }
  if (type === 'range') {
    searchTermStartDate.value = ''
    searchTermEndDate.value = ''
  }
}

const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (modalRef.value && !modalRef.value.contains(target)) {
    handleModalCancel()
  }
  if (modalActionsRef.value && !modalActionsRef.value.contains(target)) {
    isActionsListOpen.value = false
    document.removeEventListener('click', handleOutsideClick)
  }
}

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
})

const openUserModal = () => {
  isModalOpen.value = true
  itemsToDelete.value = []
}

const closeModal = () => {
  isModalOpen.value = false
}

const saveUserData = (data: User) => {
  if (data) {
    const imageUrl: string =
      data.image && typeof data.image === 'object' && 'name' in data.image
        ? URL.createObjectURL(data.image)
        : typeof data.image === 'string'
          ? data.image
          : ''

    if (itemToEdit.value) {
      const index = usersList.value.findIndex((user) => user.code === data.code)
      if (index !== -1) {
        usersList.value[index] = {
          ...usersList.value[index],
          ...data,
          image: imageUrl,
        }
      }
    } else {
      usersList.value.push({
        code: data.code,
        image: imageUrl,
        name: data.name,
        joiningDate: data.joiningDate,
        information: data.information,
      })
    }
    closeModal()
    itemToEdit.value = null
  }
}

const handleSelectedItems = (selectedItems: string[]) => {
  itemsToDelete.value = selectedItems
  console.log(itemsToDelete.value)
}

const handleOpenEditModal = () => {
  if (itemsToDelete.value.length === 1) {
    isModalOpen.value = true
    isActionsListOpen.value = false
    const userCode = itemsToDelete.value[0]
    const filteredUser = usersList.value.filter((user) => user.code === userCode)
    if (itemsToDelete.value.length === 1) {
      itemToEdit.value = filteredUser[0]
    }
  }
}
</script>
<style lang="scss" scoped>
.manage-users-container {
  width: 100%;
  height: 100%;
  display: flex;
  font-family: Inter;

  .side-bar {
    width: 240px;
    height: 100vh;
    background: #f8f8f8;
    color: #666;
    padding: 10px;

    h3 {
      text-align: center;
      padding-top: 10px;
    }

    hr {
      margin: 20px 0;
    }

    nav {
      ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        position: relative;

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          cursor: pointer;

          &:hover {
            i,
            p {
              color: #2a91cd;
            }
          }

          &.active {
            color: #2a91cd;
          }
        }

        .modal-search {
          width: auto;
          height: auto;
          position: absolute;
          top: 0;
          left: calc(100% + 10px);
          z-index: 10;
        }
      }
    }
  }

  .content {
    width: calc(100% - 240px);
    padding: 50px 80px;
    color: #333;

    .title {
      display: flex;
      justify-content: space-between;

      .left {
        display: flex;
        gap: 15px;
        align-items: center;
      }

      i {
        font-size: 25px;
      }

      p {
        font-size: 20px;
      }
    }

    .search-term {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin: 30px 0;

      p {
        span {
          font-size: 16px;
          color: #627d98;
          text-decoration: underline;
          padding: 30px 5px;
        }

        i {
          cursor: pointer;
          color: #627d98;
          transition: all 0.3s ease;

          &:hover {
            transform: scale(1.02);
          }
        }
      }
    }

    .btn-add-new {
      display: flex;
      justify-content: flex-end;
      gap: 15px;
      position: relative;

      .actions-list {
        width: 200px;
        height: auto;
        padding: 20px 0;
        border-radius: 15px;
        background: #fff;
        box-shadow: 0 1px 4px hsla(0, 0%, 40%, 0.32);
        position: absolute;
        top: 130%;
        right: 45px;

        button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px 20px;
          width: 100%;
          border: none;
          background: transparent;
          gap: 15px;
          cursor: pointer;
          margin: 5px 0;

          .fa-delete-left {
            color: rgb(248, 34, 34);
          }

          .fa-pen-to-square {
            color: #fdb415;
          }

          &:hover {
            background: #627d98;
            color: #f8f8f8;
          }
        }
      }

      .btn {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: none;
        background: rgb(98, 125, 152);
        color: #f8f8f8;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        cursor: pointer;

        &.btn-more {
          background: rgb(242, 242, 242);
          color: #333;
        }

        p {
          padding-bottom: 8px;
        }
      }
    }

    .board {
      width: 100%;
    }
  }
}
</style>
