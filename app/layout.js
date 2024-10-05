import Navigation from './components/Navigation';
import Logo from './components/Logo';
export const metadata = {
  title:"Wild Oasis"
}

export default function RootLayout({children}){
  return (
    <html>
      <body>
        <header>
          <Logo/>
        </header>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}