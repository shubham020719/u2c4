// write js code here corresponding to index.html
// You should add submit event on the form
document.addEventListener("submit",myfunction)
    var dataarr = []
    function myfunction(){
    event.preventDefault()
    var data = {
        Mnum : document.querySelector("#matchNum").value,
        teamA : document.querySelector("#teamA").value,
        teamB : document.querySelector("#teamB").value,
        date : document.querySelector("#date").value,
        vanue : document.querySelector("#venue").value
   }
   dataarr.push(data)
//    console.log(dataarr)
   localStorage.setItem("schedule",JSON.stringify(dataarr));
}

