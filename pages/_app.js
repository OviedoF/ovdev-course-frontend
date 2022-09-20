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
      <meta name="description" content="Página creada para aprender Front-End en el curso de OvDev." />
      <meta name='keywords' content='curso,frontend,react,html,css,ovdev,javascript,js,desarrollo,oviedofederico'/>
    </Head>

    <Provider store={store}>

      <Header />

      <Component {...pageProps} />
        
      <Footer />
      
    </Provider>
    
  </>
}

export default MyApp
