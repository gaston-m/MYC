const { Service } = require('feathers-mongoose');
const bcrypt = require('bcryptjs');

const encryptPassword = password => {

    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);

}


exports.Companys = class Companys extends Service {


  /*
    create (data, params) {

        var { name, userId, password } = data;

        password = encryptPassword(password);

        data.password = password;

        console.log(name, userId, password);

    }


  */
};
