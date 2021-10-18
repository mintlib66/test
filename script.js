document.addEventListener('DOMContentLoaded', () => {
    const count = document.querySelector(".countNum");

    if(localStorage.getItem("count")){
        count.innerHTML = localStorage.getItem("count");
        console.log(count);
    }

    document.querySelector(".countUpBtn").addEventListener("click", function(){
        count.innerHTML = parseInt(count.innerHTML)+1;
        localStorage.setItem("count", count.innerHTML);
    });

})
