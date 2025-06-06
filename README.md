# 🚗 Solo Rent

Solo Rent is a Car Rental Management System designed to streamline rental operations and expose rental services to customers efficiently.

- ✨ Features
- 🚘 Browse available cars for rent
- 📅 Book and manage car rentals
- 👤 Customer registration and authentication
- 🛡️ JWT-secured login and access
- 📊 Admin panel for managing cars, rentals, and users
- 📂 Persistent data storage using MySQL
- 🔗 Clean REST API integration between frontend and backend
- 💬 Real-time AI Chatbot support for customer queries
- 🗺️ Interactive map integration for location-based services
- 📈 Dashboard with revenue and analytics
- 🏷️ Special offers and promotions
- 📱 Responsive design for mobile and desktop
- 🐳 Dockerized deployment for easy setup and scalability

## 🛠️ Tech Stack
 Layer |Technology   
 :-------- |:------
Frontend | React.js
Backend | Spring Boot
Database | MySQL
ORM | Hibernate
Security | Spring Boot JWT

## 📁 Project Folder Structure
```
Solo Rent FrontEnd/
├── DockerFile
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
├── public/
├── Service/
│   ├── BookingService.js
│   └── VehicleService.js
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   ├── logo.png
│   │   ├── logov.png
│   │   └── carsousel/
│   │       ├── p1.jpg
│   │       └── ...
│   ├── Compornents/
│   │   ├── BodyContent/
│   │   ├── CardContent/
│   │   ├── CarouselContent/
│   │   ├── ChatContent/
│   │   ├── ChooseContent/
│   │   ├── FAQ/
│   │   ├── FooterContent/
│   │   ├── InputFields/
│   │   ├── MapContent/
│   │   ├── NavbarContent/
│   │   ├── OfferContent/
│   │   └── ServicePageContent/
│   ├── Data/
│   └── Pages/
│       ├── Booking/
│       ├── contactUs/
│       ├── Dashboard/
│       │   ├── Admin/
│       │   ├── BookingView/
│       │   ├── Massage/
│       │   └── Vehicle/
│       ├── home/
│       └── Service/
```

## 📦 Installation and Setup
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/solo-rent.git
cd solo-rent
```
### 2. Backend Setup (Spring Boot)
Navigate to the backend folder:

```bash
cd backend
Update the application.properties file with your MySQL database credentials.
```

Run the backend server:

```bash
./mvnw spring-boot:run
```
### 3. Frontend Setup (React.js)
Navigate to the frontend folder:

```bash
cd frontend
Install dependencies:
```

```bash
npm install
Start the React development server:
```

```bash
npm start
```
### 4. Docker Setup (Frontend)
You can run the frontend using Docker for easier deployment:

```bash
docker build -t solo-rent-frontend .
docker run -p 3000:3000 solo-rent-frontend
```

> Make sure Docker is installed and running on your system. Adjust ports as needed.

## 🔒 Security
- User authentication and authorization are implemented using JWT (JSON Web Tokens).
- Secure API endpoints and protect user data from unauthorized access.

## 🗄️ Database Configuration
Make sure you have MySQL installed.
Create a database named solo_rent (or your preferred name) and configure database details inside application.properties:

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/solo_rent
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=
```

## 📋 API Documentation
Detailed API documentation is available (optional section — you can generate it using Swagger or Postman collection).

## 🎯 Future Enhancements
- Online payment integration
- AI Chat bot integration
- Email/SMS notifications
- Advanced search and filters
- Mobile app support (React Native)



