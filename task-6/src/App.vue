<template>
  <div id="app">
<!--   
      <h2 v-favcolor >Directives custom</h2>
      <p title="paragraph" v-favcolor v-font v-upper>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button title="NO update">Click</button> -->

      <!-- <h2 v-maincolor>Custom Dirctive in vue js</h2> -->
      <!-- <button v-mainbtn="first">click here</button> -->

          <br><br><hr><br>
           <button type="button" title="Area 1" v-custombtn:red >Area #1</button><br><br> <!-- v-custombtn:red , red is argument  -->
          <button type="button" title="Area 2" v-custombtn:green>Area #2</button><br><br>

          <button type="button" title="Area 3" v-custombtn:gray>Area #3</button><br><hr>

          <button type="button" title="Area 3" v-custombtn.change>modifier</button><br>


          <!-- <button type="button" title="Area 3" v-custombtn:green>Area #3</button><br><br>
          <button type="button" title="Area 3" v-custombtn:red>Area #3</button><br><br>
          <button type="button" title="Area 3" v-custombtn:gray>Area #3</button><br><br>
          <button type="button" title="Area 3" v-custombtn>Area #3</button><br><br> -->

          <br><br><hr><hr><br><br>
          <p>Directives buttons</p>

          <button v-button.smallbtn type="button" title="small button">Small</button><br><br>
          <button v-button.mediambtn type="button" title="mediam button">Mediam</button><br><br>
          <button v-button.largebtn type="button" title="large button">Large</button><br><br>

          <button v-button.smallbtn>my small button</button><br><br>
          <button v-button.mediambtn>my mediam button</button><br><br>
          <button v-button.largebtn>my large button</button><br><br>



  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
   
     
    };
  },

  methods: {
  
  },
  computed: {
   
  },
 

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

input,textarea {
  margin: 10px;
  width: 400px;
  padding: 10px;
}

</style>
