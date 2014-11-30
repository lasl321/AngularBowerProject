(function (angular) {
    'use strict';

    var module = angular.module('main', []);

    var bar = function (message) {
        return message.substring(0, 2);
    };

    module.directive('myMessage', function () {
        return {
            scope: {
                message: '@'
            },

            replace: true,

            template: '<div>Hello {{foo(message)}}</div>',

            controller: ['$scope', function (scope) {
                scope.foo = bar;
            }]
        };
    });

    module.controller('MainController', [
        '$scope', function ($scope) {
            $scope.message = "World!";
        }
    ]);
}(window.angular));