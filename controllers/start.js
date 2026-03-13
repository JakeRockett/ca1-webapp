export const startController = {

  index(request, response) {

    const viewData = {
      title: "Restaurant Collection App"
    };

    response.render("start", viewData);
  },

};