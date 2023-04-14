///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const foodTotal = cart.reduce((acc, curr) => {
    return acc + curr.price;
}, 0)

console.log(foodTotal);

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    const taxTotal = cartTotal * (1 + tax);
    const totalPrice = taxTotal - couponValue;
    return totalPrice;
}

const totalPrice = calcFinalPrice(70, 20, 0.09);
console.log(totalPrice); // 56.30


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE:
    => Definately a customer's name
    => Contact info, such as phone number, in case of reservation issues.
    => Contact info, email address for possible use of the restaurant's mailing list.
    => Reservation: # of people on the reservation.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: "Jack Black",
    email: "jackinblack@gmail.com",
    phoneNumber: "313-808-9113",
    reservation: 4
}

let custReserve = `${customer.name}, party of ${customer.reservation}; your table is ready.`;
console.log(custReserve); 
