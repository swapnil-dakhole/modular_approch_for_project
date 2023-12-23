import ProductService from "../service/ProductService.js";

$(document).ready(function () {
  $(document).on("click", ".btn", function () {
    let id = $(this).attr("productId");
    console.log(id);
    ProductService.deleteProduct(id)
      .then((resp) => {
        window.location.href = "../../HTML/productDetails.html";
        return resp;
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "../../HTML/productDetails.html";
      });
  });
});
