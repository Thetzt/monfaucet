import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Claim Free $MON" />
        <meta property="og:description" content="Get testnet $MON tokens for your Monad dApps." />
        <meta property="og:image" content="/monad-preview.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="Claim Faucet" />
        <meta property="fc:frame:post_url" content="https://monfaucet.vercel.app/api/claim" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
