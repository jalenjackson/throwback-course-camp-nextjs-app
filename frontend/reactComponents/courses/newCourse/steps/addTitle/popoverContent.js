import { Timeline } from 'antd';
import Localization from '../../localization';

export const infoPopoverContent = (
  <div className='new-course-form-popover-timeline'>
    <Timeline>
      { Localization.Steps.AddTitle.PopoverContent.map((content, i) => (
        <Timeline.Item key={ i }>{ content }</Timeline.Item>
      ))}
    </Timeline>
  </div>
);
