function playMood(){
    const moodSelector = document.querySelector('#moodSelect');
    const selectedMood = moodSelector.value;
    const suggectionDisplay = document.querySelector("#suggestionContainer");

    // Adding the links and the color of background
    const moodLinks ={
        happy:{
            color:"#55D1E6",  //Aqua
            links:[
                "https://www.youtube.com/watch?v=CA_JjqvEGhw",
                "https://www.youtube.com/watch?v=Y5JlRb7-3LI",
                "https://www.youtube.com/watch?v=-00TFLT5ar0",
            ]
        },
        sad:{
            color:"#A0D13F",  //Green
            links:[
                "https://www.youtube.com/watch?v=CA_JjqvEGhw",
                "https://www.youtube.com/watch?v=Y5JlRb7-3LI",
                "https://www.youtube.com/watch?v=-00TFLT5ar0",
            ]
        },
        relaxed:{
            color:"#E6DF30",  //Yellow
            links:[
                "https://www.youtube.com/watch?v=CA_JjqvEGhw",
                "https://www.youtube.com/watch?v=Y5JlRb7-3LI",
                "https://www.youtube.com/watch?v=-00TFLT5ar0",
            ]
        },
        energetic:{
            color:"#E53927",  //Red
            links:[
                "https://www.youtube.com/watch?v=CA_JjqvEGhw",
                "https://www.youtube.com/watch?v=Y5JlRb7-3LI",
                "https://www.youtube.com/watch?v=-00TFLT5ar0",
            ]
        },
        Love:{
            color:"#E59896",  //Pink
            links:[
                "https://www.youtube.com/watch?v=CA_JjqvEGhw",
                "https://www.youtube.com/watch?v=Y5JlRb7-3LI",
                "https://www.youtube.com/watch?v=-00TFLT5ar0",
            ]
        }

    };

    // displaying links and bg colour
    if(selectedMood !== "default"){
        document.body.style.backgroundColor = moodLinks[selectedMood].color;
        suggectionDisplay.innerHTML = moodLinks[selectedMood].links.map(link => 
      `<a href="${link}" target="_blank">Click here for ${selectedMood} music</a>`
    ).join("");
    } else {
        document.body.style.backgroundColor = "#fff";
    suggestionDispaly.innerHTML = "";
    }
}