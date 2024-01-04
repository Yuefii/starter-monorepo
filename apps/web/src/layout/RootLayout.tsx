import { ThemeProvider } from "@/components/ThemeProvider"

export default function RootLayout({ children }: any) {
  return (
    <>
        <div>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
    </>
  )
}
