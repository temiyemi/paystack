/*
Paystack API - Settlements
*/

const route = "/settlement";

module.exports = {
  /*
  Get Settlements
  */
  list: {
    method: "get",
    route: route,
    params: ["from", "to", "subaccount"] // ...
  }
};
