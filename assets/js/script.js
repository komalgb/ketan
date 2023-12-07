var sliderManin= document.querySelector(".slider-main");
let item=document.getElementsByClassName("item");
function next(){
    sliderManin.append(item[0]);
}
function prev(){
    sliderManin.prepend(item[item.length-1]);

}
setInterval(
    next,5000
)
