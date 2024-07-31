import styles from './HomePage.module.scss'
import Image from  'next/Image'

function HomePage() {
  return (
    <div className={styles.cta}>
      <span>
        <Image width="200" height="200" src="/images/albums/sunset-divide/divinity.png" />
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
  )
}

export default HomePage