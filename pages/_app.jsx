import { GoogleTagManager } from "@next/third-parties/google";

import '../globals.css'

function App({ Component, pageProps }) {
  return <><Component {...pageProps} />
  <GoogleTagManager gtmId="GTM-W3V7WTBH" />
  </>
}

export default App