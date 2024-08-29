import Button from "../../atoms/Button";
import PayconiqLogo from './logo.svg?react';
import styles from './styles.module.scss';

function Payconiq() {
    return (
        <Button.Root className={styles.button}>
            <Button.Icon size="lg">
                <PayconiqLogo />
            </Button.Icon>
            <Button.Text>
                Payconiq
            </Button.Text>
        </Button.Root>
    )
}

export default Payconiq;
