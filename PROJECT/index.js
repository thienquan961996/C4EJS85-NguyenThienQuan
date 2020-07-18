const productData = [
    {
        productID: "P001",
        productName: "iPhone 5",
        productBrand: "Apple",
        price: 399,
        quantity: 10,
        description: "lorem 1 ",
        provider: "FPT Telecom",
    },
    {
        productID: "P002",
        productName: "iPhone 6",
        productBrand: "Apple",
        price: 599,
        quantity: 9,
        description: "lorem 2",
        provider: "Viettel",
    },
    {
        productID: "P003",
        productName: "iPhone 7",
        productBrand: "Apple",
        price: 699,
        quantity: 45,
        description: "lorem 3",
        provider: "Thegioididong",
    },
    {
        productID: "P004",
        productName: "iPhone 8",
        productBrand: "Apple",
        price: 799,
        quantity: 34,
        description: "lorem 4",
        provider: "FPT Telecom",
    },
    {
        productID: "P005",
        productName: "iPhone X",
        productBrand: "Apple",
        price: 999,
        quantity: 8,
        description: "lorem 5",
        provider: "FPT Telecom",
    },
    {
        productID: "P006",
        productName: "Samsung galaxy S10",
        productBrand: "Samsung",
        price: 1500,
        quantity: 12,
        description: "lorem 6",
        provider: "Thegioididong",
    },
    {
        productID: "P007",
        productName: "Samsung galaxy A71",
        productBrand: "Samsung",
        price: 400,
        quantity: 14,
        description: "lorem 7",
        provider: "FPT Telecom",
    },
    {
        productID: "P008",
        productName: "OPPO Reno3",
        productBrand: "OPPO",
        price: 199,
        quantity: 32,
        description: "lorem 8",
        provider: "Viettel",
    },
    {
        productID: "P009",
        productName: "OPPO A92",
        productBrand: "OPPO",
        price: 299,
        quantity: 46,
        description: "lorem 9",
        provider: "FPT Telecom",
    },
    {
        productID: "P010",
        productName: "Samsung galaxy note 9",
        productBrand: "Samsung",
        price: 399,
        quantity: 25,
        description: "lorem 10",
        provider: "Thegioididong",
    }
];
console.log(productData);
const newID = document.getElementById('newID');
const newName = document.getElementById('newName');
const newBrand = document.getElementById('newBrand');
const newPrice = document.getElementById('newPrice');
const newQuantity = document.getElementById('newQuantity');
const newDescription = document.getElementById('newDescription');
const newProvider = document.getElementById('newProvider');
const add_btn = document.getElementById('add_btn');
const clear_btn = document.getElementById('clear_btn');
const table_body = document.getElementById('ts_tbody');
let num = 0;
let update_state = false;

function update_table() {
    table_body.innerHTML = '';
    for ( let data of productData){
        table_body.insertAdjacentHTML('beforeend', `<tr><td>${data.productID}</td><td>${data.productName}</td><td>${data.productBrand}</td><td>${data.price}</td><td>${data.quantity}</td><td>${data.description}</td><td>${data.provider}</td><td><button class = "remove_btn">X</button><button class = "update_btn">U</button></td></tr>`);
    };

const remove_btn = document.getElementsByClassName('remove_btn');
const update_btn = document.getElementsByClassName('update_btn');
    for ( let i = 0; i < remove_btn.length; i++){
    remove_btn[i].addEventListener('click', () => {
        productData.splice(i,1);
        update_table()
        console.log(productData);
       });

    };
    for ( let i = 0; i < update_btn.length; i++){
    update_btn[i].addEventListener('click', () => {
        update_state = true;
        num = i;
        newID.value = productData[i].productID;
        newName.value = productData[i].productName;
        newBrand.value = productData[i].productBrand;
        newPrice.value = productData[i].price;
        newQuantity.value = productData[i].quantity;
        newDescription.value = productData[i].description;
        newProvider.value = productData[i].provider;
       });
    };
};
update_table();


add_btn.addEventListener('click', () => {
    if ( newID.value == '' || newName.value =='' || newBrand.value == '' || newPrice.value =='' || newQuantity.value =='' || newDescription.value =='' || newProvider.value == ''){
        
        alert('do not leave blank')
    }else if (update_state) {
        productData[num] = {
            productID: newID.value,
            productName: newName.value,
            productBrand: newBrand.value,
            price: newPrice.value,
            quantity: newQuantity.value,
            description: newDescription.value,
            provider: newProvider.value,
        };
        update_state = false;
        update_table();
        newID.value = '';
        newName.value = '';
        newBrand.value = '';
        newPrice.value = '';
        newQuantity.value = '';
        newDescription.value = '';
        newProvider.value = '';
    }else{
        productData.push({
            productID: newID.value,
            productName: newName.value,
            productBrand: newBrand.value,
            price: newPrice.value,
            quantity: newQuantity.value,
            description: newDescription.value,
            provider: newProvider.value,
        });
        update_table();
        newID.value = '';
        newName.value = '';
        newBrand.value = '';
        newPrice.value = '';
        newQuantity.value = '';
        newDescription.value = '';
        newProvider.value = '';
    };
    console.log(productData);
});
clear_btn.addEventListener('click', () => {
        newID.value = '';
        newName.value = '';
        newBrand.value = '';
        newPrice.value = '';
        newQuantity.value = '';
        newDescription.value = '';
        newProvider.value = '';
        update_state = false;
    });
