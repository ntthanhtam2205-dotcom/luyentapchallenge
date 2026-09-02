// Challenge 2: FILTER
// Trả về các sản phẩm còn hàng (inStock === true)

function getInStockProducts(productList) {
  return productList.filter((product) => product.inStock === true);
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
const inStockProducts = getInStockProducts(products);

// In kết quả
console.log("Các sản phẩm còn hàng:");
console.log(inStockProducts);