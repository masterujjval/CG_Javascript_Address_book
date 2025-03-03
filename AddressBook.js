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
    let addReg=new RegExp('^[\\w\\s]{3,}$');
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

// Main function to test the class
function main() {
try{
    let obj = new AddressBook("Ujjwal", "Gupta", "shiv nagar","bhopal", "madhya pradesh", 9283829483, "ujjug@gmail.com");
    console.log(obj.toString()); // Calling toString and printing
}catch(error){
console.log(error.message);
}
}

// Calling main function
main();

