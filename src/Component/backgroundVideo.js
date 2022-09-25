import Ori from "../video/Ori_and_the_Blind_Forest.mp4";
import styles from "../css/background/MainBackground.module.css";

export default function BackgroundVideo(){
    return (
        <>
        <video
            autoPlay loop muted
            className={styles.background}
        >
            <source src={Ori} type="video/mp4"/>
        </video>
        </>
    )
}