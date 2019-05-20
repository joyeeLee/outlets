/*
Navicat MySQL Data Transfer

Source Server         : Joyee
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : outlets

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-18 21:26:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `ori_price` float(255,0) NOT NULL,
  `now_price` float(255,0) NOT NULL,
  `img` varchar(255) NOT NULL,
  `cid` int(255) NOT NULL,
  `size` varchar(255) DEFAULT NULL,
  `sale_volumn` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', '[支持郑州自提] A02 秋冬新款休闲大衣外套', '1250', '799', 'img1.jpg&img11.jpg&img12.jpg&img13.jpg', '1', 'S&M&L&XL', '2');
INSERT INTO `goodlist` VALUES ('2', '[支持深圳自提] JESSIE/杰西 女士知性衬衫', '2340', '567', 'img21.jpg&img22.jpg&img23.jpg&img24.jpg&img25.jpg', '2', 'S&M&L&XL', '5');
INSERT INTO `goodlist` VALUES ('3', '[支持深圳自提] （深圳）娅奴 女士秋冬款时尚大衣', '2349', '799', 'img3.jpg&img31.jpg&img32.jpg&img33.jpg', '3', 'S&M&L&XL', '8');
INSERT INTO `goodlist` VALUES ('4', '[支持深圳自提] ROEM洛妍 洛妍女装甜美格子宽松长款毛呢大衣', '3999', '667', 'img4.jpg&img41.jpg&img42.jpg&img43.jpg&img44.jpg', '4', 'S&M&L&XL', '11');
INSERT INTO `goodlist` VALUES ('5', '郑州马克华菲 女士新款赫本风韩版双面呢长款大衣', '2678', '554', 'img5.jpg&img51.jpg&img52.jpg&img53.jpg', '5', 'S&M&L&XL', '14');
INSERT INTO `goodlist` VALUES ('6', '[支持合肥自提] （合肥）丝尚界 女士时尚新款包边大衣', '8765', '667', 'img6.jpg&img61.jpg&img62.jpg&img63.jpg', '6', 'S&M&L&XL', '17');
INSERT INTO `goodlist` VALUES ('7', '[支持深圳自提] K.KENNY 女棉质拉链短风衣（KMSH08)', '5437', '887', 'img7.jpg&img71.jpg&img72.jpg&img73.jpg&img74.jpg', '7', 'S&M&L&XL', '20');
INSERT INTO `goodlist` VALUES ('8', '[支持深圳自提] LIFE·IDEA/莱芙·艾迪儿 长外套', '4455', '552', 'img8.jpg&img81.jpg&img82.jpg&img83.jpg&img84.jpg', '8', 'S&M&L&XL', '23');
INSERT INTO `goodlist` VALUES ('9', '[支持合肥自提] （合肥）丝尚界 桑蚕丝连衣裙', '5464', '763', 'img9.jpg&img91.jpg&img92.jpg&img93.jpg&img94.jpg', '9', 'S&M&L&XL', '26');
INSERT INTO `goodlist` VALUES ('10', '[支持深圳自提] JESSIE/杰西 L连衣裙', '5432', '799', 'img1.jpg&img11.jpg&img12.jpg&img13.jpg', '10', 'S&M&L&XL', '29');
INSERT INTO `goodlist` VALUES ('11', '[支持郑州自提] A03 秋冬新款休闲大衣外套', '2243', '567', 'img21.jpg&img22.jpg&img23.jpg&img24.jpg&img25.jpg', '11', 'S&M&L&XL', '32');
INSERT INTO `goodlist` VALUES ('12', '[支持深圳自提] JESSIE/杰西 女士知性衬衫', '3242', '799', 'img3.jpg&img31.jpg&img32.jpg&img33.jpg', '12', 'S&M&L&XL', '35');
INSERT INTO `goodlist` VALUES ('13', '[支持深圳自提] （深圳）娅奴 女士秋冬款时尚大衣', '3345', '667', 'img4.jpg&img41.jpg&img42.jpg&img43.jpg&img44.jpg', '13', 'S&M&L&XL', '38');
INSERT INTO `goodlist` VALUES ('14', '[支持深圳自提] ROEM洛妍 洛妍女装甜美格子宽松长款毛呢大衣', '4432', '554', 'img5.jpg&img51.jpg&img52.jpg&img53.jpg', '14', 'S&M&L&XL', '41');
INSERT INTO `goodlist` VALUES ('15', '郑州马克华菲 女士新款赫本风韩版双面呢长款大衣', '2456', '667', 'img6.jpg&img61.jpg&img62.jpg&img63.jpg', '15', 'S&M&L&XL', '44');
INSERT INTO `goodlist` VALUES ('16', '[支持合肥自提] （合肥）丝尚界 女士时尚新款包边大衣', '1345', '887', 'img7.jpg&img71.jpg&img72.jpg&img73.jpg&img74.jpg', '16', 'S&M&L&XL', '47');
INSERT INTO `goodlist` VALUES ('17', '[支持深圳自提] K.KENNY 女棉质拉链短风衣（KMSH09)', '4356', '552', 'img8.jpg&img81.jpg&img82.jpg&img83.jpg&img84.jpg', '17', 'S&M&L&XL', '50');
INSERT INTO `goodlist` VALUES ('18', '[支持深圳自提] LIFE·IDEA/莱芙·艾迪儿 长外套', '1345', '763', 'img9.jpg&img91.jpg&img92.jpg&img93.jpg&img94.jpg', '18', 'S&M&L&XL', '53');
INSERT INTO `goodlist` VALUES ('19', '[支持合肥自提] （合肥）丝尚界 桑蚕丝连衣裙', '3211', '654', 'img1.jpg&img11.jpg&img12.jpg&img13.jpg', '19', 'S&M&L&XL', '56');
INSERT INTO `goodlist` VALUES ('20', '[支持深圳自提] JESSIE/杰西 L连衣裙', '2311', '765', 'img21.jpg&img22.jpg&img23.jpg&img24.jpg&img25.jpg', '20', 'S&M&L&XL', '59');
INSERT INTO `goodlist` VALUES ('21', '[支持郑州自提] A04 秋冬新款休闲大衣外套', '1532', '979', 'img3.jpg&img31.jpg&img32.jpg&img33.jpg', '21', 'S&M&L&XL', '62');
INSERT INTO `goodlist` VALUES ('22', '[支持深圳自提] JESSIE/杰西 女士知性衬衫', '4362', '965', 'img4.jpg&img41.jpg&img42.jpg&img43.jpg&img44.jpg', '22', 'S&M&L&XL', '65');
INSERT INTO `goodlist` VALUES ('23', '[支持深圳自提] （深圳）娅奴 女士秋冬款时尚大衣', '2134', '764', 'img5.jpg&img51.jpg&img52.jpg&img53.jpg', '23', 'S&M&L&XL', '68');
INSERT INTO `goodlist` VALUES ('24', '[支持深圳自提] ROEM洛妍 洛妍女装甜美格子宽松长款毛呢大衣', '3245', '876', 'img6.jpg&img61.jpg&img62.jpg&img63.jpg', '24', 'S&M&L&XL', '71');
INSERT INTO `goodlist` VALUES ('25', '郑州马克华菲 女士新款赫本风韩版双面呢长款大衣', '1342', '983', 'img7.jpg&img71.jpg&img72.jpg&img73.jpg&img74.jpg', '25', 'S&M&L&XL', '74');
INSERT INTO `goodlist` VALUES ('26', '[支持合肥自提] （合肥）丝尚界 女士时尚新款包边大衣', '5432', '873', 'img8.jpg&img81.jpg&img82.jpg&img83.jpg&img84.jpg', '26', 'S&M&L&XL', '77');
INSERT INTO `goodlist` VALUES ('27', '[支持深圳自提] K.KENNY 女棉质拉链短风衣（KMSH10)', '3251', '873', 'img9.jpg&img91.jpg&img92.jpg&img93.jpg&img94.jpg', '27', 'S&M&L&XL', '80');
INSERT INTO `goodlist` VALUES ('28', '[支持深圳自提] LIFE·IDEA/莱芙·艾迪儿 长外套', '5431', '673', 'img1.jpg&img11.jpg&img12.jpg&img13.jpg', '28', 'S&M&L&XL', '83');
INSERT INTO `goodlist` VALUES ('29', '[支持合肥自提] （合肥）丝尚界 桑蚕丝连衣裙', '1326', '728', 'img21.jpg&img22.jpg&img23.jpg&img24.jpg&img25.jpg', '29', 'S&M&L&XL', '86');
INSERT INTO `goodlist` VALUES ('30', '[支持深圳自提] JESSIE/杰西 L连衣裙', '1472', '983', 'img3.jpg&img31.jpg&img32.jpg&img33.jpg', '30', 'S&M&L&XL', '89');
INSERT INTO `goodlist` VALUES ('31', '[支持郑州自提] A05 秋冬新款休闲大衣外套', '2314', '873', 'img4.jpg&img41.jpg&img42.jpg&img43.jpg&img44.jpg', '31', 'S&M&L&XL', '92');
INSERT INTO `goodlist` VALUES ('32', '[支持深圳自提] JESSIE/杰西 女士知性衬衫', '3182', '782', 'img5.jpg&img51.jpg&img52.jpg&img53.jpg', '32', 'S&M&L&XL', '95');
INSERT INTO `goodlist` VALUES ('33', '[支持深圳自提] （深圳）娅奴 女士秋冬款时尚大衣', '2456', '563', 'img6.jpg&img61.jpg&img62.jpg&img63.jpg', '33', 'S&M&L&XL', '98');
INSERT INTO `goodlist` VALUES ('34', '[支持深圳自提] ROEM洛妍 洛妍女装甜美格子宽松长款毛呢大衣', '1782', '872', 'img7.jpg&img71.jpg&img72.jpg&img73.jpg&img74.jpg', '34', 'S&M&L&XL', '101');
INSERT INTO `goodlist` VALUES ('35', '郑州马克华菲 女士新款赫本风韩版双面呢长款大衣', '1038', '872', 'img8.jpg&img81.jpg&img82.jpg&img83.jpg&img84.jpg', '35', 'S&M&L&XL', '104');
INSERT INTO `goodlist` VALUES ('36', '[支持合肥自提] （合肥）丝尚界 女士时尚新款包边大衣', '1839', '773', 'img9.jpg&img91.jpg&img92.jpg&img93.jpg&img94.jpg', '36', 'S&M&L&XL', '107');
INSERT INTO `goodlist` VALUES ('37', '[支持深圳自提] K.KENNY 女棉质拉链短风衣（KMSH11)', '1982', '677', 'img1.jpg&img11.jpg&img12.jpg&img13.jpg', '37', 'S&M&L&XL', '110');
INSERT INTO `goodlist` VALUES ('38', '[支持深圳自提] LIFE·IDEA/莱芙·艾迪儿 长外套', '2876', '776', 'img21.jpg&img22.jpg&img23.jpg&img24.jpg&img25.jpg', '38', 'S&M&L&XL', '113');
INSERT INTO `goodlist` VALUES ('39', '[支持合肥自提] （合肥）丝尚界 桑蚕丝连衣裙', '6722', '887', 'img3.jpg&img31.jpg&img32.jpg&img33.jpg', '39', 'S&M&L&XL', '116');
INSERT INTO `goodlist` VALUES ('40', '[支持深圳自提] JESSIE/杰西 L连衣裙', '7652', '556', 'img4.jpg&img41.jpg&img42.jpg&img43.jpg&img44.jpg', '40', 'S&M&L&XL', '119');
INSERT INTO `goodlist` VALUES ('41', '[支持郑州自提] A06 秋冬新款休闲大衣外套', '4523', '778', 'img5.jpg&img51.jpg&img52.jpg&img53.jpg', '41', 'S&M&L&XL', '122');
INSERT INTO `goodlist` VALUES ('42', '[支持深圳自提] JESSIE/杰西 女士知性衬衫', '4321', '986', 'img6.jpg&img61.jpg&img62.jpg&img63.jpg', '42', 'S&M&L&XL', '125');
INSERT INTO `goodlist` VALUES ('43', '[支持深圳自提] （深圳）娅奴 女士秋冬款时尚大衣', '6543', '903', 'img7.jpg&img71.jpg&img72.jpg&img73.jpg&img74.jpg', '43', 'S&M&L&XL', '128');
INSERT INTO `goodlist` VALUES ('44', '[支持深圳自提] ROEM洛妍 洛妍女装甜美格子宽松长款毛呢大衣', '7152', '834', 'img8.jpg&img81.jpg&img82.jpg&img83.jpg&img84.jpg', '44', 'S&M&L&XL', '131');
INSERT INTO `goodlist` VALUES ('45', '郑州马克华菲 女士新款赫本风韩版双面呢长款大衣', '5623', '783', 'img9.jpg&img91.jpg&img92.jpg&img93.jpg&img94.jpg', '45', 'S&M&L&XL', '134');
INSERT INTO `goodlist` VALUES ('46', '[支持合肥自提] （合肥）丝尚界 女士时尚新款包边大衣', '2543', '783', 'img1.jpg&img11.jpg&img12.jpg&img13.jpg', '46', 'S&M&L&XL', '137');
INSERT INTO `goodlist` VALUES ('47', '[支持深圳自提] K.KENNY 女棉质拉链短风衣（KMSH12)', '1827', '738', 'img21.jpg&img22.jpg&img23.jpg&img24.jpg&img25.jpg', '47', 'S&M&L&XL', '140');
INSERT INTO `goodlist` VALUES ('48', '[支持深圳自提] LIFE·IDEA/莱芙·艾迪儿 长外套', '2182', '904', 'img3.jpg&img31.jpg&img32.jpg&img33.jpg', '48', 'S&M&L&XL', '143');
INSERT INTO `goodlist` VALUES ('49', '[支持合肥自提] （合肥）丝尚界 桑蚕丝连衣裙', '7216', '803', 'img4.jpg&img41.jpg&img42.jpg&img43.jpg&img44.jpg', '49', 'S&M&L&XL', '146');
INSERT INTO `goodlist` VALUES ('50', '郑州马克华菲 女士新款赫本风韩版双面呢长款大衣', '4531', '683', 'img5.jpg&img51.jpg&img52.jpg&img53.jpg', '50', 'S&M&L&XL', '149');

-- ----------------------------
-- Table structure for lessmess
-- ----------------------------
DROP TABLE IF EXISTS `lessmess`;
CREATE TABLE `lessmess` (
  `m_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `m_content` varchar(255) NOT NULL,
  `m_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`m_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lessmess
-- ----------------------------
INSERT INTO `lessmess` VALUES ('1', '把的萨芬', '2019-4-17');
INSERT INTO `lessmess` VALUES ('2', '你好', '2018-9-10');
INSERT INTO `lessmess` VALUES ('3', '你好', '2018-9-10');
INSERT INTO `lessmess` VALUES ('4', '你好', '2018-9-10');
INSERT INTO `lessmess` VALUES ('5', '你好', '2018-9-10');
INSERT INTO `lessmess` VALUES ('6', '你好', '2018-9-10');
INSERT INTO `lessmess` VALUES ('7', '你好', '2018-9-10');
INSERT INTO `lessmess` VALUES ('8', '你好', '2018-9-10');
INSERT INTO `lessmess` VALUES ('9', '你好', '2018-9-10');
INSERT INTO `lessmess` VALUES ('10', '你好', '2018-9-10');
INSERT INTO `lessmess` VALUES ('11', '你好', '2018-9-10');
INSERT INTO `lessmess` VALUES ('12', '不在', '2019-4-17');
INSERT INTO `lessmess` VALUES ('13', '年后但是', '2019-4-17');
INSERT INTO `lessmess` VALUES ('14', '都不阿萨', '2019-4-17');

-- ----------------------------
-- Table structure for regtable
-- ----------------------------
DROP TABLE IF EXISTS `regtable`;
CREATE TABLE `regtable` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phonenum` varchar(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of regtable
-- ----------------------------
INSERT INTO `regtable` VALUES ('1', '13411328832', '123456jerry');
INSERT INTO `regtable` VALUES ('2', '18319307328', '12345678');
INSERT INTO `regtable` VALUES ('3', '13719489159', '111111');
INSERT INTO `regtable` VALUES ('4', '13543432959', '111111ting');
INSERT INTO `regtable` VALUES ('5', '13543415543', '111111y');
INSERT INTO `regtable` VALUES ('6', '15819035876', '111111rong');
INSERT INTO `regtable` VALUES ('7', '15819035878', '111111zhu');
INSERT INTO `regtable` VALUES ('8', '13610237333', '111111zhu');
INSERT INTO `regtable` VALUES ('9', '13411328833', '11111111din');
INSERT INTO `regtable` VALUES ('10', '13610237354', '111111zhu');
INSERT INTO `regtable` VALUES ('11', '13411237374', '111111');
INSERT INTO `regtable` VALUES ('20', '13610237344', '123456');

-- ----------------------------
-- Table structure for shopcar
-- ----------------------------
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar` (
  `sc_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `num` int(11) NOT NULL,
  `price` float(11,2) NOT NULL,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `size` varchar(255) DEFAULT NULL,
  `cid` int(11) NOT NULL,
  PRIMARY KEY (`sc_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopcar
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
