# Movies React

Застосунок для перегляду фільмів на основі [TMDB API](https://www.themoviedb.org/), побудований на React + TypeScript + Vite.

## Можливості

- Перегляд фільмів за категоріями: зараз у прокаті, популярні, топ рейтингу, очікувані
- Пошук фільмів з пагінацією
- Перегляд фільмів за жанрами
- Детальна сторінка кожного фільму
- Автентифікація через TMDB OAuth (вхід / вихід, відображення профілю)

## Технології

- **React 19** + **TypeScript**
- **Vite** — збірка
- **React Router v7** — маршрутизація
- **React Hook Form** — форми
- **Swiper** — каруселі на головній сторінці
- **Context API** — управління станом авторизації
- **TMDB API** — джерело даних

## Структура проекту

```
src/
├── components/
│   ├── header/            # Хедер з навігацією та авторизацією
│   ├── footer/            # Футер
│   ├── home/              # Головна сторінка з каруселями
│   ├── movies-list/       # Список фільмів
│   ├── movies-list-card/  # Картка фільму
│   ├── movie-info/        # Деталі фільму
│   ├── genres/            # Список жанрів
│   ├── genre/             # Фільми за жанром
│   ├── genre-badge/       # Бейдж жанру
│   ├── poster-preview/    # Попередній перегляд постера
│   ├── stars-rating/      # Зіркові рейтинги
│   └── user-info/         # Інформація про користувача
├── pages/             # Сторінки (MoviesPage, MovieInfoPage, AuthCallbackPage)
├── services/          # API-сервіс (TMDB)
├── context/           # AuthContext — стан авторизації
├── models/            # TypeScript-інтерфейси (IMovie, IUser, IGenre)
└── routers/           # Конфігурація маршрутів
```

## Маршрути

| Шлях | Сторінка |
|------|----------|
| `/` | Головна (каруселі за категоріями) |
| `/movies` | Список фільмів + пошук |
| `/movie/:id` | Деталі фільму |
| `/genres` | Список жанрів |
| `/genre/:id` | Фільми за жанром |
| `/auth/callback` | OAuth-колбек TMDB |

## Запуск

### 1. Клонування репозиторію

```bash
git clone <repo-url>
cd Movies-React
```

### 2. Встановлення залежностей

```bash
npm install
```

### 3. Налаштування змінних середовища

Створіть файл `.env` у корені проекту (на основі `.env.example`):

```env
VITE_TMDB_TOKEN=your_tmdb_bearer_token
```

Токен можна отримати на [TMDB → Settings → API](https://www.themoviedb.org/settings/api).

### 4. Запуск у режимі розробки

```bash
npm run dev
```

### 5. Збірка для production

```bash
npm run build
npm run preview
```

## Авторизація

Застосунок використовує TMDB OAuth 2.0:

1. Натисніть **Login** — відбудеться редирект на TMDB для підтвердження
2. Після підтвердження TMDB перенаправить назад на `/auth/callback`
3. Сесія зберігається в `localStorage` (`tmdb_session_id`, `tmdb_request_token`)
4. Для виходу натисніть **Logout**
