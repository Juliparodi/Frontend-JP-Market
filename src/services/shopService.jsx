import apiClient, {authRequest} from './api';

export const getProducts = async () => {
    const response = await apiClient.get('/api/product/all');
    return response.data;
};

export const getProductById = async (id) => {
    const response = await apiClient.get(`/api/product/${id}`);
    return response.data;
};

export const getCategories = async () => {
    const response = await apiClient.get('/api/category/all');
    return response.data;
};

export const getPromotions = async () => {
    const response = await apiClient.get('/api/promotion/all');
    return response.data;
};

export const checkInventory = async (skuCodes) => {
    // skuCodes is an array of strings
    const params = new URLSearchParams();
    skuCodes.forEach(code => params.append('skuCode', code));
    const response = await apiClient.get(`/api/inventory`, { params });
    return response.data;
};

export const placeOrder = async (orderRequest) => {
    const response = await apiClient.post('/api/order', orderRequest, authRequest({}));
    return response.data;
};

// Utility function to generate a SKU Code from a product
export const generateSkuCode = (product) => {
    // In a real scenario, this logic might be more complex
    // For this migration, we use a slugified name + variations
    let base = product.name ? product.name.toLowerCase().replace(/[^a-z0-9]/g, '-') : 'unknown';
    return `sku-${base}-${product.id || Math.floor(Math.random() * 1000)}`;
};
