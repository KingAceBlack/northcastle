/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'


// Define the player object
let player = {
  name: 'player',
  life: 2,
 
};

// Define the enemy object
let enemy1 = {
  name: 'Enemy 1',
  life: 2,
};

// Define the enemy object
let rng = {
  name: 'rng',
  life: 2,
};



app.frame('/', (c) => {

player = { ...player, life: 2 };
enemy1 = { ...enemy1, life: 2 };

  return c.res({

    
    image : 'https://gateway.pinata.cloud/ipfs/QmY81fgB1kSiyQDQLmUEbmRvAwsvntYyiLascgrZgTDnpp',
  
    
    intents: [
     
      <Button action="/fight">Defend the North !</Button>,
     
    ],
  }) 

});



app.frame('/fight', (c) => {
  enemy1 = { ...enemy1, life: 2 };

  return c.res({
    
    image : 'https://gateway.pinata.cloud/ipfs/QmXVt6bLdj5bkDGVUFWstpfxFmF9m5HhV5qDCXQRMpZCNB',
    
    intents: [
     
      <Button action="/fightbegins">Attack South !</Button>,
     
     
    ],
  })
});

app.frame('/fightbegins', (c) => {
  
  return c.res({
    
    image : 'https://gateway.pinata.cloud/ipfs/QmbXr2xfoFDBove5XfErZWLVZUCGCNj1oDL6KSf2tfQP11',
    
    intents: [
     
      <Button action="/resolverock">ROCK</Button>,<Button action="/resolvepaper">PAPER</Button>,
      <Button action="/resolvescissor">SCISSORS</Button>,
     
    ],
  })
});


app.frame('/resolverock', (c) => {
  let image;
  let intents;

  if (player.life === 0) {
    // Player loses, game over
    image = 'https://gateway.pinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
    intents = [<Button action="/">Restart</Button>];

  } else if (enemy1.life === 0) {
    //player won
    image = 'https://gateway.pinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
    intents = [<Button action="/fight">Continue</Button>];
    console.log("yah")
       
  } else {

          let randomNum;
          if (rng.life > 0) {
            randomNum = Math.floor(Math.random() * 5);
            rng.life -= 2;
          } else {
            randomNum = Math.floor(Math.random() * 2);
          }


            if (randomNum === 0) {
              // Player is hit by paper
                player.life -= 1;
                rng.life += 1;

                if (player.life > 0) {
                  // Set image and intents for when player is hit by paper
                  image = 'https://gateway.pinata.cloud/ipfs/Qmaf4ZFqVmJfXwA7uacAJJpc3JmmggGpmH7XDKfPncSp8q';
                  intents = [<Button action="/fightbegins">Continue</Button>];
                } else {
                  image = 'https://gateway.pinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
                  intents = [<Button action="/">Restart</Button>];

                }
            
            } else {
              // Player wins, enemy selects scissors

              if (player.life > 1) {

                enemy1.life -= 1;

                if (enemy1.life > 0) {
                  // Set image and intents for when enemy1 is hit by rock
                  image = 'https://gateway.pinata.cloud/ipfs/QmZqgK2g53dYk21ba1gkFuRTBDqAZNEBfxgo1bhqAmg2YW';
                  intents = [<Button action="/fightbegins">Continue</Button>];

                } else {
                  //victory
                  image = 'https://gateway.pinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                  intents = [<Button action="/fight">Continue</Button>];

                }

                

              } else {

                enemy1.life -= 1;
                if (enemy1.life > 0) {
                  // Set image and intents for when enemy1 is hit by rock
                  image = 'https://gateway.pinata.cloud/ipfs/QmdgkKLMXgJjainH8eFPp3mugdbNDEkV9pZm6osyuomnhC';
                  intents = [<Button action="/fightbegins">Continue</Button>];

                } else {
                  //victory
                  image = 'https://gateway.pinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                  intents = [<Button action="/fight">Continue</Button>];

                }

              }
              
            }

    
  }

  return c.res({
    image: image,
    intents: intents
  });
});



app.frame('/resolvepaper', (c) => {
  let image;
  let intents;

  if (player.life === 0) {
    // Player loses, game over
    image = 'https://gateway.pinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
    intents = [<Button action="/">Restart</Button>];

  } else if (enemy1.life === 0) {
    //player won
    image = 'https://gateway.pinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
    intents = [<Button action="/fight">Continue</Button>];
    
       
  } else {

          let randomNum;
          if (rng.life > 0) {
            randomNum = Math.floor(Math.random() * 5);
            rng.life -= 2;
          } else {
            randomNum = Math.floor(Math.random() * 2);
          }


            if (randomNum === 0) {
              // Player is hit by scissors
                player.life -= 1;
                rng.life += 1;

                if (player.life > 0) {
                  // Set image and intents for when player is hit by scissors
                  image = 'https://gateway.pinata.cloud/ipfs/QmeWVdZctkS5jQ4nkz4EYooHSGaBGVX1SNzPsrmbJidgQf';
                  intents = [<Button action="/fightbegins">Continue</Button>];
                } else {
                  image = 'https://gateway.pinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
                  intents = [<Button action="/">Restart</Button>];

                }
            
            } else {
              // Player wins, enemy selects rock

              if (player.life > 1) {

                enemy1.life -= 1;

                if (enemy1.life > 0) {
                  // Set image and intents for when enemy1 is hit by rock
                  image = 'https://gateway.pinata.cloud/ipfs/QmYrKasy5NQb4WUnuTxqf7BAd8pFvVwxMYv9eFxJzNi84o';
                  intents = [<Button action="/fightbegins">Continue</Button>];

                } else {
                  //victory
                  image = 'https://gateway.pinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                  intents = [<Button action="/fight">Continue</Button>];

                }

                

              } else {

                enemy1.life -= 1;
                if (enemy1.life > 0) {
                  // Set image and intents for when enemy1 is hit by rock
                  image = 'https://gateway.pinata.cloud/ipfs/QmZk9Eguqo9ozKvCFaauUPiA6haJmufntjY979Lhm4Anxo';
                  intents = [<Button action="/fightbegins">Continue</Button>];

                } else {
                  //victory
                  image = 'https://gateway.pinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                  intents = [<Button action="/fight">Continue</Button>];

                }

              }
              
            }

    
  }

  return c.res({
    image: image,
    intents: intents
  });
});






app.frame('/resolvescissor', (c) => {
  let image;
  let intents;

  if (player.life === 0) {
    // Player loses, game over
    image = 'https://gateway.pinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
    intents = [<Button action="/">Restart</Button>];

  } else if (enemy1.life === 0) {
    //player won
    image = 'https://gateway.pinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
    intents = [<Button action="/fight">Continue</Button>];
    console.log("yah")
       
  } else {

          let randomNum;
          if (rng.life > 0) {
            randomNum = Math.floor(Math.random() * 5);
            rng.life -= 2;
          } else {
            randomNum = Math.floor(Math.random() * 2);
          }


            if (randomNum === 0) {
              // Player is hit by rock
                player.life -= 1;
                rng.life += 1;

                if (player.life > 0) {
                  // Set image and intents for when player is hit by rock
                  image = 'https://gateway.pinata.cloud/ipfs/QmWvT9RbPrCeLA6ZbaxVpEwNUaMzfg4qBcbJNqAjA2PVJ9';
                  intents = [<Button action="/fightbegins">Continue</Button>];
                } else {
                  image = 'https://gateway.pinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
                  intents = [<Button action="/">Restart</Button>];

                }
            
            } else {
              // Player wins, enemy selects paper

              if (player.life > 1) {

                enemy1.life -= 1;

                if (enemy1.life > 0) {
                  // Set image and intents for when enemy1 is hit by scissors
                  image = 'https://gateway.pinata.cloud/ipfs/QmZSER72V28Ww7QPbGVAqtHDwcsdgJgj8nva9NrmgiJkzf';
                  intents = [<Button action="/fightbegins">Continue</Button>];

                } else {
                  //victory
                  image = 'https://gateway.pinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                  intents = [<Button action="/fight">Continue</Button>];

                }

                

              } else {

                enemy1.life -= 1;
                if (enemy1.life > 0) {
                  // Set image and intents for when enemy1 is hit by scissors
                  image = 'https://gateway.pinata.cloud/ipfs/QmZm1oCN5UCQo2nNBJYZwiAbhnN39odDgXPpHCAg9feQoy';
                  intents = [<Button action="/fightbegins">Continue</Button>];

                } else {
                  //victory
                  image = 'https://gateway.pinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                  intents = [<Button action="/fight">Continue</Button>];

                }

              }
              
            }

    
  }

  return c.res({
    image: image,
    intents: intents
  });
});




/*app.frame('/resolverock', (c) => {
  let image;
  let intents;

  if (player.life > 0) {
    const randomNum = 0 //Math.floor(Math.random() * 2);


    if (randomNum === 0) {
      // Player is hit by paper
      enemy1.life -= 1;

      // Set image and intents for when player is hit by paper
      image = (
        <div
          style={{
            alignItems: 'center',
            backgroundImage: 'url(https://gateway.pinata.cloud/ipfs/QmPUdzPQAE71i9MemDToNwX51FvQMuMSxu755TSdjPLuA6)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            height: '100%',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
            color: '#E1A411',
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 0,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
         
          
        </div>
      );
      intents = [<Button action="/">Restart</Button>];
      
    } else {
      // Player wins, enemy selects scissors
      image = 'https://gateway.pinata.cloud/ipfs/QmYBbFFt2W23UC88aEejAPcHaC4PfKbTkyzZamu5qRBo3j';
      intents = [<Button action="/">Restart</Button>];
    }
  } else {
    // Player loses, game over
    image = 'https://gateway.pinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
    intents = [<Button action="/">Restart</Button>];
  }

  return c.res({
    image: image,
    intents: intents
  });
});*/









devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
