/*global QUnit*/

sap.ui.define([
	"Scanner/Scanner/controller/Scanner.controller"
], function (oController) {
	"use strict";

	QUnit.module("Scanner Controller");

	QUnit.test("I should test the Scanner controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});