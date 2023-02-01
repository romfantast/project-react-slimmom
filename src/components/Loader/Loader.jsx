import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

function Loader() {
  return (
    <section>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#fc842d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </section>
  );
}

export default Loader;
