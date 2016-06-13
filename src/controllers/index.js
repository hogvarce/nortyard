export default ngModule => {
    require('./personController.js')(ngModule);
    require('./userController.js')(ngModule);
    require('./positionController.js')(ngModule);
    require('./departmentController.js')(ngModule);
    require('./companyController.js')(ngModule);
}
