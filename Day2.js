function createToken(tokenName, owner) {
    let supply = 0;  // Internal token supply (private)
    let name = tokenName;  // Token name (public)
    let tokenOwner = owner;
    let balances = {[owner]: 0};

    return {
        mint: function(amount, caller) {
            if (caller !== tokenOwner) {
                throw new Error("Error: Only owner can mint!");
            }
            supply += amount;
            balances[caller] = (balances[caller] || 0) + amount;
            return `Minted ${amount} ${name}. Total supply: ${supply}`;
        },
        burn: function(amount, caller) {
            if (caller !== tokenOwner) {
                return "Error: only owner can brun!";
            }
            supply = Math.max(0, supply - amount);
            balances[caller] -= amount;
            return `Burned ${amount} ${name}. Total supply: ${supply}`;
        },
        transfer: function(amount, to , from) {
            if (balances[from] < amount) {
                throw new Error("Insufficient balance");
            }
            balances[from] -= amount;
            balances[to] = (balances[to] || 0)  + amount;
            return `Successfully Transfered ${amount} from ${from} to ${to}`;
        }
    };
}

const token = createToken("DAppCoin", "Alice");
console.log(token.mint(1000, "Alice")); // Mint 1000 to Alice
console.log(token.transfer(200, "Bob", "Alice")); // Transfer 200 to Bob
console.log(token.transfer(900, "Bob", "Alice")); // ❌ Fails (Alice has 800 left)