// Challenge 4: REDUCE
// Tính tổng giá (price) của tất cả sản phẩm còn hàng

function getTotalInStockPrice(productList) {
  return productList
    .filter((product) => product.inStock === true)
    .reduce((total, product) => total + product.price, 0);
}

// Danh sách sản phẩm để kiểm tra
const products = [
  {
    id: 1,
    name: "Bàn phím cơ",
    price: 1200000,
    inStock: true,
  },
  {
    id: 2,
    name: "Chuột không dây",
    price: 500000,
    inStock: false,
  },
  {
    id: 3,
    name: "Màn hình",
    price: 3500000,
    inStock: true,
  },
  {
    id: 4,
    name: "Tai nghe",
    price: 800000,
    inStock: false,
  },
];

// Gọi hàm
const totalPrice = getTotalInStockPrice(products);

// In kết quả
console.log("Tổng giá sản phẩm còn hàng:");
console.log(totalPrice);