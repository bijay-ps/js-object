let foodOrder = new Set([
  "Burger",
  "Fries",
  "Coke",
  "Fried Rice",
  "Fries",
  "Burger",
]);
foodOrder.add("Fried Chciken");
// foodOrder.delete("Fried Chciken");
// foodOrder.clear();
// console.log(foodOrder);
// console.log(foodOrder.size);
// console.log(foodOrder.has("Pepsi"));
// console.log(foodOrder.has("Coke"));

// const arr = [1, 2, 3, 1, 2, 4, 5];
// const duplicatFreeSet = new Set(arr);
// console.log(duplicatFreeSet);
// const result = Array.from(duplicatFreeSet);
// console.log(result);

// foodOrder.forEach((value) => {
//   console.log(value);
// });

const restaurant = new Map();
restaurant.set("name", "A2B");
restaurant.set(1, "Chennai, TN");
restaurant.set(2, "Bangalore, KA");
restaurant.set("cuisine", ["South Indian", "North Indian"]);
restaurant.set(true, "Open");
restaurant.set(false, "Close");

console.log(restaurant);

console.log(restaurant.get("cuisine"));
console.log(restaurant.get(1));

console.log(restaurant.has("namdsfe"));

restaurant.clear();

console.log(restaurant);
