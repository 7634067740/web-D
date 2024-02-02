document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audio');
    // Play the audio
    audio.play()
    .catch(error => {
        console.log("Auto-play was prevented by the browser.");
        // Handle the situation where autoplay is not allowed.
        // You might show a play button or a notification to the user in this case.
    });
});
