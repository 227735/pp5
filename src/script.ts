const form = document.getElementById('formTest');

let customerData: Customer[] = [];

function getData(event: Event): void {
  event.preventDefault();
  let companyName = (document.getElementById('companyName') as HTMLInputElement).value;
  let nip = (document.getElementById('nip') as HTMLInputElement).value;
  let city = (document.getElementById('city') as HTMLInputElement).value;
  let street = (document.getElementById('street') as HTMLInputElement).value;
  let houseNumber = (document.getElementById('houseNumber') as HTMLInputElement).value;
  let flatNumber = (document.getElementById('flatNumber') as HTMLInputElement).value;
  let areaCode = (document.getElementById('areaCode') as HTMLInputElement).value;
  let comments = (document.getElementById('comments') as HTMLInputElement).value;
  let industry = (document.getElementById('formSelect') as HTMLSelectElement).value;
  let active = (document.getElementById('flexCheckDefault') as HTMLInputElement).checked ? "Aktywny" : "Nieaktywny";
  const customer = { companyName, nip, city, street, houseNumber, flatNumber, areaCode, comments, industry, active };
  console.log(customer);
  customerData.push(customer);
  console.log(customerData);
}

function fillData(customer: Customer): void {
  (document.getElementById('companyName') as HTMLInputElement).value = "XYZ";
  (document.getElementById('nip') as HTMLInputElement).value = "2362327";
  (document.getElementById('city') as HTMLInputElement).value = "Kraków";
  (document.getElementById('street') as HTMLInputElement).value = "Krakowska";
  (document.getElementById('houseNumber') as HTMLInputElement).value = "22";
  (document.getElementById('flatNumber') as HTMLInputElement).value = "2";
  (document.getElementById('areaCode') as HTMLInputElement).value = "35-456";
  (document.getElementById('comments') as HTMLInputElement).value = "Test";
  (document.getElementById('formSelect') as HTMLSelectElement).value = "1";
  (document.getElementById('flexCheckDefault') as HTMLInputElement).checked = true;
}

function showForm(): void {
  (document.getElementById('client-list') as HTMLElement).style.display = 'none';
  (document.getElementById('form-content') as HTMLElement).style.display = 'block';
  console.log("test");
}

function showClients(): void {
  (document.getElementById('client-list') as HTMLElement).style.display = 'block';
  (document.getElementById('form-content') as HTMLElement).style.display = 'none';
}

function sendData(event: Event): void {
  event.preventDefault();
  let ul = (document.getElementById('client-list-ul') as HTMLUListElement);

  customerData.forEach((customer) => {
    ul.innerHTML += `<li class="list-group-item">${customer.companyName}</li>`;
  });

  (document.getElementById('client-list') as HTMLElement).style.display = 'block';
  (document.getElementById('form-content') as HTMLElement).style.display = 'none';
}






// const form = document.getElementById('formTest')



// let customerData = []

// function getData(event){
//     event.preventDefault();
//     let companyName = document.getElementById('companyName').value
//     let nip = document.getElementById('nip').value
//     let city = document.getElementById('city').value
//     let street = document.getElementById('street').value
//     let houseNumber = document.getElementById('houseNumber').value
//     let flatNumber = document.getElementById('flatNumber').value
//     let areaCode = document.getElementById('areaCode').value
//     let comments = document.getElementById('comments').value
//     let industry = document.getElementById('formSelect').value;
//     let active = document.getElementById('flexCheckDefault').checked ? "Aktywny" : "Nieaktywny";
//     const customer = {companyName, nip, city, street, houseNumber, flatNumber, areaCode, comments, industry, active}
//     console.log(customer)
//     customerData.push(customer)
//     console.log(customerData)
//   };

// function fillData(customer){
//     document.getElementById('companyName').value = "XYZ"
//     document.getElementById('nip').value = "2362327"
//     document.getElementById('city').value = "Kraków"
//     document.getElementById('street').value = "Krakowska"
//     document.getElementById('houseNumber').value = "Test"
//     document.getElementById('flatNumber').value = "Test"
//     document.getElementById('areaCode').value = "Test"
//     document.getElementById('comments').value = "Test"
//     document.getElementById('formSelect').value = "1"
//     document.getElementById('flexCheckDefault').checked = true
// };

// function showForm(){
//   document.getElementById('client-list').style.display = 'none'
//   document.getElementById('form-content').style.display = 'block'
//   console.log("test")
// };

// function showClients(){
//   document.getElementById('client-list').style.display = 'block'
//   document.getElementById('form-content').style.display = 'none'
// };

// function sendData(event){
//   event.preventDefault()
//   let ul = document.getElementById('client-list-ul')

//   customerData.forEach((customer) =>{
//     ul.innerHTML += `<li class="list-group-item">${customer.companyName}</li>`
//   })
//   document.getElementById('client-list').style.display = 'block'
//   document.getElementById('form-content').style.display = 'none'
// }
