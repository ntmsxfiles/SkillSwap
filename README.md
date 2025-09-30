<div align="center">

# SkillSwap

<a href="https://react.dev" target="_blank"><img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white"></a>
<a href="https://www.typescriptlang.org" target="_blank"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white"></a>
<a href="https://vitejs.dev" target="_blank"><img alt="Vite" src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white"></a>
<a href="https://github.com/PM-YandexPracticum/SkillSwap_34_1" target="_blank"><img alt="Upstream" src="https://img.shields.io/badge/Upstream-Repo-24292e?logo=github&logoColor=white"></a>

</div>

### О проекте

SkillSwap — платформа для взаимного обмена навыками. Пользователи находят партнёров по обучению, предлагая собственные компетенции и получая новые знания в ответ. Интерфейс адаптивен и удобен как на десктопе, так и на мобильных устройствах.

Ключевые возможности:

- Каталог навыков с расширенными фильтрами и поиском
- Заявки на обмен и управление откликами
- Личный кабинет с управлением навыками и заявками
- Избранное для быстрых закладок
- Современная UI-архитектура на React + TypeScript + Vite

Макет: [Figma](https://www.figma.com/design/bKwOakHJI7Z2mh2zVCBphP/SkillSwap---Для-разработчиков?node-id=386-11920&t=xN1r61F4DvdVdr9v-0)

Ссылка на командный репозиторий: [PM-YandexPracticum/SkillSwap_34_1](https://github.com/PM-YandexPracticum/SkillSwap_34_1)


### Мой вклад

- Добавлен блок рекомендаций в `SkillListContainer` и интегрирован в `HomePage`
- Добавлен блок «Подходящие предложения» с условной логикой отображения
- Добавлена страница профиля с компонентами `ProfileMenu` и `ProfileInfo`
- Добавлен редирект на предыдущий URL после логина
- Добавлено правильное склонение возраста в карточках пользователей; создана утилита `getAgeWithDeclension`; обновлены компоненты `UserCard` и `UserCardSkillInfo`; заменено жёстко заданное «года» на динамическое склонение


### Скелет проекта

```text
  src/
    ├── api/                         # Методы работы с мок-данными (через axios/fetch)
    │   ├── Skill/                   # API-запросы, связанные с сущностью Skill
    │   ├── User/                    # API-запросы, связанные с User
    │   └── Request/                 # API-запросы, связанные с Request
    │
    ├── app/                         # Корневые настройки и инфраструктура приложения
    │   ├── fonts/                   # Подключаемые шрифты
    │   ├── protected-route/         # Реализация защищённых маршрутов
    │   ├── store.ts                 # Глобальный Redux store
    │   ├── App.tsx                  # Главный компонент приложения
    │   ├── App.css                  # Стилизация App
    │   └── global.css               # Глобальные CSS-стили
    │
    ├── entities/                    # Доменные модели — основные объекты системы
    │   ├── Skill/                   # Типы, slice, логика компонентов навыков
    │   ├── User/                    # Пользователь: модель, логика, компоненты
    │   └── Request/                 # Заявки: структура, slice, логика
    │
    ├── features/                    # Бизнес-фичи — независимые сценарии
    │   ├── auth/                    # Авторизация/регистрация
    │   ├── skills/                  # Управление навыками
    │   ├── favorites/               # Работа с избранным
    │   └── requests/                # Работа с заявками на обмен
    │
    ├── widgets/                     # Готовые UI-блоки, включающие фичи и сущности
    │   ├── SkillCard/               # Карточка скилла
    │   └── FiltersBar/              # Панель фильтров
    │
    ├── pages/                       # Полноценные страницы (роуты)
    │   ├── Home/                    # Главная страница
    │   ├── Profile/                 # Профиль пользователя
    │   ├── SkillDetail/             # Страница отдельного навыка
    │   └── Favorites/               # Избранные навыки
    │
    ├── shared/                      # Общие переиспользуемые элементы
    │   ├── ui/                      # UI-компоненты (кнопки, поля и др.)
    │   ├── hooks/                   # Пользовательские хуки (например: useDebounce, useLocalStorage)
    │   └── lib/                     # Утилиты, константы, вспомогательные функции
    │
    └── index.tsx                    # Точка входа в приложение
  public/
  └── db/
      ├── skills.json                # Мок-данные с навыками
      └── users.json                 # Мок-данные с пользователями
```


### Скрипты

| Команда           | Назначение                         |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Запуск проекта в dev-режиме        |
| `npm run build`   | Сборка проекта                     |
| `npm run preview` | Предпросмотр production-сборки     |
| `npm run lint`    | Проверка ESLint                    |
| `npm run format`  | Форматирование кода через Prettier |


### Установка и запуск

1. Клонируй репозиторий:
   
   ```bash
   git clone https://github.com/your-username/skillswap.git
   cd skillswap
   ```

2. Установи зависимости:
   
   ```bash
   npm install
   ```

3. Запусти проект в dev-режиме:
   
   ```bash
   npm run dev
   ```


### Статус проекта

Проект активно развивается. Реализованы основные функции MVP:

- ✅ Каталог навыков с фильтрацией
- ✅ Аутентификация
- ✅ Страница навыка с похожими предложениями
- ✅ Заявки на обмен
- ✅ Адаптивный дизайн


### Планы

- Реализация PWA
- Тёмная тема
- Интеграция с календарём для планирования
- Уведомления в реальном времени
- Расширенные рейтинги и отзывы


### Команда

Проект реализован командой фронтенд‑разработчиков в формате командного проекта. Ссылка на исходный репозиторий: [PM-YandexPracticum/SkillSwap_34_1](https://github.com/PM-YandexPracticum/SkillSwap_34_1)


### Памятка по работе с ветками

1. Обнови `development` перед началом:

   ```bash
   git checkout development
   git pull origin development
   ```

2. Создай ветку под задачу:

   ```bash
   git checkout -b feature/button-primary
   ```

3. Коммить изменения и пуш:

   ```bash
   git add .
   git commit -m "feat(button): реализован стиль primary"
   git push -u origin feature/button-primary
   ```

4. Открой Pull Request и дождись ревью.
