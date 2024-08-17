<template>
  <learning-survey></learning-survey>
  <user-experiences></user-experiences>
</template>

<script>
import LearningSurvey from "./components/survey/LearningSurvey.vue";
import UserExperiences from "./components/survey/UserExperiences.vue";

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },

  // data() {
  //   return {
  //     savedSurveyResults: [],
  //   };
  // },
  // methods: {
  //   storeSurvey(surveyData) {
  //     const surveyResult = {
  //       name: surveyData.userName,
  //       rating: surveyData.rating,
  //       id: new Date().toISOString(),
  //     };
  //     this.savedSurveyResults.push(surveyResult);
  //     console.log(surveyResult);
  //   },
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
