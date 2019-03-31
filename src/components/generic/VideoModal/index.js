// ignoring a11y for this test
/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component, Fragment } from 'react';
import { Modal } from 'semantic-ui-react';
import shaka from 'shaka-player';
import swal from 'sweetalert';

import './videoModal.scss';

class VideoModal extends Component {
    constructor() {
        super();

        this.videoPlayer = React.createRef();
        this.playlistURL = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';
    }

    componentDidMount() {
        // set up it's polyfills
        shaka.polyfill.installAll();

        // check for browser compatibility
        if (shaka.Player.isBrowserSupported()) {
            this.initPlayer();
        } else {
            swal('Oops!', 'Browser not supported!', 'error');
        }
    }

    onError = err => {
        swal('Oops!', `We encountered an error. Code ${err.code}`, 'error');
    };

    initPlayer = () => {
        if (this.videoPlayer.current) {
            const player = new shaka.Player(this.videoPlayer.current);
            player.configure('manifest.defaultPresentationDelay', 0);
            player.addEventListener('error', this.onError);

            player.load(this.playlistURL).catch(this.onError);
        }
    };

    render() {
        return (
            <Fragment>
                <Modal.Content className="video-modal-content">
                    <video
                        ref={this.videoPlayer}
                        id="video"
                        width="100%"
                        poster="http://www.millson.net/wp-content/uploads/2013/09/IMAX_Slide3.jpg"
                        controls
                        autoPlay
                    />
                </Modal.Content>
            </Fragment>
        );
    }
}

export default VideoModal;
