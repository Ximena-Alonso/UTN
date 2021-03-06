-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 29-04-2022 a las 20:06:40
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `prueba1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nov1`
--

CREATE TABLE IF NOT EXISTS `nov1` (
  `item` int(5) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `Servicio` text NOT NULL,
  `Plazo` varchar(50) NOT NULL,
  `Descripcion` varchar(500) NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`item`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=41 ;

--
-- Volcado de datos para la tabla `nov1`
--

INSERT INTO `nov1` (`item`, `usuario`, `Servicio`, `Plazo`, `Descripcion`, `img_id`) VALUES
(1, 'ximena', 'Servicio de mantenimiento de ascensor "corredor 1"', '1 año', 'Servicio de verificación y mantenimiento preventivo según establece la legislación de ascensor "corredor 1". No incluye reparaciones mayores', NULL),
(2, 'ximena', 'Servicio de mantenimiento ascensor "azotea"', '3 meses', 'Servicio de verificación y mantenimiento preventivo según establece la legislación de ascensor "azotea". No incluye reparaciones mayores', NULL),
(3, 'ximena', 'Servicio de mantenimiento montacarga ', '3 meses ', 'Servicio de verificación y mantenimiento preventivo según establece la legislación del montacarga. No incluye reparaciones mayores', NULL),
(4, 'flavia', 'Servicio de instalación de ascensor "principal"', '2 meses', 'Servicio de planificación e instalación según establece la legislación de ascensor "principal". Entrega de planos finalizada la obra. Se realizará modificaciones en caso de que la inspección municipal lo requiera', NULL),
(5, 'flavia', 'Servicio de  habilitación  de ascensor "principal"', '2 meses', 'Servicio de habilitación con puesta en marcha, realización y recopilación de documentación necesaria, recepción de visita del inspector municipal', NULL),
(27, 'ximena', 'Instalacion montacarga 2   ', '1 año  6 meses  ', 'Montacarga cocina!', NULL),
(29, 'ximena', 'Servicio mantenimiento montacarga 2 ', '2 meses ', 'Montacarga cocina', NULL),
(30, 'flavia', 'Servicio mantenimiento ascensor "principal "', '1 año ', 'Ascensor principal', NULL),
(32, 'flavia', 'Servicio reparacion ascensor principal', '2 semanas', 'Alcance: reparacion y repuestos', NULL),
(40, 'ximena', 'Servicio mantenimiento montacarga 2 ', '2 semanas', 'uku', ' ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'ximena', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
