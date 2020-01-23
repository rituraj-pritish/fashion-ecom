import React, { useState } from 'react';

import {
  ProductDetailsContainer,
  Tabs,
  Content,
  Tab
} from './ProductDetails.styles';

const ProductDetails = ({ product }) => {
  const [currentTab, setCurrentTab] = useState('desc');

  const handleClick = e => {
    if (currentTab === e.target.getAttribute('name')) return;

    setCurrentTab(e.target.getAttribute('name'));
  };

  return (
    <ProductDetailsContainer>
      <Tabs>
        <Tab onClick={handleClick} current={currentTab === 'desc'} name='desc'>
          Description
        </Tab>
        <Tab
          onClick={handleClick}
          current={currentTab === 'details'}
          name='details'
        >
          Details
        </Tab>
      </Tabs>
      <Content>
        {currentTab === 'desc' ? (
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            tenetur doloribus dicta reprehenderit iusto laboriosam ducimus, odit
            assumenda, ea numquam voluptate nemo a? Exercitationem dolorum
            dolores natus debitis quasi laboriosam neque sint quidem praesentium
            placeat nulla blanditiis optio facilis, harum necessitatibus
            cupiditate quam laborum maiores voluptas minus. Dicta, expedita
            doloribus!
          </div>
        ) : (
          <div>
            details <br />
            details <br />
            details <br />
            details <br />
            details <br />
            details <br />
            details <br />
            details <br />
            details <br />
            details <br />
            details <br />
          </div>
        )}
      </Content>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
