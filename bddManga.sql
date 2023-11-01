CREATE DATABASE manga;

create table utilisateur(
id SERIAL primary key,
nom VARCHAR(255) not null,
prenom VARCHAR(255) not null,
email VARCHAR(255) not null,
password char(60) not null
);

create table categorie(
id Serial primary key,
nom VARCHAR(255) not null
);

create table produit(
id Serial primary key,
nom VARCHAR(255) not null,
prix integer not null,
quantite integer not null,
id_categorie integer not null,
foreign key (id_categorie) references categorie(id)
);

