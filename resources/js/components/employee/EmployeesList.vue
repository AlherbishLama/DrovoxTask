<template>
    <div>
        <table id="employees" v-if="employees.length>0">
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Company</th>
                <th>Action</th>
            </tr>
            <tr v-for="(employee, index) in employees" :key="index">
                <td>{{ index }}</td>
                <td>{{ employee['First_Name'] }}</td>
                <td>{{ employee['Last_Name'] }}</td>
                <td>{{ employee['Company'] }}</td>
                <a :href="`/employees/${index}`"><span>view</span></a>
            </tr>

        </table>
    </div>
</template>

<script>
    export default {
        name: "EmployeesList",
        data(){
            return{
                employees:[]
            }
        },
        mounted() {
            this.getEmployees();
        },
        methods:{
            async getEmployees(){
                let response = await this.$root.getRequest('/api/employees');
                this.employees = response.data.data
            }
        }
    }
</script>

<style scoped>
#employees {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#employees td, #employees th {
    border: 1px solid #ddd;
    padding: 8px;
}

#employees tr:nth-child(even){background-color: #f2f2f2;}

#employees tr:hover {background-color: #ddd;}

#employees th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
}
</style>
