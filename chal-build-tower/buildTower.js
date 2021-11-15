function towerBuilder(nFloors) {
    const tower = []
    let towerString = '*'
      for(let i = 0; i<nFloors; i++){ 
        tower.push(towerString)
        towerString += "**"
        for (let j = 0; j<i; j++){
          tower[j] = " " + tower[j] + ' '
        }
      }
      return tower
    }

    console.log(towerBuilder(10));