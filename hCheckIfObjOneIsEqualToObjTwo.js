/*
7) Check If objOne Is Equal to objTwo

Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.

Example #1
// The first object parameter.

{
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com"
}

// The second object parameter.

{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}


➞ false

Example #2
// The first object parameter.

{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}

// The second object parameter.

{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}


➞ true

*/

const obj1 = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
};

const obj2 = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
};

const obj3 = {
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com"
};

const obj4 = {
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com",
  teste: "teste"
};

function check(object1, object2) {

  if (Object.keys(object1).length != Object.keys(object2).length) return false;

  const arrayObj1 = Object.entries(object1);
  const arrayObj2 = Object.entries(object2);

  for (let i = 0; i < arrayObj1.length; i++) {
    for (let ind = 0; ind < arrayObj1[i].length; ind++) {
      if (arrayObj1[i][ind] != arrayObj2[i][ind]) return false
    }
  }

  return true
}

console.log(check(obj3, obj4));
console.log(check(obj1, obj2));
