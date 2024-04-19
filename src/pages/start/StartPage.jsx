import WelcomeText from "src/components/WelcomText/WelcomText.jsx";
import cn from "classnames";
import {Button} from "@vkontakte/vkui";

import styles from './StartPage.module.css'


export default function StartPage() {
    return (
        <div className={cn(styles.StartPage)}>
            <WelcomeText />
            <button
                className={cn(styles.StartPage_Button)}
            >
                Начать игру
            </button>
        </div>
    )
}