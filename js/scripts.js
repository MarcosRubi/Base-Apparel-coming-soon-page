function validEmail() {
    let input = document.getElementById("txtEmail");
    let icon = document.querySelector("label.invalid");
    let placeholder = document.querySelector("label.placeholder");
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.value.trim() == "" || !regex.test(input.value)) {
        icon.classList.add("show");
        placeholder.style.color = "red";
        placeholder.style.fontSize = "0.8em";
        !regex.test(input.value) ? placeholder.innerHTML= "Please Enter A Valid Email Address" : ""
        input.value.trim() == "" ? placeholder.innerHTML= "Please Enter Your Email Address" : ""
    } else {
        icon.classList.remove("show");
        placeholder.style.color = "hsl(0, 6%, 24%)";
        placeholder.innerHTML= "Email Address"
        placeholder.style.fontSize = "0.8em";
    }
}
