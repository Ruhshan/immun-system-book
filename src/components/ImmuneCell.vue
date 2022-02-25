<template>
  <transition name="fade">
    <img
      v-if="show"
      :src="require('../assets/' + cellType + '.svg')"
      :class="{
        base: true,
        clockwiseSpin: clockWiseSpin,
        antiClockwiseSpin: !clockWiseSpin,
      }"
      :style="{ left: leftPos + 'px', top: topPos + 'px' }"
    />
  </transition>
</template>
<script>

import setRandomInterval from 'set-random-interval';
export default {
  
  name: "ImmuneCell",
  props: {
    cellType: String,
  },
  async mounted() {
    this.interval= setRandomInterval(() => this.toggleObject(), 1000, 5000);

  },
  methods: {
    sleep: function (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
    calculatePosition: function () {
      var banner = document.getElementById("banner");
      var maxHeight = banner.clientHeight;
      var maxWidth = banner.clientWidth;

      var randomHeight = Math.floor(Math.random() * maxHeight);
      var randomWeight = Math.floor(Math.random() * maxWidth);

      this.leftPos = randomWeight;
      this.topPos = randomHeight;
    },
    toggleObject: function () {
      this.calculatePosition();
      var wait = Math.floor(Math.random() * 5000);

      this.clockWiseSpin = wait % 2 == 0 ? true : false;

      this.show = !this.show;
    },
  },
  data: function () {
    return {
      leftPos: 0,
      topPos: 0,
      show: false,
      t: true,
      clockWiseSpin: true,
      interval: null,
    };
  },
};
</script>
<style scoped>
.base {
  filter: invert(1);
  height: 100px;
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: opacity 3s;
}

@keyframes clockwiseSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes antiClockwiseSpin {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.clockwiseSpin {
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-name: clockwiseSpin;
  animation-timing-function: linear;
}

.antiClockwiseSpin {
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-name: antiClockwiseSpin;
  animation-timing-function: linear;
}
</style>