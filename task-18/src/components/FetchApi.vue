<template>
  <div id="api">
    <h1>List of Employees Data || component</h1>
    <!-- Employes Data -->
    <div id="box">
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Employee Salary</th>
            <th>Employee Age</th>
          </tr>
        </thead>
        <br />
        <tbody>
          <tr v-for="(item, index) in lists" v-bind:key="item.id">
            <td>{{ index }}</td>
            <td>{{ item.employee_name }}</td>
            <td>{{ item.employee_salary }}</td>
            <td>{{ item.employee_age }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "FetchApi",
  data() {
    return {
      lists: null,
    };
  },
  mounted() {
    Vue.axios
      .get("http://45.90.108.154/fake-api/employee/api/v1/employees")
      .then((response) => {
        // console.log(response);
        this.lists = response.data.data;
      });
  },
};
</script>

<style scoped>
#api {
  width: 80%;
  border: 1px solid;
  margin: 10px auto;
  text-align: center;
  padding: 15px;
}
#box {
  width: 75%;
  margin: 20px auto;
  height: 400px;
  overflow-y: scroll;
  padding: 15px;
}
table {
  width: 100%;
}
table thead {
  background: #222;
  line-height: 40px;
  color: white;
  /* margin-bottom: 20px; */
}
table tbody {
  line-height: 30px;
  font-size: 20px;
  word-spacing: 15px;
  letter-spacing: 2px;
}
table tbody tr:nth-child(even) {
  background: #eee;
}
</style>