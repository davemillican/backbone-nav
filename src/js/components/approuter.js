var AppRouter = Backbone.Router.extend ({
    
    routes: {
        '': 'home',
        'about': "about",
        'third': 'third'
    },

    home: function () {
        console.log('home');
        app.trigger('show', new HomeView());
    },

    about: function () {
        console.log('about');
        app.trigger('show', new AboutView());
    },

    third: function () {
        app.trigger('show', new ThirdView({ parent: new AboutView}));
    }
});