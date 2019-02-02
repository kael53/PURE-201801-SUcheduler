class CourseItem {
    constructor(crn, code, number, type, name, section, instructors) {
        // check if required arguments were provided
        var props = ['crn', 'code', 'number', 'type', 'name', 'section', 'instructors'];
        for (var i = 0; i < arguments.length; i++) {
            if (typeof(arguments[i]) === 'undefined') {
                throw 'CourseItem constructor did not receive ' + props[i];
            }
        }

        // set required keys
        for (var i = 0; i < props.length; i++) {
            this[props[i]] = arguments[i];
        }
    }
}

module.exports = CourseItem;
