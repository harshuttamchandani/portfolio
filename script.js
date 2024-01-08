<script>
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var navbar = document.getElementById("navbar");

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('open');
        // You should not need to manually set the style if the CSS is correct
    });
});
</script>