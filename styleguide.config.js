const path = require('path');

module.exports = {
    components: 'src/features/**/[A-Z]*.js',
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/app/styleguide/Wrapper')
    },
}
