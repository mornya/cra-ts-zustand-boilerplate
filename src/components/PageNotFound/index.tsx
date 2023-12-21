import React, { useCallback } from 'react';
import './styles.scss';

type Props = {};

const PageNotFound: React.FC<Props> = () => {
  const onClickGoHome = useCallback(() => (window.location.href = '/'), []);

  return (
    <div className="page-not-found">
      <div className="inner">
        <h1>404</h1>
        <h2>Category not found</h2>
        <button type="button" onClick={onClickGoHome}>
          Go Home Page
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
