<template>
  <div id="app" class="h-100">
    <div class="parallax parallax-image-theme">
      <div class="d-flex align-items-center justify-content-center h-100 w-100">
        <div class="position-fixed">
          <h1 class="text-white animate-h1 p-3">Ameer Mohannad Taweel</h1>
          <h4 class="text-dark animate-h4 text-uppercase">Passionate About Coding &amp; Making The World Better</h4>
        </div>
      </div>
    </div>
    <div class="position-relative bg-white">
      <h1 class="text-secondary p-5 animate-h1">My Projects</h1>
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
            <h2 class="my-3 animate-h2">I'm Ameer Taweel</h2>
            <h3 class="muted-text animate-p">I am an Android &amp; Full-Stack Developer based in Jerusalem,
              Palestine. I love <span class="text-main">coding</span>, <span class="text-main">
              gaming</span>, <span class="text-main">music</span>, <span class="text-main">
              reading</span>, and playing <span class="text-main">Football</span> with friends.</h3>
          </div>
        </div>
      </div>
      <div id="footer" class="container-fluid p-4 bg-dark">
        <div class="row">
          <div class="col-sm-12 col-md-6 my-3">
            <h1 class="animate-h2 text-white">Get in touch</h1>
            <h3 class="text-light my-3">Got a project you would like me to work on? Or how about just a friendly chat?
            Send me an email on the adress below.</h3>
            <h3 class="font-weight-bold text-white">Email</h3>
            <a class="link" href="mailto:ameeertaweel2002@gmail.com" target="_blank"><h3 class="text-main"><small>ameeertaweel2002@gmail.com</small></h3></a>
          </div>
          <div class="col-sm-12 col-md-6 my-3">
            <h1 class="animate-h2 text-white">Networks</h1>
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
#app
  font-family: 'Raleway', sans-serif
  text-align: center

.animate-h1
  font-size: 2.5em
  font-weight: bold
  -webkit-transition: all 0.3s
  -moz-transition: all 0.3s
  -o-transition: all 0.3s
  transition: all 0.3s

.animate-h2
  font-size: 2.5em
  font-weight: bold
  -webkit-transition: all 0.3s
  -moz-transition: all 0.3s
  -o-transition: all 0.3s
  transition: all 0.3s

.animate-h4
  font-size: 1em
  font-weight: bold
  -webkit-transition: all 0.3s 0.3s
  -moz-transition: all 0.3s 0.3s
  -o-transition: all 0.3s 0.3s
  transition: all 0.3s 0.3s

.animate-p
  -webkit-transition: all 0.3s 0.3s
  -moz-transition: all 0.3s 0.3s
  -o-transition: all 0.3s 0.3s
  transition: all 0.3s 0.3s

#footer
  text-align: left

/*  Small Screens */
@media only screen and (max-width: 767px)
  #footer
    text-align: center

  .animate-h1
    font-size: 2.5em

  .animate-h2
    font-size: 2em
    text-align: center

  .animate-h4
    font-size: 1em

  .animate-p
    font-size: 1em
    text-align: center

/*  Medium Screens */
@media only screen and (min-width:768px) and (max-width: 991px)
  .animate-h1
    font-size: 3em

  .animate-h2
    font-size: 2.5em

  .animate-h4
    font-size: 1.2em

  .animate-p
    font-size: 1.4em

/*  Large Screens */
@media only screen and (min-width:992px) and (max-width: 1199px)
  .animate-h1
    font-size: 4em

  .animate-h2
    font-size: 3em

  .animate-h4
    font-size: 1.6em

  .animate-p
    font-size: 2em

/*  Extra Large Screens */
@media only screen and (min-width:1200px)
  .animate-h1
    font-size: 4.5em

  .animate-h2
    font-size: 3.5em

  .animate-h4
    font-size: 1.8em

  .animate-p
    font-size: 2.5em

.text-main
  color: rgb(75, 184, 210)

.muted-text
  color: #51565C

.link:hover
  text-decoration-color: rgb(75, 184, 210)

.parallax
  /* Full Height */
  height: 100%
  /* Create the Parallax Scrolling Effect */
  background-attachment: fixed
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  position: relative

.parallax-image-theme
  background: linear-gradient(rgba(75, 184, 210, 0.7), rgba(75, 184, 210, 0.7)), url('../public/background.png')
</style>
