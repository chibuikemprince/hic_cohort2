var car = {
  model: "BMW",

  year: 2023,

  color: "red",

  start: function () {
    console.log("starting " + this.model);
  },

  stop: function () {
    console.log("stopping");
  },
  owner: {
    name: "mary",
    address: "Lagos",
    occupation: "Software Engineering",
  },
  parts: ["engine", "brake system", "tyres", "chassis number"],
};

//console.log(car);
car["model"];
car.model;
var count = 1;
var m = [
  1,
  "marry",
  {
    name: "mary",
  },

  function () {
    console.log("aaaa");
  },
];

/* var b = function () {
  console.log("bbbbb");
};

function c() {
  console.log("bbbbb");
}
 */
console.log(car.start());

console.log(typeof m);

for (var a in car) {
  //console.log(count + ": " + a + " =  " + car[a]);
  let proptype = typeof car[a];
  // let proptype =  car[a] instanceof "Array";

  // console.log(`${a} is of type ${proptype}`);

  let value = car[a];

  count++;
}

/* 

 if (proptype === "object" && !(value instanceof Array)) {
    value = JSON.stringify(value);
    console.log(`${count}. ${a} = ${value} `);
  } else {
    console.log(`${count}. ${a} = ${value} `);
  }


var carModel = car.model;
var carYear = car.year;
var carColor = car.color;

car.start();
car.stop();


console.log({ carModel, carYear, carColor});



try{
 
var a = mary+abdul+steph
   

}
catch(err){

console.log(err.message)
    console.log("error occurred. ")
}





 */
