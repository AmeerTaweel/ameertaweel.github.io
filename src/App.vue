<template>
  <div id="app" class="h-100">
    <!-- Name and Intro -->
    <div :class="{ 'parallax-image-intro': !webPSupported, 'parallax-image-intro-webp': webPSupported }" class="parallax">
      <div class="d-flex align-items-center justify-content-center h-100 w-100">
        <div class="text-white w-100 px-4">
          <h1 class="c-h1 animate-text py-4">Ameer Mohannad Taweel</h1>
          <h3 class="c-h3 animate-text">Passionate About Coding, Challenging Myself &amp; Learning New Stuff!</h3>
        </div>
      </div>
    </div>
    <!-- About Me Section -->
    <div class="position-relative bg-white">
      <h1 class="text-secondary c-h1 m-5 animate-text">About Me</h1>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-6 col-sm-5 col-md-4 col-lg-3">
            <picture>
              <source srcset="../assets/images/ameer-taweel.webp" type="image/webp">
              <source srcset="../assets/images/ameer-taweel.jpg" type="image/jpeg">
              <img class="w-100 h-auto rounded-circle" src="../assets/images/ameer-taweel.jpg" alt="Ameer Taweel's personal photo" />
            </picture>
          </div>
        </div>
        <h3 class="text-muted c-p animate-text m-4 text-justify">
          I am an Android and Full-Stack Developer based in Jerusalem, Palestine&#127477;&#127480;.
          I'm passionate about <span class="text-main">coding</span> and computer stuff&#128187;&#128293;.
          I like <span class="text-main">learning</span> and <span class="text-main">challenging</span> myself&#128216;.
          For entertainment I do <span class="text-main">gaming</span>&#127918;, listen to <span class="text-main">music</span>&#127911;,
          play <span class="text-main">Chess</span>&#9823;, and play <span class="text-main">Soccer</span> with friends&#9917;.
        </h3>
      </div>
    </div>
    <!-- Skills Intro -->
    <div :class="{ 'parallax-image-skills': !webPSupported, 'parallax-image-skills-webp': webPSupported }" class="parallax mt-5">
      <div class="d-flex align-items-center justify-content-center h-100 w-100">
        <div class="text-white w-100 px-4">
          <h1 class="c-h1 animate-text py-4">Skills and Abilities</h1>
          <h3 class="c-h3 animate-text">“Knowledge is power.”<br/>- Francis Bacon</h3>
        </div>
      </div>
    </div>
    <!-- Skills Section -->
    <div class="position-relative bg-white">
      <div v-for="(section, i) in skills" :key="i">
        <h2 class="text-secondary c-h2 m-5 animate-text">{{section.title}}</h2>
        <div class="container text-left">
          <div class="row">
            <div class="col-12 col-lg-6" v-for="(column, j) in section.skills" :key="j">
              <div class="d-flex justify-content-between align-items-center" v-for="(skill, o) in column" :key="o">
                <p class="lead">{{skill.name}}</p><Rate allow-half disabled v-model="skill.rate" class="text-nowrap"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Projects Intro -->
    <div :class="{ 'parallax-image-projects': !webPSupported, 'parallax-image-projects-webp': webPSupported }" class="parallax mt-5">
      <div class="d-flex align-items-center justify-content-center h-100 w-100">
        <div class="text-white w-100 px-4">
          <h1 class="c-h1 animate-text py-4">Projects</h1>
          <h3 class="c-h3 animate-text">“Those at the top of the mountain didn’t fall there.”<br/>- Marcus Washling</h3>
        </div>
      </div>
    </div>
    <!-- Projects Section -->
    <div class="position-relative bg-white mt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="(project, index) in projects" :key="index">
            <project :name="project.name" :description="project.description" :thumb="project.thumb" :url="project.url"></project>
          </div>
        </div>
      </div>
    </div>
    <!-- Experiences Intro -->
    <div :class="{ 'parallax-image-experiences': !webPSupported, 'parallax-image-experiences-webp': webPSupported }" class="parallax mt-5">
      <div class="d-flex align-items-center justify-content-center h-100 w-100">
        <div class="text-white w-100 px-4">
          <h1 class="c-h1 animate-text py-4">Experiences</h1>
          <h3 class="c-h3 animate-text">“Experience is the mother of wisdom.”<br/>- Unknown</h3>
        </div>
      </div>
    </div>
    <!-- Experiences Section -->
    <div class="position-relative bg-white">
      <div v-for="(section, i) in experiences" :key="i">
        <h2 class="text-secondary c-h2 m-5 animate-text">{{section.title}}</h2>
        <div class="container text-left">
          <div class="row text-justify">
            <div class="col-12 my-3" v-for="(exp, j) in section.exps" :key="j">
              <p class="lead">{{exp.place}}</p>
              <p class="lead font-weight-bold">{{exp.name}}</p>
              <p class="lead text-muted">{{exp.time}}</p>
              <p class="lead">{{exp.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Section -->
    <div id="footer" class="position-relative mt-5 p-4 container-fluid bg-dark">
      <div class="row my-3">
        <div class="col-sm-12 col-md-6">
          <h1 class="c-h2 animate-text text-white">Get in touch</h1>
          <h3 class="text-light my-3">Got a project you would like me to work on? Or how about just a friendly chat?
          Send me an email on the address below:</h3>
          <a class="link w-100 force-break-text" href="mailto:ameeertaweel2002@gmail.com" target="_blank"><h4>ameeertaweel2002@gmail.com</h4></a>
        </div>
        <div class="col-sm-12 col-md-6">
          <h1 class="c-h2 animate-text text-white">Networks</h1>
          <h3 class="text-light my-3">Give me a follow on these sites:</h3>
          <a class="link" href="https://www.linkedin.com/in/ameer-taweel" rel="noopener noreferrer" target="_blank"><h3>LinkedIn</h3></a><br/>
          <a class="link" href="https://github.com/AmeerTaweel" rel="noopener noreferrer" target="_blank"><h3>Github</h3></a>
        </div>
        <div class="col-12 text-center mt-4 text-white">
          <h5>Copyright © 2019 Ameer Taweel</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from './components/Project.vue'
export default {
  name: `app`,
  data () {
    return {
      webPSupported: false,
      skills: [{
        title: `Tools & Technologies`,
        skills: [[{
          name: `Software Development`,
          rate: 5
        }, {
          name: `Object Oriented Programming (OOP)`,
          rate: 5
        }, {
          name: `Git & Github`,
          rate: 5
        }, {
          name: `Firebase`,
          rate: 4.5
        }, {
          name: `Android Development`,
          rate: 5
        }, {
          name: `Android Studio`,
          rate: 5
        }, {
          name: `Java`,
          rate: 5
        }, {
          name: `XML`,
          rate: 5
        }, {
          name: `Web Development`,
          rate: 5
        }, {
          name: `Full-Stack Development`,
          rate: 5
        }, {
          name: `Front-End Development`,
          rate: 5
        }, {
          name: `HTML5`,
          rate: 5
        }, {
          name: `CSS3`,
          rate: 5
        }, {
          name: `JavaScript`,
          rate: 5
        }], [{
          name: `Vue.js`,
          rate: 5
        }, {
          name: `SASS`,
          rate: 3
        }, {
          name: `Back-End Development`,
          rate: 4
        }, {
          name: `Node.js & NPM`,
          rate: 4
        }, {
          name: `Databases`,
          rate: 4
        }, {
          name: `RESTful APIs`,
          rate: 4
        }, {
          name: `Machine Learning`,
          rate: 3
        }, {
          name: `Octave`,
          rate: 4
        }, {
          name: `Python`,
          rate: 4
        }, {
          name: `Internet of Things (IoT)`,
          rate: 4
        }, {
          name: `C++`,
          rate: 3
        }, {
          name: `Kotlin`,
          rate: 3
        }, {
          name: `Photoshop`,
          rate: 4
        }, {
          name: `Linux`,
          rate: 4
        }]]
      }, {
        title: `Languages`,
        skills: [[{
          name: `Arabic`,
          rate: 5
        }, {
          name: `English`,
          rate: 4.5
        }], [{
          name: `Hebrew`,
          rate: 2
        }]]
      }, {
        title: `Interpersonal Skills`,
        skills: [[{
          name: `Leadership`,
          rate: 5
        }, {
          name: `Time Management`,
          rate: 5
        }], [{
          name: `Self Learning`,
          rate: 5
        }, {
          name: `Personal Development`,
          rate: 5
        }]]
      }],
      projects: [{
        description: `3T Engine is a Tic Tac Toe engine. It uses Machine Learning (ML) to predict the best move in a given Tic Tac Toe position. The algorithm is trained using TensorFlow.`,
        name: `3T Engine`,
        thumb: `https://firebasestorage.googleapis.com/v0/b/ameer-taweel.appspot.com/o/3t-engine-logo.png?alt=media&token=0d241f7f-825e-4a10-99e2-74a06de9e89c`,
        url: `https://ttt-engine.web.app/`
      }, {
        description: `Android causal game written in Java and developed using Android Studio. Got great reviews (+4.8).`,
        name: `Bounce Hero`,
        thumb: `https://firebasestorage.googleapis.com/v0/b/ameer-taweel.appspot.com/o/bounce_hero_logo.png?alt=media&token=a4f5eeda-4d79-45b6-8f01-6455f8f47d95`,
        url: `https://play.google.com/store/apps/details?id=com.ameer.android.bouncehero`
      }, {
        description: `Online database of information about Japanese Anime, made with Vue.js and Bootstrap.`,
        name: `The Anime Database`,
        thumb: `https://firebasestorage.googleapis.com/v0/b/ameer-taweel.appspot.com/o/tadb-logo.png?alt=media&token=c9dc7407-8923-4053-be6d-e83dbde03554`,
        url: `https://the-anime-database-ameertaweel.web.app`
      }, {
        description: `Android multiplayer trivia game written in Java and developed using Android Studio. Uses an advanced RESTful API.`,
        name: `Tahadi Almarifa`,
        thumb: `https://firebasestorage.googleapis.com/v0/b/ameer-taweel.appspot.com/o/tahadi_almarifa_logo.png?alt=media&token=0939df03-6c2e-48fe-abf3-589d172b0a06`,
        url: `https://play.google.com/store/apps/details?id=com.game.ameer.ta7adialma3rifa`
      }, {
        description: `NoteXPro is a simple, responsive notepad made with Vue.js and Bootstrap.`,
        name: `NoteXPro`,
        thumb: `https://firebasestorage.googleapis.com/v0/b/ameer-taweel.appspot.com/o/note-x-pro-logo.png?alt=media&token=93f363d0-3417-44f4-8343-3e5aa0550acd`,
        url: `https://notexpro-ameer-taweel.firebaseapp.com`
      }],
      experiences: [{
        title: `Education`,
        exps: [{
          name: `Young Sustainable Impact (YSI)`,
          description: `YSI is a program where the smartest minds below 28 years are chosen to create an impact startup. Focusing on the 17 SDGs - it aims to help 8 teams create new startups from scratch. They provide them with a world-class team, educational resources, mentors and network, money and access for testing, as well as a vibrant community. I'm a member at team 5. We focus on building a sustainable start up focused on the third SDG, Health and Well-Being.`,
          time: `Mar 2019 - Aug 2019`,
          place: `Online Program - Last 15 Days in Oslo, Norway`
        }, {
          name: `Concepts in Games Development`,
          description: `Essential game design elements and the role of a game designer. Key game development stages and principles of agile game development.`,
          time: `Dec 2018`,
          place: `Open2Study.com - Online`
        }, {
          name: `Graphic Design Using Photoshop`,
          description: `Learn the essential tools for editing and manipulating images, how to use the layers panel including creating and editing layer masks, edit photos (both RAW and compressed images) with a variety of tools and non-destructive methods.`,
          time: `Oct 2018`,
          place: `Udemy.com - Online`,
          links: [{
            name: `Certificate URL`,
            link: `http://ude.my/UC-ECYTLZSQ`
          }]
        }, {
          name: `Full Stack Developer`,
          description: `Build back-ends and create RESTful APIs, and use them in web apps.`,
          time: `Aug 2018`,
          place: `One Million Arab Coders - Udacity.com - Online`
        }, {
          name: `Vue.js Developer`,
          description: `Build entire Vue JS, VueRouter, and Vuex applications from scratch. Develop apps that deal with APIs and web requests. Create web apps with a full authentication service, and real-time database.`,
          time: `Aug 2018`,
          place: `Udemy.com - Online`,
          links: [{
            name: `Certificate URL`,
            link: `http://ude.my/UC-8EKFDQLM`
          }]
        }, {
          name: `Certified Web Developer`,
          description: `Learned to create a web site using current standards HTML5 Javascript and CSS, maintain websites content and make edits and additions, build web sites that interact with databases and web services.`,
          time: `Jun 2018`,
          place: `Udemy.com - Online`,
          links: [{
            name: `Certificate URL`,
            link: `http://ude.my/UC-DEVZ1B1C`
          }]
        }, {
          name: `Internet of Things (IoT): Roadmap to a Connected World`,
          description: `Discover key IoT concepts including identification, sensors, localization, wireless protocols, data storage and security. Explore IoT technologies, architectures, standards, and regulation. Understand how to develop and implement your own IoT technologies, solutions, and applications.`,
          time: `May 2018`,
          place: `MIT xPro - Online`
        }, {
          name: `Android Developer Nanodegree`,
          description: `The Udacity Android Developer Nanodegree program is an online course to learn advanced Android techniques and concepts to help students build fast, clean, stable Android applications, that satisfies the users.`,
          time: `2017`,
          place: `Udacity.com - Online`
        }, {
          name: `English Access Micro - Scholarship Program`,
          description: `Access is a two-year program to improve English.`,
          time: `Sep 2015 - May 2017`,
          place: `Amideast, Ramallah`
        }, {
          name: `High School - Scientific Stream`,
          description: `I learned high level math like Calculus, Linear Algebra, and Complex Numbers. I learned a lot about Biology, Physics, and Technology as well.`,
          time: `Aug 2017 - Aug 2020`,
          place: `Al-Ummah High School`
        }]
      }]
    }
  },
  methods: {
    supportsWebP () {
      const elem = document.createElement(`canvas`)

      if (elem.getContext && elem.getContext('2d')) {
        // Was able or not to get WebP representation.
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
      }

      // Very old browser like IE 8, canvas not supported.
      return false
    }
  },
  created () {
    this.webPSupported = this.supportsWebP()
  },
  components: {
    Project
  }
}
</script>

<style lang="sass">
$primary-color: #FFEB3B
$secondary-color: #333

@font-face
  font-family: 'Raleway'
  font-display: swap
  font-style: normal
  font-weight: 400
  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2')
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD

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
  text-align: justify

/*  Small Screens */
@media only screen and (max-width: 767px)
  #footer
    text-align: center

  .c-h1
    font-size: 2.5em

  .c-h2
    font-size: 2em

  .c-h3
    font-size: 1em

  .c-p
    font-size: 2em

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
  color: #1565C0

.link
  color: #4BB8D2
  display: inline-block

.link:hover
  color: #FFFFFF
  text-decoration: underline

.force-break-text
  white-space: pre-wrap
  white-space: -moz-pre-wrap
  white-space: -pre-wrap
  white-space: -o-pre-wrap
  word-wrap: break-word

.parallax-image-intro-webp
  background: linear-gradient(to right bottom, rgba(89, 167, 255, 0.7), rgb(0, 31, 62)), url('../assets/images/bg-intro.webp')

.parallax-image-intro
  background: linear-gradient(to right bottom, rgba(89, 167, 255, 0.7), rgb(0, 31, 62)), url('../assets/images/bg-intro.jpg')

.parallax-image-projects-webp
  background: linear-gradient(to right bottom, rgba(89, 167, 255, 0.7), rgb(0, 31, 62)), url('../assets/images/bg-projects.webp')

.parallax-image-projects
  background: linear-gradient(to right bottom, rgba(89, 167, 255, 0.7), rgb(0, 31, 62)), url('../assets/images/bg-projects.jpg')

.parallax-image-skills-webp
  background: linear-gradient(to right bottom, rgba(89, 167, 255, 0.7), rgb(0, 31, 62)), url('../assets/images/bg-skills.webp')

.parallax-image-skills
  background: linear-gradient(to right bottom, rgba(89, 167, 255, 0.7), rgb(0, 31, 62)), url('../assets/images/bg-skills.jpg')

.parallax-image-experiences-webp
  background: linear-gradient(to right bottom, rgba(89, 167, 255, 0.5), rgba(0, 31, 62, 0.7)), url('../assets/images/bg-experiences.webp')

.parallax-image-experiences
  background: linear-gradient(to right bottom, rgba(89, 167, 255, 0.5), rgba(0, 31, 62, 0.7)), url('../assets/images/bg-experiences.jpg')

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
