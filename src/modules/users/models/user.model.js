"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModel = void 0;
var graphql_1 = require("@nestjs/graphql");
var like_restaurant_model_1 = require("../../../../../../../../src/modules/like_restaurants/models/like_restaurant.model");
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    __decorate([
        (0, graphql_1.Field)(function (_type) { return graphql_1.ID; })
    ], UserModel.prototype, "user_id");
    __decorate([
        (0, graphql_1.Field)()
    ], UserModel.prototype, "full_name");
    __decorate([
        (0, graphql_1.Field)()
    ], UserModel.prototype, "email");
    __decorate([
        (0, graphql_1.Field)()
    ], UserModel.prototype, "password");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], UserModel.prototype, "address");
    __decorate([
        (0, graphql_1.Field)({ defaultValue: 'CLIENT' })
    ], UserModel.prototype, "role");
    __decorate([
        (0, graphql_1.Field)({ defaultValue: false })
    ], UserModel.prototype, "is_remove");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], UserModel.prototype, "accessToken");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], UserModel.prototype, "refreshToken");
    __decorate([
        (0, graphql_1.Field)(function (_type) { return [like_restaurant_model_1.LikeRestaurantModel]; }, { nullable: 'itemsAndList' })
    ], UserModel.prototype, "like_restaurants");
    UserModel = __decorate([
        (0, graphql_1.ObjectType)({ description: 'user ' })
    ], UserModel);
    return UserModel;
}());
exports.UserModel = UserModel;
