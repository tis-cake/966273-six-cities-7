import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { PlaceCardListFavorites } from '../../place-card/place-card-list/place-card-list-favorites/place-card-list-favorites';

import { propTypesHotel } from '../../../types';

function PageFavorites(props) {
  const { placesList } = props;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCardListFavorites
                    placesList={placesList}
                    cityName={'Amsterdam'}
                  />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCardListFavorites
                    placesList={placesList}
                    cityName={'Cologne'}
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

PageFavorites.propTypes = {
  placesList: PropTypes.arrayOf(
    PropTypes.shape(propTypesHotel),
  ),
};

export { PageFavorites };
