"use strict";

// Load libraries
import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import dndLists from 'src/dndLists';
import AngularFileSaver from 'angular-file-saver';
import ngFileUpload from 'ng-file-upload';
import AppController from 'src/AppController';
import Therbligs from 'src/therbligs/Therbligs';
import Tasks from 'src/tasks/Tasks';
import Things from 'src/things/Things';
import Positions from 'src/positions/Positions';
import Macros from 'src/macros/Macros';

export default angular.module( 'starter-app', [
    'ngMaterial',
    'dndLists',
    'ui.filters',
    'ngFileSaver',
    'ngFileUpload',
    Therbligs.name,
    Tasks.name,
    Things.name,
    Positions.name,
    Macros.name] )
  .config(($mdIconProvider, $mdThemingProvider) => {

    $mdIconProvider
      .icon("menu", "./assets/svg/menu.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('pink');
  })
  .controller('AppController', AppController);
