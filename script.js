function showLatte(){
    const content=document.getElementById('ing-content');
    content.innerHTML="<h3>Lattè Ingredients</h3><ul><li>Espresso</li><li>Steamed Milk</li></ul>";
    document.getElementById('ingOverlay').style.display='flex';
}

function showPinkDrink(){
    const content=document.getElementById('ing-content');
    content.innerHTML="<h3>Strawberry Lemonade Ingredients</h3><ul><li>Fresh Strawberries</li><li>Lemon Juice</li><li>Sugar</li><li>Water</li><li>Ice</li></ul>";
    document.getElementById('ingOverlay').style.display='flex';
}

function showCake(){
    const content=document.getElementById('ing-content');
    content.innerHTML="<h3>Red Velvet Pastry Ingredients</h3><ul><li>Buttermilk</li><li>Cocoa Powder</li><li>White Vinegar</li><li>Red Food Colouring</li><li>Cream Cheese</li><li>Maraschino Cherry</li></ul>";
    document.getElementById('ingOverlay').style.display='flex';
}

function showCroissant(){
    const content=document.getElementById('ing-content');
    content.innerHTML="<h3>Buttered Croissant Ingredients</h3><ul><li>Bread Flour</li><li>Unsalted Butter</li><li>Whole Milk</li><li>Active Dry Yeast</li><li>Granulated Sugar</li><li>Sea Salt</li><li>Egg</li></ul>";
    document.getElementById('ingOverlay').style.display='flex';
}

function showSundae(){
    const content=document.getElementById('ing-content');
    content.innerHTML="<h3>Ice Cream Sundae Ingredients</h3><ul><li>1 scoop each of vanilla, chocolate, and strawberry ice cream</li><li>Chocolate Syrup</li><li>Sprinkles</li><li>Maraschino Cherries</li><li>Chocolate Rolls</li><li>Dark Chocolate with White Chocolate Syrup</li></ul>";
    document.getElementById('ingOverlay').style.display='flex';
}

function hidePopup(){
    document.getElementById('ingOverlay').style.display='none';
}

const menu={latte:{name:'Lattè', price:4.50, qty:0},pinkDrink:{name:'Strawberry Lemonade',price:5.25,qty:0},redVelvet:{name:'Red Velvet Pastry',price:6.00,qty:0},croissant:{name:'Buttered Croissant',price:3.75,qty:0},sundae:{name:'Ice Cream Sundae',price:13.45,qty:0}};

function changeQty(key,amt){
    if(menu[key] && menu[key].qty+amt>=0){
        menu[key].qty+=amt;

        const qtyLabel=document.getElementById(key+'-qty');
        if(qtyLabel){
            qtyLabel.innerText=menu[key].qty;
        }
    }
}
function showBill(){
    const itemList=document.getElementById('bill-items-list');
    const tot=document.getElementById('billTotalPrice');

    itemList.innerHTML='';
    let totPrice=0;
    let f = false;

    for(const key in menu){
        const item=menu[key];
        if(item.qty>0){
            f=true;
            const cost=item.qty*item.price;
            totPrice+=cost;
            itemList.innerHTML+=`<div class="bill-row"><span>${item.name} x${item.qty}</span><span>$${cost.toFixed(2)}</span></div>`;
        }
    }

    if (!f) {
        alert("Cart is empty!");
        return;
    }

    tot.innerText=`$${totPrice.toFixed(2)}`;
    document.getElementById('billOverlay').style.display='flex';
}

function closeBill() {
  document.getElementById('billOverlay').style.display = 'none';
}