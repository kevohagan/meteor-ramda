Package.describe({
    name: 'kevohagan:ramda',
    summary: 'A practical functional library for Javascript programmers.',
    version: '0.9.1_1',
    git: 'https://github.com/kevohagan/meteor-ramda.git',
    upstreamVersion: "0.1.0"
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@0.9.1.1");

    api.add_files([
        'ramda/dist/ramda.min.js',
    ], ['client', 'server']);

})
