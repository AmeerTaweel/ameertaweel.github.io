<template>
  <div id="app" class="h-100">
    <!-- Name and Intro -->
    <div class="parallax-image-theme parallax">
      <div class="d-flex align-items-center justify-content-center h-100 w-100">
        <div class="position-fixed text-white w-100 px-4">
          <h1 class="c-h1 animate-text py-4">Ameer Mohannad Taweel</h1>
          <h3 class="c-h3 animate-text">Passionate About Coding, Challenging Myself &amp; Learning New Stuff!</h3>
        </div>
      </div>
    </div>
    <div class="position-relative bg-white">
      <h1 class="text-secondary p-5 c-h1 animate-text">My Projects</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="(project, index) in projects" :key="index">
            <project :name="project.name" :description="project.description" :thumb="project.thumb" :url="project.url"></project>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5">
        <div class="row bg-light">
          <div class="col-sm-12 col-md-4 col-lg-4 m-0 p-0">
            <img class="w-100 h-auto" src="../public/personal_pic.jpg" alt="Ameer Taweel's personal photo" />
          </div>
          <div class="col-sm-12 col-md-8 col-lg-8 px-5 py-3 text-left">
            <h2 class="my-3 c-h2 animate-text">I'm Ameer Taweel</h2>
            <h3 class="muted-text c-p animate-text">I am an Android &amp; Full-Stack Developer based in Jerusalem,
              Palestine. I love <span class="text-main">coding</span>, <span class="text-main">
              gaming</span>, <span class="text-main">music</span>, <span class="text-main">
              reading</span>, and playing <span class="text-main">Football</span> with friends.</h3>
          </div>
        </div>
      </div>
      <div id="footer" class="container-fluid p-4 bg-dark">
        <div class="row">
          <div class="col-sm-12 col-md-6 my-3">
            <h1 class="c-h2 animate-text text-white">Get in touch</h1>
            <h3 class="text-light my-3">Got a project you would like me to work on? Or how about just a friendly chat?
            Send me an email on the adress below.</h3>
            <h3 class="font-weight-bold text-white">Email</h3>
            <a class="link" href="mailto:ameeertaweel2002@gmail.com" target="_blank"><h3 class="text-main"><small>ameeertaweel2002@gmail.com</small></h3></a>
          </div>
          <div class="col-sm-12 col-md-6 my-3">
            <h1 class="c-h2 animate-text text-white">Networks</h1>
            <h3 class="text-light my-3">Give me a follow on these sites</h3>
            <a class="link" href="https://www.linkedin.com/in/ameer-taweel" rel="noopener noreferrer" target="_blank"><h3 class="text-main">LinkedIn</h3></a>
            <a class="link" href="https://github.com/AmeerTaweel" rel="noopener noreferrer" target="_blank"><h3 class="text-main">Github</h3></a>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center pt-5 text-white">
            <h5>Copyright © 2018 Ameer Taweel.</h5>
            <h6>Java | XML | Android | Firebase | HTML5 | CSS3 | JavaScript | Vue.js | Front-End | Node.js | Back-End </h6>
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
    loadProjects () {
      firebaseApp.firestore().collection(`projects`).get().then((projectSnapshot) => {
        projectSnapshot.forEach((project) => {
          this.projects.push(project.data())
        })
      })
    }
  },
  created () {
    this.loadProjects()
  },
  components: {
    Project
  }
}
</script>

<style lang="sass">
$primary-color: #FFEB3B
$secondary-color: #333

#app
  font-family: 'Raleway', sans-serif
  text-align: center

.animate-text
  -webkit-transition: all 0.3s
  -moz-transition: all 0.3s
  -o-transition: all 0.3s
  transition: all 0.3s

.c-h1, .c-h2, .c-h3
  font-weight: bold

#footer
  text-align: left

/*  Small Screens */
@media only screen and (max-width: 767px)
  #footer
    text-align: center

  .c-h1
    font-size: 2.5em

  .c-h2
    font-size: 2em

  .c-h3, .c-p
    font-size: 1em

/*  Medium Screens */
@media only screen and (min-width:768px) and (max-width: 991px)
  .c-h1
    font-size: 3em

  .c-h2
    font-size: 2.5em

  .c-h3, .c-p
    font-size: 1.5em

/*  Large Screens */
@media only screen and (min-width:992px) and (max-width: 1199px)
  .c-h1
    font-size: 4em

  .c-h2
    font-size: 3em

  .c-h3, .c-p
    font-size: 2em

/*  Extra Large Screens */
@media only screen and (min-width:1200px)
  .c-h1
    font-size: 4.5em

  .c-h2
    font-size: 3.5em

  .c-h3, .c-p
    font-size: 2.5em

.text-main
  color: rgb(75, 184, 210)

.muted-text
  color: #51565C

.link:hover
  text-decoration-color: rgb(75, 184, 210)

.parallax-image-theme
  background: linear-gradient(to right bottom, rgba(89, 167, 255, 0.7), rgb(0, 31, 62)), url('../public/background.jpg')

.parallax
  /* Full Height */
  height: 100%
  /* Create the Parallax Scrolling Effect */
  background-attachment: fixed
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  position: relative
</style>
