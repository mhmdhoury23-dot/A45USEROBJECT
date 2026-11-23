const username = document.getElementById("name");
const age = document.getElementById("age");
const save = document.getElementById("save");
const display = document.getElementById("output");
save.addEventListener("click", () => {
    const user = {
        name: username.value,
        age: age.value
    };
    display.innerHTML = `Name: ${user.name}, Age: ${user.age}`;
});