<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "mode"],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #610027e5;
  border: 1px solid #610027e5;
}

button:hover,
button:active {
  background-color: #610027f9;
  border-color: #610027f9;
}

.flat {
  background-color: transparent;
  color: #002461dc;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #f0f0f0;
}
</style>
