import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Center,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { useEffect, useState } from "react"

const POKE_API_URL = "https://pokeapi.co/api/v2";
const KANTO_POKEMONS_URL = `${POKE_API_URL}/pokemon?limit=151`;

export const App = () => (

  const [pokemons, setPokemons] = useState<any[]>([]);

  const fetchOnePokemonMetaData = async (url: string) => {
    return (await fetch(url)).json();
  };

  const getPokemons = React.useCallback(async () => {
    const response = await (await fetch(KANTO_POKEMONS_URL)).json();

    const tmp = [];

    for (const { url } of response.results){
      const pokemon = await fetchOnePokemonMetaData(url);
      tmp.push(pokemon);
    }

    setPokemons(tmp);
  }, []);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  console.log(pokemons);

  <ChakraProvider theme={theme}>
    <Center>
      <Box>
        
      </Box>
    </Center>
  </ChakraProvider>
)
