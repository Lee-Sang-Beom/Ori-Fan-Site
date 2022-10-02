import styles from "../css/forest/Forest.module.css";
import ScrollOut from "scroll-out";
import img_1 from "../img/1.jpg";
import { useEffect } from "react";

function Forest() {
  useEffect(() => {
    ScrollOut({});
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.site_wrap}>
        {/* 1 */}
        <div className={styles.image1}></div>
        <section data-scroll className={styles.content}>
          <div className={styles.box}>
            <div className={styles.left_box}>
              <img src={img_1} alt="img1" />
            </div>
            <div className={styles.right_box}>
              <h1>Scroll in down</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ut dolor nisl. Nunc hendrerit tempus tortor in imperdiet. Sed
                maximus neque non euismod lobortis. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Nunc a magna a ex vestibulum cursus eget vel libero. Aliquam
                mollis magna diam, et tempor ipsum finibus vitae. Aenean ac urna
                ornare, faucibus orci mattis, condimentum enim. Fusce porta est
                eget finibus placerat. Proin in sapien quis eros posuere
                volutpat ac id lacus. Pellentesque fringilla viverra mi, sed
                ultricies neque scelerisque id. Aenean lobortis pulvinar
                ultrices. Nunc tincidunt, tellus non iaculis varius, velit
                sapien mattis ex, quis rhoncus lacus urna vehicula quam.
              </p>
            </div>
          </div>
        </section>

        {/* 2 */}
        <div className={styles.image2}></div>
        <section data-scroll className={styles.content}>
          <div className={styles.box}>
            <div className={styles.left_box}>
              <img src={img_1} alt="img1" />
            </div>
            <div className={styles.right_box}>
              <h1>Scroll in down</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ut dolor nisl. Nunc hendrerit tempus tortor in imperdiet. Sed
                maximus neque non euismod lobortis. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Nunc a magna a ex vestibulum cursus eget vel libero. Aliquam
                mollis magna diam, et tempor ipsum finibus vitae. Aenean ac urna
                ornare, faucibus orci mattis, condimentum enim. Fusce porta est
                eget finibus placerat. Proin in sapien quis eros posuere
                volutpat ac id lacus. Pellentesque fringilla viverra mi, sed
                ultricies neque scelerisque id. Aenean lobortis pulvinar
                ultrices. Nunc tincidunt, tellus non iaculis varius, velit
                sapien mattis ex, quis rhoncus lacus urna vehicula quam.
              </p>
            </div>
          </div>
        </section>

        {/* 3 */}
        <div className={styles.image3}></div>
        <section data-scroll className={styles.content}>
          <div className={styles.box}>
            <div className={styles.left_box}>
              <img src={img_1} alt="img1" />
            </div>
            <div className={styles.right_box}>
              <h1>Scroll in down</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ut dolor nisl. Nunc hendrerit tempus tortor in imperdiet. Sed
                maximus neque non euismod lobortis. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Nunc a magna a ex vestibulum cursus eget vel libero. Aliquam
                mollis magna diam, et tempor ipsum finibus vitae. Aenean ac urna
                ornare, faucibus orci mattis, condimentum enim. Fusce porta est
                eget finibus placerat. Proin in sapien quis eros posuere
                volutpat ac id lacus. Pellentesque fringilla viverra mi, sed
                ultricies neque scelerisque id. Aenean lobortis pulvinar
                ultrices. Nunc tincidunt, tellus non iaculis varius, velit
                sapien mattis ex, quis rhoncus lacus urna vehicula quam.
              </p>
            </div>
          </div>
        </section>

        {/* 4 */}
        <div className={styles.image4}></div>
        <section data-scroll className={styles.content}>
          <div className={styles.box}>
            <div className={styles.left_box}>
              <img src={img_1} alt="img1" />
            </div>
            <div className={styles.right_box}>
              <h1>Scroll in down</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ut dolor nisl. Nunc hendrerit tempus tortor in imperdiet. Sed
                maximus neque non euismod lobortis. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Nunc a magna a ex vestibulum cursus eget vel libero. Aliquam
                mollis magna diam, et tempor ipsum finibus vitae. Aenean ac urna
                ornare, faucibus orci mattis, condimentum enim. Fusce porta est
                eget finibus placerat. Proin in sapien quis eros posuere
                volutpat ac id lacus. Pellentesque fringilla viverra mi, sed
                ultricies neque scelerisque id. Aenean lobortis pulvinar
                ultrices. Nunc tincidunt, tellus non iaculis varius, velit
                sapien mattis ex, quis rhoncus lacus urna vehicula quam.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Forest;
