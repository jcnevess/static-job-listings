<script setup>
import data from '@/assets/data/data.json'

import JobItemComponent from './components/JobItemComponent.vue'
import SearchboxComponent from './components/SearchboxComponent.vue'
import { ref, watch } from 'vue'

const jobList = ref(data)
let filteredJobList = ref(data)
const searchTerms = ref([]) //Set would be better but I couldnt make it work

watch(searchTerms, filterJobList)

function addTerm(searchTerm) {
  if (searchTerms.value.findIndex((term) => term === searchTerm) < 0) {
    searchTerms.value = [...searchTerms.value, searchTerm]
  }
}

function deleteOneTerm(searchTerm) {
  searchTerms.value = searchTerms.value.filter((term) => term !== searchTerm)
}

function deleteAllTerms() {
  searchTerms.value = []
}

function filterJobList() {
  filteredJobList.value = jobList.value.filter((job) => {
    let keywordsSet = new Set([job.role, job.level, ...job.languages, ...job.tools])
    let searchTermsSet = new Set([...searchTerms.value])

    return searchTermsSet.isSubsetOf(keywordsSet)
  })
}
</script>

<template>
  <div class="outer-container">
    <div class="container-header"></div>
    <div class="inner-container">
      <SearchboxComponent
        :searchTerms
        @delete-one="deleteOneTerm"
        @delete-all="deleteAllTerms"
        :class="{ invisible: searchTerms.length <= 0 }"
      ></SearchboxComponent>
      <div class="list">
        <JobItemComponent
          v-for="job in filteredJobList"
          :key="job.id"
          :job
          @add-term="addTerm"
        ></JobItemComponent>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  background-color: var(--color-bg-light-grayish);
  position: relative;
  min-height: 100dvh;
}

.container-header {
  background-color: var(--color-dessatured-dark-cyan);
  background-image: url('assets/images/bg-header-mobile.svg');
  background-size: cover;
  height: 140px;
}

.inner-container {
  position: relative;
  top: -50px;
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
  padding: 1rem;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
}

.invisible {
  visibility: hidden;
}

@media (min-width: 768px) {
  .outer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container-header {
    background-image: url('assets/images/bg-header-desktop.svg');
    width: 100%;
  }

  .inner-container {
    width: 80%;
    max-width: 1024px;
  }
}
</style>
