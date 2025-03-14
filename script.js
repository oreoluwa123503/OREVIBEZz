function showMessage() {
    alert("Hello world!");
    function toggledarkmode(){
        let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
        let index = 0;
        
        function nextImage() {
            index = (index + 1) % images.length;
            document.getElementById("slider").src = images[index];
        } 
        function validateForm() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let errorMessage = document.getElementById("error-message");
        
            if (name === "" || email === "") {
                errorMessage.innerText = "Please fill out all fields!";
                return false;
            }
        
            alert("Form submitted successfully!");
            return true;
        }
        let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("slider").src = images[index];
}
let images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];
let index = 0;

function changeImage() {
    index = (index + 1) % images.length;
    document.getElementById("slider-image").src = images[index];
}

// Change image every 3 seconds
setInterval(changeImage, 3000);