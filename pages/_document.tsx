import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';
 
const Document = ({ locale }: DocumentProps) => (
  <Html lang='en'>
    <Head />
    <body className='invisible'>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
