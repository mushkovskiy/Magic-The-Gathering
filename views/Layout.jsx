const React = require('react');

function Layout({ children }) {
  return (
    <html lang="ru">
     <head>
     <meta charSet="utf-8" />
        {/* <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" href="/stylesheets/application.css" /> */}

        <script defer src="/public/application" />

        <title>Broccoli Blog</title>
        <meta charSet="utf-8" />
      </head>
      <body id="page-top">
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
