import React from 'react';
import { Button, Icon, Upload, Popover, Tabs, Empty } from 'antd';
import { exploreButtonPopoverContent } from './exploreButtonPopoverContent';
import { previewPopoverContent } from './previewPopoverContent';
import { popOverContent } from './popOverContent';
import Localization from '../../localization';
import _ from 'lodash';

const AddImageLocalized = Localization.Steps.AddImage;
const TabPane = Tabs.TabPane;
const Dragger = Upload.Dragger;

export default class AddImage extends React.Component {
  render() {
    const props = {
      name: 'singleFile',
      multiple: false,
      headers: {
        Authorization: `Bearer ${ this.props.navbarContainer.state.authorizationToken }`
      },
      action: '/uploaders/single-upload',
    };
    return (
      <div>
        <label className='new-course-form-main-label'>{ AddImageLocalized.Label }
          <Popover content={ popOverContent } title={ AddImageLocalized.PopoverTitle }>
            <Icon className='new-course-form-main-popover-icon'
              type='info-circle'>
            </Icon>
          </Popover>
        </label>
        <Dragger
            disabled={ this.props.container.state.fileAdded.status }
            onChange={ info => this.props.container.handleUpload(info,
                this.props.navbarContainer.state.authorizationToken,
                this.props.navbarContainer) }
            accept='image/gif, image/jpeg, image/png'
            {...props}>
          <p className='ant-upload-drag-icon'>
            <Icon type='inbox' />
          </p>
          <p className='ant-upload-text'>{ AddImageLocalized.UploadText }</p>
          <p className='ant-upload-hint'>{ AddImageLocalized.UploadHint }</p>
        </Dragger>
         <div>
            <Tabs defaultActiveKey='1'>
              <TabPane tab={ AddImageLocalized.CustomerViewingTab } key='1'>
                <div className="courses-container">
                  <div className="courses-text-container">
                    <div className="inner-carousel">
                      <div style={{ background: this.props.container.state.color }} className='top-info'>
                        <h2 className="top-info-header">24 hours</h2>
                      </div>
                      <div className='carousel-copy'>
                        <h1>{ _.truncate(this.props.container.state.title, { length: 30 }) }</h1>
                        <p>{ _.truncate(this.props.container.state.summary, { length: 60 }) }</p>
                        <p>{ AddImageLocalized.TaughtBy }
                          <a>{ _.truncate(` ${ this.props.auth.name }`, { length: 20 }) }</a>
                        </p>
                        <p className='price'>
                          <img alt={ AddImageLocalized.MoneyIconAlt } src='/static/icons/money.svg' />
                          ${ this.props.container.state.price }
                        </p>
                      </div>
                      <Popover content={ exploreButtonPopoverContent } title={ AddImageLocalized.ExploreButton }>
                        <Button
                            style={{ background: this.props.container.state.color }}
                            className='explore-button'
                            type='primary'
                            icon='eye'>
                          { AddImageLocalized.ViewCourse }
                        </Button>
                      </Popover>
                      <Popover
                          content={ previewPopoverContent }
                          title={ AddImageLocalized.PreviewButton }>
                        <img
                            alt={ AddImageLocalized.PreviewButton }
                            className='preview-button'
                            src='/static/icons/video-play.svg' />
                      </Popover>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab={ AddImageLocalized.CustomerPurchases } key='2'>
                { this.props.container.state.fileAdded.status
                  ? <div>
                      <img className='new-course-form-image-upload' src={ this.props.container.state.fileLocation }/>
                    </div>
                  : <div>
                      <Empty description={<span>{ AddImageLocalized.AddImagePrompt }</span>} />
                    </div>
                }
              </TabPane>
            </Tabs>
          </div>
        <Button
          onClick={ () => this.props.container.saveCourse(
              this.props.navbarContainer.state.authorizationToken,
              this.props.navbarContainer,
              this.props.auth) }
          type='primary'
          loading={ this.props.container.state.isSavingCourse }
          disabled={ !this.props.container.state.fileAdded.uploaded || this.props.container.state.isSavingCourse }
          className='new-course-next-and-back-button'>
          { AddImageLocalized.GetStarted }
        </Button>
        <div className='new-course-button-container'>
          <Button
              className='new-course-next-and-back-button'
              type='primary'
              onClick={ () => this.props.container.prevStep() }>
            <Icon type='arrow-left' />
            { Localization.Back }
          </Button>
        </div>
      </div>
    )
  }
}
