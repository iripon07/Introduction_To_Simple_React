

// object destructuring 
//  const {name, age} = {name:'alu', age:14};
 const {name, age} = {id: 1,name: 'alu', age: 14, salary: 1400}

 const employee = {
    ide: 'cs code',
    designation: 'developer',
    machine: 'mac',
    languages :['css', 'js', 'html'],
    specification:{
        height: 66,
        weight: 70,
        address: 'dhaka',
        drink:'water',
        watch:{
            color:'black',
            brand: 'Xiaomi',
            price:500
        }
    }
 }
 const {machine, ide} = employee
 const {weight, address} = employee.specification
 const {color} = employee.specification.watch