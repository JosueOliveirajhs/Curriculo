document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".progress").forEach(progress => {
        let value = progress.getAttribute("data-progress");
        progress.style.width = value + "%";
    });
});
