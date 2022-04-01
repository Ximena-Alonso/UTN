-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 15-03-2022 a las 22:36:01
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `mod 5 unidad 1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE IF NOT EXISTS `empleados` (
  `id_emp` int(5) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `Trabajo` varchar(50) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Salario` decimal(15,0) NOT NULL,
  `Mail` varchar(30) NOT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_emp`, `Nombre`, `Apellido`, `Trabajo`, `Edad`, `Salario`, `Mail`) VALUES
(1, 'Juan', 'Hagan', 'Programador Senior', 32, '120000', 'juan_hagan@bignet.com'),
(2, 'Gonzalo', 'Pillai', 'Programador Senior', 32, '110000', 'g_pillai@bignet.com'),
(3, 'Ana', 'Dharma', 'Desarrollador Web', 27, '90000', 'ana@bignet.com'),
(4, 'Maria', 'Anchor', 'Desarrollador Web', 25, '85000', 'mary@bignet.com'),
(5, 'Alfred', 'Fernandez', 'Programador Senior', 28, '75000', 'af@bignet.com'),
(6, 'Juan', 'Aguero', 'Programador Senior', 31, '85000', 'juan@bignet.com'),
(7, 'Eduardo', 'Sacan', 'Programador', 25, '85000', 'eddi@bignet.com'),
(8, 'Alejandro', 'Nanda', 'Programador', 28, '85000', 'alenanda@bignet.com'),
(9, 'Hernan', 'Rosso', 'Especialista Multimedia', 33, '90000', 'hernan@bignet.com'),
(10, 'Pablo', 'Simon', 'Especialista Multimedia', 33, '90000', 'ps@bignet.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
