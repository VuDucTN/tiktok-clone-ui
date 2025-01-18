import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import {
    CoinIcon,
    FeedbackIcon,
    InboxIcon,
    LanguageIcon,
    LogoutIcon,
    ModeIcon,
    PlusIcon,
    ProfileIcon,
    SettingIcon,
    TickIcon,
    ToolIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng việt' },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <ModeIcon />,
        title: 'Dark mode',
        children: {
            title: 'Dark mode',
            data: [
                { type: 'mode', code: 'device', icon: <TickIcon />, title: 'Use device theme' },
                { type: 'mode', code: 'dark', title: 'Dark mode' },
                { type: 'mode', code: 'light', title: 'Light mode' },
            ],
        },
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'View profile',
            to: '/@user',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <ToolIcon />,
            title: 'Creator tools',
            children: {
                title: 'Creator tools',
                data: [{ type: 'mode', code: 'device', icon: <TickIcon />, title: 'Use device theme', separate: true }],
            },
        },
        {
            icon: <SettingIcon />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="logo" />
                    </Link>
                </div>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<PlusIcon />} className={cx('upload-btn')}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7321829345096876033.jpeg?lk3s=a5d48078&nonce=42630&refresh_token=7ed893a2a0d290633c07e9d3534be7d6&x-expires=1736913600&x-signature=oUC4Q%2Fpgtub3tRIv9zfW%2BdzYboc%3D&shp=a5d48078&shcp=81f88b70"
                                alt="userAvatar"
                                fallback={images.noUser}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
