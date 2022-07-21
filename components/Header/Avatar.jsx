const Avatar = ({ url, className }) => {
  return (
    <img
      src={url}
      alt='profile pic'
      className={`rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110  w-10 ${className} `}
    />
  )
}

export default Avatar
