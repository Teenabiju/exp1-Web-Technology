function length() {
 const sentence = document.getElementById("lgth").value;
 const words = sentence.split(" ");
 let sLen = words[0].length,
 lLen = words[0].length;
 let sIndex = 0,
 lIndex = 0;
 words.forEach((word, index) => {
 if (word.length < sLen) {
 sLen = word.length;
 sIndex = index
 }
 if (word.length > lLen) {
 lLen = word.length;
 lIndex = index
 }
 })
 document.getElementById("otpt").innerHTML = "Longest Word: " + words[lIndex] + "<br><br>" + " Shortest Word: " + words[sIndex];
}

function bmi() {
 const h = parseFloat(document.getElementById("h").value);
 const w = parseFloat(document.getElementById("w").value);
 const bmi = (w) / (h * h);
 if (bmi < 18)
 document.getElementById("result2").innerHTML = "You are Underweight!";
 else if (bmi >= 18 && bmi <= 25)
 document.getElementById("result2").innerHTML = "You are Normal!";
 else if (bmi > 25 && bmi <= 30)
 document.getElementById("result2").innerHTML = "You are Overweight!";
 else if (bmi > 30)
 document.getElementById("result2").innerHTML = "You are Obese!";
}

function fruit() {
 const idx = Math.floor(Math.random() * 2);
 const img = ["https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?cs=srgb&dl=pexels-matheus-cenali-2487443.jpg&fm=jpg", "https://cdn-prod.medicalnewstoday.com/content/images/articles/272/272782/oranges-in-a-box.jpg"]
 const w = document.getElementById("width").value;
 document.getElementById("garden").innerHTML = "<img src=" + img[idx] + " height=" + h + " width=" + w + ">"

}

function convert() {
 const from = document.getElementById("from").value;
 const to = document.getElementById("to").value;
 let value = parseFloat(document.getElementById("value").value);
 if (from == "INR" && to == "USD") {
 value = value * 0.013;
 } else if (from == "USD" && to == "INR") {
 value = value * 79.71;
 } else
 value = "Choose Properly!"
 if (value == "Choose Properly!")
 document.getElementById("convertedValue").innerHTML = value;
 else
 document.getElementById("convertedValue").innerHTML = "Equivalent " + to + " value is " + value.toFixed(2);
}

let hc = 0,
 tc = 0;

function flip() {
 const idx = Math.floor(Math.random() * 2);
 const img = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqALKz0ryQHGXIoLCrHrN1h8o2aaRRoK2BYdH1A5p3Q&s","https://thumbs.dreamstime.com/b/one-rupee-coin-shiny-white-background-30801135.jpg"]
 if (idx == 0)
 hc += 1;
 else
 tc += 1;
 document.getElementById("coin").innerHTML = "<img src=" + img[idx] + "height=150 width=150" + ">"
 document.getElementById("count").innerHTML = "Head Count: " + hc + "<br>" + "Tail Count: " + tc;
}

function cake() {
 const type = document.getElementById("cake").value;
 const tip = parseInt(document.getElementById("tip").value);
 const tax = 9;
 let tcost, taxcost, total;
 if (type == "Small") {
 cakeCost = 100;
 taxcost = (cakeCost * (tax / 100));
 tcost = parseFloat(((cakeCost + taxcost) * (tip / 100)).toFixed(2));
 total = cakeCost + taxcost + tcost;
 } else if (type == "Medium") {
 cakeCost = 200;
 taxcost = (cakeCost * (tax / 100));
 tcost = parseFloat(((cakeCost + taxcost) * (tip / 100)).toFixed(2));
 total = cakeCost + taxcost + tcost;

 } else if (type == "Large") {
 cakeCost = 400;
 taxcost = (cakeCost * (tax / 100));
 tcost = parseFloat(((cakeCost + taxcost) * (tip / 100)).toFixed(2));
 total = cakeCost + taxcost + tcost;
 }

 document.getElementById("cost").innerHTML = "Cake Cost: " + cakeCost + "<br>" + "Tax Cost: " + taxcost + "<br>" + "Tip Cost: " + tcost + "<br><br>" + "Total Cost: " + total;
}
