import React from 'react';


class FacebookShare extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  render() {
    const { shareurl } = this.props;
    const encodedUrl = encodeURIComponent(shareurl);
    const srcString = `https://www.facebook.com/plugins/like.php?href=${encodedUrl}&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId`;

    return (
      <div>
        <iframe
          src={srcString}
          width="450"
          height="80"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
         />
      </div>
    );
  }
}

export default FacebookShare;
