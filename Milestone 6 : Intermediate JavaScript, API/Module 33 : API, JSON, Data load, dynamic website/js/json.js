const shop = {
    owner: 'SS',
    address: {
        street: 'MistyMor',
        city: 'Dhaka',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'mobile'],
    revenue: 47000,
    isOpen: true,
    isNew: false
};

console.log(shop)

const jsonShop = JSON.stringify(shop);
console.log(jsonShop);

const shopJSON = JSON.parse(jsonShop);
console.log(shopJSON);