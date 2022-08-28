-- CreateTable
CREATE TABLE `Like_res` (
    `date_like` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_remove` BOOLEAN NOT NULL DEFAULT false,
    `user_id` INTEGER NOT NULL,
    `res_id` INTEGER NOT NULL,

    INDEX `res_id`(`res_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`user_id`, `res_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rate_res` (
    `amount` INTEGER NOT NULL,
    `date_rate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_remove` BOOLEAN NOT NULL DEFAULT false,
    `user_id` INTEGER NOT NULL,
    `res_id` INTEGER NOT NULL,

    INDEX `res_id`(`res_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`user_id`, `res_id`)
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
ALTER TABLE `Like_res` ADD CONSTRAINT `Like_res_ibfk_1859` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like_res` ADD CONSTRAINT `Like_res_ibfk_1860` FOREIGN KEY (`res_id`) REFERENCES `Restaurants`(`res_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rate_res` ADD CONSTRAINT `Rate_res_ibfk_475` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rate_res` ADD CONSTRAINT `Rate_res_ibfk_476` FOREIGN KEY (`res_id`) REFERENCES `Restaurants`(`res_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- CREATE UNIQUE INDEX "Like_res_Restaurants_Users_unique" ON "Like_res"("user_id" int4_ops,"res_id" int4_ops);
-- CREATE UNIQUE INDEX "Rate_res_Restaurants_Users_unique" ON "Rate_res"("user_id" int4_ops,"res_id" int4_ops);