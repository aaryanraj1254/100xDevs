/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  transactions.forEach((transaction) => {
    const category = transaction.category;
    if (categoryMap[category]) {
      categoryMap[category] += transaction.price;
    } else {
      categoryMap[category] = transaction.price;
    }
  });

  const result = Object.keys(categoryMap).map((category) => ({
    category,
    totalSpent: categoryMap[category],
  }));

  return result;
}

const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076800000, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656076800000, price: 30, category: 'Entertainment', itemName: 'Movie' },
];

// Call the function and log the result
const result = calculateTotalSpentByCategory(transactions);
console.log(result);