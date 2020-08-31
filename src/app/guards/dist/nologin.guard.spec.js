"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var nologin_guard_1 = require("./nologin.guard");
describe('NologinGuard', function () {
    var guard;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        guard = testing_1.TestBed.inject(nologin_guard_1.NologinGuard);
    });
    it('should be created', function () {
        expect(guard).toBeTruthy();
    });
});
