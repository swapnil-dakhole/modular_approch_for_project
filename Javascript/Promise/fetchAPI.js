function getEmpDetails() {
  return new Promise((resolve, reject) => {
    let url = `http://localhost:3000/employee`;
    fetch(url)
      .then((resp) => {
        console.log(resp);
        if (resp.status == 200) {
          resolve(resp.json());
        } else {
          reject("something went wrong");
        }
      })
      .catch((error) => reject(error));
  });
}
getEmpDetails().then((data) => console.log(data));
