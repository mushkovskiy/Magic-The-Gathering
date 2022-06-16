const React = require('react');

function Layout({ children }) {
  return (
    <html lang="ru" style={{ height: '100%' }}>
      <head>
        <meta charSet="utf-8" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        {/* <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" href="/stylesheets/application.css" /> */}


        {/* <link rel="stylesheet" type="text/css" href="/style.css" />  */}
        {/* Не разобралась как правильно свои стили подключить :( */}

        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
        <script defer src="/public/application" />


        <title>The Gathering</title>
        <meta charSet="utf-8" />
      </head>
      <body style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100%',
      }}
      >
        <header>
          {/* <div className="container px-4 px-lg-5 text-center"> */}
          {children}
          {/* </header> </div> */}
        </header>
      </body>
    </html>
  );
}

module.exports = Layout;
