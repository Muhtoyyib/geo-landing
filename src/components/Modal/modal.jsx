/* eslint-disable react/prop-types */
import Button from '../Button/Button';
import { GooglePlayLogo, AppStoreLogo } from '@phosphor-icons/react';

function Modal({ className, children, description}) {
  return (
      <div className={className} >
            <h2 className="modal-heading">
              {children}
            </h2>

            <p className="modal-paragraph">
              {description}
            </p>

            <div className="modal-buttons">
              <Button type='b' className="btn btn--getApp">
                <GooglePlayLogo size={32} color="#37b24d" />
                Get on Playstore
              </Button>

              <Button type='b' className="btn btn--getApp">
                <AppStoreLogo size={32} color="#37b24d" />
                Get on App store
              </Button>
            </div>
        </div>
  );
}

export default Modal;
