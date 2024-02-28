import Avatar from './Avatar';

/* eslint-disable react/prop-types */
export default function Profile(props) {
  return (
    <>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />

      <div>
        <Avatar {...props} />
      </div>
    </>
  );
}
