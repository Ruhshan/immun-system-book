<template>
  <div id="shape1">
    <section class="intro home" id="banner">
      <div class="wrap">
        <nav class="animated fadeIn">
          <a href="#book" class="active"><strong>বই সম্পর্কে</strong></a>
          <a
            href="https://designsystemfoundations.com/design-systems-book/"
            class="buy"
            >Buy the book</a
          >
          <a
            href="https://designsystemfoundations.com/design-systems-book/"
            class="buy-mobile"
            >Buy now</a
          >
        </nav>
        <h1>
          <span class="a-wrap"><span class="l1">ইমিউন </span></span>
          <span class="a-wrap"><span class="l2">সিস্টেম </span></span>
          <!-- <span class="a-wrap"><span class="l3">Found—</span></span>
          <span class="a-wrap"><span class="l4">ations</span></span> -->
        </h1>
        <h2>শরীর যেভাবে রোগ প্রতিরোধ করে</h2>
        <h3>— <a href="#author">রুহশান আহমেদ</a></h3>
      </div>
      <div class="animated fadeIn"></div>

      <div v-for="n in 3" :key="n">
        <p style="display: none">{{ n }}</p>
        <immune-cell cellType="antibody" />
        <immune-cell cellType="bacteria" />
        <immune-cell cellType="virus" />
      </div>

      <div class="icon-scroll animated fadeIn"><span>স্ক্রল</span></div>
    </section>
  </div>
</template>

<script>
import ImmuneCell from "./ImmuneCell.vue";

export default {
  name: "ImmuneSystem",
  components: {
    ImmuneCell,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
