<template>
  <span data-sandbox></span>
</template>

<script>
  export default {
    methods: {
      openSandbox() {
        Anymod.Event && Anymod.Event.emit('sandbox:sidebar:open')
      }
    },
    mounted() {
      Anymod.ready(() => {
        this.openSandbox()
        Anymod.Event.on('sandbox:mounted', this.openSandbox)
      })
    },
    destroyed() {
      if (!Anymod.Event) return
      Anymod.Event.emit('sandbox:close')
      Anymod.Event.off('sandbox:mounted', this.openSandbox)
    }
  }
</script>

