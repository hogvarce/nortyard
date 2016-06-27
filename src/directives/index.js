export default ngModule => {
    require('./search-bar')(ngModule);
    require('./list-videos')(ngModule);
    require('./video-detail')(ngModule);
}
