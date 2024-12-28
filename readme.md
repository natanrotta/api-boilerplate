
# Boilerplate Project with Node.js, TypeScript, and Prisma

This project provides a basic structure to build scalable APIs using Node.js, TypeScript, and Prisma as an ORM. It follows modern design patterns, such as MVC (Model-View-Controller) and Repository Pattern, to keep the code modular, testable, and easy to maintain.

![Node Badge](https://img.shields.io/badge/-Node-green)
![Typescript Badge](https://img.shields.io/badge/-Typescript-blue)
![Yarn Badge](https://img.shields.io/badge/-Yarn-blue)
![Docker Badge](https://img.shields.io/badge/-Docker-blueviolet)
![Docker Compose Badge](https://img.shields.io/badge/-Docker%20Compose-lightgrey)
![PostgreSQL Badge](https://img.shields.io/badge/-PostgreSQL-darkblue)

&nbsp;

## ⚙️ How to Run

**Dependencies:** You need to have some dependencies installed before continuing:

- Node.js and NPM
- Yarn
- Docker Compose

&nbsp;

## ⏳ Steps

### 0. Install project dependencies inside the `/api` folder

Open the terminal inside the `/api` folder and run:

```bash
yarn install
```

### 1. Add hosts to the `/etc/hosts` file

Open the `/etc/hosts` file (on Unix/Linux systems) and add the following lines:

```bash
# boilerplate
127.0.0.1  api.boilerplate.com
127.0.0.1  pg.boilerplate.com
```

### 2. Create a `.env` file at the root of the project

Create a `.env` file at the root of the project and add the environment configurations. Example configurations can be found in the `.env.example` file.

### 3. At the root of the project, start Docker

Run the following command to start the Docker containers defined in the `docker-compose.yml` file:

```bash
docker-compose up
```

### 4. Inside the `/api` folder, run the following commands:

1. Generate the necessary files with the command:

```bash
yarn generate
```

2. Run migrations to set up the database:

```bash
yarn migrate
```

&nbsp;

## 🚀 API
### Base URL
```bash
http://api.boilerplate.com/
```
