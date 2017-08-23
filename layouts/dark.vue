<template>
  <div class="dark">
    <nuxt/>
  </div>
</template>

<style>
  body {
    overflow: hidden;
  }
  .dark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(0,0,0,0.5);
    color: white;
    padding: 10px;
  }
  .dark a {
    color: white;
  }
</style>
