import styled from 'styled-components'

export const ProductCarouselContainer = styled.div`
  margin: 5rem 0;

  .slick-arrow {
    &:focus,
    &:hover {
      background: #00000059;
    }

    &::before {
      font-size: 34px;
    }
  }

  .slick-next {
    right: 7px;
    background: #00000059;
    color: white;
    height: 65px;
    width: 35px;
    border-radius: 4px 0 0 4px;
    z-index: 4;
  }

  .slick-prev {
    left: 10px;
    background: #00000059;
    color: white;
    height: 65px;
    width: 35px;
    border-radius: 0 4px 4px 0;
    z-index: 4;
  }

  /* for touch screens */
  @media (hover: none) and (pointer: coarse) {
    .slick-next,
    .slick-prev {
      display: none;
    }
  }

  .slick-slide {
    padding: 0 10px;
    height: 100%;

    & > div {
      height: 100%;
    }

    div:focus {
      outline: none;
    }
  }
`

export const CarouselItemContainer = styled.div`
  background: #f6f8fc;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;

  img {
    width: 100%;
    cursor: pointer;
  }
`

export const ItemBottom = styled.div`
  padding: 0 10px 10px 10px;
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 120px;

  .wishlist-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.6rem;
    background-color: #ffffff;
    color: #eee;
    padding: 4px;
    width: 30px;
    height: 30px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  button {
    margin-top: auto;
  }
`
export const Title = styled.div`
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`
