import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <p class="contact to-render">
          You can contact me at{' '}
          <a href="mailto:luan.p.tran@gmail.com" target="_blank">
            luan.p.tran@gmail.com
          </a>
          , visit my{' '}
          <a href="http://linkedin.com/in/luanptran" target="_blank">
            LinkedIn profile
          </a>
          , or visit my{' '}
          <a target="_blank" href="http://github.com/luantran96/">
            Github.
          </a>
        </p>
      </div>
    );
  }
}
