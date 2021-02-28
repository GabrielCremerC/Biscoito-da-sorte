import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document{
    render(){
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/biscoito-da-sorte.svg" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap" rel="stylesheet"/>
                    
                    <title>My Lucky | Hello</title>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
            
        );
    }
}