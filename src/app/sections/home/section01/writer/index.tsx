"use client"
import { useTypewriter } from "react-simple-typewriter";

const Writer = () => {
  const [text] = useTypewriter({
    words: ['Rápidos', 'Diferentes', 'Efetivos'],
    loop: true,
    delaySpeed: 3000,
    typeSpeed: 95,
    deleteSpeed: 30,
  })

  return (
    <div className="flex flex-row w-full justify-center items-center">
      <span className="text-white text-2xl xl:text-5xl font-bold py-3">
        <span className="text-ber-green">{'{ Somos: \''}</span>
        {text}
        <span className='text-white font-bold blinking animate-ping'>{'|'}</span>
        <span className="text-ber-green">{'\' }'}</span>
      </span>
    </div>
  )
};

export default Writer;
