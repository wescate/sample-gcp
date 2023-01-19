
class Customer {
    constructor(args){ 
        this.firstName  = args.firstName;
        this.middleName =  args.middleName;
        this.lastName = args.lastName;
        this.gender= args.gender;
        this.email= args.email;
        this.phone= args.phone;
        this.creditCard= {
            allow : args.creditCard.allow,
            number: args.creditCard.number,
            code :args.creditCard.code,
        },
        this.documentType= args.documentType;
        this.documentNumber=args.documentNumber;
        this.department=args.department;
        this.province=args.province;
        this.district=args.district;
    }
}

module.exports = Customer;