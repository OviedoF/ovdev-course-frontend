import Head from 'next/head'
import { Provider } from 'react-redux'
import Header from '../src/components/Header/Header'
import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/MarkDownEditor.css';
import '../styles/library.scss';
import '../styles/animations.scss';
import store from '../src/store/index';
import Footer from '../src/components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
    </Head>

    <Provider store={store}>

      <Header />

      <Component {...pageProps} />
        
      <Footer />
      
    </Provider>
    
  </>
}

export default MyApp
