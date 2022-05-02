// write js code here corresponding to matches.html
// document.querySelector("tbody")
var x = JSON.parse(localStorage.getItem("schedule"))
// console.log(x);


x.forEach(function(el) {
    var tr = document.createElement("tr");
    var num = document.createElement("td")
    num.innerText=el.Mnum;
    var teamA = document.createElement("td")
    teamA.innerText=el.teamA;
    var teamB = document.createElement("td")
    teamB.innerText=el.teamB;
    var date = document.createElement("td")
    date.innerText=el.date;
    var venue = document.createElement("td")
    venue.innerText=el.vanue;

    var fav = document.createElement("td")
    fav.innerText="favourites";
    fav.setAttribute("id","frt")
    

    tr.append(num,teamA,teamB,date,venue,fav);
    document.querySelector("tbody").append(tr);
});
