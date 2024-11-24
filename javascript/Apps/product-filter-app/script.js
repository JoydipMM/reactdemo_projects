let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white-tshirt.jpg",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "short-skirt.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "sporty-smartwatch.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "knitted-top.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "black-leather-jacket.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "pink-trousers.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "brown-jacket.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "comfy-gray-pants.jpg",
      },
    ],
  };


  let cardsHolder = document.getElementById("products_row"); 
  let filterButtons = document.getElementById("filter_buttons")

  for(let item of products.data){
    let card = document.createElement("div");
    card.classList.add("col-4","product-card", `${item.category.toLowerCase()}`);
    card.innerHTML = `
        <div class="card mb-4">
            <div class="card-img-box">
                <img src="images/${item.image}" class="card-img-top" alt="product">
            </div>
            <div class="card-body">
                <h5 class="card-title">${item.productName}</h5>
                <div class="row justify-content-between mb-3">
                    <div class="col">category: <b class="card-category">${item.category}</b></div>
                    <div class="col">price: <b>$${item.price}</b></div>
                </div>
                <a href="#" class="btn btn-primary">View Details</a>
            </div>
        </div>
    `;
    cardsHolder.appendChild(card);
  }


  function filterProduct(value){

    // active clicked button
    Array.from(filterButtons.children).forEach((button)=>{
        if(value.toLowerCase() === button.innerText.toLowerCase()){
            button.classList.remove("btn-secondary");
            button.classList.add("btn-primary");
        }else{
            button.classList.remove("btn-primary");
            button.classList.add("btn-secondary");
        }
    })
    // show / hide as per get filter button value
    Array.from(cardsHolder.children).forEach((card)=>{
        if (value == "all") {
            card.classList.remove("hide");
        }else{
            if(card.classList.contains(value.toLowerCase())){
                card.classList.remove("hide");
            }else{
                card.classList.add("hide");
            }
        }
    })

  }


  function search(){
    let searchText = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".card-title");
    let cards = document.querySelectorAll(".product-card");
    //loop through all elements
    elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchText.toLowerCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
  }


  filterProduct("all");