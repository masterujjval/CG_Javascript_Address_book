// requiring for taking inout in node terminal
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Creating a class to store contact info
class AddressBook {
    // Defining properties
    

    
    constructor(firstName, lastName, address,city, state, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address=address;
        this.city = city;
        this.state = state;
        this.phone = phone;
        this.email = email;
        this.validate();
    }
    // inside a class we dont write function while defining a method
    
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

// Recursive function to add contacts
const addContacts = (arr, count, callback) => {
    if (count === 0) { 
        callback(arr); // Jab saare contacts add ho jaaye tab display karega
        rl.close();
        return;
    }

    rl.question("Enter contacts: (first name, last name, address, city, state, phone, email): ", (answer) => {
        let contact = answer.split(",").map(x => x.trim());
        try {
            let obj = new AddressBook(contact[0], contact[1], contact[2], contact[3], contact[4], contact[5], contact[6]);
            arr.push(obj);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }

        addContacts(arr, count - 1, callback); // Recursion call karega agle contact ke liye
    });
};

// Display function
const display = (arr) => {
    console.log("\nAddress Book Entries:");
    arr.forEach((contact, index) => {
        console.log(`\nContact ${index + 1}:\n${contact.toString()}`);
    });
};

// Main function
const main = () => {    
    let arr = new Array();
    rl.question("How many contacts do you want to add? ", (answer) => {
        let count = parseInt(answer);
        if (isNaN(count) || count <= 0) {
            console.log("Please enter a valid number!");
            rl.close();
        } else {
            addContacts(arr, count, display);
        }
    });
};

// Run the program
main();