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
('China', 'Yuan Renminbi', 'CN', 'CNY', 'Asia/Shanghai'),
('United States', 'Dollar', 'US', 'USD', 'America/Chicago'),
('France', 'Euro', 'FR', 'EUR', 'Europe/Paris'),
('Indonesia', 'Rupiah', 'ID', 'IDR', 'Asia/Jakarta'),
('Hungary', 'Forint', 'HU', 'HUF', 'Europe/Budapest'),
('Argentina', 'Peso', 'AR', 'ARS', 'America/Argentina/Salta');

CREATE TABLE employees (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    first VARCHAR NOT NULL,
    gender VARCHAR NOT NULL,
    job VARCHAR
);

INSERT INTO employees (name, first, gender, job)
VALUES
('Adolphe Nason', 'Adolphe', 'M', 'Financial Analyst'),
('Starla Molineaux', 'Starla', 'F', 'Associate Professor'),
('Rowen Sedgemore', 'Rowen', 'M', 'Junior Executive'),
('Gilberto Starbeck', 'Gilberto', 'M', 'Recruiting Manager'),
('Barbabas Geri', 'Barbabas', 'M', 'Accountant IV'),
('Frank Lifton', 'Frank', 'M', 'General Manager'),
('Jocko Reynish', 'Jocko', 'M', 'Environmental Specialist'),
('Mei Leeburne', 'Mei', 'F', 'VP Quality Control'),
('Jeremie Bandy', 'Jeremie', 'M', 'Editor'),
('Kristofer Meatcher', 'Kristofer', 'M', 'Legal Assistant');

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    email VARCHAR NOT NULL,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    ip VARCHAR
);

INSERT INTO users (email, username, password, ip)
VALUES
('kprestwich0@constantcontact.com', 'bchampionnet0', '2SMDddm9Tix', '2.122.246.150'),
('gbrearton1@quantcast.com', 'aslimme1', 'KaLiJxf', '23.4.210.165'),
('asenussi2@shop-pro.jp', 'ljirsa2', '62XUGTJEQ', '157.157.112.236'),
('lgregor3@ebay.com', 'slodeke3', 'Q6vQdI1i', '170.14.21.184'),
('rcathee4@thetimes.co.uk', 'jcowderay4', 'Jl7gjP', '204.139.229.230'),
('lwreifordb@canalblog.com', 'fduckerb', 'Tns44ldaGy', '21.232.135.220');