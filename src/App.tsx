import React, { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

function sortAlphabrtically(someList: string[], params: string) {
  const preperedList = [...someList];

  switch (params) {
    case 'alpha':
      return preperedList.sort((a, b) => a.localeCompare(b));
    case 'length':
      return preperedList.sort((a, b) => a.length - b.length);
    case 'reverse':
      return preperedList.reverse();
    default:
      return preperedList;
  }
}

export const App: React.FC = () => {
  const [filterParams, setFilterParams] = useState('');
  const visiblegoods = sortAlphabrtically(goodsFromServer, filterParams);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info is-light"
          onClick={() => setFilterParams('alpha')}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={() => setFilterParams('length')}
        >
          Sort by length
        </button>

        <button
          type="button"
          data-cy="ReverseButton"
          className={cn('button', 'is-warning', {
            'is-light': filterParams !== 'reverse',
          })}
          onClick={() => setFilterParams('reverse')}
        >
          Reverse
        </button>

        {filterParams !== '' && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => setFilterParams('')}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        <ul>
          {visiblegoods.map(good => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
