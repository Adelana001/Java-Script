const personAccount = {
    firstName : "Adelana" ,
    lastName :"Adekola"  ,
    incomes : [{incomes:10000 , description:"My money"}],
    expences :[{expences:7000,  description: "My life"}],
        totalIncome: function () {
            let balance = 0 ;
            this.incomes.forEach(function values(val){
                balance = balance + val.incomes;
            });
            return balance;
        },
        totalexpences:function () {
            let expences = 0 ;
            this.expences.forEach(function values(val){
                expences = expences + val.expences;
            });
            return expences
        }, 

        accountInfo:function () {
            const firstName = this.firstName
            const lastName = this.lastName
            const balance = this.totalBalance()
            console.log(firstName,lastName,balance)
        },
        totalBalance : function (){
         let   balance = this.totalIncome() - this.totalexpences() + this.balance
            return  balance
        },
        addIncome:function (income, description) {
            this.income.push({incomes: income ,description:description})
        },
        addExpences:function (expence,description) {
            this.expences.push({expences:expence , description:description})
        },
        addBalance:function (newBalance) {
           this.balance += newBalance;
           return this.totalBalance()
        },
        balance : 0 , 
    
 } 
 // console.log(personAccount)
  console.log(personAccount.addBalance(34))
    