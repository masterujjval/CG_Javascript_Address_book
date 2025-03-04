const prompt = require("prompt-sync")();

class AddressBook {
    constructor(firstName, lastName, address, city, state, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.phone = phone;
        this.email = email;
        this.validate();
    }

    // toString method
    validate(){
        let nameReg=new RegExp('^[A-Z]{1}[a-z]{2,}$');
        let addReg = new RegExp('^[A-Za-z\\s]{3,}$');
        let phoneReg=new RegExp('^[6-9]{1}[0-9]{9}');
        let emailReg = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
    
        if(!nameReg.test(this.firstName)|| !nameReg.test(this.lastName)){
        throw new Error("First and Last name should start with capital letters");
        }   
        // using else if ladder to check for validation
        else if(!addReg.test(this.city) || !addReg.test(this.address) || !addReg.test(this.state)){
        throw new Error("State, City or Address should contain minimum three characters!");
        }
         else if(!phoneReg.test(this.phone)){
        throw new Error("Enter valid phone number!");
        }
        else if(!emailReg.test(this.email)){
            throw new Error("Enter valid email!");
        
        }
        
        
        }
        
        
        
        
    
        // toString method to return string representation
        toString() {
            return `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nPhone: ${this.phone}\nEmail: ${this.email}\nCity: ${this.city}\nState: ${this.state}`;
        }
    
}

// Contact list
let contacts = [];

// Function to add new contact
const addContact = () => {
    console.log("\nAdd New Contact");
    let firstName = prompt("First Name: ");
    if(contacts.map(contact=>contact.firstName.toLowerCase()).includes(firstName.toLowerCase())){
        console.log("This record with name already exits")
    }
    else{
    let lastName = prompt("Last Name: ");
    let address = prompt("Address: ");
    let city = prompt("City: ");
    let state = prompt("State: ");
    let phone = prompt("Phone: ");
    let email = prompt("Email: ");

    let newContact = new AddressBook(firstName, lastName, address, city, state, phone, email);
    contacts.push(newContact);
    console.log("Contact added successfully!\n");
}};

// Function to display contacts
const displayContacts = () => {
    console.log("\nContact List:");
    if (contacts.length === 0) {
        return;
    }
    contacts.forEach((contact, index) => {
        console.log(`Contact ${index + 1}:\n${contact.toString()}`);
    });
};

// Function to edit contact by name
const editContact = () => {
    console.log("\n✏️ Edit Contact");
    let nameToEdit = prompt("Enter first name of contact to edit: ");

    let index = contacts.findIndex(contact => contact.firstName.toLowerCase() === nameToEdit.toLowerCase());

    if (index === -1) {
        console.log("Contact not found!");
        return;
    }

    console.log("Contact found! Enter new details:");
    let firstName = prompt("First Name: ");
    let lastName = prompt("Last Name: ");
    let address = prompt("Address: ");
    let city = prompt("City: ");
    let state = prompt("State: ");
    let phone = prompt("Phone: ");
    let email = prompt("Email: ");

    // Updating contact details
    contacts[index] = new AddressBook(firstName, lastName, address, city, state, phone, email);
    console.log("Contact updated successfully!\n");
};

const deleteContact=()=>{
let name=prompt("Enter name of the person to delete record of: ");
let index =contacts.findIndex(contact=>contact.firstName.toLowerCase() ===name.toLowerCase());
if(index===-1)console.log("Record with given name not found!");
else{
    contacts.splice(index,1);
    console.log("Record deleted successfully");
}
}

const totalContacts=()=>{
    let count=contacts.reduce((total,contact)=>total+1,0);
    console.log(`Total contacts are ${count}`);
}


// search by city or state
const searchByCityOrState = () => {
    
    let searchQuery = prompt("Enter City/State Name: ").toLowerCase();

    let result = contacts.filter(contact => 
        (contact.city.toLowerCase() === searchQuery) || 
        (contact.state.toLowerCase() === searchQuery)
    );

    if (result.length === 0) {
        console.log(" No contacts found in this City/State.");
    } else {
        console.log(`\n Contacts in ${searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)}:`);
        result.forEach(contact => console.log(contact.toString()));
    }
};

// 👇 Call this function in the menu
// searchByCityOrState();

// Main Menu

const mainMenu = () => {
    while (true) {
        console.log("\n Address Book");
        console.log("1. Add Contact");
        console.log("2. Display Contacts");
        console.log("3. Edit Contact");
        console.log("4. Delete Contact");
        console.log("5. Total Contacts");
        console.log("6. Search by City or State");

        console.log("99. Exit");

        let choice = prompt("Enter your choice: ");

        if (choice === "1") {
            addContact();
        } else if (choice === "2") {
            displayContacts();
        } else if (choice === "3") {
            editContact();
        }  else if (choice === "4") {
            deleteContact();
        } 
        else if (choice === "5") {
            totalContacts();
        } 
        else if (choice === "6") {
            searchByCityOrState();
        } 
        else if (choice === "99") {
            console.log(" Exiting...");
            break;
        } else {
            console.log(" Invalid choice! Try again.");
        }
    }
}


// Run the Address Book Program
try{
mainMenu();
}catch(error){
    console.log(error.message);
}