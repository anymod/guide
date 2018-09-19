<template>
  <div :id="'anymod-' + modKey"></div>
</template>

<script>
  export default {
    props: ['modKey'],
    mounted() {
      if (window.Anymod) Anymod.render()
    }
  }
</script>
