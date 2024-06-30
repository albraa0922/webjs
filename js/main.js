// start ger box
let box = document.querySelector(".gebox")
let ger = document.querySelector(".ico")
ger.onclick = function(){
    box.classList.toggle("open")
    ger.classList.toggle("fa-spin")
}

// start change color
let cloLis = document.querySelectorAll(".clor li")
cloLis.forEach(li => {
    li.addEventListener("click", (e) =>{
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
    })

});
// end change color

// end ger box

// start chang foto
let imgs = ["01.jpg","02.png" ,"03.jpg","04.jpg","05.jpg",];
let chPa = document.querySelector(".header");
let i = 0;
setInterval(() => {
if (i < imgs.length) {
chPa.style.backgroundImage = 'url("../css/img/'+imgs[i]+'")';
i++
}else{ i = 0;}
}, 10000);

// end chang foto

// star skiil
let myskills = document.querySelectorAll(".skill span")
const scrollPosition = window.scrollY;
function logScrollPosition() {
    const scrollPosition = window.scrollY;
    // console.log(`${scrollPosition}`)
    if(scrollPosition >650 && scrollPosition < 1200){
        myskills.forEach(span => {
            span.style.width = span.dataset.pro
          
        });
    }else{
        myskills.forEach(span => {
        span.style.width = "0"
          
        })
    }
}
window.addEventListener('scroll', logScrollPosition);
// end skiil

// start change photo
let mypho = document.querySelectorAll(".pho img")

mypho.forEach(img => {
    img.addEventListener("click",(e) =>{
        let mydiv = document.createElement("div")
        mydiv.className = ("cha")
        let mybox = document.createElement("div")
        mybox.className= ("box")
        let myim = document.createElement("img")
        document.body.appendChild(mydiv)
        mydiv.appendChild(mybox)
        mybox.appendChild(myim)
        myim.src = img.src

        // add close button
        let mybut =  document.createElement("span")
        let texn = document.createTextNode("x")
        mybut.className = ("but")
        mybut.appendChild(texn)
        mybox.appendChild(mybut)

        mybut.addEventListener("click",() =>{
            mydiv.remove()
        })

    } )
    
});
// end change photo
