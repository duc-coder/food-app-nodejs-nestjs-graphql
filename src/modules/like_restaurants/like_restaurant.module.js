"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LikeRestaurantModule = void 0;
var common_1 = require("@nestjs/common");
var nestjs_prisma_1 = require("nestjs-prisma");
var like_restaurant_resolver_1 = require("./like_restaurant.resolver");
var like_restaurant_service_1 = require("./like_restaurant.service");
var LikeRestaurantModule = /** @class */ (function () {
    function LikeRestaurantModule() {
    }
    LikeRestaurantModule = __decorate([
        (0, common_1.Module)({
            imports: [nestjs_prisma_1.PrismaModule.forRoot()],
            providers: [like_restaurant_resolver_1.LikeRestaurantResolver, like_restaurant_service_1.LikeRestaurantService]
        })
    ], LikeRestaurantModule);
    return LikeRestaurantModule;
}());
exports.LikeRestaurantModule = LikeRestaurantModule;
