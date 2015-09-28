/// <reference path="angularjs/angular.d.ts"/>
/// <reference path="portfolio.d.ts"/>
/// <reference path="app.ts"/>
var portfolio;
(function (portfolio) {
    var controllers;
    (function (controllers) {
        'use strict';
        var GalleryCtrl = (function () {
            function GalleryCtrl($scope, $http) {
                this.$scope = $scope;
                this.$http = $http;
                $http.get('gallery.json').success(function (data) {
                    $scope.cards = data;
                });
            }
            GalleryCtrl.$inject = ['$scope', '$http'];
            return GalleryCtrl;
        })();
        controllers.GalleryCtrl = GalleryCtrl;
        var AboutCtrl = (function () {
            function AboutCtrl($scope, $http) {
                this.$scope = $scope;
                this.$http = $http;
                $http.get('about.json').success(function (data) {
                    $scope.about = data;
                });
            }
            AboutCtrl.$inject = ['$scope', '$http'];
            return AboutCtrl;
        })();
        controllers.AboutCtrl = AboutCtrl;
        var ContactCtrl = (function () {
            function ContactCtrl($scope, $http) {
                this.$scope = $scope;
                this.$http = $http;
                $http.get('contact.json').success(function (data) {
                    $scope.info = data;
                });
            }
            ContactCtrl.$inject = ['$scope', '$http'];
            return ContactCtrl;
        })();
        controllers.ContactCtrl = ContactCtrl;
        var DetailsCtrl = (function () {
            function DetailsCtrl($scope, $http, $routeParams) {
                this.$scope = $scope;
                this.$http = $http;
                this.$routeParams = $routeParams;
                $http.get('details/' + $routeParams.cardId + '.json').success(function (data) {
                    $scope.details = data;
                });
            }
            DetailsCtrl.$inject = ['$scope', '$http', '$routeParams'];
            return DetailsCtrl;
        })();
        controllers.DetailsCtrl = DetailsCtrl;
    })(controllers = portfolio.controllers || (portfolio.controllers = {}));
})(portfolio || (portfolio = {}));
/// <reference path="angularjs/angular.d.ts"/>
/// <reference path="angularjs/angular-route.d.ts"/>
/// <reference path="controllers.ts"/>
var portfolio;
(function (portfolio) {
    'use strict';
    var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngAnimate']);
    portfolioApp.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/gallery', {
                templateUrl: 'views/gallery.html',
                controller: portfolio.controllers.GalleryCtrl
            })
                .when('/about', {
                templateUrl: 'views/about.html',
                controller: portfolio.controllers.AboutCtrl
            })
                .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: portfolio.controllers.ContactCtrl
            })
                .when('/details/:cardId', {
                templateUrl: 'views/details.html',
                controller: portfolio.controllers.DetailsCtrl
            })
                .otherwise({ redirectTo: '/gallery' });
        }]);
})(portfolio || (portfolio = {}));
/// <reference path="foundation/foundation.d.ts"/>
/// <reference path="jquery/jquery.d.ts"/>
$(document).foundation();
/// <reference path="jquery/jquery.d.ts"/>
var HeaderTS;
(function (HeaderTS) {
    // below are the only two lines you may need to change
    // __________________________________________________________________________________________________________
    var duration = 350;
    var target = '#header';
    // __________________________________________________________________________________________________________
    var headerHeight = $(target).css('height');
    var shown = '0px';
    var hidden = '-' + headerHeight;
    var prevScrollPos = $(window).scrollTop();
    var scrollPos = $(window).scrollTop();
    function updateScroll() {
        prevScrollPos = scrollPos;
        scrollPos = $(window).scrollTop();
        hidden = '-' + $(target).css('height');
    }
    ;
    function scrollingUp() {
        return scrollPos < prevScrollPos;
    }
    ;
    function scrollingDown() {
        return scrollPos > prevScrollPos;
    }
    ;
    function fractionOfHeight() {
        var numerator = $(target).css('top').replace(/px/, "").replace(/-/, "");
        var denominator = headerHeight.replace(/px/, "");
        return parseInt(numerator) / parseInt(denominator);
    }
    ;
    var hiding = false;
    var showing = false;
    function showHeader() {
        if (!showing) {
            hiding = false;
            $(target).stop();
            showing = true;
            $(target).animate({ top: shown }, duration * fractionOfHeight());
        }
    }
    ;
    function hideHeader() {
        if (!hiding) {
            showing = false;
            $(target).stop();
            hiding = true;
            $(target).animate({ top: hidden }, duration - duration * fractionOfHeight());
        }
    }
    ;
    function headerToggle() {
        updateScroll();
        if (scrollingDown()) {
            hideHeader();
        }
        else if (scrollingUp()) {
            showHeader();
        }
    }
    ;
    function activate() {
        $(document).scroll(headerToggle);
        if (scrollPos === 0) {
            $(target).css('top', shown);
        }
        else {
            $(target).css('top', hidden);
        }
    }
    ;
    $(document).ready(activate);
})(HeaderTS || (HeaderTS = {}));
