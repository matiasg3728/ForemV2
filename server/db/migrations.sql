CREATE DATABASE forem_v2;

\c forem_v2;

CREATE TABLE completed_documents (name varchar(255), document_ID SERIAL PRIMARY KEY, document_text text);

CREATE TABLE copies (document_ID INT references completed_documents(document_ID), copy_ID SERIAL PRIMARY KEY, copy_text text, parent_ID INT, name varchar);
