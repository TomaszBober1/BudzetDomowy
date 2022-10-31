
class Transaction {
    constructor (name, type, date, tag){
        this.name = name;
        this.type = type;
        this.date = date;
        this.tag = tag;
    }
    toString() {
        return this.name + ', ' + this.type + ', ' + this.date + ', ' + this.tag;
    }
}

//converter

const transactionConvert = {
    toFirestore: (transaction) => {
        return {
            name: transaction.name,
            type: transaction.type,
            date: transaction.date,
            tag: transaction.tag
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Transaction(data.name, data.type, data.date, data.tag);
    }
};