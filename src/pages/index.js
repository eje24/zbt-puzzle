import React, { useState } from "react";
import {Helmet} from "react-helmet";


export default function Home() {
  const [display, setDisplay] = useState(false)

  if(display){
    return (
      <div class="h-screen  bg-blue-200 flex justify-center flex-col items-center">
      <Helmet title="puzzle" defer={false} />
        <div>
          <p class="font-mono"> Congrats, you solved the puzzle! </p>
        </div>
        <button class="m-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-mono" onClick = {() => setDisplay(false)}>
        click to un-finish
        </button>
        <p class="font-mono"> jk that button doesn't do anything - feel free to send me a text on messenger to let me know though :D</p>
        <p class="text-right font-mono">  ~ Ezra </p>
      </div>
    )
  }
  else {
    return (
      <div class="h-screen  bg-blue-200 flex justify-center flex-col items-center">
      <Helmet title="puzzle" defer={false} />
        <div>
          <p class="font-mono"> Congrats, you solved the puzzle! </p>
        </div>
        <button class="m-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-mono" onClick = {() => setDisplay(true)}>
          click to finish
        </button>
      </div>
    )
  }

}
