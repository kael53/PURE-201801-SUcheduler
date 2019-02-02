var session_table = " \
CREATE TABLE IF NOT EXISTS `session` ( \
	`crn`	INTEGER NOT NULL, \
	`cn`	TEXT NOT NULL, \
	`type`	TEXT NOT NULL, \
	`section`	TEXT NOT NULL, \
	`instructors`	TEXT NOT NULL, \
	PRIMARY KEY(`crn`) \
);";

var session_data = " \
INSERT INTO `session` VALUES (20001,'ARA110','C','0','Aziz Nazmi  Shakir'), \
 (20002,'ARA110','D','0','Aziz Nazmi  Shakir'), \
 (20003,'ARA120','C','0','Aziz Nazmi  Shakir'), \
 (20004,'ARA120','D','0','Aziz Nazmi  Shakir'), \
 (20005,'ARA130','C','0','Aziz Nazmi  Shakir'), \
 (20006,'ARA130','D','0','Aziz Nazmi  Shakir'), \
 (20007,'ARA140','C','0','Aziz Nazmi  Shakir'), \
 (20008,'ARA140','D','0','Aziz Nazmi  Shakir'), \
 (20009,'ARA510','C','0','Aziz Nazmi  Shakir'), \
 (20010,'ARA510','D','0','Aziz Nazmi  Shakir'), \
 (20011,'ARA520','C','0','Aziz Nazmi  Shakir'), \
 (20012,'ARA520','D','0','Aziz Nazmi  Shakir'), \
 (20013,'ARA530','C','0','Aziz Nazmi  Shakir'), \
 (20014,'ARA530','D','0','Aziz Nazmi  Shakir'), \
 (20015,'ARA540','C','0','Aziz Nazmi  Shakir'), \
 (20016,'ARA540','D','0','Aziz Nazmi  Shakir'), \
 (20017,'ENG300','C','A','Birg\xfcl   K\xf6kt\xfcrk'), \
 (20019,'ENG300','C','C','Birg\xfcl   K\xf6kt\xfcrk'), \
 (20020,'ENG300','C','D','Birg\xfcl   K\xf6kt\xfcrk'), \
 (20021,'FRE110','C','A','Nathalie   Reins'), \
 (20022,'FRE110','D','A','Nathalie   Reins'), \
 (20023,'FRE120','C','0','Nathalie   Reins'), \
 (20024,'FRE120','D','0','Nathalie   Reins'), \
 (20025,'FRE140','C','0','Nathalie   Reins'), \
 (20027,'GER110','C','A','Murat   S\xf6zen'), \
 (20028,'GER110','C','B','Murat   S\xf6zen'), \
 (20029,'GER110','D','A','Murat   S\xf6zen'), \
 (20030,'GER110','D','B','Murat   S\xf6zen'), \
 (20031,'GER120','C','0','Murat   S\xf6zen'), \
 (20032,'GER120','D','0','Murat   S\xf6zen'), \
 (20033,'ITA110','C','0','Michelangelo   De Lauretis'), \
 (20034,'ITA110','D','0','Michelangelo   De Lauretis'), \
 (20035,'ITA120','C','0','Michelangelo   De Lauretis'), \
 (20036,'ITA120','D','0','Michelangelo   De Lauretis'), \
 (20037,'ITA140','C','0','Michelangelo   De Lauretis'), \
 (20038,'ITA140','D','0','Michelangelo   De Lauretis'), \
 (20039,'LAT110','C','A','Furkan   Akderin'), \
 (20040,'LAT110','D','A','Furkan   Akderin'), \
 (20041,'LAT120','C','0','Furkan   Akderin'), \
 (20042,'LAT120','D','0','Furkan   Akderin'), \
 (20043,'LAT140','C','0','Furkan   Akderin'), \
 (20044,'LAT140','D','0','Furkan   Akderin'), \
 (20045,'LAT510','C','A','Furkan   Akderin'), \
 (20046,'LAT510','D','A','Furkan   Akderin'), \
 (20047,'LAT520','C','0','Furkan   Akderin'), \
 (20048,'LAT520','D','0','Furkan   Akderin'), \
 (20049,'LAT540','C','0','Furkan   Akderin'), \
 (20050,'LAT540','D','0','Furkan   Akderin'), \
 (20051,'PERS120','C','0','Kadir   Turgut'), \
 (20052,'PERS120','D','0','Kadir   Turgut'), \
 (20053,'PERS520','C','0','Kadir   Turgut'), \
 (20054,'PERS520','D','0','Kadir   Turgut'), \
 (20061,'SPA120','C','0','Nuria   Gelado Rodriguez'), \
 (20062,'SPA120','D','0','Nuria   Gelado Rodriguez'), \
 (20072,'TUR101','C','A','G\xfcniz   Evirgen'), \
 (20073,'TUR101','C','B','G\xfcniz   Evirgen'), \
 (20074,'TUR101','C','C','G\xfcniz   Evirgen'), \
 (20076,'TUR511','C','A','G\xfcniz   Evirgen'), \
 (20077,'TUR511','C','B','G\xfcniz   Evirgen'), \
 (20078,'TUR511','C','C','G\xfcniz   Evirgen'), \
 (20079,'TUR102','C','0','G\xfcniz   Evirgen'), \
 (20080,'TUR512','C','0','G\xfcniz   Evirgen'), \
 (20081,'TUR201','C','0','G\xfcniz   Evirgen'), \
 (20082,'TUR521','C','0','G\xfcniz   Evirgen'), \
 (20083,'TUR404','C','0','Engin   K\u0131l\u0131\xe7'), \
 (20084,'TUR504','C','0','Engin   K\u0131l\u0131\xe7'), \
 (20085,'ACC201','C','A','Mine Hatice  Aksu'), \
 (20086,'ACC201','C','B','Mine Hatice  Aksu'), \
 (20091,'ACC301','C','0','Ulf   Nilsson'), \
 (20093,'ACC403','C','0','Fatma F\xfcsun   Akkal Bozok'), \
 (20094,'ACC405','C','0','Di\u011fdem   Dikkaya Kolo\u011flu'), \
 (20095,'BAN500','C','0','Bur\xe7in   Bozkaya'), \
 (20096,'BAN504','C','0','Raha Akhavan  Tabatabaei'), \
 (20097,'BAN505','C','0','Abdullah   Da\u015fc\u0131'), \
 (20098,'BAN522','C','0','Ay\u015fe   Kocab\u0131y\u0131ko\u011flu'), \
 (20100,'FIN301','C','A','Fatma Tevhide  Altekin'), \
 (20101,'FIN301','C','B','Alper   Erdo\u011fan'), \
 (20102,'FIN401','C','0','Tolga   Demir'), \
 (20103,'FIN402','C','0','Ali Doruk  G\xfcnayd\u0131n'), \
 (20107,'MGMT201','C','0','Burak   G\xf6kg\xfcr'), \
 (20112,'MGMT203','C','A','Mustafa Hayri  Tongarlak'), \
 (20113,'MGMT203','C','B','Mustafa Hayri  Tongarlak'), \
 (20120,'MGMT401','C','0','Nihat   Kasap'), \
 (20121,'MGMT402','C','A','Berna   Beyhan'), \
 (20122,'MGMT403','C','A','Fatma Tevhide  Altekin'), \
 (20123,'MGMT403','C','B','Fatma Tevhide  Altekin'), \
 (20125,'MGMT406','C','0','\u0130hsan Ercan  Sadi'), \
 (20127,'MGMT415','C','0','Cavit Umut   Ekmek\xe7i'), \
 (20128,'MGMT491','C','0','Neriman   \xdclsever'), \
 (20130,'MGMT496','C','0','Berna   Beyhan'), \
 (20132,'MKTG301','C','A','K\u0131v\u0131lc\u0131m   D\xf6\u011ferlio\u011flu Demir'), \
 (20133,'MKTG301','C','B','Andy Ho Man  Ng'), \
 (20134,'MKTG301','C','C','K\u0131v\u0131lc\u0131m   D\xf6\u011ferlio\u011flu Demir'), \
 (20135,'MKTG401','C','0','Andy Ho Man  Ng'), \
 (20136,'MKTG402','C','0','Cenk   Ko\xe7a\u015f'), \
 (20137,'MKTG406','C','0','C\xfcneyt   Evirgen'), \
 (20141,'OPIM301','C','0','Fatma Tevhide  Altekin'), \
 (20143,'OPIM302','C','0','Nihat   Kasap'), \
 (20145,'OPIM390','C','0','Bur\xe7in   Bozkaya'), \
 (20147,'OPIM402','C','0','Can   Akkan'), \
 (20148,'OPIM408','C','0','Burak   G\xf6kg\xfcr'), \
 (20150,'OPIM410','C','0','Ay\u015fe   Kocab\u0131y\u0131ko\u011flu'), \
 (20151,'ORG301','C','0','Behl\xfcl   \xdcsdiken'), \
 (20152,'ORG302','C','A','Mahmut   Bayaz\u0131t'), \
 (20153,'ORG401','C','0','Gergely   Czukor'), \
 (20156,'TUR001','C','0','Tamer   K\xfct\xfck\xe7\xfc'), \
 (20157,'ENG0002','C','2A2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20158,'ENG0002','C','2B2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20159,'ENG0002','C','2C2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20161,'ENG0003','C','3A2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20162,'ENG0003','C','3B2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20163,'ENG0003','C','3C2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20164,'ENG0003','C','3D2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20166,'ENG0004','C','4A2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20167,'ENG0004','C','4B2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20168,'ENG0004','C','4C2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20169,'ENG0004','C','4D2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20170,'ENG0004','C','4E2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20171,'ENG0004','C','4F2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20172,'ENG0004','C','4G2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20173,'ENG0004','C','4H2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20174,'ENG0004','C','4I2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20175,'ENG0004','C','4J2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20176,'ENG0004','C','4K2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20177,'ENG0004','C','4L2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20178,'ENG0004','C','4M2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20179,'ENG0004','C','4N2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20180,'ENG0004','C','4O2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20181,'ENG0004','C','4P2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20182,'ENG0004','C','4Q2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20183,'ENG0004','C','4R2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20184,'ENG0004','C','4S2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20185,'ENG0004','C','4T2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20186,'ANTH214','C','0','Asl\u0131   \u0130kizo\u011flu Erens\xfc'), \
 (20188,'CONF502','C','0','Mehmet Emre  Hatipo\u011flu'), \
 (20202,'CULT362','C','0','Asl\u0131   \u0130kizo\u011flu Erens\xfc'), \
 (20207,'CULT441','C','0','Ay\u015fecan   Terzio\u011flu'), \
 (20208,'CULT541','C','0','Ay\u015fecan   Terzio\u011flu'), \
 (20209,'CULT501','C','0','Ay\u015fe G\xfcl   Alt\u0131nay'), \
 (20223,'ECON201','C','A','Mustafa O\u011fuz   Afacan'), \
 (20224,'ECON201','C','B','Mustafa O\u011fuz   Afacan'), \
 (20225,'ECON201','C','C','Sel\xe7uk   \xd6zyurt'), \
 (20229,'ECON202','C','A','\u0130nci   G\xfcm\xfc\u015f'), \
 (20230,'ECON202','C','B','Remzi   Kaygusuz'), \
 (20231,'ECON202','C','C','Ivan Lopez  Cruz'), \
 (20232,'ECON202','C','D','G\xf6n\xfcl   \u015eeng\xfcl'), \
 (20233,'ECON202','C','E','Bahri   Y\u0131lmaz'), \
 (20239,'ECON204','C','A','Mehmet   Ba\xe7'), \
 (20240,'ECON204','C','B','Mehmet   Ba\xe7'), \
 (20241,'ECON204','C','C','Esra   Durceylan Kaygusuz'), \
 (20242,'ECON204','C','D','\u0130zak   Atiyas'), \
 (20247,'ECON310','C','0','Mehmet   Barlo'), \
 (20249,'ECON323','C','0','Erdal   Ayd\u0131n'), \
 (20250,'ECON330','C','0','Esra   Durceylan Kaygusuz'), \
 (20252,'ECON350','C','0','Ahmet Burak   Emel'), \
 (20253,'ECON360','C','0','Remzi   Kaygusuz'), \
 (20255,'ECON407','C','0','Bahri   Y\u0131lmaz'), \
 (20257,'ES507','C','0','Bahri   Y\u0131lmaz'), \
 (20258,'ECON412','C','0','\u0130zak   Atiyas'), \
 (20259,'ECON610','C','0','\u0130zak   Atiyas'), \
 (20260,'ECON430','C','0','Abdurrahman Bekir  Aydemir'), \
 (20261,'ECON488','C','0','Ahmet   Alkan'), \
 (20262,'ECON688','C','0','Ahmet   Alkan'), \
 (20263,'ECON502','C','0','Eren   \u0130nci'), \
 (20264,'ECON502','R','0','Eren   \u0130nci'), \
 (20265,'ECON504','C','0','\u0130nci   G\xfcm\xfc\u015f'), \
 (20266,'ECON504','R','0','\u0130nci   G\xfcm\xfc\u015f'), \
 (20267,'ECON506','C','0','Ivan Lopez  Cruz'), \
 (20268,'ECON506','R','0','Ivan Lopez  Cruz'), \
 (20271,'ECON607','C','0','Sel\xe7uk   \xd6zyurt'), \
 (20272,'ECON630','C','0','Abdurrahman Bekir  Aydemir'), \
 (20314,'GR555','S','A','Daniel Lee   Calvey'), \
 (20315,'GR555','S','B','Daniel Lee   Calvey'), \
 (20316,'GR555','S','C','Daniel Lee   Calvey'), \
 (20317,'HART413','C','0','Ahu   Antmen Akiska'), \
 (20318,'HART513','C','0','Ahu   Antmen Akiska'), \
 (20319,'HART480','C','0','Bratislav   Pantelic'), \
 (20320,'HART580','C','0','Adam Bennett   McConnel'), \
 (20325,'HIST476','C','0','Engin   K\u0131l\u0131\xe7'), \
 (20326,'HIST576','C','0','Engin   K\u0131l\u0131\xe7'), \
 (20327,'HIST485','C','0','Ay\u015fe   Ozil'), \
 (20328,'HIST585','C','0','Ay\u015fe   Ozil'), \
 (20330,'HIST502','C','0','Halil   Berktay'), \
 (20331,'HIST517','C','0','Ferenc P\xe9ter  Csirk\xe9s'), \
 (20332,'HIST581','C','0','Yusuf Hakan  Erdem'), \
 (20345,'IR342','C','0','Sabri   Sayar\u0131'), \
 (20346,'IR392','C','0','Mehmet Emre  Hatipo\u011flu'), \
 (20347,'IR404','C','0','Murat   Kaya'), \
 (20348,'ES504','C','0','Murat   Kaya'), \
 (20349,'IR405','C','0','Senem   Ayd\u0131n D\xfczgit'), \
 (20350,'ES505','C','0','Senem   Ayd\u0131n D\xfczgit'), \
 (20352,'LAW312','C','0','Oya   Ye\u011fen'), \
 (20353,'LAW512','C','0','Oya   Ye\u011fen'), \
 (20354,'LIT212','C','0','Sibel   Irz\u0131k'), \
 (20357,'LIT445','C','0','Sibel   Irz\u0131k'), \
 (20358,'LIT545','C','0','Sibel   Irz\u0131k'), \
 (20359,'LIT492','C','0','Engin   K\u0131l\u0131\xe7'), \
 (20361,'LIT692','C','0','Zehra   Sayers'), \
 (20362,'PHIL201','C','0','Elif   Yavn\u0131k'), \
 (20363,'PHIL301','C','0','G\xfcrol   Irz\u0131k'), \
 (20364,'PHIL501','C','0','G\xfcrol   Irz\u0131k'), \
 (20367,'POLS250','C','0','Ersin Mahmut  Kalayc\u0131o\u011flu'), \
 (20368,'POLS305','C','0','Emre   Erol'), \
 (20369,'POLS307','C','0','\xd6zge   Kemahl\u0131o\u011flu'), \
 (20371,'POLS401','C','0','Mert   Moral'), \
 (20372,'POLS446','C','0','Oya   Ye\u011fen'), \
 (20373,'POLS546','C','0','Oya   Ye\u011fen'), \
 (20374,'POLS483','C','0','Ay\u015fe Bet\xfcl   \xc7elik'), \
 (20375,'POLS583','C','0','Ay\u015fe Bet\xfcl   \xc7elik'), \
 (20376,'POLS493','C','0','Korel   G\xf6ymen'), \
 (20378,'POLS503','C','0','Ersin Mahmut  Kalayc\u0131o\u011flu'), \
 (20379,'POLS504','C','0','Nedim Nami  Nomer'), \
 (20380,'POLS510','C','0','\xd6zge   Kemahl\u0131o\u011flu'), \
 (20381,'POLS530','C','0','Mert   Moral'), \
 (20382,'POLS530','D','0','Mert   Moral'), \
 (20383,'POLS535','C','0','\xd6zge   Kemahl\u0131o\u011flu'), \
 (20384,'POLS540','C','0','Meltem   M\xfcft\xfcler-Ba\xe7'), \
 (20385,'POLS553','C','0','Fuat   Keyman'), \
 (20403,'PSY201','C','0','Olesya   Blazhenkova'), \
 (20404,'PSY303','C','0','Robert   Booth'), \
 (20405,'PSY303','L','A','Robert   Booth'), \
 (20406,'PSY303','L','B','Nihan   Alp'), \
 (20407,'PSY303','L','C','Nihan   Alp'), \
 (20408,'PSY303','L','D','Nihan   Alp'), \
 (20409,'PSY310','C','0','Olesya   Blazhenkova'), \
 (20410,'PSY315','C','0','\xc7a\u011fla   Ayd\u0131n'), \
 (20411,'PSY340','C','0','Asuman   B\xfcy\xfckcan Tetik'), \
 (20412,'PSY360','C','0','Sine   E\u011feci'), \
 (20413,'PSY370','C','0','Robert   Booth'), \
 (20415,'PSY405','C','0','\xc7a\u011fla   Ayd\u0131n'), \
 (20418,'PSY445','C','0','Asuman   B\xfcy\xfckcan Tetik'), \
 (20419,'PSY450','C','0','Nihan   Alp'), \
 (20420,'PSY443','C','0','Nebi   S\xfcmer'), \
 (20434,'VA202','C','A','Meltem   I\u015f\u0131k'), \
 (20435,'VA202','C','B','Meltem   I\u015f\u0131k'), \
 (20436,'VA204','C','0','Wieslaw   Zaremba'), \
 (20437,'VA234','C','0','Onur Fatih  Yaz\u0131c\u0131gil'), \
 (20438,'VA302','C','A','Onur Fatih  Yaz\u0131c\u0131gil'), \
 (20439,'VA302','C','B','Selim   Birsel'), \
 (20440,'VA324','C','0','Wieslaw   Zaremba'), \
 (20441,'VA329','C','0','Murat   Durusoy'), \
 (20444,'VA402','C','A','G\xf6zde   Oral'), \
 (20445,'VA402','C','B','Selim   Birsel'), \
 (20446,'VA434','C','0','Yoong Wah Alex  Wong'), \
 (20447,'VA534','C','0','Yoong Wah Alex  Wong'), \
 (20448,'VA439','C','0','G\xf6zde   Oral'), \
 (20449,'VA539','C','0','Murat   Durusoy'), \
 (20450,'VA440','C','0','Yoong Wah Alex  Wong'), \
 (20451,'VA548','C','0','Yoong Wah Alex  Wong'), \
 (20452,'VA455','C','0','Sel\xe7uk H\xfcseyin  Artut'), \
 (20478,'AL102','C','A1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20479,'AL102','C','A2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20480,'BIO301','C','0','Devrim   G\xf6z\xfca\xe7\u0131k'), \
 (20481,'AL102','C','A3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20483,'AL102','C','A4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20484,'BIO308','C','0','\xdcmit Bar\u0131\u015f  Kutman'), \
 (20486,'AL102','C','A5','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20487,'BIO310','C','0','\xd6znur   Ta\u015ftan Okan'), \
 (20490,'AL102','C','B1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20492,'BIO330','C','0','Levent   \xd6zt\xfcrk'), \
 (20493,'BIO467','C','0','Batu   Erman'), \
 (20494,'BIO567','C','0','Batu   Erman'), \
 (20496,'BIO636','C','0','Devrim   G\xf6z\xfca\xe7\u0131k'), \
 (20497,'BIO676','C','0','\xdcmit Bar\u0131\u015f  Kutman'), \
 (20498,'CHEM202','C','0','Yuda   Y\xfcr\xfcm'), \
 (20499,'CHEM202','L','0','Yuda   Y\xfcr\xfcm'), \
 (20500,'CHEM405','C','0','Selmiye   Alkan G\xfcrsel'), \
 (20501,'CHEM505','C','0','Selmiye   Alkan G\xfcrsel'), \
 (20502,'CHEM302','C','0','Selmiye   Alkan G\xfcrsel'), \
 (20505,'CS210','C','0','Selim Saffet  Balc\u0131soy'), \
 (20506,'CS210','R','A','Selim Saffet  Balc\u0131soy'), \
 (20507,'CS210','R','B','Selim Saffet  Balc\u0131soy'), \
 (20508,'CS210','R','C','Selim Saffet  Balc\u0131soy'), \
 (20509,'CS210','R','D','Selim Saffet  Balc\u0131soy'), \
 (20510,'CS300','C','0','G\xfcl\u015fen   Demir\xf6z'), \
 (20514,'CS301','C','0','Esra   Erdem'), \
 (20516,'CS305','C','0','H\xfcsn\xfc   Yenig\xfcn'), \
 (20517,'CS306','C','0','Y\xfccel   Sayg\u0131n'), \
 (20520,'CS308','C','0','Cemal   Y\u0131lmaz'), \
 (20522,'CS310','C','0','Mehmet Ercan   Nergiz'), \
 (20523,'CS401','C','0','Erdin\xe7   \xd6zt\xfcrk'), \
 (20525,'CS403','C','0','Erkay   Sava\u015f'), \
 (20526,'CS534','C','0','Erkay   Sava\u015f'), \
 (20528,'CS406','C','0','Kamer   Kaya'), \
 (20529,'CS531','C','0','Kamer   Kaya'), \
 (20530,'CS407','C','0','Kemal   \u0130nan'), \
 (20531,'CS503','C','0','Kemal   \u0130nan'), \
 (20533,'CS432','C','0','Albert   Levi'), \
 (20536,'CS515','C','0','Ay\u015fe Berrin  Yan\u0131ko\u011flu'), \
 (20537,'CS517','C','0','Erkay   Sava\u015f'), \
 (20538,'CS560','C','0','Cemal   Y\u0131lmaz'), \
 (20539,'EE302','C','0','Ayhan   Bozkurt'), \
 (20541,'EE306','C','0','\u0130brahim   Tekin'), \
 (20543,'EE308','C','0','Ayhan   Bozkurt'), \
 (20545,'EE310','C','0','\u0130lker   Hamzao\u011flu'), \
 (20549,'EE314','C','0','Mehmet   Keskin\xf6z'), \
 (20551,'EE404','C','0','Murat Kaya  Yap\u0131c\u0131'), \
 (20555,'EE555','C','0','\xd6zg\xfcr   G\xfcrb\xfcz'), \
 (20556,'ENS505','C','0','Hans   Frenk'), \
 (20557,'ENS511','C','0','\xd6zg\xfcr   Er\xe7etin'), \
 (20558,'IE303','C','0','B\xfclent   Sezen'), \
 (20565,'IE304','C','A','Esra   Koca'), \
 (20570,'IE309','C','0','Bahattin   Ko\xe7'), \
 (20575,'IE311','C','A','Burak   Kocuk'), \
 (20576,'IE311','C','B','Burak   Kocuk'), \
 (20577,'IE311','R','A1','Burak   Kocuk'), \
 (20578,'IE311','R','A2','Burak   Kocuk'), \
 (20579,'IE311','R','A3','Burak   Kocuk'), \
 (20580,'IE311','R','A4','Burak   Kocuk'), \
 (20581,'IE311','R','B1','Burak   Kocuk'), \
 (20582,'IE311','R','B2','Burak   Kocuk'), \
 (20583,'IE311','R','B3','Burak   Kocuk'), \
 (20584,'IE311','R','B4','Burak   Kocuk'), \
 (20585,'IE401','C','A','Nilay   Noyan'), \
 (20590,'IE402','C','0','L\xfctfi Taner  Tun\xe7'), \
 (20595,'IE403','C','0','Zeynep Didem   Demir'), \
 (20599,'IE405','C','0','Murat   Kaya'), \
 (20606,'IE409','C','0','Esra   Koca'), \
 (20609,'IE414','C','0','G\xfcnd\xfcz Ahmet  Ulusoy'), \
 (20612,'IE416','C','0','Bahattin   Ko\xe7'), \
 (20617,'IE503','C','0','Hans   Frenk'), \
 (20618,'IE512','C','0','G\xfcven\xe7   \u015eahin'), \
 (20621,'IE606','C','0','Amine Gizem  \xd6zbayg\u0131n'), \
 (20623,'MAT302','C','0','Fevzi \xc7akmak  Cebeci'), \
 (20626,'MAT307','C','0','Ali Rana  At\u0131lgan'), \
 (20628,'MAT308','C','0','Eda   Aydo\u011fan G\xfcng\xf6r'), \
 (20629,'MAT309','C','0','Hatice Sinem  \u015ea\u015f \xc7ayc\u0131'), \
 (20631,'MAT406','C','0','Selmiye   Alkan G\xfcrsel'), \
 (20632,'MAT422','C','0','Serkan   \xdcnal'), \
 (20633,'MAT522','C','0','Mehmet Ali   G\xfclg\xfcn'), \
 (20634,'MAT505','C','0','Murat   B\xfcy\xfck'), \
 (20635,'MAT560','C','0','Yuda   Y\xfcr\xfcm'), \
 (20636,'MAT571','C','0','Bur\xe7   M\u0131s\u0131rl\u0131o\u011flu'), \
 (20638,'MATH311','C','0','Michel   Lavrauw'), \
 (20639,'MATH572','C','0','Michel   Lavrauw'), \
 (20640,'MATH318','C','0','Ayesha Asloob  Qureshi'), \
 (20641,'MATH502','C','0','Nihat G\xf6khan   G\xf6\u011f\xfc\u015f'), \
 (20642,'MATH512','C','0','Michel   Lavrauw'), \
 (20643,'MATH524','C','0','Turgay   Bayraktar'), \
 (20644,'ME408','C','0','Ahmet   Onat'), \
 (20645,'ME408','L','0','Ahmet   Onat'), \
 (20646,'ME302','C','0','Bekir   Bediz'), \
 (20648,'ME305','C','0','Kemalettin   Erbatur'), \
 (20651,'ME308','C','0','Kemalettin   Erbatur'), \
 (20654,'ME309','C','0','Ali   Ko\u015far'), \
 (20656,'ME412','C','0','G\xfcll\xfc   K\u0131z\u0131lta\u015f \u015eendur'), \
 (20657,'ME512','C','0','G\xfcll\xfc   K\u0131z\u0131lta\u015f \u015eendur'), \
 (20658,'ME415','C','0','Serhat   Ye\u015filyurt'), \
 (20659,'ME515','C','0','Serhat   Ye\u015filyurt'), \
 (20661,'ME420','C','0','Serhat   Ye\u015filyurt'), \
 (20662,'ME520','C','0','Serhat   Ye\u015filyurt'), \
 (20663,'ME420','R','0','Serhat   Ye\u015filyurt'), \
 (20664,'ME425','C','0','Mustafa   \xdcnel'), \
 (20665,'ME525','C','0','Mustafa   \xdcnel'), \
 (20668,'ME530','C','0','Ali   Ko\u015far'), \
 (20669,'ME562','C','0','Volkan   Pato\u011flu'), \
 (20675,'NS216','C','0','Christopher   Mayack'), \
 (20676,'NS218','C','0','G\xf6zde   \u0130nce'), \
 (20677,'NS222','C','0','Ersin   G\xf6\u011f\xfc\u015f'), \
 (20678,'PHYS304','C','0','Emrah   Kalemci'), \
 (20679,'PHYS304','R','0','Emrah   Kalemci'), \
 (20680,'PHYS412','C','0','Emrah   Kalemci'), \
 (20682,'PHYS484','C','0','Mehmet Zafer  Gedik'), \
 (20683,'PHYS584','C','0','Mehmet Zafer  Gedik'), \
 (20684,'PHYS512','C','0','Cihan Kemal  Sa\xe7l\u0131o\u011flu'), \
 (20685,'PHYS512','R','0','Cihan Kemal  Sa\xe7l\u0131o\u011flu'), \
 (20686,'PHYS532','C','0','Mehmet Zafer  Gedik'), \
 (20687,'PHYS541','C','0','\xdcnal   Ertan'), \
 (20688,'EE406','C','0','\u0130brahim   Tekin'), \
 (20689,'EE556','C','0','\u0130brahim   Tekin'), \
 (20695,'MAT206','C','0','Cleva   Ow Yang'), \
 (20696,'MAT206','R','0','Cleva   Ow Yang'), \
 (20697,'MAT402','C','0','\xd6zge   Akbulut Halatc\u0131'), \
 (20698,'AL102','C','B2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20699,'AL102','C','B3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20700,'AL102','C','B4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20701,'AL102','C','B5','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20702,'AL102','C','C1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20703,'AL102','C','C2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20704,'AL102','C','C3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20705,'AL102','C','C4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20706,'AL102','C','C5','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20707,'AL102','C','D1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20708,'AL102','C','D2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20709,'AL102','C','D3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20710,'AL102','C','D4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20711,'AL102','C','D5','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20734,'IF100','C','A','\u0130nan\xe7   Ar\u0131n'), \
 (20735,'IF100','C','B','Duygu   Karao\u011flan Altop'), \
 (20765,'MATH101','C','A','\u015eirin   \xc7al\u0131\u015fkan'), \
 (20766,'MATH101','C','B','Nurdag\xfcl   Anbar Meidl'), \
 (20783,'MATH102','C','A','Albert   Erkip'), \
 (20814,'NS101','C','A','Asl\u0131han Muazzez  \xdcnsal'), \
 (20815,'NS101','C','B','\xdcnal   Ertan'), \
 (20816,'NS101','C','C','Emine S\xfcphan   Bakkal'), \
 (20817,'NS101','C','D','Asl\u0131han Muazzez  \xdcnsal'), \
 (20824,'MATH102','C','B','Nilay   Duruk Mutluba\u015f'), \
 (20825,'NS102','C','A','G\xf6zde   \u0130nce'), \
 (20826,'NS102','C','B','\u0130smet \u0130n\xf6n\xfc  Kaya'), \
 (20827,'NS102','C','C','Emre   Erdem'), \
 (20828,'NS102','C','D','Asl\u0131han Muazzez  \xdcnsal'), \
 (20829,'NS102','C','E','Bur\xe7   M\u0131s\u0131rl\u0131o\u011flu'), \
 (20830,'NS102','C','F','Yuki   Kaneko G\xf6\u011f\xfc\u015f'), \
 (20831,'NS102','C','G','Og\xfcn   Adebali'), \
 (20832,'NS102','C','H','Kerem   Bora'), \
 (20844,'PROJ201','C','0','Zehra   Sayers'), \
 (20845,'SPS101','C','0','Emre   Erol'), \
 (20855,'SPS102','C','A','Emre   Erol'), \
 (20856,'SPS102','C','B','Emre   Erol'), \
 (20878,'SPS303','C','A','Nedim Nami  Nomer'), \
 (20879,'SPS303','C','B','Nedim Nami  Nomer'), \
 (20899,'TLL101','C','A1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20900,'TLL101','C','A2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20901,'TLL101','C','A3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20902,'TLL101','C','A4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20903,'TLL101','C','B1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20904,'TLL101','C','B2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20905,'TLL101','C','B3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20906,'TLL101','C','B4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20907,'TLL101','C','C1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20908,'TLL101','C','C2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20909,'TLL101','C','C3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20910,'TLL101','C','C4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20911,'TLL101','C','D1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20912,'TLL101','C','D2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20913,'TLL101','C','D3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20914,'TLL101','C','D4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20915,'TLL102','C','A1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20916,'TLL102','C','A2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20917,'TLL102','C','A3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20918,'TLL102','C','A4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20920,'TLL102','C','A5','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20921,'TLL102','C','A6','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20922,'TLL102','C','B1Y','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20923,'TLL102','C','B2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20924,'TLL102','C','B3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20925,'TLL102','C','B4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20926,'TLL102','C','B5','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20927,'TLL102','C','B6','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20928,'TLL102','C','B7','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20929,'TLL102','C','B8','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20930,'TLL102','C','C1Y','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20931,'TLL102','C','C2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20932,'TLL102','C','C3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20933,'TLL102','C','C4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20934,'TLL102','C','C5','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20935,'TLL102','C','C6','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20936,'TLL102','C','C7','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20937,'TLL102','C','C8','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20938,'TLL102','C','D1Y','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20939,'TLL102','C','D2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20940,'TLL102','C','D3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20941,'TLL102','C','D4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20942,'TLL102','C','D5','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20943,'TLL102','C','D6','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20944,'TLL102','C','D7','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20945,'TLL001','C','A1Y','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20946,'TLL001','C','A2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20947,'TLL001','C','A3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20948,'TLL001','C','A4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20949,'TLL001','C','A5','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20950,'TLL001','C','A6','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20951,'TLL001','C','A7','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20952,'TLL001','C','A8','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20953,'TLL001','C','A9','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20954,'TLL001','C','A10','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20955,'TLL001','C','B1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20956,'TLL001','C','B2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20957,'TLL001','C','B3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20958,'TLL001','C','B4','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20959,'TLL001','C','B5','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20960,'TLL001','C','B6','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20961,'TLL001','C','B7','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20962,'TLL001','C','B8','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (20966,'HUM202','C','0','Bratislav   Pantelic'), \
 (20973,'HUM203','C','0','T\xfclay   Artan'), \
 (20977,'HUM204','C','0','Fulya   \xc7elikel'), \
 (20982,'HUM206','C','A','Fevziye Deniz  Tarba Ceylan'), \
 (20983,'HUM206','C','B','Fevziye Deniz  Tarba Ceylan'), \
 (20984,'HUM211','C','A','Kelly Todd  Brewer'), \
 (20985,'HUM211','C','B','Kelly Todd  Brewer'), \
 (20986,'HUM212','C','0','G\xfcldehen   Kaya'), \
 (20991,'HUM214','C','0','Fulya   \xc7elikel'), \
 (20994,'HUM221','C','A','Muhsin   Yanar'), \
 (20995,'HUM221','C','B','Muhsin   Yanar'), \
 (20996,'HUM224','C','0','\u0130lke   Boran'), \
 (21001,'HUM232','C','0','G\xfcldehen   Kaya'), \
 (21004,'HUM241','C','A','Kelly Todd  Brewer'), \
 (21005,'HUM241','C','B','Kelly Todd  Brewer'), \
 (21009,'ENS209','C','A','Utku   Seven'), \
 (21010,'ENS209','C','B','Eralp   Demir'), \
 (21027,'MATH204','C','A','Ka\u011fan   Kur\u015fung\xf6z'), \
 (21028,'MATH204','C','B','Mohammad   Sadek'), \
 (21053,'CS201','C','A','G\xfcl\u015fen   Demir\xf6z'), \
 (21054,'CS201','C','B','Duygu   Karao\u011flan Altop'), \
 (21073,'CS204','C','0','Albert   Levi'), \
 (21074,'CS204','L','A1','Albert   Levi'), \
 (21075,'CS204','L','A2','Albert   Levi'), \
 (21076,'CS204','L','B1','Albert   Levi'), \
 (21077,'CS204','L','B2','Albert   Levi'), \
 (21078,'CS204','L','C1','Albert   Levi'), \
 (21079,'CS204','L','C2','Albert   Levi'), \
 (21080,'CS204','L','D1','Albert   Levi'), \
 (21081,'CS204','L','D2','Albert   Levi'), \
 (21082,'MATH201','C','0','Canan   Ka\u015f\u0131kc\u0131'), \
 (21093,'MATH202','C','0','Yasemin   \u015eeng\xfcl Tezel'), \
 (21102,'MATH203','C','A','Sar\u0131kaya   Yunus'), \
 (21103,'MATH203','C','B','Turgay   Bayraktar'), \
 (21124,'MATH306','C','A','Semih Onur  Sezer'), \
 (21125,'MATH306','C','B','Sinan   Y\u0131ld\u0131r\u0131m'), \
 (21136,'ENS208','C','A','Amine Gizem  \xd6zbayg\u0131n'), \
 (21137,'ENS208','C','B','G\xfcven\xe7   \u015eahin'), \
 (21138,'ENS208','R','A','Amine Gizem  \xd6zbayg\u0131n'), \
 (21139,'ENS208','R','B','G\xfcven\xe7   \u015eahin'), \
 (21140,'ENS201','C','0','\u0130brahim K\xfcr\u015fat  \u015eendur'), \
 (21143,'ENS206','C','0','Mustafa   \xdcnel'), \
 (21148,'ENS205','C','0','Mehmet Ali   G\xfclg\xfcn'), \
 (21152,'EE202','C','0','Ya\u015far   G\xfcrb\xfcz'), \
 (21155,'EE200','C','A','Ya\u015far   G\xfcrb\xfcz'), \
 (21156,'EE200','C','B','Ya\u015far   G\xfcrb\xfcz'), \
 (21157,'EE200','C','C','Ya\u015far   G\xfcrb\xfcz'), \
 (21162,'BIO335','C','0','Levent   \xd6zt\xfcrk'), \
 (21164,'ENS214','C','0','Bekir   Bediz'), \
 (21165,'ENS214','R','A','Bekir   Bediz'), \
 (21166,'ENS214','R','B','Bekir   Bediz'), \
 (21167,'IE305','C','A','Ali Rana  At\u0131lgan'), \
 (21168,'IE305','C','B','Ali Rana  At\u0131lgan'), \
 (21185,'MGMT404','C','0','T\xfcrkan   Yosun'), \
 (21188,'ME441','C','0','Tu\u011f\xe7e   Y\xfcksel'), \
 (21189,'ME541','C','0','Tu\u011f\xe7e   Y\xfcksel'), \
 (21194,'IE302','C','A','Ahmet Bar\u0131\u015f  Balc\u0131o\u011flu'), \
 (21195,'IE302','C','B','Ahmet Bar\u0131\u015f  Balc\u0131o\u011flu'), \
 (21202,'POLS448','C','0','Seyed Babak Rezee  Daryakenari'), \
 (21203,'POLS548','C','0','Seyed Babak Rezee  Daryakenari'), \
 (21205,'MFG513','C','0','Eralp   Demir'), \
 (21206,'CS532','C','0','Albert   Levi'), \
 (21211,'MFG516','C','0','Bahattin   Ko\xe7'), \
 (21212,'MFG563','C','0','Erhan   Budak'), \
 (21219,'SEC534','C','0','Erdin\xe7   \xd6zt\xfcrk'), \
 (21220,'CIP101','C','A','Zeynep   Bahar'), \
 (21221,'CIP101','C','B','Zeynep   Bahar'), \
 (21222,'ENG101','C','0','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21223,'ENG102','C','A1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21224,'ENG102','C','A2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21225,'ENG102','C','A3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21226,'ENG102','C','B1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21227,'ENG102','C','B2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21228,'ENG102','C','B3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21229,'ENG102','C','C1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21230,'ENG102','C','C2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21231,'ENG102','C','C3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21232,'ENG102','C','D1','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21233,'ENG102','C','D2','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21234,'ENG102','C','D3','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21236,'PROJ102','C','0','Zehra   Sayers'), \
 (21239,'ECON301','C','0','Erdal   Ayd\u0131n'), \
 (21241,'ENS315','C','0','Tu\u011f\xe7e   Y\xfcksel'), \
 (21242,'EE410','C','0','Mehmet   Keskin\xf6z'), \
 (21244,'CULT299','C','0','Ay\u015fecan   Terzio\u011flu'), \
 (21245,'EE654','C','0','Mehmet   Keskin\xf6z'), \
 (21247,'EE550','C','0','\xd6zg\xfcr   Er\xe7etin'), \
 (21248,'MATH322','C','0','Nilay   Duruk Mutluba\u015f'), \
 (21249,'MGMT402','C','B','Berna   Beyhan'), \
 (21250,'ORG302','C','B','Mahmut   Bayaz\u0131t'), \
 (21251,'OPIM522','C','0','Ay\u015fe   Kocab\u0131y\u0131ko\u011flu'), \
 (21257,'LIT290','C','0','H\xfclya   Adak'), \
 (21258,'PHIL310','C','0','Elif   Yavn\u0131k'), \
 (21259,'PHIL450','C','0','G\xfcrol   Irz\u0131k'), \
 (21260,'PHIL550','C','0','G\xfcrol   Irz\u0131k'), \
 (21261,'POLS537','C','0','Seyed Babak Rezee  Daryakenari'), \
 (21262,'PSY314','C','0','Junko   Kanero'), \
 (21263,'PSY317','C','0','Olesya   Blazhenkova'), \
 (21264,'PSY320','C','0','Junko   Kanero'), \
 (21265,'PSY380','C','0','Nebi   S\xfcmer'), \
 (21266,'PSY382','C','0','Sine   E\u011feci'), \
 (21267,'FIN406','C','0','Nihat   Kasap'), \
 (21271,'SPA130','C','0','Nuria   Gelado Rodriguez'), \
 (21272,'SPA130','D','0','Nuria   Gelado Rodriguez'), \
 (21273,'FRE110','C','B','Nathalie   Reins'), \
 (21274,'FRE110','D','B','Nathalie   Reins'), \
 (21275,'LAT110','D','B','Furkan   Akderin'), \
 (21276,'LAT510','D','B','Furkan   Akderin'), \
 (21277,'LAT110','C','B','Furkan   Akderin'), \
 (21278,'LAT510','C','B','Furkan   Akderin'), \
 (21279,'MGMT506','C','0','O\u011fuz   Bab\xfcro\u011flu'), \
 (21280,'MGMT513','C','0','Ahmet   Esen'), \
 (21281,'MGMT541','C','0','Berna   Beyhan'), \
 (21283,'MKTG525','C','0','Cenk   Ko\xe7a\u015f'), \
 (21284,'MGMT535','C','0','<ABBR title = \"To Be Announced\">TBA</ABBR>'), \
 (21285,'FIN502','C','0','Yi\u011fit   At\u0131lgan'), \
 (21286,'MGMT510','C','0','Remzi   G\xf6z\xfcb\xfcy\xfck'), \
 (21287,'MGMT511','C','0','Bet\xfcl   Gemalmaz'), \
 (21291,'MFIN507','C','0','Tolga   Demir'), \
 (21293,'MFIN523','C','0','Tolga   Demir'), \
 (21296,'MFIN592','C','0','Ali Doruk  G\xfcnayd\u0131n'), \
 (21297,'MFIN599','C','0','Eralp   Denkta\u015f'), \
 (21298,'MKTG522','C','0','C\xfcneyt   Evirgen'), \
 (21301,'MGMT508','C','0','Cenk   Ko\xe7a\u015f'), \
 (21343,'SPS374','C','0','Emre   Erol'), \
 (21346,'MATH543','C','0','Mohammad   Sadek'), \
 (21347,'IE304','C','B','Esra   Koca'), \
 (21349,'IE401','C','B','Nilay   Noyan'), \
 (21351,'TLL130','C','0','Bahad\u0131r   S\xfcrelli'), \
 (21352,'TLL530','C','0','Bahad\u0131r   S\xfcrelli'), \
 (21353,'TLL130','D','0','Bahad\u0131r   S\xfcrelli'), \
 (21354,'TLL530','D','0','Ay\u015fe   Ozil'), \
 (21355,'BAN521','C','0','Mustafa Hayri  Tongarlak'), \
 (21356,'MFIN591','C','0','Ali Doruk  G\xfcnayd\u0131n'), \
 (21358,'PHYS566','C','0','Mehmet Ali   Alpar'); ";

var date_table = " \
CREATE TABLE IF NOT EXISTS `date` ( \
	`crn`	INTEGER NOT NULL, \
	`day`	INTEGER NOT NULL, \
	`start`	INTEGER NOT NULL, \
	`end`	INTEGER NOT NULL \
);";

var date_data = " \
INSERT INTO `date` VALUES (20478,1,4,5), \
 (20478,2,8,8), \
 (20479,1,4,5), \
 (20479,2,8,8), \
 (20481,1,4,5), \
 (20481,2,8,8), \
 (20483,1,4,5), \
 (20483,2,8,8), \
 (20486,1,4,5), \
 (20486,2,8,8), \
 (20490,2,5,6), \
 (20490,4,7,7), \
 (20698,2,5,6), \
 (20698,4,7,7), \
 (20699,2,5,6), \
 (20699,4,7,7), \
 (20700,2,5,6), \
 (20700,4,7,7), \
 (20701,2,5,6), \
 (20701,4,7,7), \
 (20702,3,1,2), \
 (20702,4,6,6), \
 (20703,3,1,2), \
 (20703,4,6,6), \
 (20704,3,1,2), \
 (20704,4,6,6), \
 (20705,3,1,2), \
 (20705,4,6,6), \
 (20706,3,1,2), \
 (20706,4,6,6), \
 (20707,3,4,4), \
 (20707,4,3,4), \
 (20708,3,4,4), \
 (20708,4,3,4), \
 (20709,3,4,4), \
 (20709,4,3,4), \
 (20710,3,4,4), \
 (20710,4,3,4), \
 (20711,3,4,4), \
 (20711,4,3,4), \
 (20085,5,3,5), \
 (20086,4,6,8), \
 (20086,2,11,11), \
 (20091,3,5,7), \
 (20091,1,10,10), \
 (20093,2,4,6), \
 (20094,1,4,6), \
 (20314,1,6,7), \
 (20315,3,5,6), \
 (20316,3,10,11), \
 (20186,2,2,4), \
 (20186,1,1,2), \
 (20001,4,1,3), \
 (20002,2,7,8), \
 (20003,2,4,6), \
 (20004,4,7,8), \
 (20005,2,1,3), \
 (20006,3,5,6), \
 (20007,4,4,6), \
 (20008,3,7,8), \
 (20009,4,1,3), \
 (20010,2,7,8), \
 (20011,2,4,6), \
 (20012,4,7,8), \
 (20013,2,1,3), \
 (20014,3,5,6), \
 (20015,4,4,6), \
 (20016,3,7,8), \
 (20095,1,7,9), \
 (20096,2,2,4), \
 (20097,1,3,5), \
 (21355,3,2,4), \
 (20098,2,7,9), \
 (20498,1,4,5), \
 (20498,4,7,7), \
 (20499,5,7,8), \
 (20502,2,4,5), \
 (20502,3,2,2), \
 (20500,2,2,3), \
 (20500,3,3,3), \
 (20501,2,2,3), \
 (20501,3,3,3), \
 (21220,2,5,7), \
 (21221,3,5,7), \
 (21221,2,5,7), \
 (21053,1,4,5), \
 (21053,2,8,8), \
 (21054,1,6,6), \
 (21054,2,5,6), \
 (21073,1,4,5), \
 (21073,2,8,8), \
 (21074,4,5,6), \
 (21075,4,5,6), \
 (21076,4,7,8), \
 (21077,4,7,8), \
 (21078,4,9,10), \
 (21079,4,9,10), \
 (21080,5,5,6), \
 (21081,5,5,6), \
 (20505,1,1,1), \
 (20505,2,5,6), \
 (20506,4,10,11), \
 (20507,5,10,11), \
 (20508,2,10,11), \
 (20509,3,10,11), \
 (20510,1,7,7), \
 (20510,2,6,7), \
 (20514,2,9,9), \
 (20514,3,5,6), \
 (20516,4,7,8), \
 (20516,5,9,9), \
 (20517,1,8,9), \
 (20517,5,5,5), \
 (20520,4,2,3), \
 (20520,5,8,8), \
 (20522,2,2,4), \
 (20523,2,8,8), \
 (20523,3,1,2), \
 (20525,1,3,3), \
 (20525,3,7,8), \
 (20528,4,5,6), \
 (20528,5,2,2), \
 (20530,3,3,4), \
 (20530,5,7,7), \
 (20533,2,5,5), \
 (20533,5,3,4), \
 (20531,3,3,4), \
 (20531,5,7,7), \
 (20536,2,1,1), \
 (20536,4,7,8), \
 (20537,4,4,4), \
 (20537,5,3,4), \
 (20529,4,5,6), \
 (20529,5,2,2), \
 (21206,2,5,5), \
 (21206,5,3,4), \
 (20526,1,3,3), \
 (20526,3,7,8), \
 (20538,3,9,10), \
 (20538,4,9,9), \
 (20188,5,9,11), \
 (21244,1,9,11), \
 (21244,2,6,8), \
 (20202,1,9,11), \
 (20202,1,6,7), \
 (20207,1,4,5), \
 (20207,3,1,1), \
 (20209,4,4,6), \
 (20208,1,4,5), \
 (20208,3,1,1), \
 (20223,1,4,5), \
 (20223,3,4,4), \
 (20224,1,8,8), \
 (20224,3,7,8), \
 (20225,2,3,4), \
 (20225,4,8,8), \
 (20229,1,4,5), \
 (20229,3,4,4), \
 (20230,1,8,8), \
 (20230,3,7,8), \
 (20231,2,3,4), \
 (20231,4,8,8), \
 (20232,2,5,5), \
 (20232,4,5,6), \
 (20233,1,6,7), \
 (20233,3,3,3), \
 (20239,1,4,5), \
 (20239,3,4,4), \
 (20240,1,8,8), \
 (20240,3,7,8), \
 (20241,2,3,4), \
 (20241,4,8,8), \
 (20242,2,5,5), \
 (20242,4,5,6), \
 (21239,2,7,7), \
 (21239,3,7,8), \
 (20247,3,9,11), \
 (20247,2,11,11), \
 (20249,2,4,5), \
 (20249,3,3,3), \
 (20250,1,9,9), \
 (20250,2,1,2), \
 (20252,1,10,12), \
 (20253,4,9,11), \
 (20255,1,8,8), \
 (20255,3,1,2), \
 (20258,2,1,3), \
 (20260,4,2,4), \
 (20261,1,4,6), \
 (20263,3,1,3), \
 (20264,3,9,9), \
 (20265,1,7,9), \
 (20266,1,10,10), \
 (20267,4,1,3), \
 (20268,5,10,10), \
 (20271,4,4,6), \
 (20259,2,1,3), \
 (20272,2,5,7), \
 (20262,1,4,6), \
 (21155,1,1,3), \
 (21156,3,3,5), \
 (21157,4,6,8), \
 (21152,2,9,9), \
 (21152,3,1,2), \
 (20539,2,2,3), \
 (20539,4,6,6), \
 (20541,1,2,2), \
 (20541,3,1,2), \
 (20543,1,4,5), \
 (20543,2,1,1), \
 (20545,3,7,8), \
 (20545,4,9,9), \
 (20549,1,7,8), \
 (20549,4,7,7), \
 (20551,2,8,8), \
 (20551,3,3,4), \
 (20688,1,6,6), \
 (20688,3,7,8), \
 (21242,2,4,5), \
 (21242,4,5,5), \
 (21247,2,1,1), \
 (21247,4,3,4), \
 (20555,2,6,6), \
 (20555,4,1,2), \
 (20689,1,6,6), \
 (20689,3,7,8), \
 (21245,2,4,5), \
 (21245,4,5,5), \
 (21140,1,6,6), \
 (21140,2,3,4), \
 (21148,1,7,7), \
 (21148,2,6,7), \
 (21143,2,2,2), \
 (21143,3,7,8), \
 (21136,3,3,4), \
 (21136,4,1,1), \
 (21137,3,3,4), \
 (21137,4,1,1), \
 (21138,4,2,2), \
 (21139,4,2,2), \
 (21009,1,1,1), \
 (21009,2,8,9), \
 (21010,1,6,6), \
 (21010,2,4,5), \
 (21164,2,6,6), \
 (21164,5,1,2), \
 (21165,2,10,11), \
 (21166,2,10,11), \
 (21241,2,9,9), \
 (21241,3,1,2), \
 (20556,1,8,9), \
 (20556,2,4,4), \
 (20557,1,2,2), \
 (20557,2,4,5), \
 (20157,1,1,4), \
 (20157,2,1,4), \
 (20158,1,1,4), \
 (20158,2,1,4), \
 (20159,1,1,4), \
 (20159,2,1,4), \
 (20161,1,1,4), \
 (20161,2,1,4), \
 (20162,1,1,4), \
 (20162,2,1,4), \
 (20163,1,1,4), \
 (20163,2,1,4), \
 (20164,1,1,4), \
 (20164,2,1,4), \
 (20166,1,1,4), \
 (20166,2,1,4), \
 (20167,1,1,4), \
 (20167,2,1,4), \
 (20168,1,1,4), \
 (20168,2,1,4), \
 (20169,1,1,4), \
 (20169,2,1,4), \
 (20170,1,1,4), \
 (20170,2,1,4), \
 (20171,1,1,4), \
 (20171,2,1,4), \
 (20172,1,1,4), \
 (20172,2,1,4), \
 (20173,1,1,4), \
 (20173,2,1,4), \
 (20174,1,1,4), \
 (20174,2,1,4), \
 (20175,1,1,4), \
 (20175,2,1,4), \
 (20176,1,1,4), \
 (20176,2,1,4), \
 (20177,1,1,4), \
 (20177,2,1,4), \
 (20178,1,1,4), \
 (20178,2,1,4), \
 (20179,1,1,4), \
 (20179,2,1,4), \
 (20180,1,1,4), \
 (20180,2,1,4), \
 (20181,1,1,4), \
 (20181,2,1,4), \
 (20182,1,1,4), \
 (20182,2,1,4), \
 (20183,1,1,4), \
 (20183,2,1,4), \
 (20184,1,1,4), \
 (20184,2,1,4), \
 (20185,1,1,4), \
 (20185,2,1,4), \
 (21222,1,2,3), \
 (21222,2,3,3), \
 (21223,1,4,5), \
 (21223,2,8,8), \
 (21224,1,4,5), \
 (21224,2,8,8), \
 (21225,1,4,5), \
 (21225,2,8,8), \
 (21226,2,5,6), \
 (21226,4,7,7), \
 (21227,2,5,6), \
 (21227,4,7,7), \
 (21228,2,5,6), \
 (21228,4,7,7), \
 (21229,3,1,2), \
 (21229,4,6,6), \
 (21230,3,1,2), \
 (21230,4,6,6), \
 (21231,3,1,2), \
 (21231,4,6,6), \
 (21232,3,4,4), \
 (21232,4,3,4), \
 (21233,3,4,4), \
 (21233,4,3,4), \
 (21234,3,4,4), \
 (21234,4,3,4), \
 (20017,4,7,8), \
 (20017,5,5,5), \
 (20019,3,4,4), \
 (20019,5,6,7), \
 (20020,3,5,6), \
 (20020,5,4,4), \
 (20348,1,5,7), \
 (20350,3,7,9), \
 (20257,1,8,8), \
 (20257,3,1,2), \
 (20100,5,7,9), \
 (20101,2,5,7), \
 (20102,3,4,6), \
 (20103,4,6,8), \
 (21267,3,1,3), \
 (21285,1,1,3), \
 (21291,1,2,4), \
 (21291,4,2,4), \
 (21293,1,6,8), \
 (21293,2,5,7), \
 (21356,5,2,4), \
 (21296,4,6,8), \
 (21297,3,2,8), \
 (20021,4,7,9), \
 (21273,2,9,11), \
 (20022,2,3,4), \
 (21274,4,10,11), \
 (20023,4,3,5), \
 (20024,2,7,8), \
 (20025,5,2,4), \
 (20027,2,7,9), \
 (20028,1,9,11), \
 (20029,1,4,5), \
 (20030,2,10,11), \
 (20031,2,3,5), \
 (20032,1,7,8), \
 (20317,1,3,5), \
 (20319,4,9,11), \
 (20318,1,3,5), \
 (20320,4,9,11), \
 (20320,1,6,7), \
 (20325,2,7,9), \
 (20327,1,2,4), \
 (20327,1,1,1), \
 (20330,2,10,12), \
 (20331,3,9,11), \
 (20331,1,10,12), \
 (20326,2,7,9), \
 (20332,5,5,7), \
 (20328,1,2,4), \
 (20966,2,3,4), \
 (20966,4,7,7), \
 (20973,2,3,4), \
 (20973,2,8,8), \
 (20977,4,3,4), \
 (20977,4,7,7), \
 (20982,2,2,4), \
 (20983,3,2,4), \
 (20984,3,2,4), \
 (20985,4,7,9), \
 (20986,3,3,4), \
 (20986,4,7,7), \
 (20991,3,3,4), \
 (20991,3,6,6), \
 (20994,2,2,4), \
 (20995,2,8,10), \
 (20996,3,3,4), \
 (20996,3,6,6), \
 (21001,4,3,4), \
 (21001,4,7,7), \
 (21004,2,2,4), \
 (21005,2,8,10), \
 (21194,3,3,4), \
 (21194,4,7,8), \
 (21195,2,3,4), \
 (21195,4,3,4), \
 (20558,3,5,7), \
 (20558,4,10,10), \
 (20565,2,5,5), \
 (20565,3,8,9), \
 (21347,2,9,9), \
 (21347,3,1,2), \
 (21167,1,6,7), \
 (21167,2,1,1), \
 (21168,1,8,9), \
 (21168,2,2,2), \
 (20570,1,2,3), \
 (20570,4,9,9), \
 (20575,1,4,5), \
 (20575,3,3,3), \
 (20576,1,8,9), \
 (20576,3,4,4), \
 (20577,4,7,8), \
 (20578,4,7,8), \
 (20579,4,7,8), \
 (20580,4,7,8), \
 (20581,5,3,4), \
 (20582,5,3,4), \
 (20583,5,3,4), \
 (20584,5,3,4), \
 (20585,1,4,5), \
 (20585,2,8,8), \
 (21349,1,8,9), \
 (21349,2,9,9), \
 (20590,3,5,6), \
 (20590,4,7,8), \
 (20595,4,1,3), \
 (20595,4,10,11), \
 (20599,2,1,1), \
 (20599,4,3,4), \
 (20606,5,6,8), \
 (20606,4,11,12), \
 (20609,4,6,6), \
 (20609,5,3,4), \
 (20612,2,2,3), \
 (20612,3,4,4), \
 (20617,3,7,9), \
 (20618,2,2,4), \
 (20621,2,6,7), \
 (20621,4,5,5), \
 (20734,2,7,8), \
 (20735,2,9,10), \
 (20735,4,1,2), \
 (20345,2,4,6), \
 (20346,5,3,5), \
 (20347,1,5,7), \
 (20349,3,7,9), \
 (20033,2,1,3), \
 (20034,3,6,7), \
 (20035,2,4,6), \
 (20036,3,4,5), \
 (20037,3,1,3), \
 (20038,2,7,8), \
 (20039,1,1,3), \
 (21277,2,9,11), \
 (20040,2,1,2), \
 (21275,1,10,11), \
 (20041,1,7,9), \
 (20042,2,7,8), \
 (20043,2,3,5), \
 (20044,1,4,5), \
 (20045,1,1,3), \
 (21278,2,9,11), \
 (20046,2,1,2), \
 (21276,1,10,11), \
 (20047,1,7,9), \
 (20048,2,7,8), \
 (20049,2,3,5), \
 (20050,1,4,5), \
 (20352,2,7,7), \
 (20352,4,3,4), \
 (20353,2,7,7), \
 (20353,4,3,4), \
 (20354,3,1,3), \
 (21257,3,5,7), \
 (20357,4,1,3), \
 (20359,1,6,8), \
 (20358,4,1,3), \
 (20361,1,6,8), \
 (20361,3,8,8), \
 (20107,2,1,3), \
 (20107,2,10,10), \
 (20112,3,7,9), \
 (20113,3,7,9), \
 (20113,3,10,10), \
 (20120,4,2,4), \
 (20121,2,1,3), \
 (21249,3,6,8), \
 (20122,2,7,9), \
 (20123,2,4,6), \
 (21185,5,2,4), \
 (20125,1,1,3), \
 (20127,4,6,8), \
 (20128,1,2,3), \
 (20130,3,5,5), \
 (21279,2,7,9), \
 (21301,2,9,11), \
 (21286,1,5,7), \
 (21287,1,8,10), \
 (21280,2,4,6), \
 (21284,2,4,6), \
 (21281,2,1,3), \
 (21205,5,2,4), \
 (21211,2,2,3), \
 (21211,3,4,4), \
 (21212,1,2,3), \
 (21212,4,3,3), \
 (20132,2,1,3), \
 (20133,3,4,6), \
 (20134,1,1,3), \
 (20135,1,4,6), \
 (20136,2,7,9), \
 (20137,2,4,6), \
 (21298,2,4,6), \
 (21283,2,1,3), \
 (20695,1,6,6), \
 (20695,3,5,6), \
 (20696,5,10,11), \
 (20623,3,9,9), \
 (20623,5,5,6), \
 (20626,3,7,8), \
 (20626,4,9,9), \
 (20628,4,5,6), \
 (20628,5,1,1), \
 (20629,1,1,1), \
 (20629,2,2,3), \
 (20697,1,1,1), \
 (20697,2,7,8), \
 (20631,3,4,4), \
 (20631,4,1,2), \
 (20632,5,1,3), \
 (20632,2,1,2), \
 (20634,4,1,3), \
 (20633,5,1,3), \
 (20635,1,2,3), \
 (20635,3,3,3), \
 (20636,1,7,7), \
 (20636,5,8,9), \
 (20765,1,8,9), \
 (20765,2,4,4), \
 (20766,1,8,9), \
 (20766,2,2,2), \
 (20783,1,6,7), \
 (20783,2,7,7), \
 (20824,1,4,5), \
 (20824,2,4,4), \
 (21082,4,7,8), \
 (21082,5,4,4), \
 (21093,4,3,4), \
 (21093,5,3,3), \
 (21102,3,1,2), \
 (21102,5,5,5), \
 (21103,4,5,6), \
 (21103,5,1,1), \
 (21027,1,2,3), \
 (21027,2,1,1), \
 (21028,2,3,3), \
 (21028,3,7,8), \
 (21124,4,1,2), \
 (21124,5,5,5), \
 (21125,4,5,6), \
 (21125,5,1,1), \
 (20638,2,8,8), \
 (20638,3,3,4), \
 (20640,1,6,6), \
 (20640,5,6,7), \
 (21248,1,8,8), \
 (21248,2,7,8), \
 (20641,1,4,5), \
 (20641,2,4,4), \
 (20642,2,1,3), \
 (20643,3,7,8), \
 (20643,4,3,3), \
 (21346,1,1,3), \
 (21346,3,5,5), \
 (20639,2,8,8), \
 (20639,3,3,4), \
 (20646,1,8,9), \
 (20646,2,7,7), \
 (20648,1,7,7), \
 (20648,3,5,6), \
 (20651,1,6,6), \
 (20651,2,3,4), \
 (20654,2,5,5), \
 (20654,4,1,2), \
 (20644,1,6,7), \
 (20644,4,9,9), \
 (20645,2,10,10), \
 (20656,2,6,6), \
 (20656,4,5,6), \
 (20658,3,9,9), \
 (20658,4,7,8), \
 (20661,3,3,4), \
 (20661,5,7,7), \
 (20663,3,10,11), \
 (20664,1,3,3), \
 (20664,1,4,5), \
 (21188,1,1,2), \
 (21188,2,8,8), \
 (20657,2,6,6), \
 (20657,4,5,6), \
 (20659,3,9,9), \
 (20659,4,7,8), \
 (20662,3,3,4), \
 (20662,5,7,7), \
 (20665,1,3,3), \
 (20665,1,4,5), \
 (20668,3,1,1), \
 (20668,4,3,4), \
 (21189,1,1,2), \
 (21189,2,8,8), \
 (20669,5,3,5), \
 (20669,2,7,8), \
 (20480,1,6,6), \
 (20480,3,7,8), \
 (20484,1,3,5), \
 (20484,2,10,11), \
 (20487,3,3,4), \
 (20487,5,2,2), \
 (20492,1,2,2), \
 (20492,3,3,4), \
 (21162,4,6,8), \
 (21162,1,10,12), \
 (20493,4,1,3), \
 (20494,4,1,3), \
 (20496,1,7,9), \
 (20497,1,1,2), \
 (20497,1,6,6), \
 (20814,2,7,8), \
 (20815,2,7,8), \
 (20816,3,1,2), \
 (20817,3,1,2), \
 (20817,5,3,4), \
 (20825,1,2,3), \
 (20826,1,2,3), \
 (20827,1,6,7), \
 (20828,1,6,7), \
 (20829,2,2,3), \
 (20830,2,2,3), \
 (20831,2,5,6), \
 (20832,2,5,6), \
 (20832,4,3,4), \
 (20675,3,3,4), \
 (20675,5,7,7), \
 (20676,2,5,6), \
 (20676,3,3,3), \
 (20677,1,3,3), \
 (20677,3,5,6), \
 (20141,1,4,5), \
 (20141,4,2,2), \
 (20143,1,7,8), \
 (20143,2,8,8), \
 (20145,2,1,3), \
 (20147,3,1,3), \
 (20148,3,2,4), \
 (20148,3,10,12), \
 (20150,1,1,3), \
 (21251,2,7,9), \
 (20151,1,1,1), \
 (20151,3,1,1), \
 (20152,4,4,6), \
 (21250,3,5,7), \
 (20153,1,7,9), \
 (20153,4,4,6), \
 (20051,4,1,3), \
 (20052,4,5,6), \
 (20053,4,1,3), \
 (20054,4,5,6), \
 (20362,1,4,4), \
 (20362,2,5,6), \
 (20363,1,6,8), \
 (21258,1,5,5), \
 (21258,2,9,10), \
 (21259,4,3,5), \
 (20364,1,6,8), \
 (21260,4,3,5), \
 (20678,2,9,9), \
 (20678,4,7,8), \
 (20679,3,10,10), \
 (20680,1,8,9), \
 (20680,2,8,8), \
 (20682,1,6,8), \
 (20684,1,4,5), \
 (20684,2,5,5), \
 (20685,1,10,10), \
 (20686,2,1,3), \
 (20687,1,8,9), \
 (20687,2,6,6), \
 (21358,1,2,3), \
 (21358,3,2,2), \
 (20683,1,6,8), \
 (20367,3,2,2), \
 (20367,5,3,4), \
 (20368,3,7,9), \
 (20369,1,5,5), \
 (20369,3,7,8), \
 (20371,2,7,8), \
 (20371,3,3,3), \
 (20372,1,4,6), \
 (21202,1,1,3), \
 (20374,4,4,6), \
 (20376,3,6,8), \
 (20378,1,4,6), \
 (20379,4,3,5), \
 (20380,2,4,6), \
 (20381,1,9,11), \
 (20382,1,12,12), \
 (20383,1,1,3), \
 (21261,4,1,3), \
 (20384,4,9,11), \
 (20373,1,4,6), \
 (21203,1,1,3), \
 (20385,3,9,11), \
 (20375,4,4,6), \
 (21236,5,5,5), \
 (20844,5,5,5), \
 (20403,4,4,5), \
 (20403,5,2,2), \
 (20404,2,1,2), \
 (20405,2,3,3), \
 (20406,2,4,4), \
 (20407,2,5,5), \
 (20408,2,6,6), \
 (20409,3,1,3), \
 (21262,4,7,7), \
 (21262,5,8,9), \
 (20410,2,7,9), \
 (21263,2,9,11), \
 (21264,4,1,2), \
 (21264,5,6,6), \
 (20411,3,7,8), \
 (20411,4,3,3), \
 (20412,1,3,5), \
 (20413,1,1,2), \
 (20413,2,7,7), \
 (21265,2,1,2), \
 (21265,4,6,6), \
 (21266,1,9,11), \
 (20415,3,7,9), \
 (20420,2,4,4), \
 (20420,4,8,9), \
 (20418,1,6,8), \
 (20419,2,1,1), \
 (20419,3,1,2), \
 (21219,2,2,4), \
 (20845,3,3,4), \
 (20845,4,7,8), \
 (20855,2,2,3), \
 (20856,4,1,2), \
 (20856,2,7,8), \
 (20878,5,3,4), \
 (20879,5,3,4), \
 (20879,5,6,6), \
 (21343,5,2,4), \
 (21343,3,2,2), \
 (20061,2,2,4), \
 (20062,5,5,6), \
 (21271,5,2,4), \
 (21272,2,6,7), \
 (20945,1,6,7), \
 (20954,1,6,7), \
 (20946,1,6,7), \
 (20947,1,6,7), \
 (20948,1,6,7), \
 (20949,1,6,7), \
 (20950,1,6,7), \
 (20951,1,6,7), \
 (20952,1,6,7), \
 (20953,1,6,7), \
 (20955,3,6,7), \
 (20956,3,6,7), \
 (20957,3,6,7), \
 (20958,3,6,7), \
 (20959,3,6,7), \
 (20960,3,6,7), \
 (20961,3,6,7), \
 (20962,3,6,7), \
 (20899,1,4,5), \
 (20900,1,4,5), \
 (20901,1,4,5), \
 (20902,1,4,5), \
 (20903,2,5,6), \
 (20904,2,5,6), \
 (20905,2,5,6), \
 (20906,2,5,6), \
 (20907,3,1,2), \
 (20908,3,1,2), \
 (20909,3,1,2), \
 (20910,3,1,2), \
 (20911,4,1,2), \
 (20912,4,1,2), \
 (20913,4,1,2), \
 (20914,4,1,2), \
 (20915,1,2,3), \
 (20916,1,2,3), \
 (20917,1,2,3), \
 (20918,1,2,3), \
 (20920,1,2,3), \
 (20921,1,2,3), \
 (20922,2,2,3), \
 (20923,2,2,3), \
 (20924,2,2,3), \
 (20925,2,2,3), \
 (20926,2,2,3), \
 (20927,2,2,3), \
 (20928,2,2,3), \
 (20929,2,2,3), \
 (20930,3,3,4), \
 (20931,3,3,4), \
 (20932,3,3,4), \
 (20933,3,3,4), \
 (20934,3,3,4), \
 (20935,3,3,4), \
 (20936,3,3,4), \
 (20937,3,3,4), \
 (20938,4,5,6), \
 (20939,4,5,6), \
 (20940,4,5,6), \
 (20941,4,5,6), \
 (20942,4,5,6), \
 (20943,4,5,6), \
 (20944,4,5,6), \
 (21351,2,4,6), \
 (21353,4,1,2), \
 (21352,2,4,6), \
 (21354,4,1,2), \
 (21354,1,1,1), \
 (20156,3,6,7), \
 (20072,3,3,3), \
 (20072,4,6,7), \
 (20073,3,7,8), \
 (20073,4,5,5), \
 (20074,2,7,8), \
 (20074,3,6,6), \
 (20079,2,5,6), \
 (20079,3,5,5), \
 (20081,3,4,4), \
 (20081,4,1,2), \
 (20083,4,4,6), \
 (20083,5,5,6), \
 (20084,4,4,6), \
 (20084,5,5,6), \
 (20076,3,3,3), \
 (20076,4,6,7), \
 (20077,3,7,8), \
 (20077,4,5,5), \
 (20078,2,7,8), \
 (20078,3,6,6), \
 (20080,2,5,6), \
 (20080,3,5,5), \
 (20082,3,4,4), \
 (20082,4,1,2), \
 (20434,2,3,4), \
 (20434,4,6,7), \
 (20435,2,6,7), \
 (20435,4,3,4), \
 (20436,1,7,8), \
 (20436,5,5,6), \
 (20437,3,7,9), \
 (20438,2,5,7), \
 (20439,1,3,4), \
 (20439,4,7,8), \
 (20440,4,3,4), \
 (20440,5,3,4), \
 (20441,3,8,10), \
 (20444,1,6,8), \
 (20445,1,7,8), \
 (20445,4,5,6), \
 (20446,3,2,4), \
 (20448,3,5,7), \
 (20450,4,2,4), \
 (20452,2,8,10), \
 (20447,3,2,4), \
 (20449,3,5,7), \
 (20449,3,8,10), \
 (20451,4,2,4);";

var course_table = " \
CREATE TABLE IF NOT EXISTS `course` ( \
	`subject`	TEXT NOT NULL, \
	`number`	TEXT NOT NULL, \
	`description`	TEXT NOT NULL \
);";

var course_data = " \
INSERT INTO `course` VALUES ('MFG','563','Metal Cutting Mechanics and Dynamics'), \
 ('NS','102','Science of Nature II'), \
 ('NS','101','Science of Nature I'), \
 ('ME','525','Autonomous Mobile Robotics'), \
 ('IE','409','Project Scheduling and Management'), \
 ('EE','314','Digital Communications'), \
 ('ME','520','Renewable and Sustainable Energy Systems'), \
 ('EE','310','Hardware Description Languages'), \
 ('IE','403','Quality Planning and Control'), \
 ('IE','402','Integrated Manufacturing Systems'), \
 ('IE','401','Production and Service Systems Operations'), \
 ('AL','102','Academic Literacies'), \
 ('IE','405','Decision Analysis'), \
 ('HART','513','Visual Arts in Turkey'), \
 ('PHYS','532','Quantum Mechanics II'), \
 ('MKTG','406','Brand Management'), \
 ('MKTG','402','Consumer Behavior'), \
 ('MKTG','401','Marketing Research'), \
 ('HUM','202','Major Works of Western Art'), \
 ('HUM','203','Major Works of Ottoman Culture'), \
 ('HUM','206','Major Works of Drama'), \
 ('HUM','204','Major Works of Classical Music'), \
 ('CHEM','405','Electrochemistry'), \
 ('MATH','203','Introduction to Probability'), \
 ('MATH','202','Differential Equations'), \
 ('MATH','201','Linear Algebra'), \
 ('NS','216','Life on Earth'), \
 ('MATH','204','Discrete Mathematics'), \
 ('ENG','102','Freshman English II'), \
 ('ME','412',''), \
 ('ME','415','Computational Analysis and Simulation'), \
 ('VA','329','Photography and Expression'), \
 ('SPS','374','Global Environmental Challenges'), \
 ('CS','210','Introduction to Data Science'), \
 ('ENS','214','Dynamics'), \
 ('LAW','312','Comparative Constitutional Law'), \
 ('MATH','512','Algebra II'), \
 ('EE','406','Antennas and Propagation for Wireless Communication'), \
 ('EE','404','Introduction to Microelectromechanical Systems'), \
 ('FRE','140','Intermediate French II'), \
 ('BAN','500','Introduction to Business Analytics'), \
 ('MFIN','523','Financial Risk Management'), \
 ('BAN','504','Data Mining with SAS Enterprise Miner'), \
 ('BAN','505','Predictive Analytics'), \
 ('CIP','101','Civic Involvement Projects I'), \
 ('CS','503','Theory of Computation'), \
 ('TUR','001','Basic Turkish I'), \
 ('TLL','001','Communication Skills in Turkish'), \
 ('EE','654','Information Theory'), \
 ('BIO','301','Introduction to Molecular Biology'), \
 ('MAT','560','Carbon Materials Science and Engineering'), \
 ('MFIN','591','Finance Practicum 1'), \
 ('PSY','201','Mind and Behavior'), \
 ('MFIN','592','Finance Practicum 2'), \
 ('MFIN','599','Wealth Management'), \
 ('LIT','692','Advanced Topics in Turkish Literature'), \
 ('PHYS','566','Compact Stars'), \
 ('ORG','401','Human Resources Management'), \
 ('ME','562','Fundamentals of Transport Processes'), \
 ('ENS','315','Energy'), \
 ('CS','432','Computer and Network Security'), \
 ('IE','311','Operations Research I'), \
 ('MATH','101','Calculus I'), \
 ('MATH','102','Calculus II'), \
 ('ORG','302','Organizational Behavior'), \
 ('ORG','301','Organizations and Organizing'), \
 ('ECON','688','Matchings and Markets'), \
 ('POLS','305','Political Ideologies in Modern Turkey'), \
 ('LIT','445','Gender and Sexuality in Literature'), \
 ('POLS','307','Politics of Development'), \
 ('PROJ','201','Undergraduate Project Course'), \
 ('PHIL','201','Fundamental Texts of Western'), \
 ('HIST','502','Explorations in World History II'), \
 ('PSY','317','Learning'), \
 ('MATH','322','Partial Differential Equations'), \
 ('MFG','513','Advanced Topics in Finite Element Analysis'), \
 ('MFG','516','Additive Manufacturing'), \
 ('CS','310','Mobile Application Development'), \
 ('ME','515','Computational Analysis and Simulation'), \
 ('ME','512','Introduction to the Finite Element Method'), \
 ('HART','480','Bauhaus'), \
 ('ECON','630','Advanced Labor Economics'), \
 ('BIO','467','Signal Transduction'), \
 ('TLL','102','Turkish Language and Literature II'), \
 ('TLL','101','Turkish Language and Literature I'), \
 ('PSY','370','Emotion'), \
 ('ME','420','Renewable and Sustainable Energy Systems'), \
 ('ME','425','Autonomous Mobile Robotics'), \
 ('MAT','522','Glass Science and Engineering'), \
 ('MGMT','510','Strategic Management'), \
 ('MGMT','511','Business Simulation'), \
 ('CULT','441','Gender in the Middle East'), \
 ('MGMT','513','International Business'), \
 ('FRE','110','Basic French I'), \
 ('ARA','130','Intermediate Arabic I'), \
 ('HIST','485','Minority Questions in Contemporary Turkey'), \
 ('NS','218','Fundamentals of Nanoscience'), \
 ('VA','455','Physical Computing'), \
 ('MGMT','201','Introduction to Management'), \
 ('IR','404','Energy Politics'), \
 ('IR','405','European Foreign Policy'), \
 ('BIO','330','Environmental Plant Biology'), \
 ('BIO','335','Analytical Techniques'), \
 ('VA','204','Language of Drawing II'), \
 ('VA','202','Visual Language II'), \
 ('SEC','534','Cryptographic Engineering'), \
 ('IE','414','Manufacturing and Digitalization  Strategies'), \
 ('POLS','583','Ethnicity and Nationalism'), \
 ('IE','416','Additive Manufacturing'), \
 ('ENG','101','Freshman English I'), \
 ('EE','302','Digital Integrated Circuits'), \
 ('EE','306','Introduction to Radio Frequency and Microwave Design'), \
 ('EE','308','Microcomputer Based System Design'), \
 ('ECON','412','Competition and Regulation'), \
 ('VA','324','Advanced Drawing'), \
 ('TUR','504','Advanced Readings in Turkish for Foreigners II'), \
 ('LIT','492','Advanced Topics in Turkish Literature'), \
 ('SPS','102','Humanity and Society II'), \
 ('ECON','310','Game Theory'), \
 ('POLS','510','Comparative Politics'), \
 ('CHEM','202','Chemical Kinetics'), \
 ('HUM','211','Major Works of 20th Century Literature'), \
 ('HUM','212','Major Works of Modern Art'), \
 ('HUM','214','Major Works of the Opera'), \
 ('OPIM','301','Operations Management'), \
 ('ECON','504','Macroeconomics II'), \
 ('ECON','488','Matchings and Markets'), \
 ('IR','392','Foreign Policy Analysis'), \
 ('ES','505','European Foreign Policy'), \
 ('LAT','510','Basic Latin I'), \
 ('MATH','502','Analysis II'), \
 ('EE','410','Information and Coding Theory'), \
 ('ARA','540','Intermediate  Arabic II Discussion'), \
 ('TLL','130','Ottoman Turkish II'), \
 ('PSY','320','Developmental Psychology'), \
 ('CHEM','505','Electrochemistry'), \
 ('CS','532','Computer and Network Security'), \
 ('CS','531','Parallel Processing and Algorithms'), \
 ('CS','534','Distributed Systems'), \
 ('PSY','445','Selected Topics in Social Psychology'), \
 ('CULT','362','Memory Studies'), \
 ('PSY','443','Psychology of the Self'), \
 ('MAT','206','Kinetics Recitation'), \
 ('FIN','406','Behavioral Finance'), \
 ('FIN','402','Investments'), \
 ('FIN','401','Corporate Finance'), \
 ('PHYS','584','Quantum Computation and Quantum Information'), \
 ('FRE','120','Basic French II'), \
 ('MGMT','415','Entrepreneurial Technology Commercialization'), \
 ('PHIL','501','Philosophy of Social Sciences'), \
 ('IE','512','Graph Theory and Network Flows'), \
 ('ECON','323','Energy and Environmental Economics'), \
 ('IE','304','Production and Service Systems Planning and Design'), \
 ('IE','305','Simulation'), \
 ('IR','342','Turkish Foreign Policy'), \
 ('MAT','422','Glass Science and Engineering'), \
 ('IE','302','Stochastic Models in Operations Research'), \
 ('IE','303','Decision Economics'), \
 ('BIO','567','Signal Transduction'), \
 ('IE','309','Manufacturing Processes I'), \
 ('ENG','300','Professional Communication Skills in English'), \
 ('CS','407','Theory of Computation'), \
 ('CS','406','Parallel Computing'), \
 ('CS','403','Distributed Systems'), \
 ('CS','401','Computer Architectures'), \
 ('GER','120','Basic German II'), \
 ('ECON','350','Financial Institutions and Markets'), \
 ('MATH','311','Introduction to Algebra'), \
 ('LAW','512','Comparative Constitutional Law'), \
 ('PHYS','304','Quantum Mechanics II'), \
 ('MATH','318','Introduction to Combinatorics'), \
 ('HIST','576','Late Ottoman and Modern Turkish Politics and Literature'), \
 ('HIST','476','Late Ottoman and Modern Turkish Politics and Literature'), \
 ('CONF','502','Correlates of War and Peace'), \
 ('CS','300','Data Structures'), \
 ('CS','301','Algorithms'), \
 ('CS','305','Programming Languages'), \
 ('CS','306','Database Systems'), \
 ('CS','308','Software Engineering'), \
 ('LAT','140','Intermediate Latin II'), \
 ('POLS','546','Latin American Politics'), \
 ('OPIM','410','Decision Making Under Uncertainty'), \
 ('PHYS','412','Statistical Mechanics'), \
 ('POLS','540','International Relations Theory'), \
 ('POLS','548','Conflicts in the Middle East'), \
 ('LIT','545','Gender and Sexuality in Literature'), \
 ('OPIM','408','Retail Operations and Marketing Analytics'), \
 ('MATH','543','Elliptic Curves'), \
 ('TUR','512','Basic Turkish II'), \
 ('TUR','511','Basic Turkish I'), \
 ('PSY','405','Culture and Cognition'), \
 ('PHIL','301','Philosophy of Social Sciences'), \
 ('PSY','360','Abnormal Behavior'), \
 ('ACC','201','Introduction to Financial Accounting and Reporting'), \
 ('HART','580','Bauhaus'), \
 ('TUR','101','Basic Turkish I'), \
 ('TUR','102','Basic Turkish II'), \
 ('PSY','380','Testing and Measurement'), \
 ('PSY','382','Personality'), \
 ('ENS','511','Engineering Optimization'), \
 ('ARA','120','Basic Arabic II'), \
 ('MGMT','203','Introduction to Data Analysis and Research in Business'), \
 ('ARA','530','Intermediate Arabic I'), \
 ('BIO','636','Cancer Biology'), \
 ('PSY','314','Language'), \
 ('PSY','315','Memory'), \
 ('VA','440','Motion Graphics and Art'), \
 ('PSY','310','Cognitive Processes'), \
 ('ITA','120','Basic Italian II'), \
 ('VA','234','Design with Typography'), \
 ('ECON','407','The Political Economy of European Integration'), \
 ('TLL','530','Ottoman Turkish II'), \
 ('GR','555','Academic Writing for Graduate Students'), \
 ('ME','541','Advanced Vehicle Systems'), \
 ('MAT','309','Transport Phenomena in Materials Processing'), \
 ('MAT','308','Phase Equilibria'), \
 ('MAT','307','Composite Materials'), \
 ('MAT','302','Polymer Synthesis'), \
 ('ECON','360','Advanced Macroeconomics'), \
 ('POLS','503','Comparative Method'), \
 ('POLS','504','Turkish Social and Political Thought'), \
 ('PHYS','512','Electromagnetic Theory'), \
 ('SPS','303','Law and Ethics'), \
 ('POLS','483','Ethnicity and Nationalism'), \
 ('MKTG','301','Introduction to Marketing'), \
 ('HIST','585','Minority Questions in Contemporary Turkey'), \
 ('LAT','110','Basic Latin I'), \
 ('EE','200','Electronic Circuit Implementations'), \
 ('EE','202','Electronic Circuits II'), \
 ('VA','302','Project Studio II'), \
 ('BIO','308','Plant Physiology'), \
 ('LIT','212','Analyzing Text and Context'), \
 ('LAT','520','Basic Latin II'), \
 ('ECON','610','Competition and Regulation'), \
 ('CHEM','302','Analytical Chemistry'), \
 ('POLS','250','Comparative Politics'), \
 ('VA','402','Project Studio IV'), \
 ('BIO','676','Metal Homeostasis in Plant Systems'), \
 ('MGMT','496','Entrepreneurial Skills Workshop II'), \
 ('MGMT','491','Career and Professional Development Course'), \
 ('MFIN','507','Venture Capital and Private Equity'), \
 ('BAN','522','Revenue Management'), \
 ('IE','606','Large Scale Optimization'), \
 ('HUM','224','Major Works of 20th Century Music'), \
 ('ME','441','Advanced Vehicle Systems'), \
 ('HUM','221','Major Works of the Novel'), \
 ('ME','408','Mechatronics System Design'), \
 ('SPA','130','Intermediate Spanish I'), \
 ('PSY','450','Selected Topics in Neuroscience'), \
 ('TUR','521','Intermediate Turkish I'), \
 ('MAT','505','Mechanical Behavior of Materials'), \
 ('MGMT','402','Entrepreneurship'), \
 ('MGMT','403','International Business'), \
 ('MGMT','401','Business Strategy'), \
 ('MGMT','406','Globalization'), \
 ('MGMT','404','Technology Management'), \
 ('ARA','110','Basic Arabic I'), \
 ('IE','503','Stochastic Processes'), \
 ('ECON','330','Industrial Organization'), \
 ('FIN','502','Principles Of Finance'), \
 ('ECON','201','Games and Strategies'), \
 ('ECON','202','Macroeconomics'), \
 ('OPIM','522','Revenue Management'), \
 ('ECON','204','Microeconomics'), \
 ('MATH','306','Statistical Modelling'), \
 ('POLS','448','Conflicts in the Middle East'), \
 ('ES','504','Energy Politics'), \
 ('POLS','446','Latin American Politics'), \
 ('ES','507','The Political Economy of European Integration'), \
 ('ENS','205','Introduction to Materials Science I'), \
 ('ENS','206','Systems Modeling and Control'), \
 ('ENS','201','Electromagnetics I'), \
 ('ENS','208','Introduction to Industrial Engineering'), \
 ('ENS','209','Introduction to Computer Aided Drafting and Solid Modeling'), \
 ('ECON','430','Labor Economics'), \
 ('GER','110','Basic German I'), \
 ('ME','530','Microfluidics and Nanofluidics'), \
 ('POLS','530','Quantitative Research Methods'), \
 ('POLS','537','Advance Research Methods and Data Analysis in Political Science'), \
 ('POLS','535','Formal Modelling and Political Analysis II'), \
 ('PHYS','541','Statistical Mechanics I'), \
 ('OPIM','402','Analytics for Business Decisions'), \
 ('MATH','572','Introduction to Algebra'), \
 ('PHIL','310','Philosophy of Mind'), \
 ('NS','222','Planetary Systems and Extrasolar Planets'), \
 ('CULT','299','Topics in Turkish Cultural Studies'), \
 ('CS','560','Automated Debugging'), \
 ('EE','550','Random Processes'), \
 ('EE','555','Wireless and Mobile Networks'), \
 ('EE','556','Antennas and Propagation'), \
 ('CS','201','Introduction to Computing'), \
 ('CS','204','Advanced Programming'), \
 ('ENS','505','Methods of Statistical Inference'), \
 ('CULT','501','Core Works in Cultural Studies'), \
 ('PHIL','550','Science and Society'), \
 ('VA','534','3D Animation'), \
 ('ARA','520','Basic Arabic II'), \
 ('VA','539','Envisioning Information'), \
 ('CS','515','Deep Learning'), \
 ('CS','517','Advanced Cryptography and Data Security'), \
 ('TUR','201','Intermediate Turkish I'), \
 ('VA','434','3D Animation'), \
 ('PSY','303','Research Methods'), \
 ('MGMT','541','Entrepreneurship'), \
 ('ME','308','Industrial Control'), \
 ('MAT','571','Introduction to Electron Microscopy'), \
 ('ME','302','Mechanical Systems II'), \
 ('BIO','310','Introduction to Bioinformatics'), \
 ('ME','305','Power Electronics'), \
 ('VA','439','Envisioning Information'), \
 ('PERS','120','Basic Persian II'), \
 ('ACC','301','Managerial Accounting'), \
 ('IF','100','Computational Approaches to Problem Solving'), \
 ('ARA','140','Intermediate Arabic II'), \
 ('MGMT','535','Technology Awareness and Implications of Technology Trends to Business Life and Processes'), \
 ('ITA','110','Basic Italian I'), \
 ('VA','548','Motion Graphics and Art'), \
 ('SPS','101','Humanity and Society I'), \
 ('OPIM','390','Introduction to Business Analytics'), \
 ('ACC','403','Auditing'), \
 ('ACC','405','Financial Statement Analysis'), \
 ('HART','413','Visual Arts in Turkey'), \
 ('BAN','521','Prescriptive Analytics'), \
 ('ECON','506','Econometrics'), \
 ('POLS','493','Local Government in Turkey and the European Union'), \
 ('ECON','502','Microeconomics II'), \
 ('PHYS','484','Quantum Computation and Quantum Information'), \
 ('LAT','120','Basic Latin II'), \
 ('TUR','404','Advanced Readings in Turkish for Foreigners II'), \
 ('HIST','517','Introduction to Orientalism and Oriental Studies'), \
 ('POLS','401','Survey Research Methods'), \
 ('MKTG','522','Brand Management'), \
 ('MKTG','525','Consumer Behavior'), \
 ('PROJ','102','Project Course'), \
 ('HUM','241','Major Works of Short Fiction'), \
 ('ECON','607','Game Theory'), \
 ('MATH','524','Probability Theory'), \
 ('PSY','340','Social Psychology'), \
 ('ANTH','214','Anthropology as Cultural Critique'), \
 ('ME','309','Heat and Mass Transfer'), \
 ('PERS','520','Basic Persian II'), \
 ('PHIL','450','Science and Society'), \
 ('HUM','232','Major Works of Asian Art'), \
 ('SPA','120','Basic Spanish II'), \
 ('LIT','290','Topics in Turkish Literature'), \
 ('HIST','581','Sources and Methods for 19th Century Ottoman History'), \
 ('MGMT','508','Ethics in Business'), \
 ('MGMT','506','Practice Development and Practicing Management'), \
 ('LAT','540','Intermediate Latin II'), \
 ('CULT','541','Gender in the Middle East'), \
 ('ARA','510','Basic Arabic I'), \
 ('ENG','0003','English Route 3'), \
 ('ENG','0002','English Route 2'), \
 ('ENG','0004','English Route 4'), \
 ('ECON','301','Econometrics'), \
 ('MAT','402','Polymer Engineering II'), \
 ('OPIM','302','Management Information Systems'), \
 ('MAT','406','Nanoengineered Systems Fabrication'), \
 ('FIN','301','Financial Management'), \
 ('ITA','140','Intermediate Italian II'), \
 ('POLS','553','Current Issues in Turkish Politics'); \
";


module.exports = { session_table, session_data, date_table, date_data, course_table, course_data };
