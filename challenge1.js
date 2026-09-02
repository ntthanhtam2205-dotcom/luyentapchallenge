// Challenge 1: MAP
// Trả về mảng tên của các sản phẩm

function getProductNames(productList) {
  return productList.map((product) => product.name);
}

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
];

// Gọi hàm 
const productNames = getProductNames(products);

console.log(productNames);