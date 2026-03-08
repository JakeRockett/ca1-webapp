import { restaurantStore } from "../models/restaurant-store.js";

export const dashboardController = {

  index(request, response) {

    const categories = restaurantStore.getAllCategories();

    const viewData = {
      title: "Restaurant Dashboard",
      categories: categories
    };

    response.render("dashboard", viewData);
  },

};