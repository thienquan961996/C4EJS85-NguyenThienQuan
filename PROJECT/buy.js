var productData = [
    {
        productID: "P025",
        productName: "Huawei P40 Pro",
        productBrand: "Oppo",
        price: 21990000,
        quantity: 19,
        description: "Thỏa sức sáng tạo với 4 camera Leica chụp ảnh hàng đầu thế giới, mang đến cuộc cách mạng về hiệu năng bằng bộ vi xử lý Kirin 990 5G tiên tiến, Huawei P40 Pro mở ra một tương lai mới đầy đột phá dành cho bạn.",
        provider: "Viettel",
        inCart: 0,
        img: ['./img/ssa71-1.png', './img/ssa71-2.png', './img/ssa71-3.png']
    },
    {
        productID: "P001",
        productName: "Samsung Galaxy A31",
        productBrand: "Samsung",
        price: 5450000,
        quantity: 10,
        description: "Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.",
        provider: "Thegioididong",
        inCart: 0,
        img: ['./img/a31-1.png', './img/a31-2.png', './img/A31-3.png']
    },
    {
        productID: "P002",
        productName: "iPhone 7 plus",
        productBrand: "Apple",
        price: 9990000,
        quantity: 9,
        description: "iPhone 7 Plus dường như là sản phẩm được Apple chăm chút để vượt xa iPhone 7, trở thành sản phẩm rất đáng để nâng cấp so với iPhone 6s Plus khi được nâng cấp thêm camera kép cùng chức năng chụp chân dung xoá phông cực hot. Không chỉ vậy, nâng cấp đáng giá khác như tốc độ xử lý nhanh hơn, chống nước, bụi, loa ngoài sống động... Tất cả đã tạo nên một sản phẩm hàng đầu tuyệt vời",
        provider: "Viettel",
        inCart: 0,
        img: ['./img/ip7plus-1.png', './img/ip7pl-2.png', './img/ip7pl-3.png']
    },
    {
        productID: "P003",
        productName: "Oppo A31",
        productBrand: "OPPO",
        price: 4190000,
        quantity: 45,
        description: "Với bộ nhớ trong cực lớn 128GB, viên pin dung lượng cao 4230 mAh và màn hình giọt nước 6,5 inch, OPPO A31 mang đến cho bạn những trải nghiệm lớn hơn, giúp cuộc sống trở nên dễ dàng hơn.",
        provider: "Thegioididong",
        inCart: 0,
        img: ['./img/op31-1.png', './img/op31-2.png', './img/op31-3.png']
    },
    {
        productID: "P004",
        productName: "iPhone 8 plus",
        productBrand: "Apple",
        price: 15490000,
        quantity: 34,
        description: "Phiên bản iPhone 8 Plus 128GB có thể nói là bản lựa chọn bộ nhớ tối ưu nhất, phù hợp với tất cả mọi người. Tất nhiên không thể không kể đến những điều tuyệt vời mà Apple mang lại cho người dùng.",
        provider: "FPT Telecom",
        inCart: 0,
        img: ['./img/ssa71-1.png', './img/ssa71-2.png', './img/ssa71-3.png']
    },
    {
        productID: "P005",
        productName: "iPhone XS Max",
        productBrand: "Apple",
        price: 20999000,
        quantity: 8,
        description: "iPhone Xs Max 64GB là chiếc iPhone có màn hình lớn nhất từ trước đến nay, mang đến những trải nghiệm tuyệt vời về màn hình và thời lượng pin.",
        provider: "FPT Telecom",
        inCart: 0,
        img: ['./img/ssa71-1.png', './img/ssa71-2.png', './img/ssa71-3.png']
    },
    {
        productID: "P006",
        productName: "Samsung galaxy S10",
        productBrand: "Samsung",
        price: 15990000,
        quantity: 12,
        description: "Samsung Galaxy S10e là chiếc điện thoại nhỏ gọn hoàn hảo với hiệu năng mạnh mẽ nhất, camera thay đổi khẩu độ xuất sắc và màn hình Infinity-O tuyệt mỹ.",
        provider: "Thegioididong",
        inCart: 0,
        img: ['./img/sss10-1.png', './img/sss10-2.png', './img/sss10-3.png']
    },
    {
        productID: "P007",
        productName: "Samsung galaxy A71",
        productBrand: "Samsung",
        price: 8390000,
        quantity: 14,
        description: "Một sản phẩm thực sự đột phá, Samsung Galaxy A71 là tổng hòa của những công nghệ cao cấp nhất hiện nay với bộ 4 camera sau 64MP, màn hình 6,7 inch Full HD+ mãn nhãn và thời lượng pin trên cả tuyệt vời.",
        provider: "FPT Telecom",
        inCart: 0,
        img: ['./img/ssa71-1.png', './img/ssa71-2.png', './img/ssa71-3.png']
    },
    {
        productID: "P008",
        productName: "OPPO Reno3",
        productBrand: "OPPO",
        price: 11490000,
        quantity: 32,
        description: "Bạn đang cần một chiếc điện thoại chụp ảnh thực sự chuyên nghiệp ở cả camera trước và sau, hãy đến với OPPO Reno3 Pro, chiếc “camera phone” đẳng cấp, sẽ cùng bạn khai phá những khoảnh khắc vàng trong mọi bối cảnh.",
        provider: "Viettel",
        inCart: 0,
        img: ['./img/opreno-1.png', './img/opreno-2.png', './img/opreno-3.png']
    },
    {
        productID: "P009",
        productName: "OPPO A92",
        productBrand: "OPPO",
        price: 6490000,
        quantity: 46,
        description: "Màn hình chấm O tinh tế, hiệu năng mạnh mẽ, 4 camera AI 48MP và viên pin dung lượng cực “khủng”, bạn sẽ hoàn toàn hài lòng về OPPO A92, chiếc điện thoại siêu mượt mà, đầy đẳng cấp.",
        provider: "FPT Telecom",
        inCart: 0,
        img: ['./img/opa92-1.png', './img/opa92-2.png', './img/opa92-3.png']
    },
    {
        productID: "P010",
        productName: "Samsung galaxy note 9",
        productBrand: "Samsung",
        price: 24490000,
        quantity: 25,
        description: "Samsung Note 9 512GB Blue là chiếc điện thoại hoàn hảo nhất hiện nay với tất cả các tính năng đều xuất sắc và bút S Pen thông minh hơn bao giờ hết.",
        provider: "Thegioididong",
        inCart: 0,
        img: ['./img/ssnote9-1.jpg', './img/ssnote9-2.jpg', './img/ssnote9-3.jpg']
    },
    {
        productID: "P011",
        productName: "Vivo Y11",
        productBrand: "Samsung",
        price: 2990000,
        quantity: 15,
        description: "Thiết kế tuyệt đẹp tràn đầy cảm hứng và viên pin dung lượng cao 5000 mAh, Vivo Y11 mang đến cho bạn những trải nghiệm tuyệt vời trong suốt cả ngày dài năng động.",
        provider: "Thegioididong",
        inCart: 0,
        img: ['./img/vivoy11-1.png', './img/vivoy11-2.png', './img/vivoy11-3.png']
    },
    {
        productID: "P012",
        productName: "Samsung Galaxy S20+",
        productBrand: "Samsung",
        price: 16990000,
        quantity: 20,
        description: "Siêu phẩm Samsung S20+ đã xuất hiện. Thể hiện đẳng cấp đích thực với thiết kế cao cấp, màn hình lớn đẹp tuyệt mỹ, 5 camera chuyên nghiệp và hiệu suất đáng kinh ngạc.",
        provider: "Viettel",
        inCart: 0,
        img: ['./img/sss20-1.png', './img/sss20-2.png', './img/sss20-3.png']
    },
    {
        productID: "P013",
        productName: "Iphone SE",
        productBrand: "Apple",
        price: 12490000,
        quantity: 15,
        description: "Một chiếc iPhone nhỏ gọn mang trên mình bộ vi xử lý mạnh mẽ hàng đầu, iPhone SE 2020 với mức giá hấp dẫn chưa từng thấy sẽ là sự lựa chọn phù hợp dành cho tất cả người dùng.",
        provider: "Thegioididong",
        inCart: 0,
        img: ['./img/ipse-1.png', './img/ipse-2.png', './img/ipse-3.png']
    },
    {
        productID: "P014",
        productName: "Samsung Galaxy Z Flip",
        productBrand: "Samsung",
        price: 36000000,
        quantity: 16,
        description: "Một chiếc điện thoại vừa nhỏ gọn đáng kinh ngạc, lại vừa mang đến trải nghiệm mãn nhãn trên màn hình lớn chuẩn điện ảnh 6,7 inch, những điều tưởng như nằm ngoài giới hạn đã thực sự xuất hiện trên Samsung Galaxy Z Flip với thiết kế gập độc đáo và sáng tạo chưa từng thấy.",
        provider: "Thegioididong",
        inCart: 0,
        img: ['./img/ss-z-1.png', './img/ss-z-2.png', './img/ss-z-3.png']
    },
    {
        productID: "P015",
        productName: "Oppo Find X2",
        productBrand: "Oppo",
        price: 23990000,
        quantity: 13,
        description: "Tiếp tục sứ mệnh mở ra tương lai bằng những công nghệ mới, OPPO Find X2 mang đến cho bạn trải nghiệm chưa từng có, để bạn được cảm nhận sự đẳng cấp và những bước tiến vượt bậc trong ngành smartphone.",
        provider: "Viettel",
        inCart: 0,
        img: ['./img/op-fin-1.png', './img/op-fin-2.png', './img/op-fin-3.png']
    },
    {
        productID: "P016",
        productName: "Xiaomi Mi Note 10",
        productBrand: "Xiaomi",
        price: 9490000,
        quantity: 20,
        description: "Là một trong những smartphone đáng chú ý nhất của Xiaomi trên thị trường hiện nay, Mi Note 10 Lite đem tới trải nghiệm sử dụng cực kì cao cấp với cụm bốn camera hiện đại, chip xử lý Snapdragon 730 mạnh mẽ và màn hình hiển thị sắc nét được vuốt cong điệu đà về hai phía.",
        provider: "Viettel",
        inCart: 0,
        img: ['./img/xiaomi-1.png', './img/xiaomi-2.png', './img/xiaomi-3.png']
    },
    {
        productID: "P017",
        productName: "Vivo V19",
        productBrand: "Samsung",
        price: 8990000,
        quantity: 30,
        description: "Sở hữu thiết kế thời thượng với màn hình bấm lỗ và module camera chữ nhật đẹp mắt trên mặt lưng, Vivo V19 thể hiện rõ tinh thần hiện đại trẻ trung. Sản phẩm sẽ đem tới cho bạn sự hài lòng trong quá trình sử dụng ở mọi tác vụ, từ quay phim, chụp ảnh cho tới chơi game, nghe nhạc và xem video.",
        provider: "Thegioididong",
        inCart: 0,
        img: ['./img/vivo-v19-1.png', './img/vivo-v19-2.png', './img/vivo-v19-3.png']
    },
    {
        productID: "P018",
        productName: "Iphone 11 Pro Max",
        productBrand: "Apple",
        price: 28990000,
        quantity: 21,
        description: "Chiếc iPhone mạnh mẽ nhất, lớn nhất, thời lượng pin tốt nhất đã xuất hiện. iPhone 11 Pro Max chắc chắn là chiếc điện thoại mà ai cũng ao ước khi sở hữu những tính năng xuất sắc nhất, đặc biệt là camera và pin.",
        provider: "FPT Telecom",
        inCart: 0,
        img: ['./img/ip11-promax-1.png', './img/ip11-promax.jpg', './img/ip11-promax.jpg']
    },
    {
        productID: "P019",
        productName: "Oppo A5s",
        productBrand: "Oppo",
        price: 3290000,
        quantity: 40,
        description: "OPPO A5s chính hãng là một điện thoại thông minh tuyệt vời, được trang bị rất nhiều tính năng mạnh mẽ. Máy có một màn hình lớn, máy ảnh selfie và quay video sắc nét, dung lượng pin cao và giá bán phải chăng.",
        provider: "FPT Telecom",
        inCart: 0,
        img: ['./img/op-a5s-1.png', './img/op-a5s-2.png', './img/op-a5s-3.png']
    },
    {
        productID: "P020",
        productName: "Iphone XR 64GB",
        productBrand: "Apple",
        price: 15490000,
        quantity: 24,
        description: "Chiếc iPhone với màn hình Liquid Retina hoàn toàn mới, công nghệ màn hình LCD tiên tiến nhất đi cùng Face ID nhanh hơn, con chip mạnh mẽ và hệ thống camera xóa phông hoàn hảo. Đó chính là iPhone XR với nhiều màu sắc tuyệt vời đang chờ đón bạn.",
        provider: "FPT Telecom",
        inCart: 0,
        img: ['./img/ip11-xr-1.png', './img/ip11-xr-2.png', './img/ip11-xr-3.png']
    },
    {
        productID: "P021",
        productName: "Samsung Galaxy A80",
        productBrand: "Samsung",
        price: 8990000,
        quantity: 16,
        description: "Samsung A80 là chiếc điện thoại dẫn đầu kỷ nguyên mới với màn hình vô cực hoàn hảo, camera trượt xoay 180 độ độc đáo, cảm biến vân tay trong màn hình và những đột phá đầy ấn tượng.",
        provider: "FPT Telecom",
        inCart: 0,
        img: ['./img/ss-a80-1.png', './img/ss-a80-2.png', './img/ss-a80-3.png']
    },
    {
        productID: "P022",
        productName: "Realme 6 Pro",
        productBrand: "Samsung",
        price: 7990000,
        quantity: 18,
        description: "Cùng realme 6 Pro thể hiện đẳng cấp với màn hình 90Hz Pro, 6 camera 64MP AI, hiệu năng chuẩn Pro và rất nhiều tính năng “Pro” khác đang chờ đón bạn.",
        provider: "Thegioididong",
        inCart: 0,
        img: ['./img/realme-1.png', './img/realme-2.png', './img/realme-3.png']
    },
    {
        productID: "P023",
        productName: "Realme XT",
        productBrand: "Samsung",
        price: 6290000,
        quantity: 20,
        description: "Bạn đã sẵn sàng để chụp được những bức ảnh sắc nét đáng kinh ngạc chưa? Realme XT với 4 camera 64MP đẳng cấp mang đến khả năng chụp ảnh chuyên nghiệp, đẳng cấp đến không ngờ.",
        provider: "Viettel",
        inCart: 0,
        img: ['./img/realme-xt-1.png', './img/realme-xt-2.png', './img/realme-xt-3.png']
    },
    {
        productID: "P024",
        productName: "Nokia 5.3",
        productBrand: "Nokia",
        price: 3490000,
        quantity: 24,
        description: "Chiếc điện thoại mạnh mẽ, độ bền hoàn hảo và đặc biệt là 4 camera AI đỉnh cao, Nokia 5.3 là một phiên bản hoàn thiện tất cả các tính năng dành cho bạn, cùng bạn chinh phục những thử thách.",
        provider: "Viettel",
        inCart: 0,
        img: ['./img/nokia-1.png', './img/nokia-2.png', './img/nokia-3.png']
    },
    {
        productID: "P025",
        productName: "Huawei P40 Pro",
        productBrand: "Oppo",
        price: 21990000,
        quantity: 19,
        description: "Thỏa sức sáng tạo với 4 camera Leica chụp ảnh hàng đầu thế giới, mang đến cuộc cách mạng về hiệu năng bằng bộ vi xử lý Kirin 990 5G tiên tiến, Huawei P40 Pro mở ra một tương lai mới đầy đột phá dành cho bạn.",
        provider: "Viettel",
        inCart: 0,
        img: ['./img/huawei-p40-pro-xanh-1.png', './img/huawei-p40-pro-xanh-2.png', './img/huawei-p40-pro-xanh-3.png']
    }


]
let brand = ['oppo', 'apple', 'samsung', 'xiaomi'];

const accountData = [
    {
        accID: "u01",
        userName: "admin",
        password: "admin123",
        role: "admin",
    },
    {
        accID: "u02",
        userName: "userTest",
        password: "user123",
        role: "client",
    }
]

const loginForm = document.getElementById("login_form");
const adminForm = document.getElementById('admin_form')
const detaiForm = document.getElementById("detail_form");

const btnLogin = document.getElementById("btn_login");
const btnSubmit = document.getElementById("btnSubmit");
const btnLogout = document.getElementById("btn_logout");

const userName = document.getElementById("userName");
const password = document.getElementById("pwd");

const userForm = document.getElementById("user_form");
const cartForm = document.getElementById("cart_form");

// style display
loginForm.style.display = "none";
detaiForm.style.display = "none";
adminForm.style.display = "none";
userForm.style.display = "block";
btnLogout.style.display = "none";
cartForm.style.display = "block";



// ============= Login =====================
btnLogin.addEventListener("click", function () {
    loginForm.style.display = "block";
    userForm.style.display = "none";
    btnLogin.style.display = "none";
    cartForm.style.display = "none";
});
btnSubmit.addEventListener("click", function () {
    for (let i = 0; i < accountData.length; i++) {
        if (userName.value == accountData[i].userName && password.value == accountData[i].password) {
            if (accountData[i].role == "admin") {
                adminForm.style.display = "block";
                loginForm.style.display = "none";
                btnLogout.style.display = "block";
            } else if (accountData[i].role == "client") {
                loginForm.style.display = "none";
                alert("Welcome to " + accountData[i].userName);
                userForm.style.display = "block";
                cartForm.style.display = "block";
                btnLogout.style.display = "block";
            }
        }
    }
});
// ============= Login =====================
btnLogout.addEventListener("click", function () {
    adminForm.style.display = "none";
    userForm.style.display = "block";
    btnLogout.style.display = "none";
    btnLogin.style.display = "block";
    cartForm.style.display = "block";
});

// add new product
const newID = document.getElementById('newID');
const newName = document.getElementById('newName');
const newBrand = document.getElementById('newBrand');
const newPrice = document.getElementById('newPrice');
const newQuantity = document.getElementById('newQuantity');
const newDescription = document.getElementById('newDescription');
const newProvider = document.getElementById('newProvider');
const add_btn = document.getElementById('add_btn');
const clear_btn = document.getElementById('clear_btn');
// list of table
const table_body = document.getElementById('ts_tbody');
let num = 0;
let update_state = false;

function update_table() {
    table_body.innerHTML = '';
    for (let data of productData) {
        table_body.insertAdjacentHTML('beforeend',
            `<tr>
        <td>${data.productID}</td>
        <td>${data.productName}</td>
        <td>${data.productBrand}</td>
        <td>${data.price}</td>
        <td>${data.quantity}</td>
        <td>${data.description}</td>
        <td>${data.provider}</td>
        <td>
        <button class="remove_btn btn btn-danger">Delete</button>
        <button class="update_btn btn btn-info">Update</button>
        </td>
        </tr>`);
    };

    const remove_btn = document.getElementsByClassName('remove_btn');
    const update_btn = document.getElementsByClassName('update_btn');
    //Delete a product
    for (let i = 0; i < remove_btn.length; i++) {
        remove_btn[i].addEventListener('click', () => {
            productData.splice(i, 1);
            update_table()
            console.log(productData);
        });

    };
    // Show info product
    for (let i = 0; i < update_btn.length; i++) {
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
// Add and update prouct
function btnclear() {
    newID.value = '';
    newName.value = '';
    newBrand.value = '';
    newPrice.value = '';
    newQuantity.value = '';
    newDescription.value = '';
    newProvider.value = '';
};
add_btn.addEventListener('click', () => {
    if (!newID.value || !newName.value || !newBrand.value || !newPrice.value || !newQuantity.value || !newDescription.value || !newProvider.value) {
        alert('Do not leave blank');
    } else if (update_state) {
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
        btnclear();

    } else {
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
        btnclear();
    };
    console.log(productData);
});
// Event for clear btn
clear_btn.addEventListener('click', () => {
    update_state = false;
    btnclear();
});




//Tạo localStorage, đưa toàn bộ Product Data vào.
const storageProductData = 'productData';
localStorage.setItem(storageProductData, JSON.stringify(productData));
const productDataString = localStorage.getItem(storageProductData);

//đoạn điều kiện check xem data sản phẩm ban đầu có chứa thông tin hay chưa
if (productDataString) {
    productData = JSON.parse(productDataString);
} else {
    productData = [];
}
const listProduct = document.getElementById('listProduct');

// function này đọc dữ liệu từ array data ra và show ra html (màn hình)
function loadListProduct() {
    for (let i = 0; i < productData.length; i++) {
        listProduct.insertAdjacentHTML('beforeend', `
        <li style="background-color: darkgrey; height: 150px;width: 150px;" >
        <div class="product-show" >
            <a class="reletive" href="" onclick="">
                <img src="" alt="">
                <p>${productData[i].productName}</p>
                <p>${productData[i].price}</p>
            </a>
        </div>
        <div class="info-box">
        <a href="Main.html" ></a>
        <button class="btnAddCart" onclick="">Add to Cart</button>
        <button class="btnDetail" onclick="">Detail</button>
        </div>
    </li>` )
    };
    const btnDetail = document.getElementsByClassName('btnDetail');
    const btnAddCart = document.getElementsByClassName('btnAddCart');


    for (let i = 0; i < btnAddCart.length; i++) {
        btnAddCart[i].addEventListener('click', () => {
            cartNumber(productData[i]);
            cartTotal(productData[i]);
        })
    }
    for (let i = 0; i < productData.length; i++) {
        btnDetail[i].addEventListener('click', () => {
            userForm.style.display = "none";
            cartForm.style.display = "none";
            detaiForm.style.display = "block";

            const pDetail = document.getElementById("productDetail")

            pDetail.insertAdjacentHTML('beforeend',
                `<tr>
                <td>${productData[i].productID}</td>
                <td>${productData[i].productName}</td>
                <td>${productData[i].productBrand}</td>
                <td>${productData[i].price}</td>
                <td>${productData[i].quantity}</td>
                <td>${productData[i].description}</td>
                <td>${productData[i].provider}</td>
                </tr>`);
        });
    }
};

//function này hiển thị số product đã đc chọn có sẵn trong localstr, reload trang nhưg số sản phẩm trong cart k bị mất
function loadNumberInCart() {
    let productNumberInCarts = localStorage.getItem('CartNumbers');
    productNumberInCarts = parseInt(productNumberInCarts);
    if (productNumberInCarts) {
        document.getElementById('cartNumbers').textContent = productNumberInCarts;
    }
}
//function thêm vào giỏ hàng
function cartNumber(chosenProduct) {

    let productNumberInCarts = localStorage.getItem('CartNumbers'); //lấy ra số product đag có trong cart
    productNumberInCarts = parseInt(productNumberInCarts);
    //đoạn này kiểm tra xem trong cart có product nào chưa
    if (productNumberInCarts) {
        localStorage.setItem('CartNumbers', productNumberInCarts + 1);// có rồi thì +1
        document.getElementById('cartNumbers').textContent = productNumberInCarts + 1; //đoạn này hiển thị cart numberr lên màn hình
    } else {
        localStorage.setItem('CartNumbers', 1);
        document.getElementById('cartNumbers').textContent = 1; //chưa có thì = 1
    };
    inCartProduct(chosenProduct);
};
//function này lưu lại những product đã đc chọn.
function inCartProduct(chosenProduct) {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[chosenProduct.productID] == undefined) {
            cartItems = {
                ...cartItems,
                [chosenProduct.productID]: chosenProduct,
            }
        }
        cartItems[chosenProduct.productID].inCart += 1;
    } else {
        chosenProduct.inCart = 1;
        cartItems = {
            [chosenProduct.productID]: chosenProduct,
        }
    }
    localStorage.setItem('productInCart', JSON.stringify(cartItems));
};
//fuction này tính tổng giá trị sản phẩm đc chọn
function cartTotal(chosenProduct) {
    let cartTotal = localStorage.getItem('totalCart');
    if (cartTotal != null) {
        cartTotal = parseInt(cartTotal);
        localStorage.setItem('totalCart', cartTotal + chosenProduct.price);
    } else {
        localStorage.setItem('totalCart', chosenProduct.price);
    }
}
loadListProduct();
loadNumberInCart();

const content = document.getElementById('content');

function result_search(searchInfo, datas) {
    for (let i = 0; i < datas.length; i++) {
        let data = datas[i];
        let name = data.productName;
        let id = data.productID;
        let brand = data.productBrand;
        let price = data.price;
        let quantity = data.quantity;
        let description = data.description;
        let provider = data.provider;
        let chaHTML = `
        <br>
        <div style="text-align:  center; font-size: 30px">${name}</div>
  
      <div style="display: flex; flex-flow: row; justify-content: space-around;">
      <div>
          <span>id:${id}</span>
      </div>
      <div>
          <span>brand:${brand}</span>
      </div>
      <div>
          <span>price:${price}</span>
      </div>
      <div>
          <span>quantity:${quantity}</span>
      </div>
      <div>
          <span>description:${description}</span>
      </div>
      <div>
          <span>provider:${provider}</span>
      </div>
      <div>
          <span id="add_btn_of ${i}">Add to like</span>
      </div>
      </div>`;
        if (searchInfo == name) {
            content.insertAdjacentHTML('beforeend', chaHTML);
            document.getElementById(`add_btn_of ${i}`).addEventListener('click', () => { });
        } else if (searchInfo = brand) {
            content.insertAdjacentHTML('beforeend', chaHTML);
            document.getElementById(`add_btn_of ${i}`).addEventListener('click', () => { });
        } else if (searchInfo = provider) {
            content.insertAdjacentHTML('beforeend', chaHTML);
            document.getElementById(`add_btn_of ${i}`).addEventListener('click', () => { });
        } else if (i == datas.length - 1 && content.innerHTML == '') {
            content.innerHTML = 'no';
        }
    }
};

// function search(){
//     let btn = document.getElementById('search_btn');
//     btn.addEventListener('click', function(){
//         let search_bar = document.getElementById('search');
//         let searchInfo = search_bar.value;
//         content.innerHTML = '';
//         result_search(searchInfo,productData);
//         search_bar.value = '';

//     })
// }
// search();
// function autocomplete(inp, arr) {
//     var currentFocus;
//     inp.addEventListener("input", function (e) {
//       var a, b, i, val = this.value;
//       closeAllLists();
//       if (!val) { return false; }
//       currentFocus = -1;
//       a = document.createElement("DIV");
//       a.setAttribute("id", this.id + "autocomplete-list");
//       a.setAttribute("class", "autocomplete-items");
//       this.parentNode.appendChild(a);
//       for (i = 0; i < arr.length; i++) {
//         if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//           b = document.createElement("DIV");
//           b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//           b.innerHTML += arr[i].substr(val.length);
//           b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//           b.addEventListener("click", function (e) {
//             inp.value = this.getElementsByTagName("input")[0].value;
//             closeAllLists();
//           });
//           a.appendChild(b);
//         }
//       }
//     });
//     inp.addEventListener("keydown", function (e) {
//       var x = document.getElementById(this.id + "autocomplete-list");
//       if (x) x = x.getElementsByTagName("div");
//       if (e.keyCode == 40) {
//         currentFocus++;
//         addActive(x);
//       } else if (e.keyCode == 38) {
//         currentFocus--;
//         addActive(x);
//       } else if (e.keyCode == 13) {
//         e.preventDefault();
//         if (currentFocus > -1) {
//           if (x) x[currentFocus].click();
//         }
//       }
//     });
//     function addActive(x) {
//       if (!x) return false;
//       removeActive(x);
//       if (currentFocus >= x.length) currentFocus = 0;
//       if (currentFocus < 0) currentFocus = (x.length - 1);
//       x[currentFocus].classList.add("autocomplete-active");
//     }
//     function removeActive(x) {
//       for (var i = 0; i < x.length; i++) {
//         x[i].classList.remove("autocomplete-active");
//       }
//     }
//     function closeAllLists(elmnt) {
//       var x = document.getElementsByClassName("autocomplete-items");
//       for (var i = 0; i < x.length; i++) {
//         if (elmnt != x[i] && elmnt != inp) {
//           x[i].parentNode.removeChild(x[i]);
//         }
//       }
//     }
//     document.addEventListener("click", function (e) {
//       closeAllLists(e.target);
//     });
// }
// let datas = [];
// function autocomplete_data(){
//     datas = [];
//     for (let i = 0; i < productData.length; i++) {
//       datas[i] = productData[i].name;
//       datas[i + productData.length] = productData[i].brand;
//     }
//   }
//   autocomplete_data();
//   autocomplete(document.getElementById("search"), datas);

const filterBrand = document.getElementById('filterBrand');
const listBrand = document.getElementById('listBrand');

function filter() {
    for (let i = 0; i < brand.length; i++) {
        listBrand.insertAdjacentHTML('beforeend', `
        <a ><li  class= "itemBrand" style="background-color: darkgrey; height: 150px;width: 150px;" >
          ${brand[i]}
        </li></a>` )
    };
    let itemBrand = document.getElementsByClassName('itemBrand');
    for (let i = 0; i < itemBrand.length; i++) {
        itemBrand[i].addEventListener('click', () => {
            loadFilterBrand(brand[i])
        })
    }

}
filter();
const loadproduct = document.getElementById('loadproduct')
function loadFilterBrand(chosenBrand) {
    console.log(chosenBrand);
    for (let i = 0; i < productData.length; i++) {
        if (productData[i].productBrand.toLowerCase() == chosenBrand.toLowerCase()) {
            console.log('ok');
                loadproduct.insertAdjacentHTML('beforeend', `
                <li style="background-color: darkgrey; height: 150px;width: 150px;" >
                <div class="product-show" >
                    <a class="reletive" href="" onclick="">
                        <img src="" alt="">
                        <p>${productData[i].productName}</p>
                        <p>${productData[i].price}</p>
                    </a>
                </div>
                <div class="info-box">  
                <a href="Main.html" ></a>
                <button class="btnAddCart" onclick="">Add to Cart</button>
                <button class="btnDetail" onclick="">Detail</button>
                </div>
            </li>` )
            listProduct.style.display = 'none';    
        } else {
            console.log('fail');
            ;
        }
    }
}
// for( let i=0; i<productData.length;i++){


