import React from "react";
import Localization from '../../localization';

export const previewPopoverContent = (
  <div>
    <p dangerouslySetInnerHTML={{ __html: Localization.Steps.AddImage.PreviewButtonPopoverContent }} />
  </div>
);
