<template>
  <section id="author" class="text author">
    <div class="wrap">
      <h2><strong>লেখক পরিচিতি</strong></h2>
      <p style="text-align: justify">
        রুহশান আহমেদের জন্ম ১৯৯২ সালে ঢাকায়। বাবার চাকরির সূত্রে শৈশব এবং কৈশোর
        কেটেছে দেশের বিভিন্ন প্রান্তে। ছোটবেলা থেকেই পারিবারিক বইয়ের সংগ্রহ দেখে
        পড়ার প্রতি আগ্রহের সৃষ্টি, সে আগ্রহ একসময় লেখার দিকেও সংক্রমিত হয়।
        কৈশোরে লেখা অনেকগুলো ছড়া স্যাটায়ার ম্যাগাজিন "উন্মাদ" এর বিভিন্ন সংখ্যায়
        প্রকাশিত হবার পর তার আত্নবিশ্বাশ আরও বেড়ে যায়।
      </p>
      <p style="text-align: justify">
        প্রাতিষ্ঠানিক শিক্ষা শেষ করেন শাবিপ্রবির জিন প্রকৌশল ও জৈব প্রযুক্তি
        বিভাগে। পড়ালেখার পাশাপাশি বিজ্ঞান সংগঠন "সাস্ট সায়েন্স অ্যারেনা"র সঙ্গে
        যুক্ত ছিলেন। সমমনা মানুষদের সাথে থেকে বিজ্ঞান নিয়ে লেখার উদ্দীপনা পান।
        তখন থেকেই নিয়মিত লিখতে শুরু করেছেন বিজ্ঞান ব্লগ এবং জিরো টু ইনফিনিটি
        পত্রিকায়। এছাড়াও বায়ো-বায়ো-১ ফাউন্ডেশন এবং ক্যানসি রিসার্চ ইন্সটিটিউটের
        সাথে থেকে তার বেশ কিছু গবেষণা প্রবন্ধ আন্তর্জাতিক জার্নালে প্রকাশিত
        হয়েছে।
      </p>
      <p style="text-align: justify">
        পেশাগত জীবনে একটি বেসরকারি প্রতিষ্ঠানে সিনিয়র সফটওয়ার ইঞ্জিনিয়ার হিসেবে
        কাজ করছেন।
      </p>
      <ul>
        <li style="cursor:pointer">
          <img
            :src="require('../assets/bblog.svg')"
            class="bblog-icon"
            @click="openLink('https://bigganblog.org/author/ruhshan/')"
          />
        </li>
        <li style="cursor:pointer">
          <font-awesome-icon
            :icon="['fab', 'researchgate']"
            size="3x"
            @click="openLink('https://www.researchgate.net/profile/Ruhshan-Abir-2')"
          ></font-awesome-icon>
        </li>

        <li style="cursor:pointer">
          <font-awesome-icon
            :icon="['fab', 'linkedin']"
            size="3x"
            @click="openLink('https://www.linkedin.com/in/ruhshan-ahmed/')"
          ></font-awesome-icon>
        </li>
        <li style="cursor:pointer">
          <font-awesome-icon
            :icon="['fab', 'medium']"
            size="3x"
            @click="openLink('https://medium.com/@ruhshan-ahmed')"
          ></font-awesome-icon>
        </li>
        <li style="cursor:pointer">
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            size="3x"
            @click="openLink('https://www.facebook.com/ruhshan.ahmed')"
          ></font-awesome-icon>
        </li>
      </ul>
      <p class="email clear">
        <a href="https://andrewcouldwell.com" target="_blank" class="portfolio"
          >ruhshan.xyz</a
        >
        <span class="maily">book@ruhshan.xyz</span>
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutAuthor",
  methods: {
    openLink: function (link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
.bblog-icon {
  border-width: 2px;
  height: 24px;
  border-radius: 4px;
  border-style: solid;
  border-color: black;
}

</style>