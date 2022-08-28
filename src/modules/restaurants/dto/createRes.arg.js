"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.createResInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var createResInput = /** @class */ (function () {
    function createResInput() {
    }
    __decorate([
        (0, graphql_1.Field)()
    ], createResInput.prototype, "res_name");
    __decorate([
        (0, graphql_1.Field)()
    ], createResInput.prototype, "desc");
    __decorate([
        (0, graphql_1.Field)({ defaultValue: false })
    ], createResInput.prototype, "is_remove");
    createResInput = __decorate([
        (0, graphql_1.InputType)()
    ], createResInput);
    return createResInput;
}());
exports.createResInput = createResInput;
