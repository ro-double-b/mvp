-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
    
CREATE TABLE `Users` (
  `user_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_name` INTEGER NULL DEFAULT NULL,
  `user_password` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`)
);

-- ---
-- Table 'Queens'
-- 
-- ---

DROP TABLE IF EXISTS `Queens`;
    
CREATE TABLE `Queens` (
  `queen_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `queen_name` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`queen_id`)
);

-- ---
-- Table 'Wins'
-- 
-- ---

DROP TABLE IF EXISTS `Wins`;
    
CREATE TABLE `Wins` (
  `week_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `win_queen_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`week_id`)
);

-- ---
-- Table 'Selections'
-- 
-- ---

DROP TABLE IF EXISTS `Selections`;
    
CREATE TABLE `Selections` (
  `selection_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `selection_user_id` INTEGER NULL DEFAULT NULL,
  `selection_queen_id` INTEGER NULL DEFAULT NULL,
  `selection_week_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`selection_id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Wins` ADD FOREIGN KEY (win_queen_id) REFERENCES `Queens` (`queen_id`);
ALTER TABLE `Selections` ADD FOREIGN KEY (selection_user_id) REFERENCES `Users` (`user_id`);
ALTER TABLE `Selections` ADD FOREIGN KEY (selection_queen_id) REFERENCES `Queens` (`queen_id`);
ALTER TABLE `Selections` ADD FOREIGN KEY (selection_week_id) REFERENCES `Wins` (`week_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Queens` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Wins` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Selections` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `Users` (`user_id`,`user_name`,`user_password`) VALUES
('1','ro-double-b','hahaha');
INSERT INTO `Queens` (`queen_id`,`queen_name`) VALUES
('1','alaska');
INSERT INTO `Wins` (`week_id`,`win_queen_id`) VALUES
('1','1');
INSERT INTO `Selections` (`selection_id`,`selection_user_id`,`selection_queen_id`,`selection_week_id`) VALUES
('1','1','1','1');