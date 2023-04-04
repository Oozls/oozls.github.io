window.onload = function() {
    const warning = document.querySelector('#warning');
    if (window.innerWidth < window.innerHeight && !warning.classList.contains("active")) {
        warning.classList.add("active");
    } else {
        warning.classList.remove("active");
    }
}

/*setInterval(function() {
    if (window.innerWidth > window.innerHeight) {
        console.log("width is longer than height");
        var warning = document.getElementsByClassName('warning')[0];
        if (warning) {
            console.log("a");
            warning.style.opacity = 0;
        }
    } else {
        console.log("height is longer than width");
        var warning = document.getElementsByClassName('warning')[0];
        if (warning) {
            warning.style.opacity = 1;
        }
    }
  }, 1000);*/