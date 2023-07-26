var cards = document.querySelectorAll(".cards");

for (var i=0; i < cards.length; i++){
    let card = cards[i];

    card.addEventListener('mouseover', function() {
        card.style.transform = "scale(1.03)";
    });

    card.addEventListener('mouseout', function() {
        card.style.transform = "scale(1)";
    });
}