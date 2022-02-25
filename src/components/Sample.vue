<template>
  <section id="gallery" class="text">
    <h2><strong>পড়ে দেখুন</strong></h2>
    <flipbook
      v-slot="flipbook"
      class="flipbook"
      :ambient="1"
      :pages="[
        'https://i.postimg.cc/dVWhSn8G/cover.png',
        'https://i.postimg.cc/nhSZBWJ9/page-1-1.jpg',
        'https://i.postimg.cc/LXdcVK05/page-2-1.jpg',
        'https://i.postimg.cc/ncdNPQw6/page-3-1.jpg',
      ]"
    >
      <button @click="flipbook.flipLeft" style="padding-right: 20px">
        আগের পৃষ্ঠা
      </button>
      <button @click="flipbook.flipRight">পরের পৃষ্ঠা</button>
    </flipbook>
  </section>
</template>

<script>
import Flipbook from "flipbook-vue";
export default {
  name: "Sample",
  components: { Flipbook },
};
</script>

<style scoped>
.flipbook {
  width: 100%;
  height: 90vh;

  background-color: blanchedalmond;
}
</style>

https://i.postimg.cc/nhSZBWJ9/page-1-1.jpg
https://i.postimg.cc/LXdcVK05/page-2-1.jpg
https://i.postimg.cc/ncdNPQw6/page-3-1.jpg