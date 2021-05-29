function readMoreFunction() {
    const readmore = document.querySelector(".readmore");
    const button = document.querySelector("button");

    if (readmore.style.display === "inline"){

        readmore.style.display = "none";
        button.style.display = "block";
    }

    else {
        readmore.style.display = "inline";
        button.style.display = "none";
    }
}

