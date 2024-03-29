//business logic for AddressBook
function AddressBook() {
  this.contacts = []
  this.currentId = 0
}

AddressBook.prototype.addContact = function (contact){
  this.contacts.push(contact);
}

//business logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}
