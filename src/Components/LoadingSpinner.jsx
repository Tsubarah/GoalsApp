import BounceLoader from 'react-spinners/BounceLoader'

const LoadingSpinner = () => {
  return (
    <div id="loading-spinner">
      <BounceLoader size={150} color="#77a5c9" />
    </div>
  )
}

export default LoadingSpinner