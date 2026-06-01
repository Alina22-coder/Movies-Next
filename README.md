# MOVA — Discover Movies

Застосунок для перегляду фільмів на основі [TMDB API](https://www.themoviedb.org/), побудований на Next.js 15 + TypeScript.

## Можливості

- Головна сторінка з каруселями: зараз у прокаті, популярні, топ рейтингу, очікувані
- Список фільмів з пошуком по назві та фільтрацією за жанрами
- Пагінація результатів
- Детальна сторінка кожного фільму з рейтингом, жанрами, описом
- Перегляд фільмів за жанром
- UserInfo компонент у хедері (аватар + ім'я)

## Технології

- **Next.js 15** + **React 19** + **TypeScript**
- **App Router** — серверні компоненти, layouts, dynamic routes, route groups
- **CSS Modules** — стилізація компонентів
- **Swiper** — каруселі на головній сторінці
- **TMDB API** — джерело даних (Bearer token авторизація)

## Структура проекту

```
src/
├── app/
│   ├── layout.tsx                  # Кореневий layout (Header, Footer, metadata)
│   ├── page.tsx                    # Головна сторінка
│   └── (public)/                   # Route group
│       ├── movies/                 # Список фільмів + пошук + фільтр жанрів
│       ├── movie/[id]/             # Деталі фільму (dynamic route)
│       ├── genres/                 # Список жанрів
│       └── genre/[id]/             # Фільми за жанром (dynamic route)
├── components/
│   ├── header/                     # Хедер: лого, меню, пошук, UserInfo
│   ├── footer/                     # Футер
│   ├── menu/                       # Навігаційне меню
│   ├── home/                       # Каруселі за категоріями
│   ├── movies-list/                # MoviesList, GenreFilter, Pagination
│   ├── movies-list-card/           # Картка фільму
│   ├── movie-info/                 # Детальна інформація про фільм
│   ├── genres/                     # Грід жанрів
│   ├── genre-badge/                # Бейдж жанру
│   ├── poster-preview/             # Постер фільму
│   ├── stars-rating/               # Зірковий рейтинг
│   └── user-info/                  # Аватар + ім'я користувача
├── services/
│   └── api.service.ts              # Fetch-запити до TMDB з revalidate
└── models/                         # TypeScript-інтерфейси IMovie, IGenre
```

## Маршрути

| Шлях | Сторінка |
|------|----------|
| `/` | Головна (каруселі за категоріями) |
| `/movies` | Список фільмів + пошук + фільтр жанрів |
| `/movie/[id]` | Деталі фільму |
| `/genres` | Список жанрів |
| `/genre/[id]` | Фільми за жанром |

## Запуск

### 1. Клонування репозиторію

```bash
git clone <repo-url>
cd Movies-Next
```

### 2. Встановлення залежностей

```bash
npm install
```

### 3. Налаштування змінних середовища

Створіть файл `.env` у корені проекту:

```env
TMDB_TOKEN=your_tmdb_bearer_token
```

Або використовуйте `NEXT_PUBLIC_TMDB_TOKEN` — обидва варіанти підтримуються.

Токен використовується для запитів до TMDB API (фільми, жанри, пошук). Отримати можна на [TMDB → Settings → API](https://www.themoviedb.org/settings/api).

### 4. Запуск у режимі розробки

```bash
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000).

### 5. Збірка для production

```bash
npm run build
npm run start
```
