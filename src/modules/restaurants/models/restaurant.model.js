"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestaurantModel = void 0;
var graphql_1 = require("@nestjs/graphql");
var like_restaurant_model_1 = require("../../../../../../../../src/modules/like_restaurants/models/like_restaurant.model");
var RestaurantModel = /** @class */ (function () {
    function RestaurantModel() {
    }
    __decorate([
        (0, graphql_1.Field)(function (_type) { return graphql_1.ID; })
    ], RestaurantModel.prototype, "res_id");
    __decorate([
        (0, graphql_1.Field)()
    ], RestaurantModel.prototype, "res_name");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], RestaurantModel.prototype, "image");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], RestaurantModel.prototype, "desc");
    __decorate([
        (0, graphql_1.Field)({ defaultValue: false })
    ], RestaurantModel.prototype, "is_remove");
    __decorate([
        (0, graphql_1.Field)(function (_type) { return [like_restaurant_model_1.LikeRestaurantModel]; }, { nullable: 'itemsAndList' })
    ], RestaurantModel.prototype, "like_restaurants");
    RestaurantModel = __decorate([
        (0, graphql_1.ObjectType)({ description: 'restaurant' })
    ], RestaurantModel);
    return RestaurantModel;
}());
exports.RestaurantModel = RestaurantModel;
