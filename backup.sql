-- MySQL dump 10.13  Distrib 5.7.17, for osx10.12 (x86_64)
--
-- Host: localhost    Database: beatormatch_db
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) DEFAULT NULL,
  `upc` varchar(55) NOT NULL,
  `product_name` varchar(55) NOT NULL,
  `product_desc` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `quantity` int(10) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `asin` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Cameras','013803204131','Canon 6d body','canon 6d body only full frame DSLR','http://www.adorama.com/images/large/ICA6D.JPG',2,1749.00,'2017-05-20 16:35:38','B009B0MZ8U'),(2,'Cameras','018208015030','Nikon D5200 body','Nikon D5200 body only DSLR 24 MP','https://cdn.districtcamera.com/mmdccamera/images/nikon-d5200-body-blk-l.jpg',4,2678.00,'2017-05-20 16:35:38','B00RBW707G'),(3,'Cameras','027242878822','sony a 6000','sony mirrorless DSLR with the lens','http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/44sAAOSwN6JY-iDQ/$_57.JPG?set_id=8800005007',2,849.00,'2017-05-20 16:35:38','B00I8BICB2'),(4,'Cameras','027242876965','Sony DSC-W830 ','Sony DSC-W830 silver ','http://images.prosperentcdn.com/images/250x250/content.abt.com/media/images/products/l_DSCW830.jpg',10,129.00,'2017-05-20 16:35:38','B00HNJWUBI'),(5,'Cameras','027242876972','Sony DSC-W830 ','Sony DSC-W830 black ','https://images-na.ssl-images-amazon.com/images/I/71hPlHBRhlL._SL1200_.jpg',10,129.00,'2017-05-20 16:35:38','B00HNJWUC2'),(9,'Laptops','888462664509','Apple MacBook Pro MLH32LL/A','Apple MacBook Pro MLH32LL/A 15.4-inch Laptop with Touch Bar','https://static.bhphoto.com/images/images500x500/apple_mlh32ll_a_15_4_macbook_pro_with_1477607892000_1293726.jpg',5,3489.00,'2017-05-20 16:35:38','B01LTHXA72'),(11,'Smart Watch','796483212497','Fossil Q Grant','Fossil Q Grant Sand Leather Hybrid Smartwatch FTW10021','http://i.ebayimg.com/images/g/ym0AAOSw3v5YtY7A/s-l500.jpg',NULL,189.00,'2017-05-25 00:18:45','B015SUGKLY');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-30 16:19:11
