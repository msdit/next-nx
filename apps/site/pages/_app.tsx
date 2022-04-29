import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import '../styles/main.scss'

function CustomApp({ Component, pageProps }: AppProps) {
    const store = useStore(pageProps.initialReduxState)
    return (
        <Provider store={store}>
            <>
                <Head>
                    <title>User Management | Masoud Aghaei</title>
                </Head>
                <main>
                    <Component {...pageProps} />
                </main>
            </>
        </Provider>
    )
}

export default CustomApp
