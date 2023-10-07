document.addEventListener('DOMContentLoaded', function () {
    // Car 1
    document.getElementById('car1').addEventListener('mouseover', function () {
        document.getElementById('hover-sound').play();
    });

    document.getElementById('car1').addEventListener('mouseout', function () {
        document.getElementById('hover-sound').pause();
        document.getElementById('hover-sound').currentTime = 0;
    });

    // Car 2
    document.getElementById('car2').addEventListener('mouseover', function () {
        document.getElementById('hover-sound2').play();
    });

    document.getElementById('car2').addEventListener('mouseout', function () {
        document.getElementById('hover-sound2').pause();
        document.getElementById('hover-sound2').currentTime = 0;
    });

    // Car 3
    document.getElementById('car3').addEventListener('mouseover', function () {
        document.getElementById('hover-sound3').play();
    });

    document.getElementById('car3').addEventListener('mouseout', function () {
        document.getElementById('hover-sound3').pause();
        document.getElementById('hover-sound3').currentTime = 0;
    });
    // Car 4
    document.getElementById('car4').addEventListener('mouseover', function () {
        document.getElementById('hover-sound4').play();
    });

    document.getElementById('car4').addEventListener('mouseout', function () {
        document.getElementById('hover-sound4').pause();
        document.getElementById('hover-sound4').currentTime = 0;
    });
});
