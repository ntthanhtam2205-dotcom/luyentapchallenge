// Challenge 3: FIND
// Tìm sản phẩm có id = 4
// Trả về object sản phẩm hoặc undefined nếu không tìm thấy

function findProductById(productList, id) {
  return productList.find((product) => product.id === id);
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
    inStock: true,
  },
];

// Tìm sản phẩm có id = 4
const foundProduct = findProductById(products, 4);

console.log("Sản phẩm tìm thấy:");
console.log(foundProduct);

// Thử tìm id không tồn tại
const notFoundProduct = findProductById(products, 99);

console.log("Sản phẩm không tồn tại:");
console.log(notFoundProduct);