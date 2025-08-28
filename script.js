let favouriteIDs = [
    "favourite-1",
    "favourite-2",
    "favourite-3",
    "favourite-4",
    "favourite-5",
    "favourite-6",
];
let contFav = document.getElementById("count-favourite");
for (let id of favouriteIDs) {
    document.getElementById(id).addEventListener("click", function () {
        contFav.innerText = parseInt(contFav.innerText) + 1;
    });
}

let copyIDs = ["copy-1", "copy-2", "copy-3", "copy-4", "copy-5", "copy-6"];

for (let id of copyIDs) {
}

let callIDs = ["call-1", "call-2", "call-3", "call-4", "call-5", "call-6"];

let totalCoins = document.getElementById("coins");
for (let id of callIDs) {
    document.getElementById(id).addEventListener("click", function () {
        let coin = parseInt(totalCoins.innerText);
        if (coin >= 20) {
            alert("Calling");
            coin -= 20;
        } else {
            alert("you need at least 20 coins");
        }
        totalCoins.innerText = coin;
    });
}
// console.log(childs[0].children[0].children[1].id);
