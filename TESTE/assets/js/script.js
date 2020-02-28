let cor;
addEventListener('click', () => {
    document.body.style.backgroundColor = "red";
})

addEventListener('keypress', (e) => {
    if(e.keyCode === 98) {
        document.body.style.backgroundColor = "black";
    }
})