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
        <project-technologies :technologies="project.technologies" />
      </div>
      <p class="description" v-html="desriptionShort"></p>
      <div class="links">
        <!-- <button
          class="link"
          type="button"
          aria-label="read all text"
          v-if="desriptionShort !== project.description"
          @click="showWholeDescription"
        >
          {{ isDescriptionWhole ? "hide" : "more..." }}
        </button> -->
        <web-buttons :code="project.code" :web="project.web" />
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
import Arrow from "@/components/atoms/Arrow.vue";
import ProjectTechnologies from "@/components/atoms/ProjectTechnologies.vue";
import WebButtons from "@/components/atoms/WebButtons.vue";
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
      isDescriptionShort: true,
      animationObj: {
        opacity: 0,
        scaleX: 0,
        duration: 0.7
      }
    };
  },
  components: { Arrow, ProjectTechnologies, WebButtons },
  computed: {
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
@media (orientation: landscape) and (max-width: 1000px) {
  .heading {
    flex-wrap: wrap;
  }
}
.description {
  margin: 0;
  color: #ffffff;
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
