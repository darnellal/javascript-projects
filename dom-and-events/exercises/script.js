function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', function() {
        console.log("Liftoff Button Clicked");
        paragraph.innerHTML = "Houston, we have liftoff!";
    });

    missionAbort.addEventListener('click', function() {
        let isConfirmed = window.confirm('Are you sure you want to abort the mission?')
        if (isConfirmed) {
            console.log("Abort Confirmed")
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
        }
    });

    missionAbort.addEventListener('mouseover', function(event) {
        console.log("Mouse over abort button.");
        event.target.style.backgroundColor = 'red';
    });

    missionAbort.addEventListener('mouseout', function(event) {
        console.log("Mouse off abort button.");
        event.target.style.backgroundColor = "";
    });
}

window.addEventListener("load", init);
