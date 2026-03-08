import JsonStore from "./json-store.js";

const restaurantStore = {

  store: new JsonStore("./models/restaurant-store.json", { restaurantCollection: [] }),
  collection: "restaurantCollection",

  getAllCategories() {
    return this.store.findAll(this.collection);
  },

  getCategoryById(id) {
    return this.store.findOneBy(this.collection, (category) => category.id === id);
  }

};

export { restaurantStore };