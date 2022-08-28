"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var common_1 = require("@nestjs/common");
var nestjs_prisma_1 = require("nestjs-prisma");
var like_restaurant_service_1 = require("../like_restaurants/like_restaurant.service");
var user_resolver_1 = require("./user.resolver");
var user_service_1 = require("./user.service");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        (0, common_1.Module)({
            imports: [nestjs_prisma_1.PrismaModule.forRoot()],
            providers: [user_resolver_1.UserResolver, user_service_1.UserService, like_restaurant_service_1.LikeRestaurantService]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
