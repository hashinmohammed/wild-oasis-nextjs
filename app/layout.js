
import './_styles/globals.css'
import { Josefin_Sans } from "next/font/google";
import Header from './_components/Header';

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
console.log(josefin);
export const metadata = {
  title:{
    template: "%s | wild Oasis",
    default:"Welcome to Wild Oasis"
  },
  description:"Wild oasis hotel booking app"
}

export default function RootLayout({children}){
  return (
    <html>
      <body className={`${josefin.className} relative bg-primary-950 text-primary-200 min-h-screen flex flex-col`}>
       
        <Header />
        <div className="flex-1 px-8 py-12 ">

        <main className=' max-w-7xl mx-auto'>
          {children}
        </main>
        </div>


        
          
      </body>
    </html>
  )
}