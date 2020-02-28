import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialMedia = ({ social: { facebook_id, instagram_id, twitter_id } }) => {
  return (
    <div className='flex items-start text-3xl'>
      {facebook_id && (
        <a href={`https://www.facebook.com/${facebook_id}`} target='_blank' rel='noopener noreferrer' className='mr-4'>
          <FaFacebookF />
        </a>
      )}
      {twitter_id && (
        <a href={`https://twitter.com/${twitter_id}`} target='_blank' rel='noopener noreferrer' className='mr-4'>
          <FaTwitter />
        </a>
      )}
      {instagram_id && (
        <a href={`https://www.instagram.com/${instagram_id}`} target='_blank' rel='noopener noreferrer'>
          <FaInstagram />
        </a>
      )}
    </div>
  );
};

export default SocialMedia;
