const API_URL = 'https://store-checkout.free.beeceptor.com/api';

const getAllProducts = async () => {
  try {
    const data = await fetch(`${API_URL}/products`);
    const products = await data.json();

    return products;
  } catch (err) {
    console.log(err);
  }
};

const getProduct = async (slug: any) => {
  try {
    const data = await fetch(`${API_URL}/products/${slug}`);
    const product = await data.json();

    return product;
  } catch (err) {
    console.log(err);
  }
};

export { getAllProducts, getProduct };
