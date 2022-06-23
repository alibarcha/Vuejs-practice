<template>
  <div id="app">
    <h2>Vue statements v-if , v-else, v-else-if,v-show</h2>

    <p v-if="isActive">{{message}}</p>
    <p v-show="isActive">Lorem ipsum dolor sit amet.</p>
    <p v-show="false">Lorem ipsum dolor sit.</p>

    <h4 v-if="true">This is if condition</h4>
    <h4 v-else>this is  else condition</h4>

    <button @click="change">Toggle </button>
    <p v-if="isvalid">{{message}}</p>
    <p v-else>oh NO ! 😢</p>

    <p v-if="num==10">true condition render</p>
    <p v-if="num<20">true condition render</p>
    <h1 v-if="!num==10">statement in vue</h1>

    <p v-if="marks>80">Grade A</p>
    <p v-else-if="marks>60">Grade B</p>
    <p v-else-if="marks>50">Grade C</p>
    <p v-else-if="marks>=40">Grade D</p>
    <p v-else>Fail try Again</p>

    <!-- more then two element then we used template element -->
    <template v-if="ok">
      <h3>ok condition</h3>
      <p>condition success</p>
      <button>Read more</button>
    </template>

    <p v-show="false">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem facilis et maiores amet, nulla nisi cumque dicta alias mollitia ratione numquam. Iure nihil, autem quo eligendi eos magni consequatur provident?</p>
            <br><br>
          <button @click="increment">Increment by 1</button><br>
          <h4>Count : {{count}}</h4> 
        <h3 v-if="count==1">the value of count = 1</h3>
        <h3 v-else-if="count==2">the value of count = 2</h3>
        <h3 v-else-if="count==3">the value of count = 3</h3>
        <h3 v-else-if="count==4">the value of count = 4</h3>
        <h3 v-else>value not matched</h3>

        <!-- v for loop in vue js -->
        <ul>
          <li v-for="(item , index ) in students" :key="item.id">{{index}}  {{item}}</li>
        </ul>

        <ul>
          <li v-for="(car , index)  in cars" :key="car.id">car name :{{index}} {{car.name}}</li>
        </ul>

        <ol>
          <li v-for="teacher in teachers" :key="teacher.id">Teacher Name : {{ teacher.name }}  Subject : {{ teacher.subject }}</li>
        </ol>


        <ul v-for="(t , index ) in teachers" :key="t.id">
           <li>{{index}} {{t.name}} : {{ t.subject }} : {{t.location.street}} , {{t.location.city}}</li>
        </ul>

        <table border="1" cellSpacing="0">
          <thead>
            <tr>
              <th>Sr:</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Location</th>
              <th>Salery</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(teacher , index)  in teachers" :key="teacher.id">
              <td>{{index}}</td>
              <td >{{teacher.name}}</td>
              <td>{{teacher.subject}}</td> 
              <td>{{teacher.location.street }} | {{ teacher.location.city}}</td> 
              <td>{{teacher.salery}}</td>
            </tr>
          </tbody>
        </table>

  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      isActive:true,
      message:'wellcome to vue js',
      isvalid:true,
      num:10,
      marks:20,
      ok:true,
      count:1,
      students:['elon','william','json','joy'],
      cars:[
        {name:'maruti'},
        {name:'toyota'}
      ],
      teachers:[
        {name:'jordan',subject:'Computer science', location:{street:'street 1',city:'canada'},salery:30000},
        {name:'william',subject:' English', location:{street:'street 2',city:'city2'},salery:20000},
        {name:'steve',subject:'Computer ', location:{street:'street 3',city:'city 3'},salery:50000},
        {name:'joy',subject:'science', location:{street:'street 4',city:'city 4'},salery:90000},
        {name:'roman',subject:'Math ', location:{street:'street 5',city:'city 5'},salery:70000},
      ]
    };
  },
  

  methods: {
    change:function(){
      this.isvalid=!this.isvalid

    },
    increment:function(){
      this.count++

    }
  
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
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

input {
  margin: 10px;
  width: 400px;
  padding: 10px;
}



</style>
