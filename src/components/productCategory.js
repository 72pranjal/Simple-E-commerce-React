import productList from "../data/productList";

function getCategory() {
    let category = new Set();

    for(let itemm of productList) {
        category.add(itemm.category);
    }

    return [...category];
}

export default getCategory;