document.addEventListener("DOMContentLoaded", function() {
    let increase = document.getElementById("increase");
    let decrease = document.getElementById("decrease");
    let reset = document.getElementById("reset");
    let counterContainer = document.getElementById("counter"); 

    let counter = 0;
    let intervalId;

    increase.addEventListener("mousedown", startIncreasing);
    increase.addEventListener("mouseup", stopCounter);
    increase.addEventListener("mouseleave", stopCounter);
    increase.addEventListener("click", increaseCounter);

    decrease.addEventListener("mousedown", startDecreasing);
    decrease.addEventListener("mouseup", stopCounter);
    decrease.addEventListener("mouseleave", stopCounter);
    decrease.addEventListener("click", decreaseCounter);

    reset.addEventListener("click", resetCounter);

    function startIncreasing() {
        intervalId = setInterval(function() {
            counter++;
            updateCounter();
        }, 100); 
    }

    function startDecreasing() {
        intervalId = setInterval(function() {
            counter--;
            updateCounter();
        }, 100); 
    }

    function stopCounter() {
        clearInterval(intervalId);
    }

    function updateCounter() {
        counterContainer.innerHTML = counter;
        if (counter > 0) {
            counterContainer.style.color = "green";
        } else if (counter < 0) {
            counterContainer.style.color = "red";
        } else {
            counterContainer.style.color = "yellow";
        }
    }

    function increaseCounter() {
        counter++;
        updateCounter();
    }

    function decreaseCounter() {
        counter--;
        updateCounter();
    }

    function resetCounter() {
        counter = 0;
        updateCounter();
    }
});
