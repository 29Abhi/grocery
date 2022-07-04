let cart_data = JSON.parse(localStorage.getItem("cart_items")) || [];

let total_price = 0;

cart_data.map(function(elem){
    total_price = total_price + Number(elem.price);
    document.getElementById("cart_total").innerText = total_price;
})

function appendtocart(cart_data){
    cart_data.map(function(elem,index){

        let box = document.createElement("div");
        box.setAttribute("class","itemdiv")

        let image = document.createElement("img")
        image.src = elem.price;

        let name = document.createElement("h3")
        name.textContent = elem.name;

        let price = document.createElement("h3");
        price.textContent = elem.price;

        let btn = document.createElement("button")
        btn.setAttribute("class", "remove")
        btn.innerText = "Remove";

        btn.addEventListener("click",function(){
            remove(elem,index);
        })

        box.append(image,name,price,btn);
        document.getElementById("cart").append(box);


    })
}

function remove(elem,index){
    cart_data.splice(index,1);
    localStorage.setItem("cart_items",JSON.stringify(cart_data));
    window.location.reload();
}