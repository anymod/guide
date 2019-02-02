<template>
  <span class="sandbox-inline" @click="launch">
    <i class="material-icons">edit</i>
  </span>
</template>

<script>
export default {
  methods: {
    launch() {
      Anymod.Event && Anymod.Event.emit("sandbox:overlay:open");
    }
  }
};
</script>

<style>
.sandbox-inline {
  cursor: pointer;
  display: inline-block;
  box-shadow: 0 0 5px #fff;
  box-sizing: content-box;
  background: #fff;
  transition: all 0.4s;
  margin: 0 3px 3px 0;
  width: 26px;
  height: 26px;
  text-align: center;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #f2f2f2;
  vertical-align: middle;
  line-height: 20px;
}
.sandbox-inline:hover {
  box-shadow: 0 0 10px #009bff;
}
</style>

