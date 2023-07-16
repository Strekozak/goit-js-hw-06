const category = document.querySelectorAll(".item");


console.log("Number of categories:", category.length);


category.forEach(function (it) {
    console.log("Category:", it.firstElementChild.textContent);
    const elements = it.lastElementChild.children;
    console.log("Elements:", elements.length)
})
