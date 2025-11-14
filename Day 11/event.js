// Screen Sharing

let btn = document.querySelector("#btn")
console.log(btn);


btn.onclick = () =>{
    window.navigator.mediaDevices.getDisplayMedia()
}

// Web-Cam

let btn1 = document.querySelector("#btn1")
console.log(btn1);

btn1.onclick = () => {
    let video = document.getElementById("video")
    // console.log(video);

    window.navigator.mediaDevices.getUserMedia({
        audio : false,
        video : {height : 200, width : 200}
        // video : true
    })
    .then((stream) => {
        video.srcObject = stream
        video.play()
    })
    .catch(() => {
        console.log("Error Occured");
        
    })
}

// Text to Speech

let btn2 = document.getElementById("btn2")
console.log(btn2);

btn2.onclick = () => {
    let data = document.getElementById("data")
    console.log(data);
    let speech = new SpeechSynthesisUtterance
    speech.text = data.value
    speechSynthesis.speak(speech)
}

// Copy to clipboard

let btn3 = document.getElementById("btn3")
console.log(btn3);

btn3.onclick = () => {
    let data1 = document.getElementById("data1")
    console.log(data1);
    window.navigator.clipboard.writeText(data1.value)
    .then(() =>{
        window.alert("Copied")
    })
    .catch(() =>{
        console.log("Error occured");        
    })
    
}


