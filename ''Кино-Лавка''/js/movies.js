// Данные о фильмах содержащие поля: genres, year, director, description...
const MovieType = [
    {
      id: "1",
      name: "Матрица",
      year: 1999,
      director: "Лана и Лилли Вачовски",
      description: "",
      genres: ["Боевик", "Фантастика", "Триллер"],
      imageUrl: "images/posters/Matrix.jpg",
      category: "Боевик"
    },
    {
      id: "2",
      name: "Интерстеллар",
      year: 2014,
      director: "Кристофер Нолан",
      description: "",
      genres: ["Фантастика", "Драма", "Приключения"],
      imageUrl: "images/posters/Interstellar.jpg",
      category: "Фантастика"
    },
    {
      id: "3",
      name: "Зеленая миля",
      year: 1999,
      director: "Фрэнк Дарабонт",
      description: "",
      genres: ["Драма", "Криминал", "Фэнтези"],
      imageUrl: "images/posters/Green_mile.jpg",
      category: "Драма"
    },
    {
      id: "4",
      name: "Бойцовский клуб",
      year: 1999,
      director: "Дэвид Финчер",
      description: "",
      genres: ["Триллер", "Драма", "Криминал"],
      imageUrl: "images/posters/Fight_club.jpg",
      category: "Триллер"
    },
    {
      id: "5",
      name: "Начало",
      year: 2010,
      director: "Кристофер Нолан",
      description: "",
      genres: ["Фантастика", "Боевик", "Триллер"],
      imageUrl: "images/posters/Inception.jpg",
      category: "Фантастика"
    },
    {
      id: "6",
      name: "Титаник",
      year: 1997,
      director: "Джеймс Кэмерон",
      description: "",
      genres: ["Мелодрама", "Драма", "История"],
      imageUrl: "",
      category: "Мелодрама"
    },
    {
      id: "7",
      name: "Властелин колец",
      year: 2001,
      director: "Питер Джексон",
      description: "",
      genres: ["Фэнтези", "Приключения", "Боевик"],
      imageUrl: "",
      category: "Фэнтези"
    },
    {
      id: "8",
      name: "Шрек",
      year: 2001,
      director: "Эндрю Адамсон, Вики Дженсон",
      description: "",
      genres: ["Мультфильм", "Фэнтези", "Комедия"],
      imageUrl: "",
      category: "Мультфильм"
    },
    {
      id: "9",
      name: "Гладиатор",
      year: 2000,
      director: "Ридли Скотт",
      description: "",
      genres: ["Исторический", "Боевик", "Драма"],
      imageUrl: "",
      category: "Исторический"
    },
    {
      id: "10",
      name: "Джентльмены",
      year: 2019,
      director: "Гай Ричи",
      description: "",
      genres: ["Криминал", "Комедия", "Боевик"],
      imageUrl: "",
      category: "Криминал"
    },
    {
      id: "11",
      name: "Джокер",
      year: 2019,
      director: "Тодд Филлипс",
      description: "",
      genres: ["Драма", "Триллер", "Криминал"],
      imageUrl: "",
      category: "Драма"
    },
    {
      id: "12",
      name: "Форрест Гамп",
      year: 1994,
      director: "Роберт Земекис",
      description: "",
      genres: ["Драма", "Мелодрама", "Комедия"],
      imageUrl: "",
      category: "Драма"
    },
    {
      id: "13",
      name: "Аватар",
      year: 2009,
      director: "Джеймс Кэмерон",
      description: "",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "14",
      name: "Гарри Поттер",
      year: 2001,
      director: "Крис Коламбус",
      description: "",
      genres: ["Фэнтези", "Приключения", "Семейный"],
      imageUrl: "",
      category: "Фэнтези"
    },
    {
      id: "15",
      name: "Пираты Карибского моря",
      year: 2003,
      director: "Гор Вербински",
      description: "",
      genres: ["Приключения", "Фэнтези", "Боевик"],
      imageUrl: "",
      category: "Приключения"
    },
    {
      id: "16",
      name: "1+1",
      year: 2011,
      director: "Оливье Накаш, Эрик Толедано",
      description: "",
      genres: ["Драма", "Комедия", "Биография"],
      imageUrl: "",
      category: "Драма"
    },
    {
      id: "17",
      name: "Побег из Шоушенка",
      year: 1994,
      director: "Фрэнк Дарабонт",
      description: "",
      genres: ["Драма", "Криминал"],
      imageUrl: "",
      category: "Драма"
    },
    {
      id: "18",
      name: "Достучаться до небес",
      year: 1997,
      director: "Томас Ян",
      description: "",
      genres: ["Драма", "Комедия", "Криминал"],
      imageUrl: "",
      category: "Драма"
    },
    {
      id: "19",
      name: "Игра престолов",
      year: 2011,
      director: "Разные",
      description: "",
      genres: ["Фэнтези", "Драма", "Приключения"],
      imageUrl: "",
      category: "Фэнтези"
    },
    {
      id: "20",
      name: "Темный рыцарь",
      year: 2008,
      director: "Кристофер Нолан",
      description: "",
      genres: ["Боевик", "Триллер", "Криминал"],
      imageUrl: "",
      category: "Боевик"
    },
    {
      id: "21",
      name: "Мстители",
      year: 2012,
      director: "Джосс Уидон",
      description: "",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "22",
      name: "Звездные войны",
      year: 1977,
      director: "Джордж Лукас",
      description: "",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "23",
      name: "Один дома",
      year: 1990,
      director: "Крис Коламбус",
      description: "",
      genres: ["Комедия", "Семейный"],
      imageUrl: "",
      category: "Комедия"
    },
    {
      id: "24",
      name: "Маска",
      year: 1994,
      director: "Чарльз Рассел",
      description: "",
      genres: ["Комедия", "Фэнтези", "Криминал"],
      imageUrl: "",
      category: "Комедия"
    },
    {
      id: "25",
      name: "Терминатор",
      year: 1984,
      director: "Джеймс Кэмерон",
      description: "",
      genres: ["Боевик", "Фантастика", "Триллер"],
      imageUrl: "",
      category: "Боевик"
    },
    {
      id: "26",
      name: "Чужой",
      year: 1979,
      director: "Ридли Скотт",
      description: "",
      genres: ["Ужасы", "Фантастика", "Триллер"],
      imageUrl: "",
      category: "Ужасы"
    },
    {
      id: "27",
      name: "Пятый элемент",
      year: 1997,
      director: "Люк Бессон",
      description: "",
      genres: ["Фантастика", "Боевик", "Комедия"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "28",
      name: "Леон",
      year: 1994,
      director: "Люк Бессон",
      description: "",
      genres: ["Триллер", "Драма", "Криминал"],
      imageUrl: "",
      category: "Триллер"
    },
    {
      id: "29",
      name: "Такси",
      year: 1998,
      director: "Жерар Пирес",
      description: "",
      genres: ["Комедия", "Боевик"],
      imageUrl: "",
      category: "Комедия"
    },
    {
      id: "30",
      name: "Крепкий орешек",
      year: 1988,
      director: "Джон МакТирнан",
      description: "",
      genres: ["Боевик", "Триллер"],
      imageUrl: "",
      category: "Боевик"
    },
    {
      id: "31",
      name: "Криминальное чтиво",
      year: 1994,
      director: "Квентин Тарантино",
      description: "",
      genres: ["Криминал", "Триллер", "Комедия"],
      imageUrl: "",
      category: "Криминал"
    },
    {
      id: "32",
      name: "Король Лев",
      year: 1994,
      director: "Роджер Аллерс, Роб Минкофф",
      description: "",
      genres: ["Мультфильм", "Драма", "Приключения"],
      imageUrl: "",
      category: "Мультфильм"
    },
    {
      id: "33",
      name: "Парк Юрского периода",
      year: 1993,
      director: "Стивен Спилберг",
      description: "",
      genres: ["Приключения", "Фантастика", "Триллер"],
      imageUrl: "",
      category: "Приключения"
    },
    {
      id: "34",
      name: "Гравитация",
      year: 2013,
      director: "Альфонсо Куарон",
      description: "",
      genres: ["Фантастика", "Триллер", "Драма"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "35",
      name: "Адвокат дьявола",
      year: 1997,
      director: "Тейлор Хэкфорд",
      description: "",
      genres: ["Триллер", "Драма", "Мистика"],
      imageUrl: "",
      category: "Триллер"
    },
    {
      id: "36",
      name: "Трансформеры",
      year: 2007,
      director: "Майкл Бэй",
      description: "",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "37",
      name: "Хоббит",
      year: 2012,
      director: "Питер Джексон",
      description: "",
      genres: ["Фэнтези", "Приключения"],
      imageUrl: "",
      category: "Фэнтези"
    },
    {
      id: "38",
      name: "Гарри Поттер 2",
      year: 2002,
      director: "Крис Коламбус",
      description: "",
      genres: ["Фэнтези", "Приключения", "Семейный"],
      imageUrl: "",
      category: "Фэнтези"
    },
    {
      id: "39",
      name: "Зверополис",
      year: 2016,
      director: "Байрон Ховард, Рич Мур, Джаред Буш",
      description: "",
      genres: ["Мультфильм", "Комедия", "Приключения"],
      imageUrl: "",
      category: "Мультфильм"
    },
    {
      id: "40",
      name: "Валли",
      year: 2008,
      director: "Эндрю Стэнтон",
      description: "",
      genres: ["Мультфильм", "Фантастика", "Приключения"],
      imageUrl: "",
      category: "Мультфильм"
    },
    {
      id: "41",
      name: "Тор",
      year: 2011,
      director: "Кеннет Брана",
      description: "",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "42",
      name: "Железный человек",
      year: 2008,
      director: "Джон Фавро",
      description: "",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "43",
      name: "Капитан Америка",
      year: 2011,
      director: "Джо Джонстон",
      description: "",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "44",
      name: "Халк",
      year: 2008,
      director: "Луи Летерье",
      description: "",
      genres: ["Фантастика", "Боевик", "Триллер"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "45",
      name: "Человек-паук",
      year: 2002,
      director: "Сэм Рэйми",
      description: "",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "46",
      name: "Доктор Стрэндж",
      year: 2016,
      director: "Скотт Дерриксон",
      description: "",
      genres: ["Фантастика", "Боевик", "Фэнтези"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "47",
      name: "Черная пантера",
      year: 2018,
      director: "Райан Куглер",
      description: "",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "48",
      name: "Стражи галактики",
      year: 2014,
      director: "Джеймс Ганн",
      description: "",
      genres: ["Фантастика", "Боевик", "Комедия"],
      imageUrl: "",
      category: "Фантастика"
    },
    {
      id: "49",
      name: "Дедпул",
      year: 2016,
      director: "Тим Миллер",
      description: "",
      genres: ["Комедия", "Боевик", "Фантастика"],
      imageUrl: "",
      category: "Комедия"
    },
    {
      id: "50",
      name: "Люди Икс",
      year: 2000,
      director: "Брайан Сингер",
      description: "",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика"
    }
  ];