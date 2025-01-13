import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7321829345096876033.jpeg?lk3s=a5d48078&nonce=42630&refresh_token=7ed893a2a0d290633c07e9d3534be7d6&x-expires=1736913600&x-signature=oUC4Q%2Fpgtub3tRIv9zfW%2BdzYboc%3D&shp=a5d48078&shcp=81f88b70"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('usename')}>nguyenvana</p>
            </div>
        </div>
    );
}

export default AccountItem;
