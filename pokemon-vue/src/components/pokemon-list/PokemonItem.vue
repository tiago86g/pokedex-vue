<template>
  <div :class="$style['box']">
    <img
      :alt="name"
      loading="lazy"
      :src="computedImage"
      :class="$style['image']"
    />
    <p :class="$style['text']">{{ name }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps({
  id: {
    type: String,
    required: false,
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const computedId = computed(() => props.id);
const computedImage = computed(
  () =>
    props.image ??
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${computedId.value}.svg`
);
</script>

<style module>
.box {
  height: 200px;
  background-color: lightblue;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 25px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.image {
  width: 100%;
  height: 50%;
  aspect-ratio: 1;
}

.text {
  padding-top: 20px;
  font-weight: bold;
}
</style>
