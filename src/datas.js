let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 254_000,
    },
    {
        "name": 'Feb',
        "Sale": 99_000,
    },
    {
        "name": 'Mar',
        "Sale": 32_000
    },
    {
        "name": 'Apr',
        "Sale": 112_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 53_000
    },
    {
        "name": 'Sep',
        "Sale": 14_000
    },
    {
        "name": 'Oct',
        "Sale": 190_000
    },
    {
        "name": 'Nov',
        "Sale": 10_000
    },
]


const newMembers = [
    {
        id: 1,
        username: 'Alireza talebizadeh',
        title: 'web designer',
        img: './images/person.png'
    },
    {
        id: 2,
        username: 'Ahmmad zare',
        title: 'hacker',
        img: './images/person.png'
    },
    {
        id: 3,
        username: 'Mohammad reza amini',
        title: 'web designer',
        img: './images/person.png'
    },
    {
        id: 4,
        username: 'saman mohammadi',
        title: 'web designer',
        img: './images/person.png'
    },
]

let transActions = [
    {
        id: 1,
        customer: 'hamid zare',
        date: '12 may 2022',
        amount: 128,
        status: 'Decline',
        img: './images/person.png'
    },
    {
        id: 2,
        customer: 'mohammadreza talebizadeh',
        date: '18 apr 2022',
        amount: 178,
        status: 'Pending',
        img: './images/person.png'
    },
    {
        id: 3,
        customer: 'alireza moolaie',
        date: '1 Feb 2022',
        amount: 128,
        status: 'Approved',
        img: './images/person.png'
    },
    {
        id: 4,
        customer: 'ali zare',
        date: '12 Apr 2022',
        amount: 128,
        status: 'Pending',
        img: './images/person.png'
    },
    {
        id: 5,
        customer: 'hamed hamedi',
        date: '12 may 2022',
        amount: 128,
        status: 'Approved',
        img: './images/person.png'
    },

]

let userRows = [
    {
        id: 1,
        username: 'ahmmad reza hammidi',
        avatar: './images/person.png',
        status: 'active',
        transActions: '$129.25',
        email: 'alireza@gmail.com'
    },
    {
        id: 2,
        username: 'hamed hamedi',
        avatar: './images/person.png',
        email: 'alireza@gmail.com',
        status: 'active',
        transActions: '$78.56'

    },
    {
        id: 3,
        username: 'zahra majidi',
        avatar: './images/person.png',
        email: 'alireza@gmail.com',
        status: 'active',
        transActions: '$93.26'
    },
    {
        id: 4,
        username: 'alireza haghighat',
        avatar: './images/person.png',
        status: 'active',
        transActions: '$193.55',
        email: 'alireza@gmail.com'
    },
    {
        id: 5,
        username: 'ahmmad reza cheraghi',
        avatar: './images/person.png',
        status: 'active',
        transActions: '$218.25',
        email: 'alireza@gmail.com'
    },
]

let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: './images/person.png',
        price: "890$",
    },
    {
        id: 2,
        title: 'Asus',
        avatar: './images/person.png',
        price: "560$",
    },
    {
        id: 3,
        title: 'Asus',
        avatar: './images/person.png',
        price: "931$",
    },
    {
        id: 4,
        title: 'Asus',
        avatar: './images/person.png',
        price: "458$",
    },
    {
        id: 5,
        title: 'Asus',
        avatar: './images/person.png',
        price: "389$",
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 14000
    },
    {
        name: 'Feb',
        sales: 3250
    },
    {
        name: 'Mar',
        sales: 14000
    },
]


export { xAxisData, newMembers, transActions, userRows, products ,productsData}

