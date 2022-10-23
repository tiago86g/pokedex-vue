<template>
  <div :class="$style['box']">
    <img
      :alt="name"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      :class="$style['image']"
    />
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokemonItem',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="postcss" module>
.box {
  height: 200px;
  background-color: greenyellow;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 2px 25px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.image {
  width: 50%;
  height: 50%;
}
</style>
