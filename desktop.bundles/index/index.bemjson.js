var gibberish = [
    'Это просто какой-то наполнитель текста',
    'Добро пожаловать в библиотеку',
    'Контент демонстрации и читать здесь ничего'
];

function filltext(words) {
    var res = [];

    for (var i = 0; i < words; i++) {
        res.push(gibberish[Math.floor(Math.random() * 3)]);
    }

    return res.join(' ');
}

module.exports = {
    block: 'page',
    title: 'Шаблон трехколоночной страницы',
    head: [
        { elem: 'meta', attrs: { name: 'title',       content: 'Шаблон трехколоночной страницы' } },
        { elem: 'meta', attrs: { name: 'keywords',    content: 'Ключевые слова' } },
        { elem: 'meta', attrs: { name: 'description', content: 'Типовой трехколоночный шаблон' } },
        { elem: 'css', url: 'index.min.css' },
        // { elem: 'js', url: 'jquery-min.js' }, // не имеет смысла, т.к. подключится автоматически
        // { elem: 'js', url: 'путь_к_скрипту.js' }, // в целом скрипты стоит подключать в секции scripts, чтобы не блокировать загрузку HTML
        // { elem: 'js', url: 'путь_к_скрипту.js' },
        // { elem: 'js',  url: '/desktop.blocks/header/header.ex_script.js' } // перенес в bemjson, нет смысла генерировать текст на клиенте, если это можно сделать заранее на этапе сборки
    ],
    favicon: '/favicon.ico',
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'maincontainer',
            content: [
                {
                    block: 'topsection',
                    content: {
                        tag: 'h1',
                        content: 'CSS Liquid Layout #3.3- (Fluid-Fluid-Fluid)'
                    }
                },
                {
                    block: 'contentwrapper',
                    content: [
                        {
                            block: 'contentcolumn',
                            content: {
                                block: 'innertube',
                                content: [
                                    {
                                        tag: 'b',
                                        content: [
                                            'Content Column: ',
                                            {
                                                tag: 'em',
                                                content: 'Fluid'
                                            }
                                        ]
                                    },
                                    filltext(42)
                                ]
                            }
                        }
                    ]
                },
                {
                    block: 'leftcolumn',
                    content: {
                        block: 'innertube',
                        content: [
                            {
                                tag: 'b',
                                content: [
                                    'Left Column: ',
                                    {
                                        tag: 'em',
                                        content: '20%'
                                    }
                                ]
                            },
                            filltext(20)
                        ]
                    }
                },
                {
                    block: 'rightcolumn',
                    content: {
                        block: 'innertube',
                        content: [
                            {
                                tag: 'b',
                                content: [
                                    'Right Column: ',
                                    {
                                        tag: 'em',
                                        content: '15%'
                                    }
                                ]
                            },
                            filltext(15)
                        ]
                    }

                },
                {
                    block: 'footer',
                    content: 'footer'
                }
            ]
        }
    ]
};
