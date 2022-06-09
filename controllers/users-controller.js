const uuid = require('uuid/v4');


let USERS = [
    {
        Name: 'Mia Tremblay',
        Email: 'mia.tremblay@example.com',
        ID: '637011271',
        Phone: '+972506407314',
        IP: '29.53.136.109'
    },
    {
        Name: 'Naja Larsen',
        Email: 'naja.larsen@example.com',
        ID: '381393602',
        Phone: '+972544864314',
        IP: '192.219.255.118'
    },
    {
        Name: 'Mia Davies',
        Email: 'mia.davies@example.com',
        ID: '305970410',
        Phone: '+972549348293',
        IP: '254.12.52.38'
    },
    {
        Name: 'Anthony Fleming',
        Email: 'anthony.fleming@example.com',
        ID: '635922081',
        Phone: '+972527310869',
        IP: '146.229.76.244'
    },
]

const getUsers = (req, res, next) => {
    res.json({ users: USERS });
};

const createUser = (req, res, next) => {
    const { Name, Email, ID, Phone, IP } = req.body;

    //backend validation

    const createdUser = {
        Name,
        Email,
        ID: uuid(),
        Phone,
        IP,
    };

    USERS.push(createdUser); //unshift(createdPlace)

    res.status(201).json({ place: createdUser });
};

const deleteUser = (req, res, next) => {
    const userId = req.params.uid;
    console.log(userId);
    USERS = USERS.filter(u => u.ID !== userId);
    res.status(200).json({ message: 'Deleted user.' });
};

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.deleteUser = deleteUser;
