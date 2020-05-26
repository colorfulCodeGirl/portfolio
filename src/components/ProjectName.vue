<template>
  <div class="project" @click="emitChange">
    <transition @enter="enter" @leave="leave" :css="false">
      <arrow
        v-if="isActive"
        class="arrow"
        @arrowClick="emitArrowEvent('left')"
        :isDisabled="!isLandscape && isFirst"
      />
    </transition>
    <div class="content" :class="{ active: isActive }">
      <div class="heading">
        <h2 class="name">
          <a
            href="#"
            @click="isLandscape ? emitChange : null"
            class="headingLink"
            >{{ project.name }}</a
          >
        </h2>
        <inline-svg
          v-for="{ src, name } in techSrces"
          :src="src"
          :key="name"
          class="technologie"
          :aria-label="name"
          height="2rem"
          width="2rem"
        />
        <img
          v-for="{ src, name } in pngTech"
          :src="src"
          :key="name"
          :alt="name"
          class="technologie"
        />
      </div>
      <p
        class="description"
        v-html="!isDescriptionWhole ? desriptionShort : project.description"
      ></p>
      <div class="links">
        <button
          class="link"
          type="button"
          aria-label="read all text"
          v-if="desriptionShort !== project.description"
          @click="showWholeDescription"
        >
          {{ isDescriptionWhole ? "hide" : "more..." }}
        </button>
        <a class="link" :href="project.web" target="_blank">web</a>
        <a class="link" :href="project.code" target="_blank">code</a>
      </div>
    </div>
    <arrow
      v-if="!isLandscape"
      class="arrow right"
      @arrowClick="emitArrowEvent('right')"
      :isDisabled="isLast"
    />
    <hr class="line" v-if="isLandscape" />
  </div>
</template>
<script>
import InlineSvg from "vue-inline-svg";
import Arrow from "../components/UI/Arrow.vue";
import gsap from "gsap";

export default {
  name: "ProjectName",
  props: {
    project: Object,
    isActive: Boolean,
    isLandscape: Boolean,
    isLast: Boolean,
    isFirst: Boolean
  },
  data: function() {
    return {
      isDescriptionWhole: false,
      isDescriptionShort: true,
      pngTech: [],
      animationObj: {
        opacity: 0,
        scaleX: 0,
        duration: 0.7
      }
    };
  },
  components: { Arrow, InlineSvg },
  computed: {
    techSrces: function() {
      const srces = this.project.technologies.reduce((srcArray, tech) => {
        try {
          const src = require(`../assets/technologies/${tech}.svg`);
          if (src) {
            srcArray.push({ src, name: tech });
          }
        } catch {
          const src = require(`../assets/technologies/${tech}.png`);
          this.pngTech.push({ src, name: tech });
        }
        return srcArray;
      }, []);
      return srces;
    },
    desriptionShort: function() {
      const description = this.project.description;
      const endOfSentence = description.indexOf("</p>") + 4;
      return description.slice(0, endOfSentence);
    }
  },
  methods: {
    emitChange: function() {
      if (!this.isLandscape) {
        return;
      }
      this.$emit("changeProject");
    },
    emitArrowEvent: function(direction) {
      if (this.isLandscape) {
        return;
      }
      this.$emit("changeProjectMobile", direction);
    },
    showWholeDescription: function() {
      this.isDescriptionWhole = !this.isDescriptionWhole;
    },
    enter: function(el, done) {
      gsap.from(el, {
        ...this.animationObj,
        onComplete: done
      });
    },
    leave: function(el, done) {
      gsap.to(el, {
        ...this.animationObj,
        onComplete: done
      });
    }
  }
};
</script>
<style scoped>
.project {
  display: flex;
  padding: 0 0.5rem 2rem 0.5rem;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
  min-width: 90%;
  margin: 0 auto;
}
@media (min-width: 700px) {
  .project {
    margin: 0.3rem auto;
  }
}
.arrow {
  height: auto;
  width: 1.5rem;
  stroke-width: 5rem;
  stroke: #ffd500;
  flex-basis: 7%;
}
.arrow.right {
  transform: rotate(180deg);
}
.content {
  flex-basis: 82%;
}

@media (orientation: landscape) and (min-aspect-ratio: 4/3) and (min-width: 500px) {
  .project {
    width: auto;
    margin: 0;
    margin-left: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 0.1rem;
  }
  .arrow {
    height: auto;
  }
  .content {
    flex-basis: 92%;
    margin-left: auto;
    transition: transform 0.3s ease-out;
  }
  .content.active {
    transform: translateY(-0.5rem);
  }
}
.heading {
  display: flex;
  align-items: flex-start;
}
.headingLink {
  text-decoration: none;
  color: #ffffff;
}
.name {
  margin: 0;
  margin-bottom: 0.5rem;
  margin-right: auto;
  font-size: 1.2rem;
  font-weight: 300;
  color: #ffffff;
  text-transform: uppercase;
}
.technologie {
  width: 2rem;
  padding-right: 0.5rem;
}
@media (orientation: landscape) and (max-width: 1000px) {
  .heading {
    flex-wrap: wrap;
  }
  .technologie {
    width: 1.8rem;
    padding-right: 0.3rem;
  }
}
.description {
  margin: 0;
  color: #ffffff;
}
.links {
  display: flex;
  justify-content: flex-end;
}
.link {
  text-decoration: none;
  color: #000000;
  font-weight: 600;
  background-color: #ffd500;
  border: none;
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
  margin-left: 0.5rem;
}
.link:focus {
  border: 1px solid #ffffff;
}
.line {
  border: 0;
  height: 1px;
  flex-basis: 100%;
  background-image: linear-gradient(
    to right,
    rgba(255, 213, 0, 0),
    rgba(255, 213, 0, 0.75),
    rgba(255, 213, 0, 0)
  );
}
</style>
