const AddressBook = require('./services/AddressBook');
const Contact = require('./model/Contact');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Vivek", "Patel", "Bhopal", "India", "M.P.", "100000", "9876543210", "vivek@gmail.com"
    );
    console.log(addressBook.addContact(contact1)); 

    const contact2 = new Contact(
        "Arjun", "Chouhan", "Bhopal", "India","M.P.","100000","9197979988","arjun@gmail.com"
    )
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "ab", "cd", "abc", "In", "mp", "1001", "12345", "muskan-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}