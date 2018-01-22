export default {
  methods: {
    roll: function (dices) {
      const splittedDices = dices.split('+')
      const results = []
      for (const dice in splittedDices) {
        const splittedDice = splittedDices[dice].trim().split('d')
        if (splittedDice.length === 1) {
          results.push(parseInt(splittedDice[0]))
          continue
        }
        if (splittedDice.length === 2) {
          const n = parseInt(splittedDice[0])
          const v = parseInt(splittedDice[1])
          for (let i = 0; i < n; ++i) {
            results.push((Math.floor(Math.random() * v) + 1))
          }
          continue
        }
      }
      const total = results.reduce((p, c) => p + c, 0)
      return {
        rolls: results,
        total: total
      }
    },

    test: function (value, modifiers) {
      const units = this.roll('1d10')
      const tens = this.roll((1 + Math.abs(modifiers)) + 'd10')
      let ten = 0
      if (modifiers >= 0) {
        ten = Math.min(...tens.rolls.map(v => v === 10 ? 0 : v))
      } else {
        ten = Math.max(...tens.rolls.map(v => v === 10 ? 0 : v))
      }
      const result = ((ten !== 10) ? (ten * 10) : 0) + units.total
      let state = ''
      if (result === 1) {
        state = 'Succès Critique'
      } else if (result <= value / 5) {
        state = 'Succès Extrême'
      } else if (result <= value / 2) {
        state = 'Succès Majeur'
      } else if (result <= value) {
        state = 'Succès'
      } else if ((result === 100) || ((result >= 96) && (value <= 50))) {
        state = 'Echec Critique'
      } else {
        state = 'Echec'
      }
      return {
        target: value,
        dices: [units.rolls].concat(tens.rolls),
        modifiers: modifiers,
        roll: result,
        state: state
      }
    }
  }
}
