<template>
  <div class="project" :class="{ active: isActive }" @click="emitChange">
    <arrow
      v-if="isActive"
      class="arrow"
      @arrowClick="emitArrowEvent('left')"
      :isDisabled="isMobile && isFirst"
    />
    <div class="content" :class="{ active: isActive }">
      <div class="heading">
        <h2 class="name">
          <a href="#" @click="emitChange" class="headingLink">
            {{
            project.name
            }}
          </a>
        </h2>
        <img v-for="techSrc in techSrces" :src="techSrc" :key="techSrc" class="technologie" />
      </div>
      <p class="description">
        {{
        isMobile && !isDescriptionWhole
        ? desriptionShort
        : project.description
        }}
      </p>
      <div class="links">
        <button
          class="link"
          type="button"
          aria-label="read all text"
          v-if="isMobile"
          @click="showWholeDescription"
        >{{ isDescriptionWhole ? "hide" : "more..." }}</button>
        <a class="link" :href="project.web" target="_blank">web</a>
        <a class="link" :href="project.code" target="_blank">code</a>
      </div>
    </div>
    <arrow
      v-if="isMobile"
      class="arrow right"
      @arrowClick="emitArrowEvent('right')"
      :isDisabled="isLast"
    />
    <hr class="line" v-if="!isMobile" />
  </div>
</template>
<script>
import Arrow from "../components/UI/Arrow.vue";

export default {
  name: "Project",
  props: {
    project: Object,
    isActive: Boolean,
    isMobile: Boolean,
    isLast: Boolean,
    isFirst: Boolean
  },
  data: function() {
    return {
      isDescriptionWhole: !this.isMobile
    };
  },
  components: { Arrow },
  computed: {
    techSrces: function() {
      const srces = this.project.technologies.map(tech =>
        require(`../assets/technologies/${tech}.svg`)
      );
      return srces;
    },
    desriptionShort: function() {
      const endOfSentence = this.project.description.indexOf(".") + 1;
      return this.project.description.slice(0, endOfSentence);
    }
  },
  methods: {
    emitChange: function() {
      if (this.isMobile) {
        return;
      }
      this.$emit("changeProject");
    },
    emitArrowEvent: function(direction) {
      if (!this.isMobile) {
        return;
      }
      this.$emit("changeProjectMobile", direction);
    },
    showWholeDescription: function() {
      this.isDescriptionWhole = !this.isDescriptionWhole;
    }
  }
};
</script>
<style scoped>
.project {
  display: flex;
  padding: 1rem 0.5rem;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
}
@media (min-width: 700px) {
  .project {
    width: 90%;
    margin: 0.3rem auto;
  }
}
@media (orientation: landscape) {
  .project {
    width: auto;
    margin: 0;
    margin-left: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 1.5rem;
  }
}
.arrow {
  height: 7rem;
  width: 2rem;
  stroke-width: 5rem;
  stroke: #ffd500;
  flex-basis: 7%;
  @media (orientation: landscape;) {
    height: 10rem;
  }
}
.arrow.right {
  transform: rotate(180deg);
}
.content.active {
  flex-basis: 80%;
  @media (orientation: landscape;) {
    flex-basis: 90%;
  }
}
.heading {
  display: flex;
}
.headingLink {
  text-decoration: none;
  color: #ffffff;
}
.name {
  margin: 0;
  margin-bottom: 0.5rem;
  padding-right: 0.7rem;
  font-size: 1.2rem;
  font-weight: 300;
  color: #ffffff;
  text-transform: uppercase;
}
.technologie {
  width: 2rem;
  padding-right: 0.5rem;
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
