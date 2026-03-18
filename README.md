# Flags of the World (React)

This is a small **React JS project** where I recreated parts of the website  
https://www.countryflags.com/.

The goal of this project was to practice **React fundamentals**, working with **components**, and **fetching data from an API**.

## Project Overview
- Built using **React JS**
- Displays country flags and basic country information
- Data is fetched from an **API provided by Programming Hero**

## What I Practiced
- React components
- Passing props between components
- Fetching and displaying API data
- Rendering lists in React

## Tech Stack
- React JS
- JavaScript
- Tailwind CSS

## Project Purpose
This project was created as part of my React learning journey to understand how React works when building small real-world style interfaces.

---

All Countries : https://openapi.programming-hero.com/api/all
Signle Country with ccn3 code: https://openapi.programming-hero.com/api/alpha/{ccn3}
Country bia language: https://openapi.programming-hero.com/api/lang/{language}
Country bia name: https://openapi.programming-hero.com/api/name/uganda



Endpoints
/api/all
URL: GET /api/all
Description: Returns an array of all countries and their information: name, code, region, population, etc.
/api/alpha/{code}
URL: GET /api/alpha/{code}

Parameter:

code (string or numeric) — the ISO alpha code of the country (e.g. 116)
Description: Returns detailed data for the country identified by that ISO code.

/api/lang/{language}
URL: GET /api/lang/{language}

Parameter:

language (string) — the language name (e.g. english)
Description: Returns the list of countries that speak the given language.

/api/name/{name}
URL: GET /api/name/{name}

Parameter:

name (string) — the common name of the country (e.g. bangladesh)
Description: Return data for country or countries whose name matches the supplied parameter.