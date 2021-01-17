const API_URL = 'http://localhost:3000';

const getAllProducts = async () => {
  const products = await fetch(`${API_URL}/api/products`);

  return await products.json();
};

const getProduct = async (slug: any) => {
  const product = await fetch(`${API_URL}/api/products/${slug}`);

  return await product.json();
};

export { getAllProducts, getProduct };
