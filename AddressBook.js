// Creating a class to store contact info
class AddressBook {
    // Defining properties
    constructor(firstName, lastName, city, state, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.state = state;
        this.phone = phone;
        this.email = email;
    }

    // toString method to return string representation
    toString() {
        return `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nPhone: ${this.phone}\nEmail: ${this.email}\nCity: ${this.city}\nState: ${this.state}`;
    }
}

// Main function to test the class
function main() {
    let obj = new AddressBook("Ujjwal", "Gupta", "Bhopal", "MP", 9283829483, "ujjug@gmail.com");
    console.log(obj.toString()); // Calling toString and printing
}

// Calling main function
main();

