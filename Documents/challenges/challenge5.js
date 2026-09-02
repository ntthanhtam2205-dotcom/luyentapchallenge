// Challenge 5: FILTER + MAP
// Lọc các sản phẩm thuộc danh mục "Phụ kiện",
// sau đó trả về một mảng chỉ chứa tên sản phẩm.

function getAccessoryNames(productList) {
  return productList
    .filter((product) => product.category === "Phụ kiện")
    .map((product) => product.name);
}

const products = [
  {
    id: 1,
    name: "Bàn phím cơ",
    category: "Phụ kiện",
  },
  {
    id: 2,
    name: "Chuột không dây",
    category: "Phụ kiện",
  },
  {
    id: 3,
    name: "Màn hình",
    category: "Màn hình",
  },
  {
    id: 4,
    name: "Webcam HD",
    category: "Phụ kiện",
  },
  {
    id: 5,
    name: "USB-C Hub",
    category: "Phụ kiện",
  },
];

const result = getAccessoryNames(products);

console.log("Tên các sản phẩm thuộc danh mục Phụ kiện:");
console.log(result);
