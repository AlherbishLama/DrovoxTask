<template>
<div>
    <div v-if="employee">
        <h2 style="text-align:center">Employee Profile</h2>

        <div class="card">
            <img src="/images/employee.png" :alt=employee.First_Name style="width:50%">
            <h1>{{ `${employee.First_Name} ${employee.Last_Name}`  }}</h1>
            <p class="title">{{ employee.Company }}</p>
        </div>
    </div>
    <div v-else>
        <h2 style="text-align: center;">Employee Not found</h2>
    </div>
</div>
</template>

<script>
export default {
    name: "ViewEmployee",
    props:['employee_id'],
    data(){
        return{
            employee:null
        }
    },
    mounted() {
        this.getEmployee();
    },
    methods:{
        async getEmployee(){
            let response = await this.$root.getRequest(`/api/employees/${this.employee_id}`);
            this.employee = response.data.data
        }
    }
}
</script>

<style scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
}

.title {
    color: grey;
    font-size: 18px;
}

button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
}

a {
    text-decoration: none;
    font-size: 22px;
    color: black;
}

button:hover, a:hover {
    opacity: 0.7;
}
</style>
