function toggleSideNav() {  
    var sideNav = document.querySelector(".side-nav")
    if (sideNav.style.width === "" || sideNav.style.width === "0px") {
        sideNav.style.width = "320px";
        console.log(sideNav.style.width);
    } else {
        sideNav.style.width = "0px";
    }
}