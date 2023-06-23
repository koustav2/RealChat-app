import { UserProvider } from '@/components/context/authContext'
import './globals.css'
import { ChatContextProvider } from '@/components/context/chatContext'



export const metadata = {
  title: 'RealChat App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children }) {
  return (
    <html lang="en">
      <UserProvider>
        <ChatContextProvider>
          <body>
            <link rel="icon" href="/" sizes="any" />
            {children}
          </body>
        </ChatContextProvider>
      </UserProvider>
    </html>
  )
}
