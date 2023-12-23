import CustomerService from "../service/customerService.js";

$(document).ready(function () {
  let response = CustomerService.getCustomerDetails()
    .then((resp) => {
      // console.log(resp.data);
      // console.log(resp.data[0]._customerName);
      //   return resp;
      $("#customerDetails").html(`<table class='cust_table'></table>`);
      $(".cust_table").html(
        `<tr><th>ID</th><th>Name</th><th>Number</th><th>Email</th><th>DOB</th><th>Gender</th><th>Address</th></tr>`
      );
      let customers = resp.data;
      for (let cust of customers) {
        let row = `
    <tr class='table-row' id="table-row">
        <td>${cust.id}</td><td>${cust._customerName}</td>
        <td>${cust._customerNumber}</td>
        <td>${cust._customerEmail}</td>
        <td>${cust._customerDOB}</td>
        <td>${cust._customerGender}</td>
        <td>${cust._customerAddress}</td>
    </tr>`;
        $(".cust_table").append(row);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
