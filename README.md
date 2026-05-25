# MOVA — Discover Movies

Застосунок для перегляду фільмів на основі [TMDB API](https://www.themoviedb.org/), побудований на Next.js 15 + TypeScript.

## Можливості

- Головна сторінка з каруселями: зараз у прокаті, популярні, топ рейтингу, очікувані
- Список фільмів з пошуком по назві та фільтрацією за жанрами
- Пагінація результатів
- Детальна сторінка кожного фільму з рейтингом, жанрами, описом
- Перегляд фільмів за жанром
- Авторизація (логін / логаут) з захистом роутів через middleware
- Дропдаун меню користувача в хедері

## Технології

- **Next.js 15** + **React 19** + **TypeScript**
- **App Router** — серверні компоненти, layouts, dynamic routes, route groups
- **Server Actions** — авторизація через `'use server'`
- **Middleware** — захист приватних роутів
- **CSS Modules** — стилізація компонентів
- **Swiper** — каруселі на головній сторінці
- **TMDB API** — джерело даних

## Структура проекту

```
src/
├── app/
│   ├── layout.tsx                  # Кореневий layout (Header, Footer, metadata)
│   ├── page.tsx                    # Головна сторінка
│   ├── auth/
│   │   ├── layout.tsx              # Layout для сторінки входу
│   │   └── page.tsx                # Форма входу
│   └── (public)/                   # Route group для захищених роутів
│       ├── movies/                 # Список фільмів + пошук + фільтр жанрів
│       ├── movie/[id]/             # Деталі фільму (dynamic route)
│       ├── genres/                 # Список жанрів
│       └── genre/[id]/             # Фільми за жанром (dynamic route)
├── components/
│   ├── header/                     # Хедер: лого, меню, пошук, UserInfo
│   ├── footer/                     # Футер: навігація, соцмережі
│   ├── menu/                       # Навігаційне меню з активним станом
│   ├── home/                       # Каруселі за категоріями
│   ├── movies-list/                # Список фільмів, GenreFilter, Pagination
│   ├── movies-list-card/           # Картка фільму з forward-data посиланням
│   ├── movie-info/                 # Детальна інформація про фільм
│   ├── genres/                     # Грід жанрів
│   ├── genre-badge/                # Бейдж жанру
│   ├── poster-preview/             # Постер фільму
│   ├── stars-rating/               # Зірковий рейтинг
│   └── user-info/                  # Аватар + дропдаун з logout
├── middleware.ts                   # Захист роутів: редирект на /auth без cookie
├── server-actions/
│   └── authActions.ts              # login / logout server actions
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
| `/auth` | Сторінка входу |

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

Створіть файл `.env.local` у корені проекту:

```env
NEXT_PUBLIC_TMDB_TOKEN=your_tmdb_bearer_token
```

Токен використовується виключно для запитів до TMDB API (фільми, жанри, пошук). Отримати можна на [TMDB → Settings → API](https://www.themoviedb.org/settings/api).

### 4. Запуск у режимі розробки

```bash
npm run dev
```

### 5. Збірка для production

```bash
npm run build
npm run start
```

## Авторизація

Застосунок використовує просту форму входу:

- Логін: `admin`
- Пароль: `1234`

Після входу сесія зберігається в `httpOnly` cookie. Middleware захищає всі роути крім `/auth` — неавторизований користувач автоматично перенаправляється на сторінку входу.
