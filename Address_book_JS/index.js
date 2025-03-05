const AddressBook = require('./services/AddressBook');
const Contact = require('./model/Contact');

const addressBook = new AddressBook();

try {
   
    const contact1 = new Contact(
    "Vivek", "Patel", "Bhopal", "India", "M.P.", "101010", "9876543210", "muskan@gmail.com"
    );
    console.log(addressBook.addContact(contact1)); 

    
const contact2 = new Contact(
    "Satyam", "Mishra", "Bhopal", "India", "M.P.", "100099", "9876541110", "khushi@gmail.com"
);
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts Before editing", addressBook.getAllContacts());
    console.log(addressBook.editContact("Rakesh", { address: "Pipariya", city: "New York", phone: "9234567890" }));
    console.log("All Contacts After editing", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "ab", "cde", "abc", "In", "mp", "1001", "12345", "muskan-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}
