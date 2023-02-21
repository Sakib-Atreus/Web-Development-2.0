const data = {
    name: 'Sakib',
    address: {
        country: 'Bangladesh',
        city: 'Dhaka',
        location: {
            postOffice: 'Mirpur',
            road: 3,
            house: 11,
            floor: '2nd floor',
            side: 'back'
        }
    }
}

const dataFloor = data.address.location.floor;
console.log(dataFloor);

const user = {
    name: 'Sakib',
    location: [
        {
            postOffice: 'Mirpur',
            road: 3,
            house: 11,
            floor: '2nd floor',
            side: 'back'
        },
        {
            postOffice: 'Dhanmondi',
            road: 4,
            house: 17,
            floor: '7th floor',
            side: 'right'
        },
    ]
}

const userFloor = user.location[1].floor;
console.log(userFloor);