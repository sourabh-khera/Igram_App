const userSchema = require('../schemas/user_schema');

exports.addUser = userDetails => {
    return new Promise((resolve, reject) => {
        userSchema.findOne({ Username: userDetails.userName }, (err, user) => {
            if (err) {
                reject(err);
            } else if (user) {
                resolve({ userCreated: false })
            } else {
                userSchema.create({ Username: userDetails.userName, Password: userDetails.password }, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve({ userCreated: true });
                });
            }
        });

    });
}


exports.validateUser = userDetails => {
    return new Promise((resolve, reject) => {
        userSchema.findOne({ Username: userDetails.userName }, (err, user) => {
            if (err) {
                reject(err);
            } else if (user) {
                resolve(user);
            }
            resolve({});
        });
    });
}
