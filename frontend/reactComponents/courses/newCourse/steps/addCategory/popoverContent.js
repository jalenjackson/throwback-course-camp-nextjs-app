import React from 'react';
import Localization from '../../localization';

export const infoPopoverContent = (
  <div>
    <p>{ Localization.Steps.AddCategory.PopoverContent }</p>
    <ul>
      { Localization.Steps.AddCategory.Categories.map((category, i) => (
        <li key={ i }>{ category }</li>
      )) }
    </ul>
  </div>
);
