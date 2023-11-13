// task-1: console log the secondary school location of Shopia
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary: [
                    { school_name: 'ABC primary school' },
                    { location: 'peters burg' }
                ]
            },
            {
                secondary: [
                    { school_name: 'ABC secondary school' },
                    { location: 'St Lorence'}
                ]
            }
        ]
    }
}

const secondarySchool = data.Sophia.study[1].secondary[1].location;
console.log(secondarySchool)

// Task-02: show the output: Petersburg, Herry

let students = {
    2222: {
        name: 'Jack',
        section: 'C',
        class: 'IX',
        address: {
            'building no': 12,
            'street': 'St. Jonson',
            'city': 'Petersburg',
            'country': 'UK'
        }
    },

    3333: {
        name: 'Herry',
        section: 'D',
        class: 'X',
        address: {
            'building no': 85,

        }
    }
}
const city = students['2222'].address['city'];
console.log(city)

const name = students['3333'].name;
console.log(name)

// Task-03: access and then show habluder adda  and show beginer
let data2 = {
    data: [
        {
            bookId: 1,
            bookDetails: {
                name: 'Habluder adda',
                catagory: 'XYZ',
                price: '20$',
            },
            bookCategory: 'Basic',
        },
        {
            bookId: 2,
            bookDetails: {
                name: 'gobluder adda',
                catagory: 'ABC',
                price: '40$',
            },
            bookCategory: 'Beginner',
        }
    ]
}
const bookName = data2.data[0].bookDetails.name;
console.log(bookName)

const bookCategory = data2.data[1].bookCategory;
console.log(bookCategory)