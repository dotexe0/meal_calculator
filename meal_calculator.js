function Diner(name) {
  this.name = name;
  this.dishes = [];
};

function Dish(mealName, price) {
  this.mealName = mealName;
  this.price = price;
};

Diner.prototype.addDish = function(dish) {
  this.dishes.push(dish);
};

Diner.prototype.total = function () {
  var total = 0;
  for (let i = 0; i < this.dishes.length; i++) {
    total += this.dishes[i].price;
  }
  return total;
};

var taxRate = 0.085;
Diner.prototype.tax = function(taxRate) {
  var taxTotal = 0;
  for (let i = 0; i < this.dishes.length; i++) {
    taxTotal += this.dishes[i].price * taxRate;
  }
  return taxTotal;
};

var tipRate = 0.2;
Diner.prototype.tip = function(tipRate) {
  var total = 0;
  for (let i = 0; i < this.dishes.length; i++) {
    total += this.dishes[i].price;
  }
  return (total * tipRate);
};

function Bill() {
  this.diners = [];
}

Bill.prototype.addDiner = function (diner) {
  this.diners.push(diner);
};

Bill.prototype.totalBill = function () {
  var total = 0;
  for (let i = 0; i < this.diners.length; i++) {
    total += (this.diners[i].total() + this.diners[i].tax(taxRate) + this.diners[i].tip(tipRate));
  }
  return total.toFixed(2);
};
Bill.prototype.totalTip = function () {
  var total = 0;
  for (let i = 0; i < this.diners.length; i++) {
    total += (this.diners[i].tip(tipRate));
  }
  return total.toFixed(2);
};

//add diner #1
var daniel = new Diner("daniel");
let dish = new Dish('korean bbq', 15);
daniel.addDish(dish);
dish = new Dish('bulgogi', 15);
daniel.addDish(dish);

//add diner #2
var zubair = new Diner("zubair");
dish = new Dish('burger', 10);
zubair.addDish(dish);
dish = new Dish('bim bap', 15);
zubair.addDish(dish);

//add diner #3
var pat = new Diner("pat");
dish = new Dish('pizza', 5);
pat.addDish(dish);
dish = new Dish('beer', 10);
pat.addDish(dish);

//create bill and add diners to bill
var bill = new Bill();
bill.addDiner(daniel);
bill.addDiner(zubair);
bill.addDiner(pat)

//Log out results
Bill.prototype.breakdown = function () {
console.log("Total Bill: $" + bill.totalBill());
console.log("Total Tip: $" + bill.totalTip());
console.log(daniel.name + " pays: $" + (daniel.total() + daniel.tax(taxRate)).toFixed(2) + " for the meal including tax, plus $" + daniel.tip(tipRate).toFixed(2) + " in tips.");
console.log(zubair.name + " pays: $" + (zubair.total() + zubair.tax(taxRate)).toFixed(2) + " for the meal including tax, plus $" + zubair.tip(tipRate).toFixed(2) + " in tips.");
console.log(pat.name + " pays: $" + (pat.total() + pat.tax(taxRate)).toFixed(2) + " for the meal including tax, plus $" + pat.tip(tipRate).toFixed(2) + " in tips.");
};

//execute code
bill.breakdown();
