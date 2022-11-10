-- random data from mockaroo.com !
DROP TABLE IF EXISTS apps;
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS countries;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS users;

CREATE TABLE apps (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    app VARCHAR NOT NULL,
    version VARCHAR NOT NULL,
    bundleid VARCHAR NOT NULL,
    filename VARCHAR NOT NULL
);

INSERT INTO apps (app, version, bundleid, filename)
VALUES
('Alpha', '7.3', 'gov.ftc.Y-Solowarm', 'MattisEgestas.ppt'),
('Bytecard', '6.24', 'com.blogtalkradio.Daltfresh', 'Sapien.avi'),
('Tresom', '6.9.0', 'org.mozilla.Regrant', 'Ornare.avi'),
('Opela', '7.64', 'com.netscape.Toughjoyfax', 'Eget.jpeg'),
('Zaam-Dox', '8.88', 'com.ihg.Zontrax', 'BlanditUltricesEnim.mov'),
('Bytecard', '9.0', 'com.netvibes.Holdlamis', 'UrnaUtTellus.mp3'),
('Voyatouch', '9.4', 'org.slashdot.Veribet', 'Posuere.avi'),
('Veribet', '0.64', 'com.github.Treeflex', 'VivamusInFelis.mp3'),
('Temp', '0.8.0', 'com.wikia.Sub-Ex', 'Sociis.ppt'),
('Tresom', '2.9.3', 'jp.ameblo.Cardify', 'LacusCurabiturAt.xls'),
('Hatity', '3.6.7', 'com.parallels.Sonair', 'AcConsequat.gif'),
('Tin', '0.20', 'pl.google.Zoolab', 'VelitVivamus.mp3');

CREATE TABLE cars (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    brand VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    year INT NOT NULL
);

INSERT INTO cars (brand, name, year) 
VALUES
('Toyota', 'GR86', 2022),
('Nissan', 'Z', 2023),
('Mercedes-Benz', 'C-Class', 2008),
('Volvo', 'S40', 2003),
('Maserati', 'Quattroporte', 1984),
('Oldsmobile', 'Silhouette', 2001),
('Ford', 'E150', 2009),
('GMC', 'Yukon XL 2500', 2010),
('Mitsubishi', 'Lancer Evolution', 2005),
('Hyundai', 'Accent', 1996),
('Suzuki', 'Swift', 1988),
('Acura', 'TL', 2004);

CREATE TABLE countries (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    country VARCHAR NOT NULL,
    currency VARCHAR NOT NULL,
    countrycode VARCHAR NOT NULL,
    currencycode VARCHAR NOT NULL,
    timezone VARCHAR NOT NULL
);

INSERT INTO countries (country, currency, countrycode, currencycode, timezone)
VALUES
('China', 'Yuan Renminbi', 'CN', 'CNY', 'Asia/Chongqing'),
('Marshall Islands', 'Dollar', 'MH', 'USD', 'Pacific/Majuro'),
('Brazil', 'Real', 'BR', 'BRL', 'America/Sao_Paulo'),
('United States', 'Dollar', 'US', 'USD', 'America/Los_Angeles'),
('China', 'Yuan Renminbi', 'CN', 'CNY', 'Asia/Chongqing'),
('China', 'Yuan Renminbi', 'CN', 'CNY', 'Asia/Shanghai'),
('Brazil', 'Real', 'BR', 'BRL', 'America/Sao_Paulo'),
('United States', 'Dollar', 'US', 'USD', 'America/Chicago'),
('France', 'Euro', 'FR', 'EUR', 'Europe/Paris'),
('Indonesia', 'Rupiah', 'ID', 'IDR', 'Asia/Jakarta'),
('Hungary', 'Forint', 'HU', 'HUF', 'Europe/Budapest'),
('Argentina', 'Peso', 'AR', 'ARS', 'America/Argentina/Salta');

CREATE TABLE employees (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    fullname VARCHAR NOT NULL,
    first VARCHAR NOT NULL,
    gender VARCHAR NOT NULL,
    job VARCHAR,
    school VARCHAR,
    skill VARCHAR
);

INSERT INTO employees (fullname, first, gender, job, school, skill)
VALUES
('Adolphe Nason', 'Adolphe', 'M', 'Financial Analyst', 'Ufa State Institute of Arts', 'Shrinkage'),
('Starla Molineaux', 'Starla', 'F', 'Associate Professor', 'Universidad de Hermosillo', 'Zinc'),
('Rowen Sedgemore', 'Rowen', 'M', 'Junior Executive', 'University of Phoenix', 'Biodiversity'),
('Gilberto Starbeck', 'Gilberto', 'M', 'Recruiting Manager', 'Universidad Católica Tecnológica del Cibao', 'UVLayout'),
('Barbabas Geri', 'Barbabas', 'M', 'Accountant IV', 'Chonju National University of Education', 'IT Transformation'),
('Frank Lifton', 'Frank', 'M', 'General Manager', 'University of Agriculture Abeokuta', 'IDS'),
('Jocko Reynish', 'Jocko', 'M', 'Environmental Specialist', 'University of Connecticut', 'AQTESOLV'),
('Mei Leeburne', 'Mei', 'F', 'VP Quality Control', 'St. Joseph''s College New York, Suffolk Campus', 'Award Ceremonies'),
('Jeremie Bandy', 'Jeremie', 'M', 'Editor', 'Deutsche Telekom Fachhochschule Leipzig', 'Hummingbird DM'),
('Kristofer Meatcher', 'Kristofer', 'M', 'Legal Assistant', 'SRM Institute Of Science & Technology ( Deemed University)', 'Apartments'),
('Blanche MacGlory', 'Blanche', 'F', 'Editor', 'Instituto Politécnico de Leiria', 'SQL PL'),
('Mildrid Antley', 'Mildrid', 'F', 'Data Coordiator', 'St Theresa''s Medical University', 'AWR Microwave Office');

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    email VARCHAR NOT NULL,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    avatar VARCHAR,
    ip VARCHAR
);

INSERT INTO users (email, username, password, avatar, ip)
VALUES
('kprestwich0@constantcontact.com', 'bchampionnet0', '2SMDddm9Tix', 'https://robohash.org/anecessitatibusfacere.png?size=50x50&set=set1', '2.122.246.150'),
('gbrearton1@quantcast.com', 'aslimme1', 'KaLiJxf', 'https://robohash.org/magniquisut.png?size=50x50&set=set1', '23.4.210.165'),
('asenussi2@shop-pro.jp', 'ljirsa2', '62XUGTJEQ', 'https://robohash.org/sitametcorporis.png?size=50x50&set=set1', '157.157.112.236'),
('lgregor3@ebay.com', 'slodeke3', 'Q6vQdI1i', 'https://robohash.org/adipiscidoloribusvoluptatem.png?size=50x50&set=set1', '170.14.21.184'),
('rcathee4@thetimes.co.uk', 'jcowderay4', 'Jl7gjP', 'https://robohash.org/occaecatidolorumaccusantium.png?size=50x50&set=set1', '204.139.229.230'),
('bduggon5@mail.ru', 'bcurgenuer5', 'SK1xBT9l6UFy', 'https://robohash.org/quieiuset.png?size=50x50&set=set1', '150.64.74.104'),
('agretham6@sun.com', 'sjado6', 'vkko6fyse3d', 'https://robohash.org/omnisdebitisquo.png?size=50x50&set=set1', '143.168.47.46'),
('mmaster7@vkontakte.ru', 'tcooksey7', '8xGKzPr', 'https://robohash.org/solutaautest.png?size=50x50&set=set1', '131.119.231.38'),
('bemeney8@addthis.com', 'atunnock8', 'KoWLlAwU9EGD', 'https://robohash.org/molestiaenisinumquam.png?size=50x50&set=set1', '136.223.128.104'),
('fsuerz9@desdev.cn', 'bgrishenkov9', 'ZQlnwk1ll', 'https://robohash.org/eaeasint.png?size=50x50&set=set1', '95.46.189.37'),
('rfairbridgea@cnet.com', 'kpeasea', 'Ws6n6S2dwJC', 'https://robohash.org/quianonhic.png?size=50x50&set=set1', '239.51.11.252'),
('lwreifordb@canalblog.com', 'fduckerb', 'Tns44ldaGy', 'https://robohash.org/ullamenimad.png?size=50x50&set=set1', '21.232.135.220');

