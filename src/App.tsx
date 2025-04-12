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

enum SortType {
  alpha,
  length,
  reverse,
}

function sortList(someList: string[], params: SortType | '') {
  const preperedList = [...someList];

  switch (params) {
    case SortType.alpha:
      return preperedList.sort((a, b) => a.localeCompare(b));
    case SortType.length:
      return preperedList.sort((a, b) => a.length - b.length);
    case SortType.reverse:
      return preperedList.reverse();
    default:
      return preperedList;
  }
}

export const App: React.FC = () => {
  const [filterParams, setFilterParams] = useState<SortType | ''>('');
  const visiblegoods = sortList(goodsFromServer, filterParams);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button', 'is-info', {
            'is-light': filterParams !== SortType.alpha
          })}
          onClick={() => setFilterParams(SortType.alpha)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button', 'is-success', {
            'is-light': filterParams !== SortType.length
          })}
          onClick={() => setFilterParams(SortType.length)}
        >
          Sort by length
        </button>

        <button
          type="button"
          data-cy="ReverseButton"
          className={cn('button', 'is-warning', {
            'is-light': filterParams !== SortType.reverse,
          })}
          onClick={() => setFilterParams(SortType.reverse)}
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
