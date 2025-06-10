let holders = [
    { name: "Talha", tokens: 100 },
    { name: "Ali", tokens: 50 },
    { name: "Fatima", tokens: 0 },
    { name: "Hamza", tokens: 250 }
];


holders.forEach(h => {
    console.log(`${h.name} has ${h.tokens}`); 
});

let richHolders = holders.filter(
    h => h.tokens > 100
);
console.log(richHolders);

let onlyNames = holders.map(h => h.name);
console.log(onlyNames);

let totalSupply = holders.reduce((sum , h) => {
    return  sum + h.tokens;
}, 0);

console.log(totalSupply);


function printProfile(holder) {
    console.log(holder.name, holder.tokens);
    return message = holder.tokens > 0 ? "Active Holder" : "Inactive Holder";
}

console.log(printProfile({name: "Talha", tokens: 500}));


let newList = holders.reduce((acc, h) => {
    acc[h.name] = h.tokens;
    return acc;
}, {});

console.log(newList);