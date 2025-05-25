export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <html>
      <head>
        <meta property="og:title" content="Claimed!" />
        <meta property="og:image" content="/monad-preview.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="Back" />
      </head>
      <body>
        <h1>Success</h1>
        <p>You claimed your tokens.</p>
      </body>
    </html>
  `);
}
