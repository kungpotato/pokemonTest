const Helper = {
    isNull: (param) => {
      if (param === '' || param === null || param === undefined) {
        return true
      }
      return false
    },
    isEqual: (param1, param2) => {
      if (param1 === param2) {
        return true
      }
      return false
    },
    isLengthZero: (param) => {
      if (param.length === 0) {
        return true
      }
      return false
    },
    setHpLevel: (hp) => {
      if(hp > 100) {
        return 100
      }else if(hp < 0){
        return 0
      }
      return hp
    },
    arrayRemove: (arr, value) => arr.filter((ele => ele !== value))
  }
  
  export default Helper