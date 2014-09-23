/**
 * Initialize a new Ember application
 *
 **/

window.blog = Ember.Application.create({
    LOG_TRANSITIONS: true
});

/**
 * Application Name ; will be available for hb
 *
 **/

blog.applicationName = "Blogapp";

/**
 * Routes
 *
 **/

blog.Router.map(function() {
    this.resource('about');
    this.resource('contact');
});