import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('news');
  this.route('about');
  this.route('contact');
  this.route('submission');
  this.route('entertainment');
  this.route('beauty');
  this.route('fashion');
  this.route('lifestyle');
  this.route('books');
  this.route('flowcharts');
  this.route('tech');
  this.route('food');
  this.route('wellness');
});

export default Router;
