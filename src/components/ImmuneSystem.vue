<template>
  <div id="shape1">
    <section class="intro home" id="banner">
      <div class="wrap">
        <nav class="animated fadeIn">
          <a href="#book" class="active"><strong>বই সম্পর্কে</strong></a>
          <a
            href="#"
            class="buy"
            style="z-index:300"
            ><strong>সংগ্রহ করতে</strong></a
          >
          <a
            href="#"
            class="buy-mobile"
            ><strong>সংগ্রহ করতে</strong></a
          >
        </nav>
        <h1>
          <span class="a-wrap"><span class="l1">ইমিউন </span></span>
          <span class="a-wrap"><span class="l2">সিস্টেম </span></span>
        </h1>
        <h2>শরীর যেভাবে রোগ প্রতিরোধ করে</h2>
        <h3>— <a href="#author">রুহশান আহমেদ</a></h3>
      </div>
      <div class="animated fadeIn"></div>

      <animations/>


      <div class="icon-scroll animated fadeIn"><span>স্ক্রল</span></div>
    </section>

    <about-n-review />
    <sample />
    <chapters />
  </div>
</template>

<script>
import AboutNReview from './AboutNReview.vue';
import Animations from './Animations.vue';
import Sample from './Sample.vue';
import Chapters from './Chapters.vue';

export default {
  name: "ImmuneSystem",
  components: {
    Animations,
    AboutNReview,
    Sample,
    Chapters
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
