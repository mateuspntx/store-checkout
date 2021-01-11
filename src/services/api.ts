const getAllProducts = async () => {
  const products = await fetch('http://localhost:3000/api/products');

  return products.json();
};

export { getAllProducts };
