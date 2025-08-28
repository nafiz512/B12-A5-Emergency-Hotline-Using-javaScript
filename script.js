function onClickFavourite(id) {
    let contFav = document.getElementById("count-favourite");
    document.getElementById(id).addEventListener("click", function () {
        contFav.innerText = parseInt(contFav.innerText) + 1;
    });
}

function onClickCall(id, msg, num) {
    let totalCoins = document.getElementById("coins");
    document.getElementById(id).addEventListener("click", function () {
        let coin = parseInt(totalCoins.innerText);
        if (coin >= 20) {
            alert("Calling " + msg + " : " + num);
            coin -= 20;
        } else {
            alert("you need at least 20 coins");
        }
        totalCoins.innerText = coin;
    });
}
async function copyTextToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Text copied to clipboard");
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}
function onClickCopy(id, num) {
    document.getElementById(id).addEventListener("click", function () {
        copyTextToClipboard(num);
        alert("copying " + num);
    });
}

let cards = document.getElementById("card-contact").children;

for (const card of cards) {
    let favouriteId = card.children[0].children[1].id;
    onClickFavourite(favouriteId);

    let msg = card.children[1].children[1].innerText;
    let num = card.children[2].children[0].innerText;
    let callId = card.children[3].children[1].id;
    onClickCall(callId, msg, num);
    let copyId = card.children[3].children[0].id;
    onClickCopy(copyId, num);
}
