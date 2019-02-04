import Localization from '../../localization';
const AddSummaryLocalized = Localization.Steps.AddSummary;

export const infoPopoverContent = (
  <div className='new-course-form-popover-timeline'>
    <p>{ AddSummaryLocalized.popoverContentDescription }</p>
    <b>{ AddSummaryLocalized.popoverContentExample }</b>
  </div>
);
