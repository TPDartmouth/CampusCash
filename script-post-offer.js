document.getElementById('post-offer-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const amount = this['amount-dba'].value;
  const price = this['asking-price'].value;
  const location = this['meeting-location'].value;
  const fromTime = this['available-from'].value;
  const toTime = this['available-to'].value;

  if (!amount || !price || !location || !fromTime || !toTime) {
    alert('Please fill all required fields.');
    return;
  }

  alert(`Offer posted!\nDBA Amount: $${amount}\nPrice: $${price}\nLocation: ${location}\nAvailable: ${fromTime} to ${toTime}`);
  this.reset();
});