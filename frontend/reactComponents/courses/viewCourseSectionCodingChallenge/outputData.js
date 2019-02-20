import React from 'react';
import { Alert, Badge, Icon, Spin } from 'antd';

const OutputData = props => (
  <div>
    { props.container.state.isEvaluating
        ? <Spin indicator={ antIcon } tip="Loading...">
          <Alert
              message="Your code is being evaluated"
              type="info"
          />
        </Spin>
        : props.container.state.isError
            ? <div>
              <h2>{ props.container.state.codeOutputMessage }</h2>
              <p style={{ color: '#F5222D' }}>{ props.container.state.codeOutput }</p>
            </div>
            : <div>
              <h2>{ props.container.state.codeOutputMessage }</h2>
              <p>Your output: { props.container.state.codeOutput }</p>
              { props.container.state.isCorrect
                  ? !props.container.state.isError && !props.container.state.noOutput ?
                      <div>
                        <Badge status="success" />
                        <span style={{ color: '#5BC726' }}>Success</span> <Icon type="smile" theme="twoTone" twoToneColor="#5BC726" />
                      </div> : null
                  : !props.container.state.isError && !props.container.state.noOutput ?
                      <div>
                        <Badge status="error" />
                        <span style={{ color: '#F5222D' }}>Incorrect</span> <Icon type="meh" theme="twoTone" twoToneColor="#F5222D" />
                      </div> : null
              }
              { props.container.state.isError && !props.container.state.noOutput
                  ? <div>
                      <Badge status="error" />
                      <span style={{ color: '#F5222D' }}>Failure</span> <Icon type="meh" theme="twoTone" twoToneColor="#F5222D" />
                    </div>
                  : null
              }
              { props.container.state.noOutput
                  ? <div>
                      <Badge status="error" />
                      <span style={{ color: '#F5222D' }}>No Output</span> <Icon type="meh" theme="twoTone" twoToneColor="#F5222D" />
                    </div>
                  : null
              }
            </div>
    }
  </div>
);

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export default OutputData;
