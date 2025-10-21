Базовая структура Express-сервера 👇
// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // если MongoDB
const routes = require('./routes');   // централизованный экспорт всех роутов
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();

const app = express();

// 1️⃣ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2️⃣ Подключение маршрутов
app.use('/api', routes);

// 3️⃣ Обработчик ошибок (всегда в самом конце)
app.use(errorHandler);

// 4️⃣ Подключение к базе данных
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ DB connection error:', err));

// 5️⃣ Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

Пример структуры мини-продакшн проекта:
project/
├── server.js                # Точка входа
├── routes/
│   ├── users.js
│   └── index.js             # объединяет все роуты
├── controllers/
│   └── usersController.js
├── middlewares/
│   ├── errorHandler.js
│   └── authMiddleware.js
├── models/
│   └── User.js
├── services/
│   └── userService.js
├── config/
│   └── db.js                # логика подключения к базе
└── .env

💡 Что не должно быть в server.js

❌ Бизнес-логики
❌ Работа с базой данных (кроме подключения)
❌ CRUD-операции
❌ Вызовы сервисов
❌ try/catch внутри эндпоинтов

Эти вещи должны жить в:
•	/controllers → логика запросов
•	/routes → пути
•	/models → схема данных
•	/services → бизнес-логика (если проект растёт)
•	/middlewares → логика между запросом и контроллером
•	/utils → вспомогательные функции
