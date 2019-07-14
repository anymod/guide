<template>
  <span data-sandbox></span>
</template>

<script>
export default {
  methods: {
    openSandbox() {
      AnyMod.Event && AnyMod.Event.emit("sandbox:sidebar:open");
    }
  },
  mounted() {
    AnyMod.ready(() => {
      this.openSandbox();
      AnyMod.Event.on("sandbox:mounted", this.openSandbox);
    });
  },
  destroyed() {
    if (!AnyMod.Event) return;
    AnyMod.Event.emit("sandbox:close");
    AnyMod.Event.off("sandbox:mounted", this.openSandbox);
  }
};
</script>

