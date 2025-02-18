<script setup>
import data from '@/assets/data/data.json'

import JobItemComponent from './components/JobItemComponent.vue'
import SearchboxComponent from './components/SearchboxComponent.vue'
import { reactive, ref } from 'vue'

const jobList = reactive(data)
const searchTerms = ref(new Set())

/*const filteredJobList = reactive(data)

watch(searchTerms, filterJobList)*/

function addSearchTerm(searchTerm) {
  searchTerms.value.add(searchTerm)
}

function deleteOne(searchTerm) {
  searchTerms.value.delete(searchTerm)
}

function deleteAll() {
  searchTerms.value = new Set()
}

/*function filterJobList() {
  filteredJobList.value = jobList.filter(
    (job) =>
      new Set([job.role, job.level, ...job.languages, ...job.tools]).intersection(searchTerms.value)
        .length > 0,
  )
}*/
</script>

<template>
  <div class="container">
    <SearchboxComponent
      :searchTerms
      @delete-one="deleteOne"
      @delete-all="deleteAll"
    ></SearchboxComponent>
    <div class="list">
      <JobItemComponent
        v-for="job in jobList"
        :key="job.id"
        :job
        @add-term="(term) => addSearchTerm(term)"
      ></JobItemComponent>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--color-bg-light-grayish);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
</style>
