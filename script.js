function toggleSideNav() {  
    let sideNav = document.querySelector(".side-nav")
    if (sideNav.style.width === "" || sideNav.style.width === "0px") {
        sideNav.style.width = "320px";
    } else {
        sideNav.style.width = "0px";
    }
}

function showHome() {
    let resume = document.querySelector(".resume");
    let resumeLink = document.querySelector(".resume-link");
    let home = document.querySelector(".home");
    let homeLink = document.querySelector(".home-link");
    home.style.display = 'flex';
    homeLink.classList.add("active-page");
    resume.style.display = 'none';
    resumeLink.classList.remove("active-page");

}

function showResume() {
    let resume = document.querySelector(".resume");
    let resumeLink = document.querySelector(".resume-link");
    let home = document.querySelector(".home");
    let homeLink = document.querySelector(".home-link");
    resume.style.display = 'flex';
    resumeLink.classList.add("active-page");
    home.style.display = 'none';
    homeLink.classList.remove("active-page");
}