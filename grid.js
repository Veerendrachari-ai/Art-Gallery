
function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const hamburger = document.querySelector(".hamburger");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        hamburger.classList.remove("active");
    } else {
        sidebar.style.width = "250px";
        hamburger.classList.add("active");
    }
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector(".hamburger").classList.remove("active");
}
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
