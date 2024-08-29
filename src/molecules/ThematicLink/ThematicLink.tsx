import { ChevronRightIcon } from "@radix-ui/react-icons";
import Button from "../../atoms/Button";
import styles from './styles.module.scss';

function ThematicLink() {
    return (
        <Button.Root className={styles.container}>
            <Button.Icon><ChevronRightIcon /></Button.Icon>
        </Button.Root>
    )
}

export default ThematicLink;
