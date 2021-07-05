# Omnipresent Interview Backend task

This repository contains the solution to the backend task assigned to me as a prerequisite for moving to the next stage in the interview process. 

## Technologies 

- Node.js 
- Typeccript
- MongoDB with mongoose
- Express
- Jest for testing

## Proposal 

This proposal gives an overview of the future revamp of the current developed system. It covers authentication and the architectural style. 

## Authentication

The current developed service doesn't have an authentication scheme. I intend to adopt a Json web token (JWT) as the authentication mechanism hence the service developed is a RESTFul API. 

### What's JWT? 

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA => [Source](https://jwt.io/introduction)

## Intened Revamp Architecture

The revamp architecture of the current developed will be a [microservice architectural](https://drive.google.com/file/d/1pgpyCTZ8lB1x_yv-rJSY3CT3nLnx9TkI/view?usp=sharing) style where an **API gateway** will be deligating all requests to apt services and obtaining responses. The need for an API gateway is to enforce ***polyglot persistence** hence different **DBMS** will be used extensively. 
