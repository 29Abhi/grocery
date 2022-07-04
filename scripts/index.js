let total_item = document.getElementById("wallet");

async function getdata(){
    try{
        let url = `https://grocery-masai.herokuapp.com/items`;

        let reso = await fetch(url);
        let anual = await reso.json();
        console.log(anual);
        appenddata(anual.batch.data);
    
    } catch (err){
        console.log(err);
    }
}
getdata();

let groceries_data = JSON.parse(localStorage.getItem("cart_items")) || [];

function appenddata(data){

    document.getElementById("groceries").innerHTML = null;

    data.map(function(elem){

        let box = document.createElement("div");
        box.setAttribute("class","item")

        let image = document.createElement("img")
        image.src = elem.image;

        let name = document.createElement("h3");
        name.textContent = elem.name;

        let price = document.createElement("h3");
        price.textContent = elem.price;

        let btn = document.createElement("button")
        btn.setAttribute("class","add_to_cart");

        btn.innerText = "Add to cart";
        btn.addEventListener("click",function(){
            Addtocart(elem)
        })
        box.append(image,name,price,btn);
        document.getElementById("groceries").append(box);


    })
}

function Addtocart(elem){
    groceries_data.push(elem)
    localStorage.setItem("cart_items",JSON.stringify(groceries_data));

    total_item.innerHTML = "";
    total_item.innerText = JSON.parse(localStorage.getItem("cart_items")).length;
}