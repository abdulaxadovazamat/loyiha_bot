const Telegraf = require('telegraf')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Scene = require('telegraf/scenes/base')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const { leave } = Stage
const stage = new Stage


const token = "1202752733:AAEz7r5Ra2o-fEHbToRvB94V2RgtlY2E4Ck"
const bot = new Telegraf(token)
const admin = "   "

const boshMenyu = Extra.markup((markup) => {
    return markup.resize()
        .keyboard([
            ["📁 Хужжатлар", "📁 Расчеты"],
            ["📁 Лойиха объектлари", "📁 Аралаш"],
            ["📁 Фарғона вилояти туман карталари"]
        ])
})






/***
 *          Лойиха объектлари                     Лойиха объектлари
 * ***/

const loyihalar = Extra.markup((markup) => {
    return markup.resize()
        .keyboard([
            ["2019 йил", "2020 йил"],
            ["🏠 Меню"]
        ])
})

const loyiha_2019 = Extra.markup((markup) => {
    return markup.resize()
        .keyboard([
            ["ГУКС 2019", "ОДСП 2019"],
            ["🏠 Меню"]
        ])
})

const loyiha_2020 = Extra.markup((markup) => {
    return markup.resize()
        .keyboard([
            ["Фаза 2", "ОДСП 2020"],
            ["🏠 Меню"]
        ])
})
bot.hears('📁 Лойиха объектлари', ctx => {
	return ctx.reply('Лойиха объектлари', loyihalar)
})
bot.hears('2019 йил', ctx => {
	return ctx.reply('2019 йил лойиха объектлари', loyiha_2019)
})
bot.hears('2020 йил', ctx => {
	return ctx.reply('2020 йил лойиха объектлари', loyiha_2020)
})

bot.hears('ГУКС 2019', ctx => {
	return ctx.reply('ГУКС 2019 йил ишлари', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Коракумок", "Умуртог"],
                ["2019 йил", "🏠 Меню"]
            ])
    }))
})

bot.hears("Коракумок", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/100",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/101",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("Умуртог", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/102",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/103",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears('ОДСП 2019', ctx => {
	return ctx.reply('ОДСП 2019 йил ишлари', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Кайрок н.", "Файзобод н.", "СКВ 23 дона"],
                ["2019 йил", "🏠 Меню"]
            ])
    }))
})

bot.hears("Кайрок н.", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/104",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/105",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/106",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/107",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("Файзобод н.", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/111",
    caption = "Lorem ipsum dolor sit amet"
)})

bot.hears("СКВ 23 дона", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/109",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/108",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/110",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears('ОДСП 2020', ctx => {
	return ctx.reply('ОДСП 2020 йил ишлари', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                [" М а ъ л у м о т  й ў қ "],
                ["2020 йил", "🏠 Меню"]
            ])
    }))
})

bot.hears('Фаза 2', ctx => {
	return ctx.reply('Фаза 2 ишлари', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["СКВ ФАЗА", "Каналлар ФАЗА"],
                ["2020 йил", "🏠 Меню"]
            ])
    }))
})

bot.hears('СКВ ФАЗА', ctx => {
	return ctx.reply('СКВ ФАЗА ишлари', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["5_дона_ф.т", "9_дона_к.ш", "6_дона_ф.т"],
                ["2020 йил", "🏠 Меню"]
            ])
    }))
})

bot.hears("5_дона_ф.т", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",
    caption = "Lorem ipsum dolor sit amet"
)})

bot.hears("9_дона_к.ш", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",
    caption = "Lorem ipsum dolor sit amet"
)})

bot.hears("6_дона_ф.т", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",
    caption = "Lorem ipsum dolor sit amet"
)})

/***
 *          📁 Аралаш                   📁 Аралаш           📁 Аралаш
 * ***/

bot.hears('📁 Аралаш', ctx => {
	return ctx.reply('ГУКС 2019 йил ишлари', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Тахеометр қўлланма"],
                ["🏠 Меню"]
            ])
    }))
})
bot.hears("Тахеометр қўлланма", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/112",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/113",
    caption = "Lorem ipsum dolor sit amet")
})


/***
 *         Хужжатлар                 Хужжатлар               Хужжатлар
 * ***/

const hujjatlarKor = Extra.markup((markup) => {
    return markup.resize()
        .keyboard([
            ["Паспортлар", "Лицензия"],
            ["ПИР", "ШНК 2.06.03-12", "🏠 Меню"]
        ])
})

bot.hears("Лицензия", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/54",
)})

bot.hears("ШНК 2.06.03-12", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/53",
    caption = "Lorem ipsum dolor sit amet"
)})

bot.hears("ПИР", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/52",
    caption = "Lorem ipsum dolor sit amet"
)})

bot.hears('Паспортлар', ctx => {
	return ctx.reply('Паспортлар', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["А.Абдурахмонов", "Ш.Абдурахмонов"],
                ["Г.Хайдаров", "М.Вахобов"],
                ["У.Миркомилов", "М.Хамдамов"],
                ["А.Абдулахадов", "🏠 Меню"]
            ])
    }))
})

bot.hears("А.Абдурахмонов", (ctx) => {
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/55",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/56",
    caption = "Lorem ipsum dolor sit amet")
})
bot.hears("Ш.Абдурахмонов", (ctx) => {
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/58",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/57",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("Г.Хайдаров", (ctx) => {
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/59",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/60",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("У.Миркомилов", (ctx) => {
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/62",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/61",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("А.Абдулахадов", (ctx) => {
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/64",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/63",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("М.Хамдамов", (ctx) => {
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/65",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/66",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("М.Вахобов", (ctx) => {
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/68",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendPhoto(
    ctx.message.from.id,
    photo = "https://t.me/qurliyiha/67",
    caption = "Lorem ipsum dolor sit amet")
})

/***
 *         Расчеты                 Расчеты               Расчеты
 * ***/

bot.hears('📁 Расчеты', ctx => {
	return ctx.reply('Расчеты', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Гидравлический калькулятор", "Горизонтальный дренаж"],
                ["Каналы и рек", "Напорный трубопровод"],
                ["Русловые расчеты", "Скважина"],
                ["Сооружение", "Статич расчеты"],
                ["Устойчивост откоса", "РАСЧЕТ РЕЖИМ ОРОШЕНИЯ"],
                ["🏠 Меню"]
            ])
    }))
})

bot.hears("Гидравлический калькулятор", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/11",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/14",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/15",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("Горизонтальный дренаж", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/16",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/17",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/18",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/19",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/20",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("Каналы и рек", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/21",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/22",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/23",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/24",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/25",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/26",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/27",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/28",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("Напорный трубопровод", (ctx) => {
    ctx.telegram.sendDocument(
    doc = "https://t.me/qurliyiha/29",
    caption = "Lorem ipsum dolor sit amet")
    ctx.message.from.id,
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/30",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/31",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/32",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/33",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/34",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/35",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("Русловые расчеты", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/36",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/37",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/38",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("Скважина", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("Сооружение", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/39",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/40",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/41",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/42",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/43",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/44",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/45",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("Статич расчеты", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/46",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/47",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/48",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/49",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("Устойчивост откоса", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/50",
    caption = "Lorem ipsum dolor sit amet")
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/51",
    caption = "Lorem ipsum dolor sit amet")
})

bot.hears("РАСЧЕТ РЕЖИМ ОРОШЕНИЯ", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",
    caption = "Lorem ipsum dolor sit amet")
})








/***
 *         Фарғона вилояти туман карталари            Фарғона вилояти туман карталари
 * **/


bot.hears('📁 Фарғона вилояти туман карталари', ctx => {
	return ctx.reply('Фарғона вилояти туман карталари', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["🗺 Фарғона ш", "🗺 Фарғона т", "🗺 Тошлоқ"],
                ["🗺 Олтиариқ", "🗺 Қува", "🗺 Боғдод"],
                ["🗺 Бешариқ", "🗺 Бувайда", "🗺 Данғара"],
                ["🗺 Ўзбекистон", "🗺 Учкўприк", "🗺 Фурқат"],
                ["🗺 Ёзёвон", "🏠 Меню"]
            ])
    }))
})
bot.hears('🗺 Фарғона ш', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Бахоир", "Оқариқобод"],
                ["Бешбола", "Жўйдам", "Ёрмазор"],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})

bot.hears('🗺 Фарғона т', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Фар.т.25000", "Аввал", "Водил", "Гулшан"],
                ["Дамкўл", "Каптархон", "Лоғон"],
                ["Миндон", "Новкент", "Оқбилол"],
                ["Оқолтин", "Рахимов", "Сой бўйи"],
                ["Хонқиз", "Чекшура", "Чимён"],
                ["Шодиева", "Шохимардонобод", "Қўрғонтепа"],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})

bot.hears('🗺 Тошлоқ', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Тошлоқ 25000", "Навбахор", "Хонариқ"],
                ["Яккатут", "Заркент", "Зардўст"],
                ["Қумариқ", "Саддақайрағоч", "Тошлоқ"],
                ["Оқолтин", "Рахимов", "Сой бўйи"],
                ["Араббой Т.", "Оқ олтин"],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})

bot.hears('🗺 Олтиариқ', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Олтирақ 25000", "Ал-Фарғоний", "Журак"],
                ["Зилха", "Иттифоқ", "Қизилтепа"],
                ["Навоий", "Нуробод", "Окбуйра"],
                ["Отақулов", "Пахтабод", "Повлугон"],
                ["Полосон", "Тонг", "Янгиобод", "Янгиқўрғон"],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})
bot.hears("Олтирақ 25000", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Ал-Фарғоний", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Журак", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Зилха", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Иттифоқ", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Қизилтепа", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Навоий", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Нуробод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Окбуйра", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Отақулов", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Пахтабод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Повлугон", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Полосон", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Тонг", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Янгиобод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Янгиқўрғон", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})

bot.hears('🗺 Қува', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Қува 25000", "Абдураззоқов", "Адолатли йўлбарс"],
                ["А. Убайдуллаев", "Б. Шамшиддинов", "Бўстон"],
                ["Гулистон", "Дехқонобод", "М. Мансуров"],
                ["Навоий", "Оқтепа", "Оқ қўрғон"],
                ["Х. Рахмонов", "Шерботаев", "Янгиқишлоқ", "Наврўз"],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})

bot.hears("Қува 25000", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Абдураззоқов", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Адолатли йўлбарс", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("А. Убайдуллаев", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Б. Шамшиддинов", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Бўстон", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Гулистон", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Дехқонобод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("М. Мансуров", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Навоий", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Оқтепа", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Оқ қўрғон", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Х. Рахмонов", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Шерботаев", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Янгиқишлоқ", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Наврўз", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})

bot.hears('🗺 Боғдод', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Боғ. 25000", "Намуна", "Хазиний"],
                ["Миришкор", "Самарқанд", "Мирзаобод"],
                ["Бузрукхўжа", "Қоракўл", "Қўштегирмон"],
                ["В.Жураев", "Дўстлик_", "Маткулобод"],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})
bot.hears("Боғ. 25000", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Намуна", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/83",)
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/84",)
})
bot.hears("Хазиний", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/85",)
})
bot.hears("Миришкор", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/86",)
})
bot.hears("Самарқанд", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/87",)
})
bot.hears("Мирзаобод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/88",)
})
bot.hears("Бузрукхўжа", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/89",)
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/90",)
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/91",)
})
bot.hears("Қоракўл", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/92",)
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/93",)
})
bot.hears("Қўштегирмон", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/94",)
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/95",)
})
bot.hears("В.Жураев", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/96",)
})
bot.hears("Дўстлик_", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/97",)
})
bot.hears("Маткулобод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/98",)
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/99",)
})

bot.hears('🗺 Бешариқ', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Беш. 25000", "Н.Ахмедов", "Агротехсервис"],
                ["Г.Рахимов", "Рапкон", "С.Мамарасулов"],
                ["Собиртепа", "Т.Мазакиров", "Чимбой", "Чорбогту.."],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})
bot.hears("Чорбогту..", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/81",)
})
bot.hears("Чимбой", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/80",)
})
bot.hears("Т.Мазакиров", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/79",)
})
bot.hears("Собиртепа", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/78",)
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/77",)
})
bot.hears("С.Мамарасулов", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/76",)
})
bot.hears("Рапкон", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/75",)
})
bot.hears("Г.Рахимов", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/72",)
})
bot.hears("Агротехсервис", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/71",)
})
bot.hears("Н.Ахмедов", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/70",)
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/73",)
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "https://t.me/qurliyiha/74",)
})
bot.hears("Беш. 25000", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})


bot.hears('🗺 Бувайда', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Був. 25000", "Ингирчок", "Кунгирот"],
                ["Бачкир", "Кургонобод", "Довудпир"],
                ["Оккургон", "Доимобод", "Янги қадам"],
                ["Узумзор", "Мадад", "Жалаер" , "Мукаммал"],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})
bot.hears("Був. 25000", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Ингирчок", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Кунгирот", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Бачкир", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Кургонобод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Довудпир", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Оккургон", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Доимобод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Янги қадам", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Узумзор", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Мадад", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Жалаер", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Мукаммал", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})

bot.hears('🗺 Данғара', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Дан. 25000", "Дангара", "Истиқбол"],
                ["Ишонч", "Мулкобод", "Найманча"],
                ["Сирдарё", "Худойбердиев"],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})
bot.hears("Дан. 25000", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Дангара", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Истиқбол", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Ишонч", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Мулкобод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Найманча", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Сирдарё", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Худойбердиев", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})

bot.hears('🗺 Ўзбекистон', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Ўзб. 25000", "Азизов", "Бозорбоши"],
                ["Ганиобод", "Гофур Г.", "Каюмжонобод"],
                ["Муқумий", "Нурсух", "Пахтақайнар",],
                ["Сохибкор", "Узбек"],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})
bot.hears("Ўзб. 25000", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Азизов", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Бозорбоши", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Ганиобод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Гофур Г", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Каюмжонобод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Муқумий", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Нурсух", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Пахтақайнар", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Сохибкор", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Узбек", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})

bot.hears('🗺 Учкўприк', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Уч. 25000", "Бекобод", "Истиқбол"],
                ["Отажонов", "Султонобод.", "Қанғил тонги"],
                ["Уч оқсув", "Ф.Шамсиддинов", "Янги Гиждуон",],
                ["Дехқонов", "Наврўз"],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})
bot.hears("Уч. 25000", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Бекобод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Истиқбол", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Отажонов", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Султонобод", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Қанғил тонги", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Уч оқсув", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Ф.Шамсиддинов", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Янги Гиждуон", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Дехқонов", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})
bot.hears("Наврўз", (ctx) => {
    ctx.telegram.sendDocument(
    ctx.message.from.id,
    doc = "",)
})

bot.hears('🗺 Фурқат', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Фур. 25000", "Гулистон_х", "Довуд"],
                ["Дўстлик", "Қаюмжонобод", "Қолгандарё"],
                ["Бўрдоқичилик", "Шоимбек", "Муқумий",],
                ["Навбахор_", "Пахтақайнар", "Сирдарё"],
                ["Сохибкор_", "Ўрмон хўж", "Фур. келажаги"],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})

bot.hears('🗺 Ёзёвон', ctx => {
	return ctx.reply('Массивни танланг', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ["Ёзё. 25000", "Гулистон_1", "Истиқлол"],
                ["Иштирхон", "Қатортол", "Хонобод"],
                ["Ш.Рашидов", "Янгиобод_1", "Тошбоев",],
                ["Юсупов", "Қорасоқол"],
                ["📁 Фарғона вилояти туман карталари", "🏠 Меню"]
            ])
    }))
})



















bot.start(({reply}) => {
	return reply('Салом ботдан фойдаланиш учун паролни ёзинг')
})

bot.hears('🏠 Меню', ctx => {
	return ctx.reply('Меню', boshMenyu)
})

bot.hears('📁 Хужжатлар', ctx => {
	return ctx.reply('Корхона хужжатлари', hujjatlarKor)
})

//****КИРИШ                   КИРИШ                КИРИШ*/
bot.hears('905636333', ctx => {
	return ctx.reply('Салом Азамат. Фарғонаумумтадбирқурлойиха МЧЖ ботига хуш келибсиз!', boshMenyu)
})

bot.hears('911109193', ctx => {
	return ctx.reply('Салом Шахром. Фарғонаумумтадбирқурлойиха МЧЖ ботига хуш келибсиз!', boshMenyu)
})

bot.hears('911109404', ctx => {
	return ctx.reply('Салом Улуғбек. Фарғонаумумтадбирқурлойиха МЧЖ ботига хуш келибсиз!', boshMenyu)
})

bot.hears('975036643', ctx => {
	return ctx.reply('Салом Муслим. Фарғонаумумтадбирқурлойиха МЧЖ ботига хуш келибсиз!', boshMenyu)
})

bot.hears('975157772', ctx => {
	return ctx.reply('Салом Мухаммадали. Фарғонаумумтадбирқурлойиха МЧЖ ботига хуш келибсиз!', boshMenyu)
})

bot.hears('979605580', ctx => {
	return ctx.reply('Салом Ғолиб. Фарғонаумумтадбирқурлойиха МЧЖ ботига хуш келибсиз!', boshMenyu)
})

bot.hears('999337721', ctx => {
	return ctx.reply('Салом Анвар. Фарғонаумумтадбирқурлойиха МЧЖ ботига хуш келибсиз!', boshMenyu)
})

bot.hears('911112399', ctx => {
	return ctx.reply('Салом. Фарғонаумумтадбирқурлойиха МЧЖ ботига хуш келибсиз!', boshMenyu)
})









bot.launch()