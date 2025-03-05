const AddressBook = require('./services/AddressBook');
const Contact = require('./model/Contact');

const addressBook = new AddressBook();

try {
   
    const contact1 = new Contact(
    "Vivek", "Patel", "Bhopal", "India", "M.P.", "101001", "9589723580", "vivek@gmail.com"
    );
    console.log(addressBook.addContact(contact1)); 

    
const contact2 = new Contact(
    "Satyam", "Mishra", "Bhopal", "India", "M.P.", "100090", "9876541110", "satyam@gmail.com"
);
console.log(addressBook.addContact(contact2)); 
console.log("All Contacts Before editing", addressBook.getAllContacts());
console.log(addressBook.editContact("Rakesh", { address: "Pipariya", city: "New York", phone: "9234567890" }));
console.log("All Contacts After editing", addressBook.getAllContacts());
console.log(addressBook.deleteContact("Rakesh"));
console.log("All Contacts After Deleting:", addressBook.getAllContacts());
console.log("Total Contacts:", addressBook.countContacts());
} catch (error) {
console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "ab", "cd", "abc", "In", "I", "10001", "12345", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}
