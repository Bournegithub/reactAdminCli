const menus = [
    {path: '/home', name:'home', icon: 'bars'},
    {path: '/list', name:'list', icon: 'bars'},
    {path: '/detail:id', name:'detail', icon: 'bars'},
    {
        path: '/level',
        name:'level',
        icon: 'bars',
        children: [
            {
                path: '/level/sublevel1',
                name: 'sublevel1',
                icon: 'bars'
            },
            {
                path: '/level/sublevel2',
                name: 'sublevel2',
                icon: 'bars'
            },
        ]
    },
    // {
    //     path: '/aaaa',
    //     name:'aaaa',
    //     icon: 'bars',
    //     children: [
    //         {
    //             path: '/aaaa/aaa1',
    //             name: 'aaa1',
    //             icon: 'bars'
    //         },
    //         {
    //             path: '/aaaa/aaa2',
    //             name: 'aaa2',
    //             icon: 'bars'
    //         },
    //     ]
    // }
];
export default menus;