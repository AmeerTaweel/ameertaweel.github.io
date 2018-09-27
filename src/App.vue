<template>
  <div id="app" class="h-100">
    <div class="parallax">
      <h1 class="hand-text position-absolute text-white bold-text p-4 w-100"><span class="text-dark">A</span>meer<span class="text-dark">T</span>aweel</h1>
      <div class="d-flex align-items-center justify-content-center h-100 w-100">
        <div class="position-fixed">
          <h1 class="text-white font-weight-bold p-3">Android &amp; Full-Stack Developer</h1>
          <h4 class="text-dark font-weight-bold text-uppercase">Passionate About Coding &amp; Making World Better</h4>
        </div>
      </div>
    </div>
    <div class="position-relative bg-white">
      <h1 class="text-secondary p-5 font-weight-bold">My Projects</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="(project, index) in projects" :key="index">
            <project :name="project.name" :description="project.description" :thumb="project.thumb" :url="project.url"></project>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5">
        <div class="row bg-light">
          <div class="col-sm-12 col-md-6 col-lg-4 m-0 p-0">
            <img class="w-100 h-auto" src="./assets/personal_pic.jpg" />
          </div>
          <div class="col-sm-12 col-md-6 col-lg-8 p-5 text-left">
            <h1 class="mb-3">Oh Hello!<br/>I'm Ameer Taweel</h1>
            <h3 class="text-muted">I am an Android &amp; Full-Stack Developer based in Jerusalem,
              Palestine. I love <span class="text-main">coding</span>, <span class="text-main">
              gaming</span>, <span class="text-main">music</span>, <span class="text-main">
              reading</span>, and playing <span class="text-main">Football</span> with friends.</h3>
          </div>
        </div>
      </div>
      <div class="container-fluid px-4 py-5 bg-dark text-left">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h1 class="font-weight-bold text-white">Get in touch</h1>
            <h3 class="text-secondary my-3">Got a project you would like me to work on? Or how about just a friendly chat?
            Send me an email and we can grab a lovely coffee.</h3>
            <h3 class="font-weight-bold text-white">Email</h3>
            <a href="mailto:ameeertaweel2002@gmail.com" target="_blank"><h3 class="text-main">ameeertaweel2002@gmail.com</h3></a>
          </div>
          <div class="col-sm-12 col-md-6">
            <h1 class="font-weight-bold text-white">Networks</h1>
            <h3 class="text-secondary my-3">Give me a follow on these sites</h3>
            <a href="https://www.linkedin.com/in/ameer-taweel" target="_blank"><h3 class="text-main">LinkedIn</h3></a>
            <a href="https://github.com/AmeerTaweel" target="_blank"><h3 class="text-main">Github</h3></a>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center pt-5 text-white">
            <h5>Copyright © 2018 Ameer Taweel.</h5>
            <h6>Java | XML | Android Development | Firebase | HTML5 | CSS3 | JavaScript | Vue.js | Front-End Development</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from './components/Project.vue'
import { firebaseApp } from './firebase.js'
export default {
  name: 'app',
  data () {
    return {
      projects: []
    }
  },
  methods: {
    loadProjects(){
      firebaseApp.firestore().collection(`projects`).get().then((projectSnapshot) => {
        projectSnapshot.forEach((project) => {
          this.projects.push(project.data())
        })
      })
    }
  },
  created(){
    this.loadProjects()
  },
  components: {
    Project
  }
}
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif;
  text-align: center;
}

.hand-text {
  font-family: 'Courgette', cursive;
}

.text-main {
  color: rgb(75, 184, 210);
}

.parallax {
  /* The image used */
  background: 
    /* top, transparent red, faked with gradient */ 
    linear-gradient(
      rgba(75, 184, 210, 0.7), 
      rgba(75, 184, 210, 0.7)
    ),
    /* bottom, image */
    url('./assets/background.png');
  /* Full height */
  height: 100%; 
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
