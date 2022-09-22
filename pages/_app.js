import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { AuthProvider } from "../helpers/useAuth"

function MyApp({ Component, pageProps }) {
  return <AuthProvider><Component {...pageProps} /></AuthProvider>
}

export default MyApp
