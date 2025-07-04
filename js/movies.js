// Данные о фильмах содержащие поля: genres, year, director, description...
const MovieType = [
    {
      id: "1",
      name: "Матрица",
      year: 1999,
      director: "Лана и Лилли Вачовски",
      description: "Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.",
      genres: ["Боевик", "Фантастика", "Триллер"],
      imageUrl: "images/posters/Matrix.jpg",
      category: "Боевик",
      kinopoisk: "8.5",
      imdb: "8.7"
    },
    {
      id: "2",
      name: "Интерстеллар",
      year: 2014,
      director: "Кристофер Нолан",
      description: "Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.",
      genres: ["Фантастика", "Драма", "Приключения"],
      imageUrl: "images/posters/Interstellar.jpg",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "3",
      name: "Зеленая миля",
      year: 1999,
      director: "Фрэнк Дарабонт",
      description: "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      genres: ["Драма", "Криминал", "Фэнтези"],
      imageUrl: "images/posters/Green_mile.jpg",
      category: "Драма",
      kinopoisk: "9.1",
      imdb: "8.6"
    },
    {
      id: "4",
      name: "Бойцовский клуб",
      year: 1999,
      director: "Дэвид Финчер",
      description: "Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной командировке он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а единственное, ради чего стоит жить, — саморазрушение. Проходит немного времени, и вот уже новые друзья лупят друг друга почем зря на стоянке перед баром, и очищающий мордобой доставляет им высшее блаженство. Приобщая других мужчин к простым радостям физической жестокости, они основывают тайный Бойцовский клуб, который начинает пользоваться невероятной популярностью.",
      genres: ["Триллер", "Драма", "Криминал"],
      imageUrl: "images/posters/Fight_club.jpg",
      category: "Триллер",
      kinopoisk: "8.7",
      imdb: "8.8"
    },
    {
      id: "5",
      name: "Начало",
      year: 2010,
      director: "Кристофер Нолан",
      description: "Кобб – талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил. И вот у Кобба появляется шанс исправить ошибки. Его последнее дело может вернуть все назад, но для этого ему нужно совершить невозможное – инициацию. Вместо идеальной кражи Кобб и его команда спецов должны будут провернуть обратное. Теперь их задача – не украсть идею, а внедрить ее. Если у них получится, это и станет идеальным преступлением...",
      genres: ["Фантастика", "Боевик", "Триллер"],
      imageUrl: "images/posters/Inception.jpg",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.8"
    },
    {
      id: "6",
      name: "Титаник",
      year: 1997,
      director: "Джеймс Кэмерон",
      description: "Апрель 1912 года. В первом и последнем плавании шикарного «Титаника» встречаются двое. Пассажир нижней палубы Джек выиграл билет в карты, а богатая наследница Роза отправляется в Америку, чтобы выйти замуж по расчёту. Чувства молодых людей только успевают расцвести, и даже не классовые различия создадут испытания влюблённым, а айсберг, вставший на пути считавшегося непотопляемым лайнера.",
      genres: ["Мелодрама", "Драма", "История"],
      imageUrl: "images/posters/titanic.jpg",
      category: "Мелодрама",
      kinopoisk: "8.4",
      imdb: "7.9"
    },
    {
      id: "7",
      name: "Властелин колец",
      year: 2001,
      director: "Питер Джексон",
      description: "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
      genres: ["Фэнтези", "Приключения", "Боевик"],
      imageUrl: "images/posters/lotr.jpg",
      category: "Фэнтези",
      kinopoisk: "8.6",
      imdb: "8.9"
    },
    {
      id: "8",
      name: "Шрек",
      year: 2001,
      director: "Эндрю Адамсон, Вики Дженсон",
      description: "Жил да был в сказочном государстве большой зеленый великан по имени Шрэк. Жил он в гордом одиночестве в лесу, на болоте, которое считал своим. Но однажды злобный коротышка — лорд Фаркуад, правитель волшебного королевства, безжалостно согнал на Шрэково болото всех сказочных обитателей. И беспечной жизни зеленого великана пришел конец. Но лорд Фаркуад пообещал вернуть Шрэку болото, если великан добудет ему прекрасную принцессу Фиону, которая томится в неприступной башне, охраняемой огнедышащим драконом.",
      genres: ["Мультфильм", "Фэнтези", "Комедия"],
      imageUrl: "images/posters/shrek.jpg",
      category: "Мультфильм",
      kinopoisk: "8.2",
      imdb: "7.9"
    },
    {
      id: "9",
      name: "Гладиатор",
      year: 2000,
      director: "Ридли Скотт",
      description: "Римская империя. Бесстрашного и благородного генерала Максимуса боготворят солдаты, а старый император Марк Аврелий безгранично доверяет ему и относится как к сыну. Однако опытный воин, готовый сразиться с любым противником в честном бою, оказывается бессильным перед коварными придворными интригами. Коммод, сын Марка Аврелия, убивает отца, который планировал сделать преемником не его, а Максимуса, и захватывает власть. Решив избавиться от опасного соперника, который к тому же отказывается присягнуть ему на верность, Коммод отдаёт приказ убить Максимуса и всю его семью. Чудом выжив, но не сумев спасти близких, Максимус попадает в плен к работорговцу, который продаёт его организатору гладиаторских боёв Проксимо...",
      genres: ["Исторический", "Боевик", "Драма"],
      imageUrl: "images/posters/gladiator.jpg",
      category: "Исторический",
      kinopoisk: "8.6",
      imdb: "8.5"
    },
    {
      id: "10",
      name: "Джентльмены",
      year: 2019,
      director: "Гай Ричи",
      description: "Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.",
      genres: ["Криминал", "Комедия", "Боевик"],
      imageUrl: "images/posters/gentlemen.jpg",
      category: "Криминал",
      kinopoisk: "8.6",
      imdb: "7.8"
    },
    {
      id: "11",
      name: "Джокер",
      year: 2019,
      director: "Тодд Филлипс",
      description: "Готэм, начало 1980-х годов. Комик Артур Флек живет с больной матерью, которая с детства учит его «ходить с улыбкой». Пытаясь нести в мир хорошее и дарить людям радость, Артур сталкивается с человеческой жестокостью и постепенно приходит к выводу, что этот мир получит от него не добрую улыбку, а ухмылку злодея Джокера.",
      genres: ["Драма", "Триллер", "Криминал"],
      imageUrl: "images/posters/joker.jpg",
      category: "Драма",
      kinopoisk: "8.0",
      imdb: "8.3"
    },
    {
      id: "12",
      name: "Форрест Гамп",
      year: 1994,
      director: "Роберт Земекис",
      description: "Сидя на автобусной остановке, Форрест Гамп — не очень умный, но добрый и открытый парень — рассказывает случайным встречным историю своей необыкновенной жизни. С самого малолетства парень страдал от заболевания ног, соседские мальчишки дразнили его, но в один прекрасный день Форрест открыл в себе невероятные способности к бегу. Подруга детства Дженни всегда его поддерживала и защищала, но вскоре дороги их разошлись.",
      genres: ["Драма", "Мелодрама", "Комедия"],
      imageUrl: "images/posters/forest_gump.jpg",
      category: "Драма",
      kinopoisk: "8.9",
      imdb: "8.8"
    },
    {
      id: "13",
      name: "Аватар",
      year: 2009,
      director: "Джеймс Кэмерон",
      description: "Бывший морпех Джейк Салли прикован к инвалидному креслу. Несмотря на немощное тело, Джейк в душе по-прежнему остается воином. Он получает задание совершить путешествие в несколько световых лет к базе землян на планете Пандора, где корпорации добывают редкий минерал, имеющий огромное значение для выхода Земли из энергетического кризиса.",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "images/posters/avatar.jpg",
      category: "Фантастика",
      kinopoisk: "8.0",
      imdb: "7.9"
    },
    {
      id: "14",
      name: "Гарри Поттер",
      year: 2001,
      director: "Крис Коламбус",
      description: "Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: родители умерли, едва ему исполнился год, а от дяди и тёти, взявших сироту на воспитание, достаются лишь тычки да подзатыльники. Но в одиннадцатый день рождения Гарри всё меняется. Странный гость, неожиданно появившийся на пороге, приносит письмо, из которого мальчик узнаёт, что на самом деле он - волшебник и зачислен в школу магии под названием Хогвартс. А уже через пару недель Гарри будет мчаться в поезде Хогвартс-экспресс навстречу новой жизни, где его ждут невероятные приключения, верные друзья и самое главное — ключ к разгадке тайны смерти его родителей.",
      genres: ["Фэнтези", "Приключения", "Семейный"],
      imageUrl: "images/posters/harry_potter1.jpg",
      category: "Фэнтези",
      kinopoisk: "8.3",
      imdb: "7.7"
    },
    {
      id: "15",
      name: "Пираты Карибского моря",
      year: 2003,
      director: "Гор Вербински",
      description: "Жизнь харизматичного авантюриста, капитана Джека Воробья, полная увлекательных приключений, резко меняется, когда его заклятый враг капитан Барбосса похищает корабль Джека Черную Жемчужину, а затем нападает на Порт Ройал и крадет прекрасную дочь губернатора Элизабет Свонн. Друг детства Элизабет Уилл Тернер вместе с Джеком возглавляет спасательную экспедицию на самом быстром корабле Британии, чтобы вызволить девушку и заодно отобрать у злодея Черную Жемчужину. Вслед за этой парочкой отправляется амбициозный коммодор Норрингтон, который к тому же числится женихом Элизабет. Однако Уилл не знает, что над Барбоссой висит вечное проклятие, при лунном свете превращающее его с командой в живых скелетов. Проклятье будет снято лишь тогда, когда украденное золото Ацтеков будет возвращено пиратами на старое место.",
      genres: ["Приключения", "Фэнтези", "Боевик"],
      imageUrl: "images/posters/pirates.jpg",
      category: "Приключения",
      kinopoisk: "8.4",
      imdb: "8.1"
    },
    {
      id: "16",
      name: "1+1",
      year: 2011,
      director: "Оливье Накаш, Эрик Толедано",
      description: "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
      genres: ["Драма", "Комедия", "Биография"],
      imageUrl: "images/posters/1+1.jpg",
      category: "Драма",
      kinopoisk: "8.9",
      imdb: "8.5"
    },
    {
      id: "17",
      name: "Побег из Шоушенка",
      year: 1994,
      director: "Фрэнк Дарабонт",
      description: "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      genres: ["Драма", "Криминал"],
      imageUrl: "images/posters/shawshank.jpg",
      category: "Драма",
      kinopoisk: "9.1",
      imdb: "9.3"
    },
    {
      id: "18",
      name: "Достучаться до небес",
      year: 1997,
      director: "Томас Ян",
      description: "Волею судеб две абсолютные противоположности, тихоня Руди и разгильдяй Мартин, оказываются в одной больничной палате. Узнав неутешительные прогнозы, друзья решают использовать последние дни на полную катушку — угнать машину с деньгами, напиться текилы, и, конечно, увидеть море.",
      genres: ["Драма", "Комедия", "Криминал"],
      imageUrl: "",
      category: "Драма",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "19",
      name: "Игра престолов",
      year: 2011,
      director: "Разные",
      description: "К концу подходит время благоденствия, и лето, длившееся почти десятилетие, угасает. Вокруг средоточия власти Семи королевств, Железного трона, зреет заговор, и в это непростое время король решает искать поддержки у друга юности Эддарда Старка. В мире, где все — от короля до наемника — рвутся к власти, плетут интриги и готовы вонзить нож в спину, есть место и благородству, состраданию и любви. Между тем никто не замечает пробуждение тьмы из легенд далеко на Севере — и лишь Стена защищает живых к югу от нее.",
      genres: ["Фэнтези", "Драма", "Приключения"],
      imageUrl: "",
      category: "Фэнтези",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "20",
      name: "Темный рыцарь",
      year: 2008,
      director: "Кристофер Нолан",
      description: "Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы Готэма от преступности. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным напуганным горожанам под именем Джокер.",
      genres: ["Боевик", "Триллер", "Криминал"],
      imageUrl: "",
      category: "Боевик",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "21",
      name: "Мстители",
      year: 2012,
      director: "Джосс Уидон",
      description: "Локи возвращается, и в этот раз он не один. Земля оказывается на грани порабощения, и только лучшие из лучших могут спасти человечество. Глава международной организации Щ. И. Т. Ник Фьюри собирает выдающихся защитников справедливости и добра. Под предводительством Капитана Америки Железный Человек, Тор, Невероятный Халк, Соколиный Глаз и Чёрная Вдова вступают в войну с захватчиком.",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "22",
      name: "Звездные войны",
      year: 1977,
      director: "Джордж Лукас",
      description: "Татуин. Планета-пустыня. Уже постаревший рыцарь Джедай Оби Ван Кеноби спасает молодого Люка Скайуокера, когда тот пытается отыскать пропавшего дроида. С этого момента Люк осознает свое истинное назначение: он один из рыцарей Джедай. В то время как гражданская война охватила галактику, а войска повстанцев ведут бои против сил злого Императора, к Люку и Оби Вану присоединяется отчаянный пилот-наемник Хан Соло, и в сопровождении двух дроидов, R2D2 и C-3PO, этот необычный отряд отправляется на поиски предводителя повстанцев – принцессы Леи. Героям предстоит отчаянная схватка с устрашающим Дартом Вейдером – правой рукой Императора и его секретным оружием – «Звездой Смерти».",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "23",
      name: "Один дома",
      year: 1990,
      director: "Крис Коламбус",
      description: "Американское семейство отправляется из Чикаго в Европу, но в спешке сборов бестолковые родители забывают дома... одного из своих детей. Юное создание, однако, не теряется и демонстрирует чудеса изобретательности. И когда в дом залезают грабители, им приходится не раз пожалеть о встрече с милым крошкой.",
      genres: ["Комедия", "Семейный"],
      imageUrl: "",
      category: "Комедия",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "24",
      name: "Маска",
      year: 1994,
      director: "Чарльз Рассел",
      description: "Скромный и застенчивый служащий банка чувствует себя неуверенно с красивыми девушками и вообще рядом с людьми. Волей судьбы к нему попадает волшебная маска, и Стенли Ипкис приобретает способность превращаться в неуязвимое мультяшное существо с озорным характером.",
      genres: ["Комедия", "Фэнтези", "Криминал"],
      imageUrl: "",
      category: "Комедия",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "25",
      name: "Терминатор",
      year: 1984,
      director: "Джеймс Кэмерон",
      description: "История противостояния солдата Кайла Риза и киборга-терминатора, прибывших в 1984 год из пост-апокалиптического будущего, где миром правят машины-убийцы, а человечество находится на грани вымирания.",
      genres: ["Боевик", "Фантастика", "Триллер"],
      imageUrl: "",
      category: "Боевик",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "26",
      name: "Чужой",
      year: 1979,
      director: "Ридли Скотт",
      description: "В далеком будущем возвращающийся на Землю грузовой космический корабль перехватывает исходящий с неизвестной планеты сигнал. Экипаж, в соответствии с основными инструкциями, обязан найти и исследовать источник сигнала. Оказавшись на планете, астронавты повсюду обнаруживают предметы, по виду напоминающие гигантские коконы.",
      genres: ["Ужасы", "Фантастика", "Триллер"],
      imageUrl: "",
      category: "Ужасы",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "27",
      name: "Пятый элемент",
      year: 1997,
      director: "Люк Бессон",
      description: "Каждые пять тысяч лет открываются двери между измерениями, и тёмные силы стремятся нарушить существующую гармонию. XXIII век. Нью-йоркский таксист Корбен Даллас пытался спокойно отработать очередную смену, когда к нему в машину прямо с неба свалилась диковатая красотка и попросила о помощи. Не устояв перед наивными голубыми глазами девушки, Корбен ввязывается в неприятности.",
      genres: ["Фантастика", "Боевик", "Комедия"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "28",
      name: "Леон",
      year: 1994,
      director: "Люк Бессон",
      description: "Профессиональный убийца Леон неожиданно для себя самого решает помочь 12-летней соседке Матильде, семью которой убили коррумпированные полицейские.",
      genres: ["Триллер", "Драма", "Криминал"],
      imageUrl: "",
      category: "Триллер",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "29",
      name: "Такси",
      year: 1998,
      director: "Жерар Пирес",
      description: "Таксист Даниэль помешан на быстрой езде. Как ураган проносится он по извилистым улицам Марселя на мощном ревущем «Пежо», пугая прохожих и приводя в ужас пассажиров. Начинающий следователь Эмильен вынуждает его помогать в поимке банды грабителей банков, каждый раз ускользающих от полиции на неуловимых «Мерседесах».",
      genres: ["Комедия", "Боевик"],
      imageUrl: "",
      category: "Комедия",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "30",
      name: "Крепкий орешек",
      year: 1988,
      director: "Джон МакТирнан",
      description: "В суперсовременном небоскребе Лос-Анджелеса полицейский Джон Макклейн ведет смертельную схватку с бандой политических террористов, взявших в заложники два десятка человек, в число которых попадает и его жена. Началось все с того, что парень приехал в город к жене, оказался на рождественском приеме, а кончилось настоящей войной...",
      genres: ["Боевик", "Триллер"],
      imageUrl: "",
      category: "Боевик",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "31",
      name: "Криминальное чтиво",
      year: 1994,
      director: "Квентин Тарантино",
      description: "Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.В первой истории Винсент проводит незабываемый вечер с женой Марселласа Мией. Во второй Марселлас покупает боксёра Бутча Кулиджа, чтобы тот сдал бой. В третьей истории Винсент и Джулс по нелепой случайности попадают в неприятности.",
      genres: ["Криминал", "Триллер", "Комедия"],
      imageUrl: "",
      category: "Криминал",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "32",
      name: "Король Лев",
      year: 1994,
      director: "Роджер Аллерс, Роб Минкофф",
      description: "У величественного Короля-Льва Муфасы рождается наследник по имени Симба. Уже в детстве любознательный малыш становится жертвой интриг своего завистливого дяди Шрама, мечтающего о власти. Симба познаёт горе утраты, предательство и изгнание, но в конце концов обретает верных друзей и находит любимую. Закалённый испытаниями, он в нелёгкой борьбе отвоёвывает своё законное место в «Круге жизни», осознав, что значит быть настоящим Королём.",
      genres: ["Мультфильм", "Драма", "Приключения"],
      imageUrl: "",
      category: "Мультфильм",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "33",
      name: "Парк Юрского периода",
      year: 1993,
      director: "Стивен Спилберг",
      description: "Экспансивный богач и профессор уговаривает двух палеонтологов приехать на остров у побережья Коста-Рики, где он устроил парк Юрского периода. Парк населен давно вымершими динозаврами, воссозданными профессором по образцам крови из ископаемого комара, которые должны стать гвоздем программы нового аттракциона. До открытия остается несколько дней, а один из сотрудников, пытаясь украсть бесценные эмбрионы, нарушает систему охраны, что вместе с грозовым ливнем приводит к отключению электричества и защитных барьеров. Как раз в тот момент, когда палеонтологи с внуками профессора отправились на пробную экскурсию.",
      genres: ["Приключения", "Фантастика", "Триллер"],
      imageUrl: "",
      category: "Приключения",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "34",
      name: "Гравитация",
      year: 2013,
      director: "Альфонсо Куарон",
      description: "Доктор Райан Стоун, блестящий специалист в области медицинского инжиниринга, отправляется в свою первую космическую миссию под командованием ветерана астронавтики Мэтта Ковальски, для которого этот полет - последний перед отставкой. Но во время, казалось бы, рутинной работы за бортом случается катастрофа. Шаттл уничтожен, а Стоун и Ковальски остаются совершенно одни; они находятся в связке друг с другом, и все, что они могут, - это двигаться по орбите в абсолютно черном пространстве без всякой связи с Землей и какой-либо надежды на спасение.",
      genres: ["Фантастика", "Триллер", "Драма"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "35",
      name: "Адвокат дьявола",
      year: 1997,
      director: "Тейлор Хэкфорд",
      description: "В Нью-Йорк по приглашению главы крупного юридического концерна прибывает Кевин Ломакс, молодой адвокат. До этого он был известен тем, что защищал исключительно негодяев и притом не проиграл ни одного процесса. На новом месте работы он вполне счастлив, он живет в роскошной квартире с любящей женой, его окружают интересные люди.",
      genres: ["Триллер", "Драма", "Мистика"],
      imageUrl: "",
      category: "Триллер",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "36",
      name: "Трансформеры",
      year: 2007,
      director: "Майкл Бэй",
      description: "В течение многих столетий две расы роботов-инопланетян — Автоботы и Десептиконы — вели войну, ставкой в которой была судьба Вселенной. И вот война докатилась до Земли. В то время, когда силы зла ищут ключ к верховной власти, наш последний шанс на спасение находится в руках юного землянина. Единственное, что стоит между несущими зло Десептиконами и высшей властью - это ключ, находящийся в руках простого парнишки. Обычный подросток, Сэм Уитвикки озабочен повседневными хлопотами — школа, друзья, машины, девочки. Не ведая о том, что он является последним шансом человечества на спасение, Сэм вместе со своей подругой Микаэлой оказывается вовлеченным в противостояние Автоботов и Десептиконов. Только тогда Сэм понимает истинное значение семейного девиза Уитвикки — «без жертв нет победы!»",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "37",
      name: "Хоббит",
      year: 2012,
      director: "Питер Джексон",
      description: "Хоббит Бильбо Бэггинс пускается в грандиозный поход, целью которого является отвоевание утраченного королевства гномов Эребор у дракона Смауга. Совершенно неожиданно с хоббитом налаживает контакт волшебник Гэндальф Серый. Так Бильбо находит себя и присоединяется к компании тринадцати гномов, возглавляемых легендарным воином Торином Дубощитом. Их путешествие пройдёт через Дикий Край, предательские земли, населенные гоблинами и орками, смертоносными варгами, гигантскими пауками, меняющим шкуры народом и волшебниками. И хотя их цель находится на Востоке, среди пустошей Одинокой Горы, сначала им придется выбраться из туннелей гоблинов, где Бильбо встретит существо, которое изменит его жизнь навсегда - Голлума.",
      genres: ["Фэнтези", "Приключения"],
      imageUrl: "",
      category: "Фэнтези",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "38",
      name: "Гарри Поттер 2",
      year: 2002,
      director: "Крис Коламбус",
      description: "Гарри Поттер переходит на второй курс Школы чародейства и волшебства Хогвартс. Эльф Добби предупреждает Гарри об опасности, которая поджидает его там, и просит больше не возвращаться в школу. Юный волшебник не следует совету эльфа и становится свидетелем таинственных событий, разворачивающихся в Хогвартсе. Вскоре Гарри и его друзья узнают о существовании Тайной Комнаты и сталкиваются с новыми приключениями, пытаясь победить темные силы.",
      genres: ["Фэнтези", "Приключения", "Семейный"],
      imageUrl: "",
      category: "Фэнтези",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "39",
      name: "Зверополис",
      year: 2016,
      director: "Байрон Ховард, Рич Мур, Джаред Буш",
      description: "Добро пожаловать в Зверополис – современный город, населенный самыми разными животными, от огромных слонов до крошечных мышек. Зверополис разделен на районы, полностью повторяющие естественную среду обитания разных жителей – здесь есть и элитный район Площадь Сахары и неприветливый Тундратаун. В этом городе появляется новый офицер полиции, жизнерадостная зайчиха Джуди Хоппс, которая с первых дней работы понимает, как сложно быть маленькой и пушистой среди больших и сильных полицейских. Джуди хватается за первую же возможность проявить себя, несмотря на то, что ее партнером будет болтливый хитрый лис Ник Уайлд. Вдвоем им предстоит раскрыть сложное дело, от которого будет зависеть судьба всех обитателей Зверополиса.",
      genres: ["Мультфильм", "Комедия", "Приключения"],
      imageUrl: "",
      category: "Мультфильм",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "40",
      name: "Валли",
      year: 2008,
      director: "Эндрю Стэнтон",
      description: "Робот ВАЛЛ·И из года в год прилежно трудится на опустевшей Земле, очищая нашу планету от гор мусора, которые оставили после себя улетевшие в космос люди. Он и не представляет, что совсем скоро произойдут невероятные события, благодаря которым он встретит друзей, поднимется к звездам и даже сумеет изменить к лучшему своих бывших хозяев, совсем позабывших родную Землю.",
      genres: ["Мультфильм", "Фантастика", "Приключения"],
      imageUrl: "",
      category: "Мультфильм",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "41",
      name: "Тор",
      year: 2011,
      director: "Кеннет Брана",
      description: "Эпическое приключение происходит как на нашей планете Земля, так и в королевстве богов Асгарде. В центре истории - Могучий Тор, сильный, но высокомерный воин, чьи безрассудные поступки возрождают древнюю войну в Асгарде. Тора отправляют в ссылку на Землю, лишают сил и заставляют жить среди обычных людей в качестве наказания...",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "42",
      name: "Железный человек",
      year: 2008,
      director: "Джон Фавро",
      description: "Миллиардер-изобретатель Тони Старк попадает в плен к Афганским террористам, которые пытаются заставить его создать оружие массового поражения. В тайне от своих захватчиков Старк конструирует высокотехнологичную киберброню, которая помогает ему сбежать. Однако по возвращении в США он узнаёт, что в совете директоров его фирмы плетётся заговор, чреватый страшными последствиями. Используя своё последнее изобретение, Старк пытается решить проблемы своей компании радикально...",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "43",
      name: "Первый мститель",
      year: 2011,
      director: "Джо Джонстон",
      description: "Стив Роджерс добровольно соглашается принять участие в эксперименте, который превратит его в суперсолдата, известного как Первый мститель. Роджерс вступает в вооруженные силы США вместе с Баки Барнсом и Пегги Картер, чтобы бороться с враждебной организацией ГИДРА, которой управляет безжалостный Красный Череп.",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "44",
      name: "Невероятный Халк",
      year: 2008,
      director: "Луи Летерье",
      description: "История доктора Брюса Баннера, который ищет лекарство от своего необычного «заболевания», превращающего его во время эмоционального стресса в гигантского зеленого монстра Халка. Находясь в бегах от армии, стремящейся его захватить, Брюс почти находит лекарство, но все старания идут прахом, когда у Халка вдруг появляется новый, невероятно сильный противник.",
      genres: ["Фантастика", "Боевик", "Триллер"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "45",
      name: "Человек-паук",
      year: 2002,
      director: "Сэм Рэйми",
      description: "Питер Паркер – обыкновенный школьник. Однажды он отправился с классом на экскурсию, где его кусает странный паук-мутант. Через время парень почувствовал в себе нечеловеческую силу и ловкость в движении, а главное – умение лазать по стенам и метать стальную паутину. Свои способности он направляет на защиту слабых. Так Питер становится настоящим супергероем по имени Человек-паук, который помогает людям и борется с преступностью. Но там, где есть супергерой, рано или поздно всегда объявляется и суперзлодей...",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "46",
      name: "Доктор Стрэндж",
      year: 2016,
      director: "Скотт Дерриксон",
      description: "Страшная автокатастрофа поставила крест на карьере успешного нейрохирурга Доктора Стрэнджа. Отчаявшись, он отправляется в путешествие в поисках исцеления и открывает в себе невероятные способности к трансформации пространства и времени. Теперь он — связующее звено между параллельными измерениями, а его миссия — защищать жителей Земли и противодействовать злу, какое бы обличие оно ни принимало.",
      genres: ["Фантастика", "Боевик", "Фэнтези"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "47",
      name: "Черная пантера",
      year: 2018,
      director: "Райан Куглер",
      description: "С первого взгляда можно решить, что Ваканда - обычная территория дикой Африки, но это не так. Здесь, в недрах пустынных земель, скрываются залежи уникального металла, способного поглощать вибрацию. Многие пытались добраться до него, разоряя всё на своём пути и принося смерть аборигенам, но каждый раз таинственный дух саванны - Чёрная Пантера - вставал на защиту угнетённых. Спустя много лет беда снова приходит в Ваканду, и в этот раз враг заручился поддержкой современных технологий. Когда шансов почти не остаётся, Т'Чалла, молодой принц Ваканды, узнаёт, что именно ему предстоит возродить легенду и продолжить вечную борьбу, надев маску Чёрной Пантеры.",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "48",
      name: "Стражи галактики",
      year: 2014,
      director: "Джеймс Ганн",
      description: "Отважному путешественнику Питеру Квиллу попадает в руки таинственный артефакт, принадлежащий могущественному и безжалостному злодею Ронану, строящему коварные планы по захвату Вселенной. Питер оказывается в центре межгалактической охоты, где жертва — он сам. Единственный способ спасти свою жизнь — объединиться с четверкой нелюдимых изгоев: воинственным енотом по кличке Ракета, человекоподобным деревом Грутом, смертельно опасной Гаморой и одержимым жаждой мести Драксом, также известным как Разрушитель. Когда Квилл понимает, какой силой обладает украденный артефакт и какую опасность он представляет для вселенной, одиночка пойдет на все, чтобы сплотить случайных союзников для решающей битвы за судьбу галактики.",
      genres: ["Фантастика", "Боевик", "Комедия"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "49",
      name: "Дедпул",
      year: 2016,
      director: "Тим Миллер",
      description: "Уэйд Уилсон — наёмник. Будучи побочным продуктом программы вооружённых сил под названием «Оружие X», Уилсон приобрёл невероятную силу, проворство и способность к исцелению. Но страшной ценой: его клеточная структура постоянно меняется, а здравомыслие сомнительно. Всё, чего хочет Уилсон, — держаться на плаву в социальной выгребной яме. Но течение в ней слишком быстрое.",
      genres: ["Комедия", "Боевик", "Фантастика"],
      imageUrl: "",
      category: "Комедия",
      kinopoisk: "8.7",
      imdb: "8.7"
    },
    {
      id: "50",
      name: "Люди Икс",
      year: 2000,
      director: "Брайан Сингер",
      description: "Они — дети атомного века, сверхлюди, новое звено в цепи эволюции. Каждый из них был рождён в результате уникальной генетической мутации, наделившей их с детства необыкновенными способностями. Под руководством профессора Чарльза Ксавьера, телепата с мировым именем, одарённые ученики научились контролировать и управлять своими удивительными способностями в интересах человечества. Но не все мутанты разделяют взгляды профессора: могущественный мутант Магнето, которому подвластны все металлы, собрал команду единомышленников. Он не верит, что люди и мутанты когда-либо смогут мирно сосуществовать. Они разработали план, чтобы осуществить захват власти над миром, и тогда, только ученики профессора Ксавьера смогут защитить этот мир…",
      genres: ["Фантастика", "Боевик", "Приключения"],
      imageUrl: "",
      category: "Фантастика",
      kinopoisk: "8.7",
      imdb: "8.7"
    }
  ];