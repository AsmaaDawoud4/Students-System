-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2021 at 01:28 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myschool`
--

-- --------------------------------------------------------

--
-- Table structure for table `basic-info`
--

CREATE TABLE `basic-info` (
  `school_name` varchar(40) DEFAULT NULL,
  `school_branch` varchar(40) DEFAULT NULL,
  `school_logo` blob DEFAULT NULL,
  `school_owener` varchar(40) DEFAULT NULL,
  `school_administarion` varchar(40) DEFAULT NULL,
  `schooler_yaer` varchar(15) DEFAULT NULL,
  `school_CIO` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `branches1` varchar(15) NOT NULL,
  `branches2` varchar(15) NOT NULL,
  `branches3` varchar(15) NOT NULL,
  `branches4` varchar(15) NOT NULL,
  `branches5` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customerid` varchar(20) NOT NULL,
  `companyname` varchar(20) NOT NULL,
  `contactname` varchar(20) NOT NULL,
  `address` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `postalcode` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customerid`, `companyname`, `contactname`, `address`, `city`, `postalcode`, `country`) VALUES
('1', 'bbb', 'yy', 'qq', 's', 'qaaa vb ', 'hhh'),
('2', 'ss', 'ss', 's', 's', 's', 's'),
('3', 'qq', 'q', 'q', 'q', 'q', 'q');

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `expense_head` varchar(100) DEFAULT NULL COMMENT 'راس المصروفات',
  `name` varchar(100) DEFAULT NULL COMMENT 'الاسم',
  `Invoice_Number` varchar(100) DEFAULT NULL COMMENT 'رقم الايصال',
  `date` date DEFAULT NULL COMMENT 'التاريخ',
  `amount` smallint(5) DEFAULT NULL COMMENT 'القيمة',
  `attachment` varbinary(255) DEFAULT NULL COMMENT 'إرفاق مستندات',
  `description` varchar(150) DEFAULT NULL COMMENT 'الوصف'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `income`
--

CREATE TABLE `income` (
  `icomehead` varchar(100) DEFAULT NULL COMMENT 'راس البيان(المصروفات - الزي -تبرع - إيجارات-المجموعات-الباص)',
  `name` varchar(75) DEFAULT NULL COMMENT 'الاسم',
  `Invoice Number` varchar(15) DEFAULT NULL COMMENT 'رقم الايصال',
  `date` date DEFAULT NULL COMMENT 'التاريخ',
  `amount` smallint(5) DEFAULT NULL COMMENT 'القيمة',
  `attachment` varbinary(255) DEFAULT NULL COMMENT 'المرفقات',
  `description` varchar(100) DEFAULT NULL COMMENT 'الوصف التفصيلي'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

CREATE TABLE `library` (
  `book_name` varchar(50) DEFAULT NULL COMMENT 'اسم الكتاب',
  `subject` varchar(100) DEFAULT NULL COMMENT 'الموضوع',
  `author` varchar(100) DEFAULT NULL COMMENT 'المؤلف',
  `puplisher` varchar(100) DEFAULT NULL COMMENT 'الناشر',
  `rack` varchar(100) DEFAULT NULL COMMENT 'موقعة',
  `Qty` varchar(100) DEFAULT NULL COMMENT 'عدد'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `receipt`
--

CREATE TABLE `receipt` (
  `id` int(10) DEFAULT NULL,
  `rec-No` varchar(5) DEFAULT NULL COMMENT 'رقم الايصال',
  `rec_date` datetime DEFAULT NULL COMMENT 'تاريخ  الايصال',
  `rec_total` smallint(5) DEFAULT NULL COMMENT 'اجمالي المدفوع',
  `rec_remain` smallint(5) DEFAULT NULL COMMENT 'المتبقى للمصروفات',
  `rec-year` varchar(100) DEFAULT NULL COMMENT 'السنة الدراسية',
  `bus` varchar(100) DEFAULT NULL COMMENT 'الباص',
  `bus-remain` varchar(100) DEFAULT NULL COMMENT 'المتبقى للباص',
  `usr_name` varchar(20) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `receipt`
--

INSERT INTO `receipt` (`id`, `rec-No`, `rec_date`, `rec_total`, `rec_remain`, `rec-year`, `bus`, `bus-remain`, `usr_name`, `timestamp`) VALUES
(62, NULL, '0000-00-00 00:00:00', 0, 0, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00'),
(60, NULL, '0000-00-00 00:00:00', 0, 0, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00'),
(60, NULL, '0000-00-00 00:00:00', 0, 0, NULL, NULL, NULL, NULL, '2021-02-21 19:29:39'),
(62, NULL, '0000-00-00 00:00:00', 0, 0, NULL, NULL, NULL, NULL, '2021-02-21 20:27:41');

-- --------------------------------------------------------

--
-- Table structure for table `std`
--

CREATE TABLE `std` (
  `id` int(10) NOT NULL,
  `std_name` varchar(20) DEFAULT NULL COMMENT 'اسم التلميذ',
  `std_id` varchar(14) NOT NULL COMMENT 'الرقم القومي',
  `std_imge` blob DEFAULT NULL COMMENT 'صورة التلميذ',
  `std_rlgn` varchar(7) DEFAULT NULL COMMENT 'الديانة',
  `std_sex` varchar(5) DEFAULT NULL COMMENT 'النوع',
  `std_DOB` date DEFAULT NULL COMMENT 'تاريخ الميلاد',
  `std_Adress` varchar(50) DEFAULT NULL COMMENT 'العنوان',
  `std_lvl` varchar(100) DEFAULT NULL COMMENT 'المرحلة',
  `std_stge` varchar(100) DEFAULT NULL COMMENT 'الصف',
  `std_class` varchar(100) DEFAULT NULL COMMENT 'الفصل',
  `std_custody` varchar(100) DEFAULT NULL COMMENT 'التلميذ برعاية',
  `Relationship` varchar(100) DEFAULT NULL COMMENT 'صفته ودرجه القرابه',
  `receipt` smallint(5) DEFAULT NULL COMMENT 'المصروفات',
  `bus` smallint(5) DEFAULT NULL COMMENT 'مصروفات الباص',
  `fath_name` varchar(50) NOT NULL COMMENT 'اسم الاب',
  `fath_id` varchar(14) NOT NULL COMMENT 'رقم بطاقة الاب',
  `fath_tel` varchar(11) NOT NULL COMMENT 'تليفون الاب',
  `fath_certif` varchar(30) NOT NULL COMMENT 'المؤهل الدراسي للب',
  `fath_job` varchar(30) NOT NULL COMMENT 'وظيفة الاب',
  `moth_name` varchar(50) NOT NULL COMMENT 'اسم الام',
  `moth_id` varchar(14) NOT NULL COMMENT 'رقم بطاقة الام',
  `moth_tel` varchar(11) NOT NULL COMMENT 'تليفون الام',
  `moth_certif` varchar(30) NOT NULL COMMENT 'المؤهل الدراسي للام',
  `moth_job` varchar(30) NOT NULL COMMENT 'وظيفة الام',
  `socialcase` varchar(10) NOT NULL COMMENT 'الحالة الاجتماعية',
  `usr_name` varchar(20) DEFAULT NULL COMMENT 'اسم المستخدم',
  `timestamp` datetime DEFAULT NULL COMMENT 'بصمة الوقت',
  `std_std_sexn` varchar(20) DEFAULT NULL COMMENT 'الجنسيه',
  `std_Cbirth` varchar(29) DEFAULT NULL COMMENT 'محافظه الميلاد',
  `reg_N` varchar(5) DEFAULT NULL COMMENT 'رقم القيد',
  `R_Name` varchar(50) DEFAULT NULL COMMENT 'اسم الموصى'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `std`
--

INSERT INTO `std` (`id`, `std_name`, `std_id`, `std_imge`, `std_rlgn`, `std_sex`, `std_DOB`, `std_Adress`, `std_lvl`, `std_stge`, `std_class`, `std_custody`, `Relationship`, `receipt`, `bus`, `fath_name`, `fath_id`, `fath_tel`, `fath_certif`, `fath_job`, `moth_name`, `moth_id`, `moth_tel`, `moth_certif`, `moth_job`, `socialcase`, `usr_name`, `timestamp`, `std_std_sexn`, `std_Cbirth`, `reg_N`, `R_Name`) VALUES
(12, '', '30000000000000', '', '', 'male', '0000-00-00', 'mansoura', '', '', '', '', '', NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, 'egt', '', '', ''),
(13, 'mare', '49911051600425', 0x36643235633663653261316162656639656335326331663334313330393864332e706e67, 'ﻣﺴﻴﺤﻲ', 'male', '0000-00-00', 'mansoura', 'الاعداديه', 'الثالث الاعدادى', 'الثالث الاعدادى', 'other', '', NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, '', '', '', ''),
(14, 'maro', '39911051600425', 0x36643235633663653261316162656639656335326331663334313330393864332e706e67, 'ﻣﺴﻴﺤﻲ', 'male', '0000-00-00', '', 'الاعداديه', 'الثالث الاعدادى', 'الثالث الاعدادى', 'other', '', NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, '', '', '', ''),
(15, 'tota', '59911051600425', '', 'ﻣﺴﻴﺤﻲ', 'male', '0000-00-00', '', 'الاعداديه', 'الثالث الاعدادى', 'الثالث الاعدادى', 'other', '', NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, '', '', '', ''),
(16, 'yy', '69911051600425', '', 'ﻣﺴﻴﺤﻲ', 'male', '0000-00-00', '', 'الاعداديه', 'الثالث الاعدادى', 'الثالث الاعدادى', 'other', '', NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, '', '', '', ''),
(60, 'rahma', '59911051600425', 0x6772616475617465642e706e67, 'ﻣﺴﻴﺤﻲ', 'fmale', '0599-11-05', 'tanta', 'الاعداديه', 'الاول الابتدائى', 'الاول الابتدائى', 'other', '', NULL, NULL, 'احمد', '22222222222222', '01092515689', '', '', 'اسما', '33333333333333', '01092515689', '', 'ممرضه', '', NULL, '0000-00-00 00:00:00', 'مصرى', 'الغربية', '11111', ''),
(61, 'احمد', '29911051600425', '', '', 'fmale', '1999-11-05', 'tanta', 'اﻟﻤﺮﺣﻠﺔ', 'اﻟﺼﻒ', 'الفصل', 'الطالب برعاية', '', NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', NULL, '2021-02-14 19:28:04', 'مصرى', 'الغربية', '11111', ''),
(62, 'mariam', '30000000000000', 0x62697274686461792e706e67, 'ﻣﺴﻴﺤﻲ', 'male', '1999-11-05', '', 'الاعداديه', 'الثالث الاعدادى', 'الثالث الاعدادى', 'other', '', NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', NULL, '2021-02-15 02:08:52', 'مصرى', 'الغربية', '11111', '');

-- --------------------------------------------------------

--
-- Table structure for table `std_absent`
--

CREATE TABLE `std_absent` (
  `id_absent` int(11) NOT NULL,
  `ID` int(10) NOT NULL,
  `std_absent` date NOT NULL,
  `ex` tinyint(1) NOT NULL COMMENT 'بعذر',
  `note` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `std_absent`
--

INSERT INTO `std_absent` (`id_absent`, `ID`, `std_absent`, `ex`, `note`) VALUES
(48, 62, '0000-00-00', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `std_behavior`
--

CREATE TABLE `std_behavior` (
  `id_behavior` int(11) NOT NULL,
  `id_std` int(10) NOT NULL,
  `violation` varchar(100) NOT NULL COMMENT 'المخالفه',
  `std_behavior` datetime NOT NULL COMMENT 'تاريخ الاجراء',
  `note` varchar(100) NOT NULL COMMENT 'ملاحظات',
  `execution` varchar(100) NOT NULL COMMENT 'الاجراء'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `std_behavior`
--

INSERT INTO `std_behavior` (`id_behavior`, `id_std`, `violation`, `std_behavior`, `note`, `execution`) VALUES
(1, 62, 'k', '0000-00-00 00:00:00', 'm', 'hhhhhhhhhhhhhhhhhhhhh'),
(5, 62, '', '0000-00-00 00:00:00', 'ggggggggggggggggggg', 'fffffffffff');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `id` int(10) NOT NULL,
  `teacher_name` varchar(100) DEFAULT NULL COMMENT 'اسم المدرس',
  `teacher_DOB` date DEFAULT NULL COMMENT 'تاريخ الميلاد',
  `teacher_Social` varchar(10) DEFAULT NULL COMMENT 'الحالة الاجتماعية',
  `teacher_phone1` varchar(11) DEFAULT NULL COMMENT 'هاتف1',
  `teacher_phone2` varchar(11) DEFAULT NULL COMMENT 'هاتف2',
  `teacher_adress` varchar(100) DEFAULT NULL COMMENT 'العنوان',
  `teacher_pic` blob DEFAULT NULL COMMENT 'الصورة الشخصية',
  `teacher_job` varchar(20) DEFAULT NULL COMMENT 'الوظيفة',
  `teacher_classes` varchar(100) DEFAULT NULL COMMENT 'الفصول',
  `teacher_StartDate` date DEFAULT NULL COMMENT 'تاريخ استلام العمل',
  `teacher_Experince` varchar(100) DEFAULT NULL COMMENT 'الخبرات السابقة',
  `teacher_Salary` varchar(5) DEFAULT NULL COMMENT 'المرتب',
  `teacher_sexn` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`id`, `teacher_name`, `teacher_DOB`, `teacher_Social`, `teacher_phone1`, `teacher_phone2`, `teacher_adress`, `teacher_pic`, `teacher_job`, `teacher_classes`, `teacher_StartDate`, `teacher_Experince`, `teacher_Salary`, `teacher_sexn`) VALUES
(6, NULL, NULL, NULL, '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(7, 'mahmoud', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'الفصول 15', NULL, NULL, NULL, ''),
(8, 'ali', '2021-02-04', 'اعزب', '01092515698', '01592515689', 'tanta', '', 'الوظيفة 2', 'الفصول 13', '2021-02-04', 'exxx', NULL, ''),
(9, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, ''),
(10, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, ''),
(11, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, ''),
(12, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, ''),
(13, NULL, NULL, NULL, NULL, NULL, NULL, 0x30306366376432636338643636613138356164653836633530323465623530662e706e67, NULL, NULL, NULL, NULL, NULL, ''),
(14, '', '0000-00-00', 'الحالة الا', '', '', '', 0x30306366376432636338643636613138356164653836633530323465623530662e706e67, 'الوظيفة', 'الفصول', '0000-00-00', '', NULL, ''),
(15, 'osama', '2021-02-05', 'الحالة الا', '', '', '', 0x30316131326635356233623931623262623034626437666665353036336135312e706e67, 'الوظيفة', 'الفصول', '0000-00-00', '', NULL, ''),
(16, 'ahmed', '2021-02-02', 'متزوج ويعو', '', '', '', 0x35616130333064333763316534396465356337356331633935616237336164302e706e67, 'الوظيفة', 'الفصول', '0000-00-00', '', NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_behavior`
--

CREATE TABLE `teacher_behavior` (
  `behavior_id` int(10) NOT NULL,
  `id` int(10) NOT NULL,
  `teacher_behavior` datetime NOT NULL,
  `notes` varchar(100) NOT NULL,
  `behavior_type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher_behavior`
--

INSERT INTO `teacher_behavior` (`behavior_id`, `id`, `teacher_behavior`, `notes`, `behavior_type`) VALUES
(1, 7, '2021-02-17 00:00:00', 'n', 'm'),
(8, 8, '2021-03-15 00:00:00', '', ''),
(9, 16, '0000-00-00 00:00:00', '', ''),
(10, 8, '0000-00-00 00:00:00', '', 'jjjjjjjjjjjjjjjjjjjjj'),
(11, 8, '0000-00-00 00:00:00', 'HHHHHHHHHHHHHHHHH', ''),
(12, 8, '0000-00-00 00:00:00', 'HHHHHHHHHHHHHHHHH', '');

-- --------------------------------------------------------

--
-- Table structure for table `tech_absent`
--

CREATE TABLE `tech_absent` (
  `id_teacher` int(11) NOT NULL,
  `id` int(10) DEFAULT NULL,
  `teacher_absent` date DEFAULT NULL,
  `execusee` varchar(10) DEFAULT NULL,
  `notes` varchar(100) DEFAULT NULL,
  `absent_obtion` tinyint(4) NOT NULL,
  `ex` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tech_absent`
--

INSERT INTO `tech_absent` (`id_teacher`, `id`, `teacher_absent`, `execusee`, `notes`, `absent_obtion`, `ex`) VALUES
(17, 16, '0000-00-00', '', '', 0, 0),
(31, 8, '0000-00-00', '22', 'kkkkkkkkkkkkkkkk', 0, 0),
(32, 8, '0000-00-00', '', 'lllllllllllllllll', 0, 1),
(37, 8, '0000-00-00', '', '', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) DEFAULT NULL,
  `usr_name` varchar(15) DEFAULT NULL,
  `usr_pwd` varchar(15) DEFAULT NULL,
  `usr_homepg` varchar(20) DEFAULT NULL,
  `usr_pic` blob DEFAULT NULL,
  `usr_phone` varchar(100) DEFAULT NULL,
  `usr_mail` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `receipt`
--
ALTER TABLE `receipt`
  ADD KEY `id` (`id`);

--
-- Indexes for table `std`
--
ALTER TABLE `std`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `std_absent`
--
ALTER TABLE `std_absent`
  ADD PRIMARY KEY (`id_absent`),
  ADD KEY `ID` (`ID`) USING BTREE;

--
-- Indexes for table `std_behavior`
--
ALTER TABLE `std_behavior`
  ADD PRIMARY KEY (`id_behavior`),
  ADD KEY `id_std` (`id_std`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher_behavior`
--
ALTER TABLE `teacher_behavior`
  ADD PRIMARY KEY (`behavior_id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `tech_absent`
--
ALTER TABLE `tech_absent`
  ADD PRIMARY KEY (`id_teacher`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `std`
--
ALTER TABLE `std`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `std_absent`
--
ALTER TABLE `std_absent`
  MODIFY `id_absent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `std_behavior`
--
ALTER TABLE `std_behavior`
  MODIFY `id_behavior` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `teacher_behavior`
--
ALTER TABLE `teacher_behavior`
  MODIFY `behavior_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tech_absent`
--
ALTER TABLE `tech_absent`
  MODIFY `id_teacher` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `receipt`
--
ALTER TABLE `receipt`
  ADD CONSTRAINT `id` FOREIGN KEY (`id`) REFERENCES `std` (`id`);

--
-- Constraints for table `std_absent`
--
ALTER TABLE `std_absent`
  ADD CONSTRAINT `StudentID` FOREIGN KEY (`ID`) REFERENCES `std` (`id`);

--
-- Constraints for table `std_behavior`
--
ALTER TABLE `std_behavior`
  ADD CONSTRAINT `id_std` FOREIGN KEY (`id_std`) REFERENCES `std` (`id`);

--
-- Constraints for table `teacher_behavior`
--
ALTER TABLE `teacher_behavior`
  ADD CONSTRAINT `teacher_behavior_ibfk_1` FOREIGN KEY (`id`) REFERENCES `teacher` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
