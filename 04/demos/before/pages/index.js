function HomePage() {
  
  const ctsStyles = { 
    display: 'flex',
    justifyContent: 'space-around'
   };

  return (
    <div style={ctsStyles}>
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
          <button>Shop now</button>
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