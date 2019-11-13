// class implementation
handleCustomerAmount(customer, customerType, amount) {
  if(customer) { handleCustomer() }
  if(customerType) { handleCustomerType() }
  if(amount > MAX_VALUE) { handleMaxValue() }
}

// class spec
describe("#handleCustomerAmount", () => {
  it("should call handleCustomer");
  it("should call handleCustomerType");
  it("should call handleMaxValue");
});
