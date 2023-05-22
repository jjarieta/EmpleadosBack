-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 22-05-2023 a las 18:42:48
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empleados`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblareas`
--

DROP TABLE IF EXISTS `tblareas`;
CREATE TABLE IF NOT EXISTS `tblareas` (
  `IdArea` int(11) NOT NULL AUTO_INCREMENT,
  `NombreArea` varchar(50) NOT NULL,
  PRIMARY KEY (`IdArea`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tblareas`
--

INSERT INTO `tblareas` (`IdArea`, `NombreArea`) VALUES
(1, 'ADMINISTRACION'),
(2, 'TECNOLOGIA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblempleados`
--

DROP TABLE IF EXISTS `tblempleados`;
CREATE TABLE IF NOT EXISTS `tblempleados` (
  `TipoDocumento` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `Documento` int(20) NOT NULL,
  `Nombres` varchar(150) COLLATE latin1_spanish_ci NOT NULL,
  `Apellidos` varchar(150) COLLATE latin1_spanish_ci NOT NULL,
  `Direccion` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `Telefono` varchar(20) COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`Documento`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `tblempleados`
--

INSERT INTO `tblempleados` (`TipoDocumento`, `Documento`, `Nombres`, `Apellidos`, `Direccion`, `Telefono`) VALUES
('CC', 123, 'as', 'as', 'asas', '21322323'),
('CC', 23232, 'asaa', 's', 'asas', '1111'),
('CC', 11113, 'aasas', 'asas', 'asas', '121212'),
('CC', 116565, 'asasasas', 'asasas', '1212154', '5160447'),
('CC', 121212, 'asas', 'asa', 'asas', '1212');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblsubareas`
--

DROP TABLE IF EXISTS `tblsubareas`;
CREATE TABLE IF NOT EXISTS `tblsubareas` (
  `IdSubArea` int(11) NOT NULL AUTO_INCREMENT,
  `NombreSubArea` varchar(50) NOT NULL,
  `IdArea` int(11) NOT NULL,
  PRIMARY KEY (`IdSubArea`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tblsubareas`
--

INSERT INTO `tblsubareas` (`IdSubArea`, `NombreSubArea`, `IdArea`) VALUES
(1, 'DESARROLLO', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
