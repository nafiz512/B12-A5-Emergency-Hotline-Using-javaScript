function onClickFavourite(id) {
    let contFav = document.getElementById("count-favourite");
    document.getElementById(id).addEventListener("click", function () {
        contFav.innerText = parseInt(contFav.innerText) + 1;
    });
}

function onClickCall(id, msg, num, title) {
    let totalCoins = document.getElementById("coins");
    document.getElementById(id).addEventListener("click", function () {
        let coin = parseInt(totalCoins.innerText);
        if (coin >= 20) {
            alert("Calling " + msg + " : " + num);
            coin -= 20;
            let div = document.createElement("div");
            let item = `<div
                            class="flex justify-between bg-gray-100 rounded-lg p-2"
                        >
                            <div>
                                <h3 class="font-bold">${title}</h3>
                                <p>${num}</p>
                            </div>
                            <div class="flex items-center">
                                <h3>11:36:58 AM</h3>
                            </div>
                        </div>`;
            div.innerHTML = item;
            document.getElementById("call-history").appendChild(div);
        } else {
            alert("you need at least 20 coins");
        }
        totalCoins.innerText = coin;
    });
}

function onClickCopy(id, num) {
    document.getElementById(id).addEventListener("click", function () {
        navigator.clipboard.writeText(num);

        let copy = document.getElementById("total-copy");
        copy.innerText = parseInt(copy.innerText) + 1;
        alert("copying " + num);
    });
}

let cards = document.getElementById("card-contact").children;

for (const card of cards) {
    let favouriteId = card.children[0].children[1].id;
    onClickFavourite(favouriteId);

    let msg = card.children[1].children[1].innerText;
    let title = card.children[1].children[0].innerText;
    let num = card.children[2].children[0].innerText;
    let callId = card.children[3].children[1].id;
    onClickCall(callId, msg, num, title);

    let copyId = card.children[3].children[0].id;
    onClickCopy(copyId, num);
}
