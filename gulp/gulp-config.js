module.exports = {
    // Path settings
    pathTo: {
        Src: {
            mainStyleFile: 'src/scss/flex-sass-grid-generator.scss',
            Styles: 'src/scss/**/*.scss',
            Jade: 'src/**/*.jade',
            GHPages: 'dist/**/*'
        },
        Build: {
            Styles: 'dist/css/',
            Html: 'dist/'
        }
    },

    // GitHub Pages options
    ghpOptions: {
        remoteUrl: "git@github.com:Enkil/flex-sass-grid-generator.git"
    },

    // Styledocco options for SCSS documentation generating
    StyledoccoOptions:"./node_modules/styledocco/bin/styledocco -o dist/docs -s src/scss src/scss",

    // Browser versions for automatically prefix
    autoprefixerBrowsers: ['last 3 versions', '> 1%', 'Firefox ESR']

};