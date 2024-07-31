import styles from './HomePage.module.scss'

function HomePage() {
  return (
    <div className={styles.cta}>
      <span>
        Image 1
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
          <button class="cta">Shop now</button>
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