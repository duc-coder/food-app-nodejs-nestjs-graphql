"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LikeRestaurantModel = void 0;
var graphql_1 = require("@nestjs/graphql");
var restaurant_model_1 = require("../../../../../../../../src/modules/restaurants/models/restaurant.model");
var LikeRestaurantModel = /** @class */ (function () {
    function LikeRestaurantModel() {
    }
    __decorate([
        (0, graphql_1.Field)(function (_type) { return graphql_1.ID; })
    ], LikeRestaurantModel.prototype, "id");
    __decorate([
        (0, graphql_1.Field)()
    ], LikeRestaurantModel.prototype, "date_like");
    __decorate([
        (0, graphql_1.Field)({ defaultValue: false })
    ], LikeRestaurantModel.prototype, "is_remove");
    __decorate([
        (0, graphql_1.Field)(function (_type) { return graphql_1.Int; })
    ], LikeRestaurantModel.prototype, "res_id");
    __decorate([
        (0, graphql_1.Field)(function (_type) { return restaurant_model_1.RestaurantModel; })
    ], LikeRestaurantModel.prototype, "Restaurant");
    __decorate([
        (0, graphql_1.Field)(function (_type) { return graphql_1.Int; })
    ], LikeRestaurantModel.prototype, "user_id");
    __decorate([
        (0, graphql_1.Field)(function (_type) { return restaurant_model_1.RestaurantModel; })
    ], LikeRestaurantModel.prototype, "User");
    LikeRestaurantModel = __decorate([
        (0, graphql_1.ObjectType)({ description: 'like_restaurant' })
    ], LikeRestaurantModel);
    return LikeRestaurantModel;
}());
exports.LikeRestaurantModel = LikeRestaurantModel;
