-- CreateTable
CREATE TABLE `Food_types` (
    `type_id` INTEGER NOT NULL AUTO_INCREMENT,
    `type_name` VARCHAR(255) NOT NULL,
    `is_remove` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Foods` (
    `food_id` INTEGER NOT NULL AUTO_INCREMENT,
    `food_name` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NULL,
    `price` FLOAT NOT NULL,
    `desc` VARCHAR(1000) NOT NULL,
    `is_remove` BOOLEAN NOT NULL DEFAULT false,
    `type_id` INTEGER NULL,
    `FoodTypeTypeId` INTEGER NULL,

    INDEX `type_id`(`type_id`),
    PRIMARY KEY (`food_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Like_res` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date_like` DATETIME(0) NOT NULL,
    `is_remove` BOOLEAN NOT NULL DEFAULT false,
    `user_id` INTEGER NULL,
    `res_id` INTEGER NULL,
    `UserUserId` INTEGER NULL,
    `RestaurantResId` INTEGER NULL,

    INDEX `res_id`(`res_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `order_id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` INTEGER NOT NULL,
    `code` VARCHAR(255) NOT NULL,
    `arr_sub_id` VARCHAR(255) NOT NULL,
    `is_remove` BOOLEAN NOT NULL DEFAULT false,
    `food_id` INTEGER NULL,
    `user_id` INTEGER NULL,
    `FoodFoodId` INTEGER NULL,
    `UserUserId` INTEGER NULL,

    INDEX `food_id`(`food_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rate_res` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` INTEGER NOT NULL,
    `date_rate` DATETIME(0) NOT NULL,
    `is_remove` BOOLEAN NOT NULL DEFAULT false,
    `user_id` INTEGER NULL,
    `res_id` INTEGER NULL,
    `UserUserId` INTEGER NULL,
    `RestaurantResId` INTEGER NULL,

    INDEX `res_id`(`res_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Restaurants` (
    `res_id` INTEGER NOT NULL AUTO_INCREMENT,
    `res_name` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NULL,
    `desc` VARCHAR(255) NOT NULL,
    `is_remove` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`res_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sub_foods` (
    `sub_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_name` VARCHAR(255) NOT NULL,
    `sub_price` FLOAT NOT NULL,
    `food_id` INTEGER NOT NULL,
    `is_remove` BOOLEAN NOT NULL DEFAULT false,

    INDEX `food_id`(`food_id`),
    PRIMARY KEY (`sub_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `is_remove` BOOLEAN NOT NULL DEFAULT false,
    `address` VARCHAR(255) NULL,
    `accessToken` VARCHAR(255) NULL,
    `role` VARCHAR(255) NOT NULL DEFAULT 'CLIENT',
    `refreshToken` VARCHAR(255) NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Foods` ADD CONSTRAINT `Foods_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `Food_types`(`type_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like_res` ADD CONSTRAINT `Like_res_ibfk_1859` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like_res` ADD CONSTRAINT `Like_res_ibfk_1860` FOREIGN KEY (`res_id`) REFERENCES `Restaurants`(`res_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_ibfk_2055` FOREIGN KEY (`food_id`) REFERENCES `Foods`(`food_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_ibfk_2056` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rate_res` ADD CONSTRAINT `Rate_res_ibfk_475` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rate_res` ADD CONSTRAINT `Rate_res_ibfk_476` FOREIGN KEY (`res_id`) REFERENCES `Restaurants`(`res_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sub_foods` ADD CONSTRAINT `Sub_foods_ibfk_1` FOREIGN KEY (`food_id`) REFERENCES `Foods`(`food_id`) ON DELETE NO ACTION ON UPDATE CASCADE;
