// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    console.log("Window loaded");

    const takeoffButton = document.getElementById('takeoff');
    takeoffButton.addEventListener('click', function() {
        const confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirm) {
            console.log("flight confirmed")
            const status = document.getElementById('flightStatus');
            status.innerHTML = "Shuttle in flight.";
            const background = document.getElementById('shuttleBackground');
            background.style.backgroundColor = "blue";
            let shuttleHeight = document.getElementById('spaceShuttleHeight');
            shuttleHeight.innerHTML = 10000;
        }
    });

    const landButton = document.getElementById('landing');
    landButton.addEventListener('click', function() {
        console.log("land button clicked")
        window.alert('The shuttle is landing. Landing gear engaged.');
        const status = document.getElementById('flightStatus');
        status.innerHTML = "The shuttle has landed.";
        const background = document.getElementById('shuttleBackground');
        background.style.backgroundColor = "";
        let shuttleHeight = document.getElementById('spaceShuttleHeight');
        shuttleHeight.innerHTML = 0;
    });

    const abortButton = document.getElementById('missionAbort');
    abortButton.addEventListener('click', function() {
        const confirm = window.confirm("Confirm that you want to abort the mission.");
        if (confirm) {
            console.log("flight aborted")
            const status = document.getElementById('flightStatus');
            status.innerHTML = "Mission aborted.";
            const background = document.getElementById('shuttleBackground');
            background.style.backgroundColor = "";
            let shuttleHeight = document.getElementById('spaceShuttleHeight');
            shuttleHeight.innerHTML = 0;
        }
    });
    
    const shuttlePos = document.getElementById('rocket');
    shuttlePos.style.position = 'absolute';
    shuttlePos.style.bottom = '0px';

    const upButton = document.getElementById('up');
    upButton.addEventListener('click', function() {
        console.log("Up button clicked");
        let currentBottom = parseInt(shuttlePos.style.bottom);
        shuttlePos.style.bottom = (currentBottom + 10) + 'px';
        let shuttleHeight = document.getElementById('spaceShuttleHeight');
        let currentHeight = parseInt(shuttleHeight.innerHTML)
        shuttleHeight.innerHTML = currentHeight + 10000;
    });

    const downButton = document.getElementById('down');
    downButton.addEventListener('click', function() {
        console.log("Down button clicked");
        let currentBottom = parseInt(shuttlePos.style.bottom);
        shuttlePos.style.bottom = (currentBottom - 10) + 'px';
        let shuttleHeight = document.getElementById('spaceShuttleHeight');
        console.log(shuttleHeight.innerHTML);
        console.log(typeof(shuttleHeight.innerHTML));
        let currentHeight = parseInt(shuttleHeight.innerHTML)
        shuttleHeight.innerHTML = currentHeight - 10000;
    });
});