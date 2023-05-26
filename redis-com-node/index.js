async function test() {
    const redis = require('redis');
    //para usar hospedado
    //const client = redis.createClient("redis://user:senha@servidor:porta");
    const client = redis.createClient();
    client.connect();

    client.on("error", (error) => {
        console.error(error);
    });

    // const result = await client.set("lastSearch", "cursos", "EX", 10);

    // const escrita = await client.set("lastSearch", "cursos", {
    //     "EX": 10
    // });

    // const escrita = await client.set("lastSearch", "cursos");
    // await client.expire('lastSearch', 10);
    
    const escrita = await client.setEx("lastSearch", 10 , "cursos");
    console.log(escrita);

    const leitura = await client.get("lastSearch");
    console.log(`lastSearch: ${leitura}`);
 
}   

test();


