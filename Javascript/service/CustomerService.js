class CustomerService {
  static URL = `http://localhost:3000/customers`;
  static async addCustomerDetails(customer) {
    // post API to insert the records.
    return await axios.post(this.URL, customer);
    // console.log("In service:", result);
  }

  static async getCustomerDetails() {
    // to fetch data from url we have get api
    return await axios.get(this.URL);
  }
}
export default CustomerService;
