// instantiating vue
var growler = new Vue({
    el: '#growler',
    data: {
        appName: 'Growler',
        appLogo: 'img/logo.png',
        accentColor: 'accent-color',
        headers: 'headers',
        query: '',
        searchIndexes: [],
        searchIndex: 'beers',
        selectedSearchIndex: 'beers',
        selectedSearchIndexes: [],
        result: ''
    }
});