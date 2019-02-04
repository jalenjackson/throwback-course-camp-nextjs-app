import React from 'react';
import Localization from '../../localization';
const AddLearningLocalized = Localization.Steps.AddLearning;

export const infoPopoverContent = (
  <div>
    <p>{ AddLearningLocalized.PopoverDescription }</p>
    <ul>
      { AddLearningLocalized.PopoverList.map((item, i) => (
        <li key={ i }>{ item }</li>
      )) }
    </ul>
  </div>
);
