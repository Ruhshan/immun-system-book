<template>
  <section id="gallery" class="text">
    <h2><strong>পড়ে দেখুন</strong></h2>
    <flipbook v-slot="flipbook" class="flipbook" :ambient="1" :pages="pages">
      <div class="page-nav">
        <font-awesome-layers full-width class="fa-3x">
          <font-awesome-icon
            class="ma-1 btn left"
            :class="{ disabled: !flipbook.canFlipLeft }"
            icon="chevron-circle-left"
            @click="flipbook.flipLeft"
          ></font-awesome-icon>
          <font-awesome-layers-text
            class="gray8"
            transform="right-20 shrink-8"
            value="পূর্ববর্তী"
          />
        </font-awesome-layers>

        <font-awesome-layers full-width class="fa-3x">
          <font-awesome-icon
            class="ma-1 btn right"
            :class="{ disabled: !flipbook.canFlipRight }"
            icon="chevron-circle-right"
            @click="flipbook.flipRight"
          ></font-awesome-icon>
          <font-awesome-layers-text
            class="gray8"
            transform="left-20 shrink-8"
            value="পরবর্তী"
          />
        </font-awesome-layers>
      </div>
    </flipbook>
  </section>
</template>

<script>
import Flipbook from "flipbook-vue";
export default {
  name: "Sample",
  components: { Flipbook },
  data() {
    return {
      pages: [
        null,
        "https://i.postimg.cc/dVWhSn8G/cover.png",
        "https://i.postimg.cc/nhSZBWJ9/page-1-1.jpg",
        "https://i.postimg.cc/LXdcVK05/page-2-1.jpg",
        "https://i.postimg.cc/ncdNPQw6/page-3-1.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.flipbook {
  width: 100%;
  height: 90vh;

  background-color: blanchedalmond;
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}

.page-nav {
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
}
</style>