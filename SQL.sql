-- phpMyAdmin SQL Dump
-- version 2.8.2
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Jun 17, 2007 at 06:05 PM
-- Server version: 5.0.38
-- PHP Version: 5.2.1
-- 
-- Database: `rainbow9`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `addon`
-- 

CREATE TABLE `addon` (
  `id` int(8) NOT NULL auto_increment,
  `user` int(8) NOT NULL,
  `file` varchar(50) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=latin1 AUTO_INCREMENT=36 ;

-- --------------------------------------------------------

-- 
-- Table structure for table `code`
-- 

CREATE TABLE `code` (
  `id` int(8) NOT NULL auto_increment,
  `num` int(8) NOT NULL,
  `public` int(1) NOT NULL default '1',
  `type` int(1) NOT NULL,
  `date` varchar(100) NOT NULL,
  `user` int(8) NOT NULL,
  `title` varchar(200) NOT NULL,
  `desc` text NOT NULL,
  `shell` text NOT NULL,
  `js` text NOT NULL,
  `css` text NOT NULL,
  `html` text NOT NULL,
  `xml` text NOT NULL,
  `svg` text NOT NULL,
  `xaml` text NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=115 DEFAULT CHARSET=utf8 AUTO_INCREMENT=115 ;

-- --------------------------------------------------------

-- 
-- Table structure for table `log`
-- 

CREATE TABLE `log` (
  `id` int(8) NOT NULL auto_increment,
  `date` int(11) NOT NULL,
  `ip` varchar(30) NOT NULL,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=latin1 AUTO_INCREMENT=38 ;

-- --------------------------------------------------------

-- 
-- Table structure for table `owner`
-- 

CREATE TABLE `owner` (
  `id` int(8) NOT NULL auto_increment,
  `code` int(8) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

-- --------------------------------------------------------

-- 
-- Table structure for table `tag`
-- 

CREATE TABLE `tag` (
  `id` int(8) NOT NULL auto_increment,
  `code` int(8) NOT NULL,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=191 DEFAULT CHARSET=utf8 AUTO_INCREMENT=191 ;

-- --------------------------------------------------------

-- 
-- Table structure for table `user`
-- 

CREATE TABLE `user` (
  `id` int(8) NOT NULL auto_increment,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `title` varchar(50) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;
