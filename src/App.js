import { useEffect, useState } from 'react';
import { AppStyled } from './styles';
import Button from './components/buttoncomponents';
import Container from './components/telacomponets/container';
import Div from './components/telacomponets/Div/indes';
import Imagen from './components/imagensComponents';
import H from './components/textComponents/hs';


function App() {

  const [namePokemon, setNamePokemon] = useState([])
  const [count, setCount] = useState(1)
  const [hp, setHp] = useState([])
  const [imagePokemon, setImagemPokemons] = useState([])
  const [abilitie1, setAbilitie1] = useState([])
  const [colorPokemon, setColorPokemon] = useState([])
  const [move, setMove] = useState([])
  const [power, setPower] = useState([])
  const [weight, setWeight] = useState([])
  const [id, setId] = useState([])
  const [height, setHeight] = useState([])


  const handleSub = () => {
    if(count < 2){
      setCount(151)
    }else{
      setCount(count - 1)
    }
  }

  const handleAdd = () => {
    if(count > 150){
      setCount(1)
    }else{
      setCount(count + 1)
      console.log(count)
    }  
  }

  
  useEffect(()=>{
    const pokemonData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      const data = await response.json()

      const name = (data.name)
      setNamePokemon(name)

      const hp = (data.stats[0].base_stat)
      setHp(hp)

      const image = (data.sprites.front_default)
      setImagemPokemons(image)

      const abilitie1 = (data.abilities[0].ability.name)
      setAbilitie1(abilitie1)

      const weight = (data.weight)
      setWeight(weight)

      const id = (data.id)
      setId(id)

      const height = (data.height)
      setHeight(height)




    const responseColor = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${count}`)
      const dataColor = await responseColor.json()
  
      const colorPokemon = (dataColor.color.name)
      setColorPokemon(colorPokemon)



      
      const responseMover = await fetch(`https://pokeapi.co/api/v2/move/${count}`)
        const dataMove = await responseMover.json()

        const movePokemon = (dataMove.name)
        setMove(movePokemon)
        
        const powerPokemon = (dataMove.power)
        setPower(powerPokemon)

    }
    pokemonData()
  },[count])


  


  return (
    
    <AppStyled>
      
      <div className='but'>
      <Button onClick={handleSub}>Anterior</Button>
      </div>

      <Container backgroundColor={"black"}>
        
        <Div 
          width="67vh" 
          height="40px"
          borderColor={colorPokemon} 
          backgroundColor={colorPokemon}
        >


          <Div 
            height='35px' 
            width='65vh'
          >
              <Div backgroundColor1='none'><H size="20px" color={colorPokemon} align="start">{namePokemon}</H></Div>
              <Div backgroundColor1='none'><H size="20px" color={colorPokemon} align="end">Base Stat {hp}</H></Div>
          </Div>
        </Div>

        <Div 
          width='66.1vh' 
          height='40vh' 
          backgroundColor1={colorPokemon}
          backgroundColor2="#fff"
          boderStyle='solid'
          borderColor="#000"
          gradient="linear-gradient">
            <Imagen src={imagePokemon}  backgroundColor1={colorPokemon}></Imagen>
        </Div>

        <Div
          width='66vh'
          height='220px'
          flexDirection="column"
          backgroundColor1="#fff"
          backgroundColor2={colorPokemon}
          gradient="radial-gradient"
          boderStyle='solid'
          borderColor='#000'
        >
          <Div 
            width='65vh' 
            height='50px'
            marginTop='10px'
            backgroundColor1='none'
            backgroundColor2='none'
            > 
              <H size="12px" align="end">Ability</H>
              <H size="12px" align="start">{abilitie1}</H>     
          </Div>


          <Div 
            height='90px'
            backgroundColor1='none'
            backgroundColor2='none'
            >

            <H size="25PX" align="center" >{move}<H align="center" size="30PX">{power}</H> </H>
                  
          </Div>

          <Div
            width='65vh'
            backgroundColor1='none'
            backgroundColor2='none'
            justifyContent='spece-between'
          >
              <H size="15px" align="center">weight <H size="15px">{weight}</H></H>
              <H size="15px" align="center">height<H size="15px">{height}</H></H>  
          </Div>
        </Div>
        
        
      

      </Container>
      <div className='but'>
        <Button onClick={handleAdd}>Próximo</Button>
      </div>
    </AppStyled>
  );
}

export default App;
