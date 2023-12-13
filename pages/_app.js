import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './../components/Layout';
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


function MyApp({ Component, pageProps }) {
  return <Layout > <Component {...pageProps} /><AnimatedCursor
  innerSize={8}
  outerSize={55}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: "#560ff3"
  }}
  outerStyle={{
    border: '3px solid #560ff317',
    backgroundColor: '#560ff333'
  }}
/></Layout>
}

export default MyApp
