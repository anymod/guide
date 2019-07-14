<template>
  <div :id="'anymod-' + modKey"></div>
</template>

<script>
export default {
  props: ["modKey"],
  mounted() {
    if (window.AnyMod) AnyMod.ready(() => AnyMod.render());
  }
};
</script>
