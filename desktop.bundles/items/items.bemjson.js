({
    block: 'page',
    title: 'items',
    head: [
        { elem: 'css', url: '_items.css' },
    ],
    scripts: [{
        elem: 'js',
        url: '_items.bemhtml.js'
    }, { 
        elem: 'js', 
        url: '_items.js' 
    }, {
        elem: 'js',
        url: '_items.priv.js'
    }],
    content: [
        {
            block: 'g-header',
            js: true,
            content: [
                {
                    block: 'g-logo',
                    description: 'Крупнейший поиск ювелирных изделий'
                }/*,
                {
                    block: 'g-basket',
                    amount: 0
                }/*,
                {
                    elem: 'desire',
                    content: [
                        {
                            tag: 'img',
                            attrs: {src: '../../desktop.blocks/g-header/heart.png'},
                        },
                        {
                            tag: 'span',
                            content: 'Нет товаров в списке желаний'
                        }
                    ] 
                }*/, {
                    elem: 'up',
                    js: true,
                    tag: 'p',
                    content: 'В начало'
                }, {
                    block: 'g-support',
                    content: [
                    ]
                }
            ] 
        }, {
            block: 'g-menu',
            content: [
                {
                    block: 'g-menu-item',
                    mods: { type: 'necklaces', state: 'active' },
                    label: 'КОЛЬЕ'
                }, {
                    block: 'g-menu-item',
                    mods: { type: 'chains' },
                    label: 'ЦЕПИ'
                }, {
                    block: 'g-menu-item',
                    mods: { type: 'pendants' },
                    label: 'ПОДВЕСКИ'
                }, {
                    block: 'g-menu-item',
                    mods: { type: 'bracelets' },
                    label: 'БРАСЛЕТЫ'
                }, {
                    block: 'g-menu-item',
                    mods: { type: 'rings' },
                    label: 'КОЛЬЦА'
                }, {
                    block: 'g-menu-item',
                    mods: { type: 'earrings' },
                    label: 'СЕРЬГИ'
                }, {
                    block: 'g-menu-item',
                    mods: { type: 'brooches' },
                    label: 'БРОШИ<br>И ЗАЖИМЫ'
                }, {
                    block: 'g-menu-item',
                    mods: { type: 'watches' },
                    label: 'ЧАСЫ'
                }, {
                    block: 'g-menu-item',
                    mods: { type: 'cutlery' },
                    label: 'СТОЛОВЫЕ<br>ПРИБОРЫ'
                }
            ]
        }, {
            block: 'g-button',
            mods: { prev: true },
            content: 150
        }, {
            block: 'g-content',
            content: [
                {
                    block: 'g-breadcrumbs',
                    root: {
                        title: 'Главная',
                        url: '/'
                    },
                    path: [
                        {
                            title: 'Кольца',
                            url: '/'
                        }, {
                            title: 'Обручальные',
                            url: '/'
                        }
                    ]
                }, {
                    block: 'g-category-title',
                    title: 'Кольца',
                    count: '11 253'
                }, {
                    block: 'g-goods',
                    mods: { "sorting": true },
                    sortParams: ['Сначала дорогие', 'Сначала дешёвые', 'По алфавиту'],
                    totalPages: 34,
                    currentPage: 23,
                    js: {
                        totalPages: this.totalPages,
                        currentPage: this.currentPage
                    },
                    content: [
                        {
                            block: 'g-product',
                            mods: { like: 'yes', action: 'yes', active: true },
                            url: '#',
                            title: 'Золотое Кольцо с гранатами и фианитами. Очень красивое и неебически дорогое',
                            imageUrl: '/images/good.png',
                            weight: '4.5 грамм',
                            carat: '0,07 карат',
                            price: 12543,
                            store: 'Sunlight',
                            storeUrl: '#',
                            buyUrl: '#'
                        }, {
                            block: 'g-product',
                            mods: { like: 'yes', action: 'yes' },
                            url: '#',
                            title: 'Золотое Кольцо с гранатами и фианитами. Очень красивое и неебически дорогое',
                            imageUrl: '/images/good.png',
                            weight: '4.5 грамм',
                            carat: '0,07 карат',
                            price: 15000,
                            store: 'Sunlight',
                            storeUrl: '#',
                            buyUrl: '#'
                        }, {
                            block: 'g-product',
                            mods: { like: 'yes', action: 'yes' },
                            url: '#',
                            title: 'Золотое Кольцо с гранатами и фианитами. Очень красивое и неебически дорогое',
                            imageUrl: '/images/good.png',
                            weight: '4.5 грамм',
                            carat: '0,07 карат',
                            price: 23945,
                            store: 'Sunlight',
                            storeUrl: '#',
                            buyUrl: '#'
                        }, {
                            block: 'g-frame',
                            content: [
                                {
                                    block: 'g-item',
                                    content: [
                                        {
                                            block: 'g-heading',
                                            content: 'Обручальное кольцо из белого золота с 21 бриллиантом'
                                        }, {
                                            block: 'g-item-gallery',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    title: 'Фото',
                                                    current: 2,
                                                    count: 8
                                                }, {
                                                    elem: 'preview_images',
                                                    images: ['../../desktop.blocks/g-item-gallery/images/preview01.jpg',
                                                             '../../desktop.blocks/g-item-gallery/images/preview01.jpg',
                                                             '../../desktop.blocks/g-item-gallery/images/preview01.jpg',
                                                             '../../desktop.blocks/g-item-gallery/images/preview01.jpg']
                                                }, {
                                                    elem: 'main_image',
                                                    image: '../../desktop.blocks/g-item-gallery/images/main02.jpg'
                                                }
                                            ]
                                        }, {
                                            block: 'g-right-col',
                                            content: [
                                                {
                                                    block: 'g-button',
                                                    mods: { type: 'gray' },
                                                    content: 'Подробнее'
                                                }, {
                                                    block: 'g-item-features',
                                                    content: {
                                                        'Артикул': '51235654',
                                                        'Металл': 'Белое золото',
                                                        'Проба': '585',
                                                        'Камень': '21 бриллиант',
                                                        'Карат': '0,07'
                                                    }
                                                }, {
                                                    block: 'g-like',
                                                    mods: { type: 'extended' }
                                                }, {
                                                    block: 'yashare',
                                                    quickServices : [
                                                        'vkontakte',
                                                        'facebook',
                                                        'twitter',
                                                        'odnoklassniki'
                                                    ],
                                                    theme : 'counter',
                                                    l10n : 'ru',
                                                    url : 'localhost:8080/desctop.bundles/item/item.html',
                                                    title : 'BEM Social Components Library',
                                                    description : 'Fork me on GitHub',
                                                    image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                                                            'master/desktop.bundles/index/blocks/page/image/bem.png'
                                                }
                                            ]
                                        }, {
                                            block: 'g-heading',
                                            mods: { type: 'simple' },
                                            content: 'Купить этот товар в магазинах'
                                        }, {
                                            block: 'g-available-in-stores',
                                            content: [
                                                {
                                                    name: 'Линии любви',
                                                    url: '#',
                                                    price: 6100
                                                }, {
                                                    name: 'Линии любви',
                                                    url: '#',
                                                    price: 6100
                                                }, {
                                                    name: 'Линии любви',
                                                    url: '#',
                                                    price: 6100
                                                }, {
                                                    name: 'Линии любви',
                                                    url: '#',
                                                    price: 6100
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, {
                            block: 'g-product',
                            mods: { like: 'yes', action: 'yes' },
                            url: '#',
                            title: 'Золотое Кольцо с гранатами и фианитами. Очень красивое и неебически дорогое',
                            imageUrl: '/images/good.png',
                            weight: '4.5 грамм',
                            carat: '0,07 карат',
                            price: 1000000,
                            store: 'Sunlight',
                            storeUrl: '#',
                            buyUrl: '#'
                        }, {
                            block: 'g-frame',
                            content: [
                                {
                                    block: 'g-item',
                                    content: [
                                        {
                                            block: 'g-heading',
                                            content: 'Обручальное кольцо из белого золота с 21 бриллиантом'
                                        }, {
                                            block: 'g-item-gallery',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    title: 'Фото',
                                                    current: 2,
                                                    count: 8
                                                }, {
                                                    elem: 'preview_images',
                                                    images: ['../../desktop.blocks/g-item-gallery/images/preview01.jpg',
                                                             '../../desktop.blocks/g-item-gallery/images/preview01.jpg',
                                                             '../../desktop.blocks/g-item-gallery/images/preview01.jpg',
                                                             '../../desktop.blocks/g-item-gallery/images/preview01.jpg']
                                                }, {
                                                    elem: 'main_image',
                                                    image: '../../desktop.blocks/g-item-gallery/images/main02.jpg'
                                                }
                                            ]
                                        }, {
                                            block: 'g-right-col',
                                            content: [
                                                {
                                                    block: 'g-item-buy-in-shop',
                                                    store: 'Центрювелирторг',
                                                    url: '#',
                                                    price: 6169
                                                }, {
                                                    block: 'g-button',
                                                    mods: { type: 'gray' },
                                                    content: 'Подробнее'
                                                }, {
                                                    block: 'g-item-features',
                                                    content: {
                                                        'Артикул': '51235654',
                                                        'Металл': 'Белое золото',
                                                        'Проба': '585',
                                                        'Камень': '21 бриллиант',
                                                        'Карат': '0,07'
                                                    }
                                                }, {
                                                    block: 'g-like',
                                                    mods: { type: 'extended' }
                                                }, {
                                                    block: 'yashare',
                                                    quickServices : [
                                                        'vkontakte',
                                                        'facebook',
                                                        'twitter',
                                                        'odnoklassniki'
                                                    ],
                                                    theme : 'counter',
                                                    l10n : 'ru',
                                                    url : 'localhost:8080/desctop.bundles/item/item.html',
                                                    title : 'BEM Social Components Library',
                                                    description : 'Fork me on GitHub',
                                                    image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                                                            'master/desktop.bundles/index/blocks/page/image/bem.png'
                                                }
                                            ]
                                        }, {
                                            block: 'clear'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }, {
                    block: 'g-paginator',
                    totalPages: 7,
                    currentPage: 2,
                    type: 'rings',
                    url: '#'
                }
            ]
        },
        {
            block: 'clear'
        }, {
            block: 'g-footer',
            content: [

            ]
        }
    ]
})
