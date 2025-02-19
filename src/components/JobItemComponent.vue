<script setup>
import { computed } from 'vue'

const { job } = defineProps(['job'])
const emit = defineEmits(['addTerm'])

const jobLogo = computed(() => new URL(`/src/assets/images/${job.logo}`, import.meta.url).href)
</script>

<template>
  <div class="card-job shadowed-box" :class="{ 'card-featured': job.featured }">
    <div class="card-wrapper">
      <div class="card-photo">
        <img :src="jobLogo" :alt="job.company" />
      </div>
      <div class="card-main">
        <div class="card-header">
          <div class="card-company">{{ job.company }}</div>
          <div class="card-badges">
            <div class="card-badge badge-new" v-show="job.new">new!</div>
            <div class="card-badge badge-featured" v-show="job.featured">featured</div>
          </div>
        </div>
        <div class="card-position">{{ job.position }}</div>
        <div class="card-infos">
          <div class="card-info">{{ job.postedAt }}</div>
          &bull;
          <div class="card-info">{{ job.contract }}</div>
          &bull;
          <div class="card-info">{{ job.location }}</div>
        </div>
      </div>
    </div>

    <div class="card-tags">
      <div class="card-tag" @click="emit('addTerm', job.role)">{{ job.role }}</div>
      <div class="card-tag" @click="emit('addTerm', job.level)">{{ job.level }}</div>
      <div
        class="card-tag"
        v-for="language in job.languages"
        :key="language"
        @click="emit('addTerm', language)"
      >
        {{ language }}
      </div>
      <div class="card-tag" v-for="tool in job.tools" :key="tool" @click="emit('addTerm', tool)">
        {{ tool }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadowed-box {
  border-radius: 5px;
  box-shadow: 0px 4px 20px -10px var(--color-dessatured-dark-cyan);
  background-color: white;
}

.card-job {
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  padding: 2rem 1rem 1.5rem;
}

.card-featured {
  border-left: 5px solid var(--color-dessatured-dark-cyan);
}

.card-photo {
  position: absolute;
  top: -25px;
}

.card-photo img {
  width: 50px;
}

.card-main {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-header {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.card-company {
  text-transform: capitalize;
  color: var(--color-dessatured-dark-cyan);
}

.card-badges {
  display: flex;
  gap: 0.5rem;
}

.card-badge {
  color: white;
  text-transform: uppercase;
  border-radius: 10px;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
}

.badge-new {
  background-color: var(--color-dessatured-dark-cyan);
}

.badge-featured {
  background-color: var(--color-darkest-grayish-cyan);
}

.card-position {
  text-transform: capitalize;
  color: var(--color-darkest-grayish-cyan);
  cursor: pointer;
}

.card-position:hover,
.card-position:active {
  color: var(--color-dessatured-dark-cyan);
}

.card-infos {
  color: var(--color-dark-grayish-cyan);
  font-weight: 500;
  display: flex;
  gap: 0.5rem;
}

.card-tags {
  display: flex;
  gap: 1rem;
  border-top: 1px solid var(--color-dark-grayish-cyan);
  padding-top: 0.75rem;
  flex-wrap: wrap;
}

.card-tag {
  color: var(--color-dessatured-dark-cyan);
  background-color: var(--color-light-grayish-cyan);
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
}

.card-tag:hover,
.card-tag:active {
  background-color: var(--color-dessatured-dark-cyan);
  color: white;
}

@media (min-width: 768px) {
  .card-job {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .card-wrapper {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .card-photo {
    position: relative;
    top: unset;
  }

  .card-tags {
    border: none;
    padding-top: 0;
    justify-content: flex-end;
  }
}
</style>
