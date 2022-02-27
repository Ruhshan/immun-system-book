<template>
  <section id="gallery" class="text">
    <h2><strong>পড়ে দেখুন</strong></h2>
    <div style="; padding:10px">
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
            transform="right-22 shrink-8 down-2"
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
            transform="left-22 shrink-8 down-2"
            value="পরবর্তী"
          />
        </font-awesome-layers>
      </div>
    </flipbook>
    </div>
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
        require('../assets/samplePages/cover.png'),
        require('../assets/samplePages/page-1.jpg'),
        require('../assets/samplePages/page-2.jpg'),
        require('../assets/samplePages/page-3.jpg'),
        require('../assets/samplePages/page-4.jpg')
        
      ],
    };
  },
};
</script>

<style scoped>
.flipbook {
  width: 100%;
  height: 80vh;

}



.page-nav {
  display: flex;
  justify-content: space-around;
  padding-bottom: 16px;
}
</style>