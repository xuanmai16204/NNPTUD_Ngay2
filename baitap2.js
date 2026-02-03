// ============================================
// BÀI TẬP ĐỐI TƯỢNG PRODUCT VÀ MẢNG
// ============================================

// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
  new Product(1, "iPhone 15 Pro", 29900000, 50, "Điện thoại", true),
  new Product(2, "Samsung Galaxy S24", 24900000, 30, "Điện thoại", true),
  new Product(3, "Tai nghe AirPods Pro", 6990000, 0, "Accessories", false),
  new Product(4, "Ốp lưng silicone", 350000, 100, "Accessories", true),
  new Product(5, "MacBook Air M3", 32900000, 25, "Laptop", true),
  new Product(6, "Sạc dự phòng 20000mAh", 890000, 80, "Accessories", true),
];

// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm
const productNamePrice = products.map((p) => ({
  name: p.name,
  price: p.price,
}));
console.log("Câu 3 - Mảng name, price:", productNamePrice);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const inStockProducts = products.filter((p) => p.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng:", inStockProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensiveProduct = products.some((p) => p.price > 30000000);
console.log("Câu 5 - Có sản phẩm giá > 30.000.000?", hasExpensiveProduct);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
const accessoriesProducts = products.filter((p) => p.category === "Accessories");
const allAccessoriesAvailable = accessoriesProducts.every((p) => p.isAvailable === true);
console.log("Câu 6 - Tất cả Accessories đang bán?", allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
const totalInventoryValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);
console.log("Câu 7 - Tổng giá trị kho hàng:", totalInventoryValue.toLocaleString("vi-VN"), "VNĐ");

// Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("Câu 8 - Duyệt for...of:");
for (const product of products) {
  console.log(`${product.name} - ${product.category} - ${product.isAvailable}`);
}

// Câu 9: Dùng for...in để: In ra tên thuộc tính, In ra giá trị tương ứng
console.log("Câu 9 - Duyệt for...in (sản phẩm đầu tiên):");
const sampleProduct = products[0];
for (const key in sampleProduct) {
  if (sampleProduct.hasOwnProperty(key)) {
    console.log("  Tên thuộc tính:", key);
    console.log("  Giá trị:", sampleProduct[key]);
  }
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const availableAndInStockNames = products
  .filter((p) => p.isAvailable === true && p.quantity > 0)
  .map((p) => p.name);
console.log("Câu 10 - Tên sản phẩm đang bán và còn hàng:", availableAndInStockNames);
