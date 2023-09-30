import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = clsx(styles.wrapper, {
        [className]: className,
        [styles.primary]: primary,
        [styles.outline]: outline,
        [styles.rounded]: rounded,
        [styles.small]: small,
        [styles.large]: large,
        [styles.text]: text,
        [styles.disabled]: disabled,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={clsx(styles.icon)}>{leftIcon}</span>}
            <span className={clsx(styles.title)}>{children}</span>
            {rightIcon && <span className={clsx(styles.icon)}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
