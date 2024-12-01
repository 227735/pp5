class Customer{
    constructor(){}
    companyName = ""
    nip = ""
    city = ""
    street = ""
    houseNumber = ""
    flatNumber = ""
    areaCode = ""
    floatingTextarea = ""
    getAddress = function(){
        return `${city.value}, ${street.value}, ${houseNumber.value} / ${flatNumber.value}, ${areaCode.value}`
    }
    getCustomerData = function(){
        return `${companyName.value}, ${nip.value}, ${city.value}, ${street.value}, ${houseNumber.value}, ${flatNumber.value}, ${areaCode.value}, ${floatingTextarea.value}`
    }
}