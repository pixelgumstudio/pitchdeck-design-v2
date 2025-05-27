import { Helmet } from 'react-helmet';
import Card from "../assets/card.jpg"



const MetadataComponent = ({title, description, image, page}) => {
  return (

      <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="title" content={`${title.substring(0, 66)} ${title.length >= 70 && '...'}`} />
      <meta name="description" content={description.substring(0, 100)} />
      <meta name="url" content={`https://pitchdeck.design/${page !== undefined ? page.substring(0, 69) : ''}`} />
      <meta property="og:url" content={`https://pitchdeck.design/${page !== undefined ? page.substring(0, 69) : ''}`} />
      <meta property="og:image" content={`${image !== undefined ? image : Card}`} />
      <meta property="og:title" content={`${title.substring(0, 66)}  ${title.length >= 70 && '...'}`} />
      <meta property="og:description" content={description.substring(0, 100)}  />
      <meta property="og:site_name" content={`https://pitchdeck.design/${page !== undefined ? page.substring(0, 69) : ''}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`https://pitchdeck.design/${page !== undefined ? page.substring(0, 69) : ''}`} />
      <meta name="twitter:title" content={`${title.substring(0, 66)}  ${title.length >= 70 && '...'}`} />
      <meta name="twitter:description" content={description.substring(0, 100)} />
      <meta name="twitter:image" content={`${image === undefined ? Card : image}`} />
      <meta name="twitter:url" content={`https://pitchdeck.design/${page !== undefined ? page.substring(0, 69) : ''}`} />
      <link rel='canonical' href={`https://pitchdeck.design/${page !== undefined ? page.substring(0, 69) : ''}`} />

    </Helmet>
  );
};

export default MetadataComponent;