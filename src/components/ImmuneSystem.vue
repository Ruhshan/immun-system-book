<template>
  <div id="shape1">
    <section class="intro home" id="banner" v-cloak>
      <div class="wrap">
        <nav class="animated fadeIn">
          <a href="#book" class="active"><strong>বই সম্পর্কে</strong></a>
          <a href="#" class="buy" style="z-index: 300"
            ><strong>সংগ্রহ করতে</strong></a
          >
          <a href="#" class="buy-mobile"><strong>সংগ্রহ করতে</strong></a>
        </nav>
        <h1>
          <span class="a-wrap"><span class="l1 tstyle">ইমিউন </span></span>
          <span class="a-wrap"><span class="l2 tstyle">সিস্টেম </span></span>
        </h1>
        <h2>শরীর যেভাবে রোগ প্রতিরোধ করে</h2>
        <h3>— <a href="#author">রুহশান আহমেদ</a></h3>
      </div>
      <div class="animated fadeIn"></div>

      <animations />

      <div
        class="icon-scroll animated"
        :class="{ fadeIn: showScroll, fadeOut: !showScroll }"
      >
        <span id="scrollPointer">স্ক্রল</span>
      </div>
    </section>

    <about-n-review />
    <sample />
    <chapters />
    <about-author />
    <div class="bar animated" v-show="!showScroll">
      <a href="" class="button"><strong>সংগ্রহ করতে</strong></a>
    </div>
  </div>
</template>

<script>
import AboutNReview from "./AboutNReview.vue";
import Animations from "./Animations.vue";
import Sample from "./Sample.vue";
import Chapters from "./Chapters.vue";
import AboutAuthor from "./AboutAuthor.vue";

export default {
  name: "ImmuneSystem",
  components: {
    Animations,
    AboutNReview,
    Sample,
    Chapters,
    AboutAuthor,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    var initialScrollPointerPosition = this.getOffset(
      document.getElementById("scrollPointer")
    );
    var bannerSize = document.getElementById("banner").getBoundingClientRect();

    var delta = initialScrollPointerPosition.top - bannerSize.bottom;
    if (delta > 0) {
      this.delta = delta;
    }
  },
  data() {
    return {
      showScroll: true,
      initialScrollPointerPositionDelta: 0,
    };
  },
  methods: {
    handleScroll: function () {
      var bannerSize = document
        .getElementById("banner")
        .getBoundingClientRect();

      var scrollPointerPosition = this.getOffset(
        document.getElementById("scrollPointer")
      );

      if (scrollPointerPosition.top > bannerSize.bottom+ this.delta+100) {
        this.showScroll = false;
      } else {
        this.showScroll = true;
      }
    },
    getOffset: function (el) {
      var _x = 0;
      var _y = 0;
      while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        // chrome/safari
        // if ($.browser.webkit) {
        //   el = el.parentNode;
        // } else {
        //   // firefox/IE
        //   el = el.offsetParent;
        // }
        el = el.offsetParent;
      }
      return { top: _y, left: _x };
    },
  },
};
</script>

<style scoped>
.tstyle {
  font-family: "Niladri", Helvetica, Arial;
}
</style>