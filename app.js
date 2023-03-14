const track = document.getElementById("image-track")
// mousedown
//mousemove
window.onmousedown = e => {
   track.dataset.mouseDownAt = e.clientX;
//    console.log(track.dataset.mouseDownAt)
track.dataset.prevPercentage = track.dataset.percentage;

}
window.onmousemove = e =>{
   
    if(track.dataset.mouseDownAt === "0") return
    const mouseDelta = parseFloat(track.dataset.mouseDownAt)  - e.clientX,
    maxDelta = window.innerWidth / 2

    // convert this to jsx
    const percentage = (mouseDelta / maxDelta) * -100,
     nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage
     
        
        
    track.dataset.percentage = nextPercentage;
    track.style.transform = `translate(${nextPercentage}%,-50%)`
}
// you have to reset it to 0 whrn the mouse is not clicked
window.onmouseup = () => {
    track.dataset.mouseDownAt = "0"
    track.dataset.prevPercentage = track.dataset.percentage
}

// // if the mouse has moved 50% the translate should do the same
// window.onmousemove = e =>{
//     mda = track.dataset.mouseDownAt;


//     console.log("mouse moving")
//     track.style.transform = `translate(-40%,-40%)`
// }