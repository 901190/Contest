 <script src="./script.js">et arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap(data) {
  const developers = data.filter(employee => employee.profession === "developer");
  developers.map(employee => console.log(employee));
}

PrintDeveloperbyMap(data);

function PrintDeveloperbyForEach(data) {
  data.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

PrintDeveloperbyForEach(data);

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  data.push(newEmployee);
  console.log(data);
}

addData();
function removeAdmin() {
  const filteredData = data.filter(employee => employee.profession !== "admin");
  console.log(filteredData);
}

removeAdmin();




function ConcatinateArray() {
  const newArray = [
    { id: 4, name: "susan", age: "22", profession: "manager" },
    { id: 5, name: "mike", age: "25", profession: "developer" },
    { id: 6, name: "emma", age: "21", profession: "admin" }
  ];

  const concatenatedArray = data.concat(newArray);
  console.log(concatenatedArray);
}

ConcatinateArray();


</script>