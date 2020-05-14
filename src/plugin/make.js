const zyl = require("@/assets/image/zyl.png");
export function addImg() {
    const wall = document.getElementById("wall");
    const btn = document.getElementById("btn");
    btn.onclick = function () {
        let photo = document.createElement("img");
        photo.className = "zhuyilong";
        photo.src = zyl;
        wall.appendChild(photo);
    }
}