<template>
  <section id="chapters" class="text chapters">
    <div class="wrap">
      <h2>সূচীপত্র</h2>


      <div class="chapter" v-for="chapter in chapters" :key="chapter.id">
        <h3><span>{{chapter.page}}</span><a href="">{{chapter.title}}</a></h3>
        <p style="font-style: normal !important">
          {{chapter.summary}}
        </p>
        <p></p>
      </div>


    </div>
  </section>
</template>

<script>
export default {
  name: "Chapters",
  data() {
    return {
      chapters: [
        {
          id: 1,
          title: "ভূমিকা",
          summary:
            "বইটির উদ্দেশ্য, কেমন ইমিউন সিস্টেম সম্পর্কে জানা দরকার, যা জানতে পারবেন, কৃতজ্ঞতা প্রকাশ",
          page: "১০",
        },
        {
          id: 1,
          title: "আমাদের অনাক্রম্য ব্যবস্থা",
          summary:
            "বইটির উদ্দেশ্য, কেমন ইমিউন সিস্টেম সম্পর্কে জানা দরকার, যা জানতে পারবেন, কৃতজ্ঞতা প্রকাশ",
          page: "১১",
        },
      ],
    };
  },
};
</script>