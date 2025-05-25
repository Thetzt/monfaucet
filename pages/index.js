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
        <script dangerouslySetInnerHTML={{
          __html: `
            async function connectWarpcast() {
              try {
                const user = await window?.warpcast?.requestUser?.();
                const el = document.getElementById('warpcast-user');
                el.textContent = user?.username ? 'Logged in as ' + user.username : 'Not connected';
              } catch {
                document.getElementById('warpcast-user').textContent = 'Connection failed';
              }
            }
            window.addEventListener('load', connectWarpcast);
          `
        }} />
      </head>
      <body>
        <div id="warpcast-user" style={{ position: 'fixed', top: 10, right: 10, fontWeight: 'bold' }}></div>
        <h1>Monad Faucet</h1>
        <p>This app is designed for Warpcast Frames.</p>
      </body>
    </>
  );
}
