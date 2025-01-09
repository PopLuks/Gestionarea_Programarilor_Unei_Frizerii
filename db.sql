-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: first_app
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `programari`
--

DROP TABLE IF EXISTS `programari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programari` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `frizer` varchar(200) DEFAULT NULL,
  `serviciu` varchar(200) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(200) DEFAULT NULL,
  `nume` varchar(200) DEFAULT NULL,
  `phone` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programari`
--

LOCK TABLES `programari` WRITE;
/*!40000 ALTER TABLE `programari` DISABLE KEYS */;
INSERT INTO `programari` VALUES (4,'Lucas','Tuns + Barba','2025-01-15','14:00','Lucas','1203y7243','asfEWFGAG'),(11,'Andrei','Tuns par lung','2025-01-22','12:00','qwdf','qwr','qwr'),(12,'Andrei','Tuns + Barba','2025-01-16','13:00','nat','1245','asf'),(13,'Andrei','Tuns','2025-01-18','10:30','1qwr','124','sdsf'),(14,'Andrei','Tuns + Barba','2025-01-11','11:00','qwe','qwe','qew'),(15,'Gabriel','Tuns par lung','2025-01-16','11:00','qwd','qw','qwe'),(16,'Antonio','Tuns + Barba','2025-01-25','11:00','qwr','qwr','qwr'),(17,'Lucas','Tuns par lung','2025-01-22','11:30','qfew','q1243','sdv'),(18,'Gabriel','Tuns par lung','2025-02-12','15:00','asf','12412','asdgfa'),(19,'Gabriel','Tuns + Barba','2025-01-11','11:30','12','12e','12e'),(21,'Lucas','Tuns par lung','2025-01-23','12:30','mwie','in','cur'),(32,'Antonio','Tuns par lung','2025-01-16','11:00','fqw','qwf','qwf'),(33,'Andrei','Tuns par lung','2025-01-10','11:00','TEST','01293','TST');
/*!40000 ALTER TABLE `programari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Pop Lucas','poplucas@gmail.com','0775932325','test');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-09 21:40:48
