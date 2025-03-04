import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero',
  description: 'Aprendendo Next JS do zero com o sujeito Programador',
  openGraph:{
    title: 'Descomplicando o Next JS com Sujeito Programador ',
    description: 'Aprendendo Next JS do zero com o sujeito Programador',
    images: ['https://sujeitoprogramador.com/steve.png'],
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export const revalidate = 60;

export default function Home() {

  const randomNumber =  Math.random() * 10;

  return (
    <div>
      <h1>Página Home</h1>
      <h2>Número gerado: {randomNumber}</h2>
    </div>
  )
}