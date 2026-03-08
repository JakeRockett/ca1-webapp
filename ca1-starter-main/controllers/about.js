export const aboutController = {

  index(request, response) {

    const viewData = {
      title: "About the App"
    };

    response.render("about", viewData);
  },

};