import styles from "../Styles.module.css";

function AboutPage() {
  return (
    <div className={styles.about}>
      <h2 className={styles.about__header}>About</h2>
      <p className={styles.about__content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ullamcorper leo. Proin laoreet neque sit amet nibh tincidunt tempor. Donec vestibulum id velit nec consequat. Nulla quis pulvinar libero, sed rhoncus mi. Phasellus fermentum ut urna ut dictum. Proin maximus rutrum erat. Ut leo eros, hendrerit in turpis id, dignissim aliquet lorem.
      </p>
      <p className={styles.about__content}>
        Aenean fringilla felis ante, quis aliquam lacus luctus sit amet. Vestibulum massa metus, laoreet in orci ut, consectetur venenatis magna. Maecenas eget tellus in felis tristique congue. Quisque lacinia lectus nunc, at maximus turpis feugiat in. Cras scelerisque ligula quis enim molestie, sed tincidunt mauris ullamcorper. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut ante risus. Suspendisse placerat porttitor lacus. Quisque ut condimentum lorem, sed pulvinar magna. Morbi mi purus, imperdiet non sollicitudin eu, sollicitudin nec lectus. Pellentesque vestibulum sem sed suscipit tincidunt. Nulla efficitur urna semper blandit scelerisque. Etiam porta augue feugiat placerat blandit. Praesent nec elementum elit. Morbi commodo ligula vitae efficitur feugiat.
      </p>
      <p className={styles.about__content}>
        Pellentesque diam enim, ullamcorper a metus id, euismod luctus eros. Fusce eget erat quam. Nunc pharetra ornare erat vel gravida. Nunc faucibus suscipit enim a placerat. Nam a orci ut tortor bibendum vulputate quis ut sapien. Aliquam libero enim, efficitur id posuere nec, pulvinar a metus. Praesent aliquet vel quam sollicitudin consequat. Suspendisse non placerat dui. Mauris a sollicitudin quam. Aliquam faucibus turpis eget augue convallis porta. In congue euismod magna, sit amet ultrices elit gravida eu. Cras ultrices orci a purus tincidunt, quis pellentesque neque egestas. Pellentesque elementum dolor erat, et bibendum leo fermentum at.
      </p>
      <p className={styles.about__content}>
        Curabitur porttitor dolor nec lectus hendrerit, eget efficitur est ultricies. Sed gravida scelerisque suscipit. Etiam nec arcu non sem congue egestas eu nec quam. Nulla pretium tincidunt eros, in tempus tortor vulputate sit amet. Ut quis congue eros. Aliquam porta, nunc sed auctor scelerisque, tortor tortor suscipit eros, in vehicula ex augue a lectus. Proin faucibus lacus in felis ullamcorper, vel aliquet felis molestie. Nam vitae varius elit. In a leo lorem. Donec molestie laoreet fermentum. Praesent malesuada tempus tortor, et lobortis sem blandit et. Quisque sollicitudin nibh neque, non maximus justo eleifend eu. Morbi posuere est a libero bibendum fringilla. Sed laoreet accumsan aliquet. Sed et venenatis erat.
      </p>
    </div>
  );
}

export default AboutPage;