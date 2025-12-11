interface Linkitem{
    title:string;
    icon:string;
    link:string;
}

export const links: Linkitem[] = [
    {
        title: 'หน้าหลัก',
        icon: 'fa-house-blank',
        link:'/home'
    },
    {
        title: 'เกี่ยวกับเรา',
        icon: 'fa-circle-info',
        link:'/about'
    },
    {
        title: 'เติมเครดิต',
        icon: 'fa-credit-card',
        link:'/payment'
    },
    {
        title: 'ประวัติการทำธุรกรรม',
        icon: 'fa-clock',
        link:'/history'
    }
]
