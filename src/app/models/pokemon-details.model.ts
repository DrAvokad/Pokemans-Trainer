export interface PokemonDetails {
  abilities: [
    {
      ability: {
        name: string
      }
    },
    {
      ability: {
        name: string
      }
    }
  ],
  stats: [
    {
      base_stat: number,
      stat: {
        name: "hp"
      }
    },
    {
      base_stat: number,
      stat: {
        name: "attack"
      }
    },
    {
      base_stat: number,
      stat: {
        name: "defense"
      }
    }
  ]
}