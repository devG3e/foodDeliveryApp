// src/utils/api.js
const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const fetchMenuItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}/menu-items`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return [];
  }
};

// Add more API functions as needed (e.g., submitOrder, getUserProfile, etc.)
