exports.ok = function(message, value, res) {
    var data = {
        'success': true,
        'status': 200,
        'message': message,
        'isLast': true,
        'data': value,
        'total': value.length
    };
    res.json(data);
    res.end();
};

exports.created = function(message, value, res) {
    var data = {
        'success': true,
        'status': 201,
        'message': message,
        'isLast': true,
        'data': value,
        'total': 1
    };
    res.json(data);
    res.end();
};

exports.bad = function(message, res) {
    var data = {
        'success': false,
        'status': 400,
        'message': message,
        'isLast': true,
        'data': "",
        'total': 0
    };
    res.json(data);
    res.end();
};

exports.unauthorized = function(message, res) {
    var data = {
        'success': false,
        'status': 401,
        'message': message,
        'isLast': true,
        'data': "",
        'total': 0
    };
    res.json(data);
    res.end();
};

exports.forbidden = function(message, res) {
    var data = {
        'success': false,
        'status': 403,
        'message': message,
        'isLast': true,
        'data': "",
        'total': 0
    };
    res.json(data);
    res.end();
};

exports.error = function(message, res) {
    var data = {
        'success': false,
        'status': 500,
        'message': message,
        'isLast': true,
        'data': "",
        'total': 0
    };
    res.json(data);
    res.end();
};