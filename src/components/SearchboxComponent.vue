<script setup>
const props = defineProps(['searchTerms'])
const emit = defineEmits(['deleteOne', 'deleteAll'])
</script>

<template>
  <div class="searchbox shadowed-box">
    <div class="pills">
      <div class="pill" v-for="term in props.searchTerms" :key="term">
        <div class="pill-title">{{ term }}</div>
        <div class="pill-close" @click.once="emit('deleteOne', term)">&#10006;</div>
      </div>
    </div>
    <div class="clear" @click="emit('deleteAll')">clear</div>
  </div>
</template>

<style scoped>
.searchbox {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25%;
  padding: 1rem;
}

.shadowed-box {
  border-radius: 5px;
  box-shadow: 0px 4px 20px -10px var(--color-dessatured-dark-cyan);
  background-color: white;
}

.pills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.pill {
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border-radius: 5px;
}

.pill-title {
  color: var(--color-dessatured-dark-cyan);
  font-weight: bold;
  background-color: var(--color-light-grayish-cyan);
  padding: 0.5rem;
}

.pill-close {
  color: white;
  background-color: var(--color-dessatured-dark-cyan);
  padding: 0.25rem 0.5rem;
}

.clear {
  text-align: center;
  font-weight: bold;
  color: var(--color-dark-grayish-cyan);
  text-transform: capitalize;
  padding: 0.5rem;
}
</style>
