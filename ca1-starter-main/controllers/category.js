import { restaurantStore } from "../models/restaurant-store.js";

export const categoryController = {

  index(request, response) {

    const categoryId = request.params.id;
    const category = restaurantStore.getCategoryById(categoryId);

    const viewData = {
      title: category.categoryTitle,
      category: category
    };

    response.render("category", viewData);
  },

};