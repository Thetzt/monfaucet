export default function Home() {
  return (
    <>
      <head>
        <title>Monad Faucet</title>
        <meta property="og:title" content="Claim Free $MON" />
        <meta property="og:description" content="Get testnet $MON tokens for your Monad dApps." />
        <meta property="og:image" content="/monad-preview.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="Claim Faucet" />
        <meta property="fc:frame:post_url" content="/api/claim" />
      </head>
      <body>
        <h1>Monad Faucet</h1>
        <p>This app is designed for Warpcast Frames.</p>
      </body>
    </>
  );
}
