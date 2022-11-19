const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("imagenes/sadMeowth.jpg");
            const pokeNombres = document.getElementById("nombre");
            pokeNombres.innerHTML = "Busca otra vez";
            const pokeAbilities= document.getElementById("abilities");
            pokeAbilities.innerHTML = "NONE";
            const pokeTipos = document.getElementById("type");
            pokeTipos.innerHTML = "NONE";
        }
        else {
            return res.json();
        }
    })
    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeName = data.species;
        let pokeInfo = data.abilities;
        let pokeType = data.types;
        
        pokeImage(pokeImg);
        pokeNombre(pokeName);
        pokeData(pokeInfo);
        pokeTipo(pokeType);
        
        console.log(pokeImg);
    }    
};

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
};

const pokeNombre = (species) => {
    const pokeNombres = document.getElementById("nombre");
    pokeNombres.innerHTML = species.name;
};

const pokeData = (abilities) => {
    const pokeAbilities= document.getElementById("abilities");
    const abilitiesName = abilities.map((item) => item.ability.name);
    pokeAbilities.innerHTML = "Habilidades: " + abilitiesName;
};

const pokeTipo = (types) => {
    const pokeTipos = document.getElementById("type");
    const tiposName = types.map((item) => item.type.name);
    pokeTipos.innerHTML = "Tipo: " + tiposName;
};



