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
        name: string
      }
    },
    {
      base_stat: number,
      stat: {
        name: string
      }
    },
    {
      base_stat: number,
      stat: {
        name: string
      }
    },
  ]
}