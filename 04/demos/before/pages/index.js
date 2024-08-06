import styles from './HomePage.module.scss'
import Image from  'next/Image'
import heroBanner from '../public/images/hero-banner.png'
import soundwaves from '../public/images/soundwaves-small.jpg'

function HomePage() {
  return (
    <>
      <div className={styles.heroImage}>
        <Image src={heroBanner} layout='fill' objectFit='cover' />
      </div>
      <div className={styles.cta}>
        <span>
          <Image layout='fixed' width="200" height="200" src="/images/albums/sunset-divide/divinity.png" />
        </span>
        <span>
          Image 2
        </span>
        <div>
            <div>
              Your artis name
            </div>
            <div>
              <div>Album desings</div>
            </div>
            <button className="cta">Shop now</button>
        </div>
        <span>
          Image 3
        </span>
        <span>
          Image 4
        </span>
      </div>
      <div className={styles.soundwaves}>
        <Image src={soundwaves} layout='responsive' objectFit='cover' />
      </div>
    </>
  )
}

export default HomePage