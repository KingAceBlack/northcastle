/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'



const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  //imageAspectRatio: '1:1',  // Semicolon added here
  title: 'NorthCastle',
  // Optional: Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })

  /*hub: {
    apiUrl: "https://hubs.airstack.xyz",
    fetchOptions: {
      headers: {
        "x-airstack-hubs": "1ed04817ce38544baa09be36b303ba65c",
      }
    }
  }*/

})





// Define the player object
let player = {
  name: 'player',
  life: 3,
  points: 0,
 
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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type FarcasterID = string;
type playerScore = number;

let farcasterid: FarcasterID = '1';
let playerscore: playerScore = 0;




interface DataItem {
  fid: string;
  score: number;

  // Add other properties if there are any
}


async function addData(farcasterid: FarcasterID, playerscore: playerScore) {
  const url = 'https://gpzytjchmkcglwzkxcrc.supabase.co/rest/v1/farcastleFrame'; // Ensure this is the correct endpoint

  const data = {
    fid: farcasterid,
    score: playerscore,

  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdwenl0amNobWtjZ2x3emt4Y3JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NDEyNzMsImV4cCI6MjAyMzUxNzI3M30.pX9wyf_-ctCHCk0cz-gpsEg9HP-mer9A3_1m-DjSOvA', // Replace 'your_api_key_here' with your actual API key
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdwenl0amNobWtjZ2x3emt4Y3JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NDEyNzMsImV4cCI6MjAyMzUxNzI3M30.pX9wyf_-ctCHCk0cz-gpsEg9HP-mer9A3_1m-DjSOvA' // Replace 'your_token_here' with your actual token
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to update data');
    }

    const responseText = await response.text();
    const responseData = responseText ? JSON.parse(responseText) : null;

    console.log('Data updated successfully:', responseData);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error updating data:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}


 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




app.frame('/', (c) => {
    let image;
    let intents;
    player = { ...player, life: 30 };
    enemy1 = { ...enemy1, life: 2 };
    //addData(farcasterid, playerscore);
        
        image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmY81fgB1kSiyQDQLmUEbmRvAwsvntYyiLascgrZgTDnpp';
        
        intents = [
           
            <Button action="/start">PLAY</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});




app.frame('/start', (c) => {
    let image;
    let intents;
    player = { ...player, life: 30 };
    enemy1 = { ...enemy1, life: 2 };
    //addData(farcasterid, playerscore);
        
        image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmPDQdck1Da5BF335uh4uLHbgZwh652qpdhcFxBRdD9i1x/intro.jpg';
        
        intents = [
           
            <Button action="/NorthChoice">North</Button>,
            <Button action="/southChoice1">South</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});


app.frame('/NorthChoice', (c) => {
    let image;
    let intents;
    player = { ...player, life: 30 };
    enemy1 = { ...enemy1, life: 2 };
    //addData(farcasterid, playerscore);
        
        image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmPDQdck1Da5BF335uh4uLHbgZwh652qpdhcFxBRdD9i1x/introNorth.jpg';
        
        intents = [
           
            <Button action="/fight">Defend the North</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});




app.frame('/southChoice1', (c) => {
    let image;
    let intents;
    player = { ...player, life: 30 };
    enemy1 = { ...enemy1, life: 2 };
    //addData(farcasterid, playerscore);
        
        image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmPDQdck1Da5BF335uh4uLHbgZwh652qpdhcFxBRdD9i1x/introSouth1.jpg';
        
        intents = [
           
            <Button action="/NorthChoice">Okay, North</Button>,
            <Button action="/southChoice2">South</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});



app.frame('/southChoice2', (c) => {
    let image;
    let intents;
    player = { ...player, life: 30 };
    enemy1 = { ...enemy1, life: 2 };
    //addData(farcasterid, playerscore);
        
        image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmPDQdck1Da5BF335uh4uLHbgZwh652qpdhcFxBRdD9i1x/introSouth3.jpg';
        
        intents = [
           
            <Button action="/fight">Continue</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});














app.frame('/fight', (c) => {

  enemy1 = { ...enemy1, life: 2 };
    let image;
    let intents;

    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmXVt6bLdj5bkDGVUFWstpfxFmF9m5HhV5qDCXQRMpZCNB';
    
    intents = [
     
      <Button action="/fightbegins">Attack !</Button>,
     
     
    ];

  return c.res({

    image: image,
    intents: intents

  })
});



app.frame('/fightbegins', (c) => {


    let image;
    let intents;
    const enemyType = Math.floor(Math.random() * 3);


    if (enemyType < 2) {

    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmTwxemYPwUAanvCfCcexRZq26suHFohVXj2cgpfdMXWR8/base2fast.gif';
    intents = [
     
      <Button action="/resolverock2">ROCK</Button>,<Button action="/resolvepaper2">PAPER</Button>,
      <Button action="/resolvescissor2">SCISSORS</Button>,
     
     
    ];

    }else {

    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmbXr2xfoFDBove5XfErZWLVZUCGCNj1oDL6KSf2tfQP11';
    intents = [
     
      <Button action="/resolverock">ROCK</Button>,<Button action="/resolvepaper">PAPER</Button>,
      <Button action="/resolvescissor">SCISSORS</Button>,
     
     
    ];

    }
    

  return c.res({

    image: image,
    intents: intents

  })

});


app.frame('/fightbegins2', (c) => {


    let image;
    let intents;



    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmTwxemYPwUAanvCfCcexRZq26suHFohVXj2cgpfdMXWR8/base2fast.gif';
    intents = [
     
      <Button action="/resolverock2">ROCK</Button>,<Button action="/resolvepaper2">PAPER</Button>,
      <Button action="/resolvescissor2">SCISSORS</Button>,
     
     
    ];
    

  return c.res({

    image: image,
    intents: intents

  })

});



app.frame('/fightbegins1', (c) => {


    let image;
    let intents;



    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmbXr2xfoFDBove5XfErZWLVZUCGCNj1oDL6KSf2tfQP11';
    intents = [
     
      <Button action="/resolverock">ROCK</Button>,<Button action="/resolvepaper">PAPER</Button>,
      <Button action="/resolvescissor">SCISSORS</Button>,
     
     
    ];
    

  return c.res({

    image: image,
    intents: intents

  })

});




app.frame('/fightCont', (c) => {

    enemy1 = { ...enemy1, life: 2 };
    let image;
    let intents;
    player.points += 1;
    console.log(player.points)

    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmXVt6bLdj5bkDGVUFWstpfxFmF9m5HhV5qDCXQRMpZCNB';
    
    intents = [
     
      <Button action="/fightbegins">Attack !</Button>,
     
     
    ];

  return c.res({

    image: image,
    intents: intents

  })
});





const baseUrl = "https://warpcast.com/~/compose";
const text = "Check out /lorecaster for more fun games";
const embedUrls = [];
embedUrls.push('https://northcastle-hackathon.vercel.app/api/startAfresh');




app.frame('/startAfresh', (c) => {
  let image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmP7NBeeCwYYMUdgSDxocTRPug2xfikrMeiYcd76qjHf92';
  
  const SHARE_BY_USER = `${baseUrl}?text=${encodeURIComponent(text)}&embeds[]=${encodeURIComponent(embedUrls[0])}`;    

  const intents = [
    <Button.Link href={SHARE_BY_USER}>Share</Button.Link>,
    <Button action="/">Restart</Button>,
  ];

  return c.res({
    image: image,
    intents: intents,
  });
});







app.frame('/resolverock', (c) => {
  let image;
  let intents;

  if (player.life === 0) {
    // Player loses, game over
    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
    intents = [<Button action="/">Restart</Button>];

  } else if (enemy1.life === 0) {
    //player won
    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
    intents = [<Button action="/fightCont">Continue</Button>];
    
       
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
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/Qmaf4ZFqVmJfXwA7uacAJJpc3JmmggGpmH7XDKfPncSp8q';
                  intents = [<Button action="/fightbegins1">Continue</Button>];
                } else {
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
                  intents = [<Button action="/">Restart</Button>];

                }
            
            } else {
              // Player wins, enemy selects scissors

              if (player.life > 1) {

                    enemy1.life -= 1;

                    if (enemy1.life > 0) {
                      // Set image and intents for when enemy1 is hit by rock
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmZqgK2g53dYk21ba1gkFuRTBDqAZNEBfxgo1bhqAmg2YW';
                      intents = [<Button action="/fightbegins1">Continue</Button>];

                    } else {
                      //victory
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                      intents = [<Button action="/fightCont">Continue</Button>];

                    }

                

              } else {

                    enemy1.life -= 1;
                    if (enemy1.life > 0) {
                      // Set image and intents for when enemy1 is hit by rock
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmdgkKLMXgJjainH8eFPp3mugdbNDEkV9pZm6osyuomnhC';
                      intents = [<Button action="/fightbegins1">Continue</Button>];

                    } else {
                      //victory
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                      intents = [<Button action="/fightCont">Continue</Button>];

                    }

              }
              
            }
    
  }

  return c.res({
    image: image,
    intents: intents
  });
});



app.frame('/resolverock2', (c) => {
  let image;
  let intents;

  if (player.life === 0) {
    // Player loses, game over
    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
    intents = [<Button action="/">Restart</Button>];

  } else if (enemy1.life === 0) {
    //player won
    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
    intents = [<Button action="/fightCont">Continue</Button>];
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
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmTwxemYPwUAanvCfCcexRZq26suHFohVXj2cgpfdMXWR8/enemyPaperAttack.gif';
                  intents = [<Button action="/fightbegins2">Continue</Button>];

                } else {

                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
                  intents = [<Button action="/">Restart</Button>];

                }
            
            } else {
              // Player wins, enemy selects scissors

              if (player.life > 1) {

                    enemy1.life -= 1;

                    if (enemy1.life > 0) {
                      // Set image and intents for when enemy1 is hit by rock
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmTwxemYPwUAanvCfCcexRZq26suHFohVXj2cgpfdMXWR8/playerScissorsAttack.gif';
                      intents = [<Button action="/fightbegins2">Continue</Button>];

                    } else {
                      //victory
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                      intents = [<Button action="/fightCont">Continue</Button>];

                    }

                

              } else {

                    enemy1.life -= 1;
                    if (enemy1.life > 0) {
                      // Set image and intents for when enemy1 is hit by rock
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmTwxemYPwUAanvCfCcexRZq26suHFohVXj2cgpfdMXWR8/playerScissorsAttack.gif';
                      intents = [<Button action="/fightbegins2">Continue</Button>];

                    } else {
                      //victory
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                      intents = [<Button action="/fightCont">Continue</Button>];

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
    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
    intents = [<Button action="/">Restart</Button>];

  } else if (enemy1.life === 0) {
    //player won
    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
    intents = [<Button action="/fightCont">Continue</Button>];
    
       
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
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmeWVdZctkS5jQ4nkz4EYooHSGaBGVX1SNzPsrmbJidgQf';
                  intents = [<Button action="/fightbegins1">Continue</Button>];
                } else {
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
                  intents = [<Button action="/">Restart</Button>];

                }
            
            } else {
              // Player wins, enemy selects rock

              if (player.life > 1) {

                enemy1.life -= 1;

                if (enemy1.life > 0) {
                  // Set image and intents for when enemy1 is hit by rock
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYrKasy5NQb4WUnuTxqf7BAd8pFvVwxMYv9eFxJzNi84o';
                  intents = [<Button action="/fightbegins1">Continue</Button>];

                } else {
                  //victory
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                  intents = [<Button action="/fightCont">Continue</Button>];

                }

                

              } else {

                enemy1.life -= 1;
                if (enemy1.life > 0) {
                  // Set image and intents for when enemy1 is hit by rock
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmZk9Eguqo9ozKvCFaauUPiA6haJmufntjY979Lhm4Anxo';
                  intents = [<Button action="/fightbegins1">Continue</Button>];

                } else {
                  //victory
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                  intents = [<Button action="/fightCont">Continue</Button>];

                }

              }
              
            }

    
  }

  return c.res({
    image: image,
    intents: intents
  });
});



app.frame('/resolvepaper2', (c) => {
  let image;
  let intents;

  if (player.life === 0) {
    // Player loses, game over
    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
    intents = [<Button action="/">Restart</Button>];

  } else if (enemy1.life === 0) {
    //player won
    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
    intents = [<Button action="/fightCont">Continue</Button>];
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
              // Player is hit by scissors
                player.life -= 1;
                rng.life += 1;

                if (player.life > 0) {
                  // Set image and intents for when player is hit by scissors
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmTwxemYPwUAanvCfCcexRZq26suHFohVXj2cgpfdMXWR8/enemyScissorsAttack.gif';
                  intents = [<Button action="/fightbegins2">Continue</Button>];

                } else {
                  
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
                  intents = [<Button action="/">Restart</Button>];

                }
            
            } else {
              // Player wins, enemy selects rock

              if (player.life > 1) {

                    enemy1.life -= 1;

                    if (enemy1.life > 0) {
                      // Set image and intents for when enemy1 is hit by rock
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmTwxemYPwUAanvCfCcexRZq26suHFohVXj2cgpfdMXWR8/playerRockAttack.gif';
                      intents = [<Button action="/fightbegins2">Continue</Button>];

                    } else {
                      //victory
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                      intents = [<Button action="/fightCont">Continue</Button>];

                    }

                

              } else {

                    enemy1.life -= 1;
                    if (enemy1.life > 0) {
                      // Set image and intents for when enemy1 is hit by rock
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmTwxemYPwUAanvCfCcexRZq26suHFohVXj2cgpfdMXWR8/playerRockAttack.gif';
                      intents = [<Button action="/fightbegins2">Continue</Button>];

                    } else {
                      //victory
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                      intents = [<Button action="/fightCont">Continue</Button>];

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
    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
    intents = [<Button action="/">Restart</Button>];

  } else if (enemy1.life === 0) {
    //player won
    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
    intents = [<Button action="/fightCont">Continue</Button>];
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
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmWvT9RbPrCeLA6ZbaxVpEwNUaMzfg4qBcbJNqAjA2PVJ9';
                  intents = [<Button action="/fightbegins1">Continue</Button>];
                } else {
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
                  intents = [<Button action="/">Restart</Button>];

                }
            
            } else {
              // Player wins, enemy selects paper

              if (player.life > 1) {

                enemy1.life -= 1;

                if (enemy1.life > 0) {
                  // Set image and intents for when enemy1 is hit by scissors
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmZSER72V28Ww7QPbGVAqtHDwcsdgJgj8nva9NrmgiJkzf';
                  intents = [<Button action="/fightbegins1">Continue</Button>];

                } else {
                  //victory
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                  intents = [<Button action="/fightCont">Continue</Button>];

                }

                

              } else {

                enemy1.life -= 1;
                if (enemy1.life > 0) {
                  // Set image and intents for when enemy1 is hit by scissors
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmZm1oCN5UCQo2nNBJYZwiAbhnN39odDgXPpHCAg9feQoy';
                  intents = [<Button action="/fightbegins1">Continue</Button>];

                } else {
                  //victory
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                  intents = [<Button action="/fightCont">Continue</Button>];

                }

              }
              
            }

    
  }

  return c.res({
    image: image,
    intents: intents
  });
});





app.frame('/resolvescissor2', (c) => {
  let image;
  let intents;

  if (player.life === 0) {
    // Player loses, game over
    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
    intents = [<Button action="/">Restart</Button>];

  } else if (enemy1.life === 0) {
    //player won
    image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
    intents = [<Button action="/fightCont">Continue</Button>];
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
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmTwxemYPwUAanvCfCcexRZq26suHFohVXj2cgpfdMXWR8/enemyRockAttack.gif';
                  intents = [<Button action="/fightbegins2">Continue</Button>];

                } else {
                  
                  image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmQD8znjBwDaKr5vHES7ewbk5ubcvsH3E38aX8m1SrPMsQ';
                  intents = [<Button action="/">Restart</Button>];

                }
            
            } else {
              // Player wins, enemy selects paper

              if (player.life > 1) {

                    enemy1.life -= 1;

                    if (enemy1.life > 0) {
                      // Set image and intents for when enemy1 is hit by scissors
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmTwxemYPwUAanvCfCcexRZq26suHFohVXj2cgpfdMXWR8/playerPaperAttack.gif';
                      intents = [<Button action="/fightbegins2">Continue</Button>];

                    } else {
                      //victory
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                      intents = [<Button action="/fightCont">Continue</Button>];

                    }

                

              } else {

                    enemy1.life -= 1;
                    if (enemy1.life > 0) {
                      // Set image and intents for when enemy1 is hit by scissors
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmTwxemYPwUAanvCfCcexRZq26suHFohVXj2cgpfdMXWR8/playerPaperAttack.gif';
                      intents = [<Button action="/fightbegins2">Continue</Button>];

                    } else {
                      //victory
                      image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYKf2ZEqz8HHotnqi6NPCnpkyFm9AnLGqwWeegJju4PD9';
                      intents = [<Button action="/fightCont">Continue</Button>];

                    }

              }
              
            }
    
  }

  return c.res({
    image: image,
    intents: intents
  });
});











devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
