import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import GithubRepo from '../GithubRepoForm';


function Home(){
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(translations.Home.title())}</title>
        <meta
          name="descrription"
          content="A homepage"/>
      </Helmet>
      <GithubRepo/>
    </>
  );
}

export default Home;
