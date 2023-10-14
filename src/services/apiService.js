import axios from 'axios';

const BASE_URL = 'https://dummyapi.example.com/';

export default {
  // For getting a list of orders
  async getOrders() {
    try {
      const response = await axios.get(`${BASE_URL}orders`);
      return response.data;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  },

  // For adding a new order
  async addOrder(order) {
    try {
      const response = await axios.post(`${BASE_URL}orders`, order);
      return response.data;
    } catch (error) {
      console.error('Error adding an order:', error);
      throw error;
    }
  },

  // For updating an existing order
  async updateOrder(order) {
    try {
      const response = await axios.put(`${BASE_URL}orders/${order.id}`, order);
      return response.data;
    } catch (error) {
      console.error('Error updating an order:', error);
      throw error;
    }
  },

  // For deleting an order
  async deleteOrder(orderId) {
    try {
      const response = await axios.delete(`${BASE_URL}orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting an order:', error);
      throw error;
    }
  },
};
